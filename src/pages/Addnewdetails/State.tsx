import { useEffect, useMemo, useState } from 'react';
import ReactTable from 'ReusableComponents/ReactTable'; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import {
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Select,
  MenuItem as DropdownItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  RadioGroup,
  Radio,
  FormLabel,
  Grid
} from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { createState, countryList, statesList, updateState } from 'services/add-new-details/AddNewDetails';
import { height } from '@mui/system';
import { Severity } from 'Common/utils';
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

export default function State() {
  const [openPopup, setOpenPopup] = useState({ flag: false, action: '', stateId: null }); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowCount, setRowCount] = useState(0);
  const [globalFilter, setGlobalFilter] = useState('');
  const [listFilter, setListFilter] = useState({
    search: '',
    status: null,
    id: null,
    countryId: null,
    skip: 0,
    limit: 10
  });
  const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [listLoader, setListLoader] = useState(false);
  // const [formData, setFormData] = useState({

  //   stateName: '',
  //   status: true, // Toggle for "Enable"
  // });
  interface FormField {
    label: any;
    id: any;
    name: any;
    type?: any;
    placeholder?: any;
    value: any;
    error?: boolean;
    helperText?: any;
    mandatory?: boolean;
    options: { id: any; label: any }[];
    isMulti?: boolean;
  }

  interface FormData {
    [key: string]: FormField;
  }

  const formFields: FormData = {
    stateName: {
      label: 'Enter Your State Name',
      id: 'stateName',
      name: 'stateName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    country: {
      label: 'Select Country Name',
      id: 'country',
      name: 'country',
      type: 'select',
      options: [],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    statusName: {
      label: 'Status',
      id: 'statusName',
      name: 'statusName',
      type: 'select',
      options: [
        { id: 1, label: 'ENABLE' },
        { id: 2, label: 'DISABLE' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    }
  };

  const [formData, setFormData] = useState<FormData>(formFields);
  type FormDataKeys = keyof typeof formData;
  const [data, setData] = useState([]);

  const handleChange = (name: FormDataKeys, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name], // Preserve existing properties of the field
        value, // Update the value
        error: false, // Reset error state
        helperText: '' // Clear helper text
      }
    }));
  };

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory && !field.value && field.value == '') {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.mandatory && field.type === 'select' && (!field.value || !field.value.label)) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
          newFormData[key].helperText = '';
        }
      }
    }

    setFormData(newFormData);
    return isValid;
  };

  const getCountries = async () => {
    const result = await countryList({});
    console.log('countries: ', result);
    const res = result.data.map((item: any) => ({ id: item.id, label: item.countryName }));
    setFormData((prev) => ({
      ...prev,
      country: {
        ...prev['country'], // Preserve existing properties of the field
        options: res, // Update the value
        error: false, // Reset error state
        helperText: '' // Clear helper text
      }
    }));
  };

  const getStates = async () => {
    setListLoader(true);
    const result = await statesList(listFilter);
    console.log('states: ', result);
    if (result.data.length > 0) {
      setRowCount(result.totalCount);
      const data = result.data.map((item: any, index: any) => ({
        sno: index + 1,
        counrty: item.country.countryName,
        state: item.stateName,
        status: item.status === 1 ? 'Enable' : 'Disable',
        stateId: item.id,
        countryId: item.country.id
      }));
      setData(data);
      setListLoader(false);
    } else {
      setListLoader(false);
    }
  };
  console.log('data: ', data);
  
  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getStates();
  }, [listFilter.search, listFilter.skip, listFilter.limit]);

  useEffect(() => {
    if (globalFilter !== '') {
      setListFilter({ ...listFilter, skip: 0, limit: rowsPerPage, search: globalFilter });
    } else {
      setListFilter({ ...listFilter, skip: (pageNumber - 1) * rowsPerPage, limit: rowsPerPage, search: globalFilter });
    }
  }, [rowsPerPage, pageNumber, globalFilter]);

  const handleEdit = (row: any) => {
    // Pre-fill formData with the selected row's data
    const newFormData = _.cloneDeep(formData);
    console.log('row: ', row);
    // Map row values to formData
    newFormData.country.value = newFormData.country.options.find((option) => option.label === row.counrty) || { id: null, label: '' };
    newFormData.stateName.value = row.state;
    newFormData.statusName.value = newFormData.statusName.options.find(
      (option) => option.label.toUpperCase() === row.status.toUpperCase()
    ) || { id: null, label: '' };

    setFormData(newFormData); // Update formData state
    setOpenPopup({ flag: true, action: 'update', stateId: row.stateId });
  };

  const updateCountryHandler = async (updateData: any = {}, multiple = '') => {
    if (!multiple) {
      let d = Object.keys(updateData).length;
      console.log('updateData: ', updateData);
      const updateRecord = {
        stateName: d > 0 ? updateData?.state : formData.stateName.value,
        status: d > 0 ? (updateData?.status === 'Enable' ? 0 : 1) : formData.statusName.value.label === 'ENABLE' ? 1 : 0,
        id: d > 0 ? updateData.stateId : openPopup.stateId,
        countryId: d > 0 ? updateData.countryId : formData.country.value.id
      };
      const update = await updateState(updateRecord);
      if (update.status) {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Success });
        setIsLoading(false);
        setTimeout(() => {
          setOpenPopup({ flag: false, action: '', stateId: null });
          setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
          setFormData((prev) => ({
            ...prev,
            stateName: {
              ...prev['stateName'], // Preserve existing properties of the field
              value: '', // Update the value
              error: false, // Reset error state
              helperText: '' // Clear helper text
            },
            statusName: {
              ...prev['statusName'], // Preserve existing properties of the field
              value: { id: null, label: '' }, // Update the value
              error: false, // Reset error state
              helperText: '' // Clear helper text
            },
            country: {
              ...prev['country'], // Preserve existing properties of the field
              value: { id: null, label: '' }, // Update the value
              error: false, // Reset error state
              helperText: '' // Clear helper text
            }
          }));
        }, 1500);
      } else {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Error });
        setIsLoading(false);
      }
    } else {
      let updateResult: any
      updateData?.map(async (item: any) => {
        const updateRecord = {
          stateName: item?.state,
          status: item?.status === 'Enable' ? 0 : 1,
          id: item.stateId,
          countryId: item.countryId
        };
        updateResult = await updateState(updateRecord);
      });
        setOpen({ flag: false, action: '' });
        setSuccessBanner({ flag: true, message: 'success', severity: Severity.Success });
    }
    getStates();
    setTimeout(() => {
      setOpenPopup({ flag: false, action: '', stateId: null });
      setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
    }, 1500);
  };

  const handleFormSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      if (openPopup.action === 'create') {
        const requestBody = {
          countryId: formData.country.value.id,
          stateName: formData.stateName.value,
          status: formData.statusName.value.label === 'ENABLE' ? 1 : 0
        };
        const result = await createState(requestBody);
        if (result.status) {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Success });
          setIsLoading(false);
          getStates();
          setTimeout(() => {
            setOpenPopup({ flag: false, action: '', stateId: null });
            setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
            setFormData((prev) => ({
              ...prev,
              stateName: {
                ...prev['stateName'], // Preserve existing properties of the field
                value: '', // Update the value
                error: false, // Reset error state
                helperText: '' // Clear helper text
              },
              statusName: {
                ...prev['statusName'], // Preserve existing properties of the field
                value: { id: null, label: '' }, // Update the value
                error: false, // Reset error state
                helperText: '' // Clear helper text
              },
              country: {
                ...prev['country'], // Preserve existing properties of the field
                value: { id: null, label: '' }, // Update the value
                error: false, // Reset error state
                helperText: '' // Clear helper text
              }
            }));
          }, 1500);
        } else {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Error });
          setIsLoading(false);
        }
      } else {
        updateCountryHandler();
      }
    }
  };

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },

      { header: 'State Name', accessorKey: 'state' },
      { header: 'Counrty Name', accessorKey: 'counrty' },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (props: Cell<any, any>) => {
          const status = props.getValue(); // Get the value of the "status" field
          return (
            <Chip
              color={status === 'Enable' ? 'success' : 'error'}
              label={status}
              size="small"
              variant="outlined" // Changed to "outlined" for better visual distinction
            />
          );
        }
      }
    ],
    []
  );

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const buttonHandler = (action: string, users: any) => {
    if (action === 'disable') {
      updateCountryHandler(users);
    } else if (action === 'ENABLE') {
      updateCountryHandler(users, 'ENABLE');
    } else if (action === 'DISABLE') {
      updateCountryHandler(users, 'DISABLE');
    }
  };
  console.log('rowCount / rowsPerPage: ', rowCount, rowsPerPage);
  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <Button onClick={handleClick}>...</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleEdit(row);
              handleClose();
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              setOpen({ flag: true, action: 'delete' });

              handleClose();
            }}
          >
            Delete
          </MenuItem>
          <MenuItem
            onClick={() => {
              setOpen({ flag: true, action: 'disable' });
              handleClose();
            }}
          >
            {row.status == 'Enable' ? 'Disable' : 'Enable'}
          </MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <>
      {/* Button to Open Popup */}
      <Grid style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup({ flag: true, action: 'create', stateId: null })}>
          Create State
        </Button>
      </Grid>

      {successBanner.flag && (
        <Stack spacing={2} sx={{ m: 2 }}>
          <Alert
            severity={successBanner.severity}
            onClose={() => {
              setSuccessBanner({ flag: false, severity: successBanner.severity, message: '' });
            }}
          >
            {successBanner.message}
          </Alert>
        </Stack>
      )}

      <Backdrop
        sx={{
          color: 'blue',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={listLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* React Table */}
      <ReactTable
        title={'State Management'}
        data={data}
        columns={columns}
        actions={(row: any) => <ActionMenu row={row} />}
        includeSearch={true}
        needCSV={true}
        pagination={'top'}
        columnVisibility={true}
        needCheckBoxes={true}
        needActivateAndSuspendButtons={true}
        open={open}
        setOpen={setOpen}
        setRowsPerPage={setRowsPerPage}
        setPageNumber={setPageNumber}
        buttonHandler={buttonHandler}
        pageNumber={pageNumber}
        totalPageCount={Math.ceil(rowCount / rowsPerPage)}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        listSelectButton={{ name1: 'ENABLE', name2: 'DISABLE' }}
      />

      {/* Dialog for Create Form */}
      <Dialog open={openPopup.flag} maxWidth="sm" fullWidth>
        {successBanner.flag && (
          <Stack spacing={2} sx={{ m: 2 }}>
            <Alert
              severity={successBanner.severity}
              onClose={() => {
                setSuccessBanner({ flag: false, severity: successBanner.severity, message: '' });
              }}
            >
              {successBanner.message}
            </Alert>
          </Stack>
        )}
        <DialogTitle>{openPopup.action === 'create' ? 'Create State' : 'Update State'}</DialogTitle>
        <DialogContent>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.country} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.stateName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.statusName} onSelectChange={handleSelectChange} />
          </Grid>

          {/* <FormControl component="fieldset" sx={{margin:"1rem"}}>
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              row
              name="status"
              value={formData.status.value ? "Enable" : "Disable"} // Correctly accessing formData.status.value
              onChange={(e) =>
                handleChange("status", e.target.value === "Enable") // Use a consistent update handler
              }
            >
              <FormControlLabel
                value="Enable"
                control={<Radio color="success" />}
                label="Enable"
              />
              <FormControlLabel
                value="Disable"
                control={<Radio color="error" />}
                label="Disable"
              />
            </RadioGroup>

          </FormControl> */}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: '1rem' }}
            onClick={() => {
              setOpenPopup({ flag: false, action: '', stateId: null });
              setFormData((prev) => ({
                ...prev,
                stateName: {
                  ...prev['stateName'], // Preserve existing properties of the field
                  value: '', // Update the value
                  error: false, // Reset error state
                  helperText: '' // Clear helper text
                },
                statusName: {
                  ...prev['statusName'], // Preserve existing properties of the field
                  value: { id: null, label: '' }, // Update the value
                  error: false, // Reset error state
                  helperText: '' // Clear helper text
                },
                country: {
                  ...prev['country'], // Preserve existing properties of the field
                  value: { id: null, label: '' }, // Update the value
                  error: false, // Reset error state
                  helperText: '' // Clear helper text
                }
              }));
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: '1rem' }}
            onClick={handleFormSubmit}
            startIcon={isLoading ? <CircularProgress color="inherit" size={20} /> : null}
          >
            {openPopup.action === 'create' ? 'Create' : 'Update'}{' '}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
