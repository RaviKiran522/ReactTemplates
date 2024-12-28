import { useEffect, useMemo, useState } from 'react';
import ReactTable from 'ReusableComponents/ReactTable'; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Severity } from 'Common/utils';
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
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/system';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { height } from '@mui/system';
import { createDistrict, countryList, statesList, districtList, updateDistrict } from '../../services/add-new-details/AddNewDetails';

export default function District() {
  const [openPopup, setOpenPopup] = useState({ flag: false, action: '', districtId: null }); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [listLoader, setListLoader] = useState(false);
  const [listFilter, setListFilter] = useState({ search: '', status: null, id: null, countryId: null, stateId: null, skip: 0, limit: 10 });
  const [rowCount, setRowCount] = useState(0);
  const [globalFilter, setGlobalFilter] = useState('');
  const [districtData, setDistrictData] = useState([]);
  const [countryData, setCountryData] = useState([]);

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
    districtName: {
      label: 'Enter Your District Name',
      id: 'districtName',
      name: 'districtName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    stateName: {
      label: 'Select State Name',
      id: 'stateName',
      name: 'stateName',
      type: 'select',
      options: [],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    country: {
      label: 'Select Country Name',
      id: 'country',
      name: 'country',
      type: 'select',
      options: countryData,
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
        { id: 0, label: 'DISABLE' }
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

  const handleFormSubmit = async () => {
    console.log('openPopup: ', openPopup);
    if (validate()) {
      if (openPopup.action === 'create') {
        setIsLoading(true);
        const requestBody = {
          countryId: formData.country.value.id,
          stateId: formData.stateName.value.id,
          districtName: formData.districtName.value,
          status: formData.statusName.value.id
        };
        const result = await createDistrict(requestBody);
        if (result.status) {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Success });
          setIsLoading(false);
          listDistricts();
          setTimeout(() => {
            setOpenPopup({ flag: false, action: '', districtId: null });
            setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
            setFormData(formFields);
          }, 1500);
        } else {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Error });
          setIsLoading(false);
        }
      } else {
        updateDistrictHandler();
      }
    }
  };
  console.log('openPopup: ', openPopup);
  const updateDistrictHandler = async (updateData: any = {}, multiple = '') => {
    console.log('updateData: ', updateData);
    if (!multiple) {
      let d = Object.keys(updateData).length;
      const updateRecord = {
        countryId: d > 0 ? updateData?.countryId : formData.country.value.id,
        stateId: d > 0 ? updateData?.stateId : formData.stateName.value.id,
        districtName: d > 0 ? updateData?.district : formData.districtName.value,
        status: d > 0 ? (updateData?.status === 'Disable' ? 1 : 0) : formData.statusName.value.id,
        id: d > 0 ? updateData?.id : openPopup.districtId
      };
      const update = await updateDistrict(updateRecord);
      if (update.status) {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Success });
        setIsLoading(false);
        listDistricts();
        setTimeout(() => {
          setOpenPopup({ flag: false, action: '', districtId: null });
          setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
          setFormData(formFields);
        }, 1500);
      } else {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Error });
        setIsLoading(false);
      }
    } else {
      updateData?.map(async (item: any) => {
        const updateRecord = {
          countryId: item?.countryId,
          stateId: item?.stateId,
          districtName: item?.district,
          status: item?.status === 'Disable' ? 1 : 0,
          id: item?.id
        };
        const update = await updateDistrict(updateRecord);
      });
      setOpen({ flag: false, action: '' });
      setSuccessBanner({ flag: true, message: 'success', severity: Severity.Success });
    }
    listDistricts();
    setTimeout(() => {
      setOpenPopup({ flag: false, action: '', districtId: null });
      setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
    }, 1500);
  };

  const getCountryies = async () => {
    setListLoader(true);
    const response = await countryList({});
    if (response.status) {
      const result = response.data.map((item: any) => ({ id: item.id, label: item.countryName }));
      setFormData((prev) => ({
        ...prev,
        country: {
          ...prev['country'], // Preserve existing properties of the field
          options: result, // Update the value
          error: false, // Reset error state
          helperText: '' // Clear helper text
        }
      }));
      setCountryData(result);
      setListLoader(false);
    } else {
      setListLoader(false);
    }
  };

  const listDistricts = async () => {
    setListLoader(true);
    const result = await districtList(listFilter);
    if (result.status) {
      setRowCount(result.totalCount);
      setDistrictData(
        result.data.length > 0
          ? result.data.map((item: any) => ({
              sno: item?.id,
              id: item?.id,
              district: item?.districtName,
              counrty: item?.country?.countryName,
              countryId: item?.country?.id,
              state: item?.state?.stateName,
              stateId: item?.state?.id,
              status: item?.status === 1 ? 'Enable' : 'Disable'
            }))
          : []
      );
      setListLoader(false);
    } else {
      setListLoader(false);
    }
  };

  useEffect(() => {
    getCountryies();
  }, []);

  useEffect(() => {
    listDistricts();
  }, [listFilter.search, listFilter.skip, listFilter.limit]);

  useEffect(() => {
    if (globalFilter !== '') {
      setListFilter({ ...listFilter, skip: 0, limit: rowsPerPage, search: globalFilter });
    } else {
      setListFilter({ ...listFilter, skip: (pageNumber - 1) * rowsPerPage, limit: rowsPerPage, search: globalFilter });
    }
  }, [rowsPerPage, pageNumber, globalFilter]);

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },
      { header: 'District Name', accessorKey: 'district' },
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

  const buttonHandler = (action: string, users: any) => {
    if (action === 'disable') {
      updateDistrictHandler(users);
    } else if (action === 'ENABLE') {
      updateDistrictHandler(users, 'ENABLE');
    } else if (action === 'DISABLE') {
      updateDistrictHandler(users, 'DISABLE');
    }
  };

  const handleEdit = async (row: any) => {
    console.log('row: ', row);
    const stateResult = await getStatesListByCountryId(row.countryId);
    const restructureStateRes = stateResult?.data?.map((item: any) => ({ id: item?.id, label: item?.stateName }));
    const newFormData = _.cloneDeep(formData);
    newFormData.country.value = countryData.find((option: any) => option.label === row.counrty) || { id: null, label: '' };
    newFormData.stateName.value = restructureStateRes.find((option: any) => option.label === row.state) || { id: null, label: '' };
    newFormData.districtName.value = row.district;
    newFormData['stateName'].options = stateResult?.data?.length > 0 ? restructureStateRes : [];
    newFormData['country'].options = countryData.length > 0 ? countryData : [];
    newFormData.statusName.value = newFormData.statusName.options.find(
      (option) => option.label.toUpperCase() === row.status.toUpperCase()
    ) || { id: null, label: '' };
    console.log('newFormData: ', newFormData);
    setFormData(newFormData); // Update formData state
    setOpenPopup({ flag: true, action: 'update', districtId: row.id });
  };

  const getStatesListByCountryId = async (countryId: number) => {
    const result = await statesList({
      search: '',
      status: null,
      id: null,
      countryId: countryId
    });
    return result;
  };
  const handleSelectChange = async (name: FormDataKeys, value: any) => {
    let stateResult;
    if (name === 'country') {
      stateResult = await getStatesListByCountryId(value.id);
    }
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    if (name === 'country') {
      newFormData['stateName'].options =
        stateResult?.data?.length > 0 ? stateResult?.data?.map((item: any) => ({ id: item?.id, label: item?.stateName })) : [];
    }
    setFormData(newFormData);
  };

  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    console.log('formData: ', formData);

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

  console.log('formdata', formData);

  return (
    <>
      {/* Button to Open Popup */}
      <Grid style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup({ flag: true, action: 'create', districtId: null })}>
          Create District
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
        title={'District Management'}
        data={districtData}
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
        pageNumber={pageNumber}
        totalPageCount={Math.ceil(rowCount / rowsPerPage)}
        listSelectButton={{ name1: 'ENABLE', name2: 'DISABLE' }}
        buttonHandler={buttonHandler}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
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
        <DialogTitle>{openPopup.action === 'create' ? 'Create District' : 'Update District'}</DialogTitle>
        <DialogContent>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.country} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.stateName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.districtName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.statusName} onSelectChange={handleSelectChange} />
          </Grid>

          {/* 
          <FormControl component="fieldset" sx={{margin:"1rem"}}>
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
              setOpenPopup({ flag: false, action: '', districtId: null });
              setFormData(formFields);
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
