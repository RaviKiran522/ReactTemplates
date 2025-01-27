import { useEffect, useMemo, useState } from 'react';
import ReactTable from 'ReusableComponents/ReactTable'; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Severity } from 'Common/utils';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
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
  Grid,
  Typography
} from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { createCountry, countryList, updateCountry, countryStatus } from '../../services/add-new-details/AddNewDetails';
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/system';
export default function Country() {
  const [openPopup, setOpenPopup] = useState({ flag: false, action: '', countryID: null }); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [listLoader, setListLoader] = useState(false);
  const [listFilter, setListFilter] = useState({ status: null, id: null, search: '', skip: 0, limit: 10 });
  const [tableData, setTableData] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  const [globalFilter, setGlobalFilter] = useState('');

  const [status, setStatus] = useState<string>(''); // Add this line to define status and setStatus
  const [rowId, setRowId] = useState<number | null>(null); // Add this line to define rowId and setRowId
  const [selectedRow, setSelectedRow] = useState<any>(null); // Add this line to define selectedRow and setSelectedRow
  const [statusPopup, setStatusPopup] = useState<boolean>(false); // Add this line to define statusPopup and setStatusPopup
  const [isEdit, setIsEdit] = useState<boolean>(false); // Add this line to define isEdit and setIsEdit

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
    countryName: {
      label: 'Enter Country Name',
      id: 'countryName',
      name: 'countryName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
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
    // Check each form field for validity
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];
        if (field.mandatory && (!field.value || field.value === '')) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.type === 'select' && (field.value.id === null || !field.value.id)) {
          // Handle select validation for status field
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
          newFormData[key].error = false;
          newFormData[key].helperText = '';
        }
      }
    }
    // Set the updated formData
    setFormData(newFormData);
    // Return the final validation result
    return isValid;
  };
  const handleFormSubmit = async () => {
    if (validate()) {
      setIsLoading(true);
      if (openPopup.action === "create") {
        const newRecord = {
          name: formData.countryName.value, // Defaulting religion to B.tech
          status: formData.statusName.value.label === 'ENABLE' ? 1 : 0 // Defaulting status to Enable
        };
        const result = await createCountry(newRecord);
        if (result.status) {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Success });
          setIsLoading(false);
          listCountries();
          setTimeout(() => {
            setOpenPopup({ flag: false, action: '', countryID: null });
            setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
            setFormData(formFields);
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

  const updateCountryHandler = async (updateData: any = {}, multiple = "") => {
    setIsLoading(true);
    if (!multiple) {
      let d = Object.keys(updateData).length;
      const updateRecord = {
        name: d > 0 ? updateData?.country : formData.countryName.value,
        status: d > 0 ? (updateData?.status === "Enable" ? 0 : 1) : (formData.statusName.value.label === 'ENABLE' ? 1 : 0),
        id: d > 0 ? updateData.id : openPopup.countryID
      }
      const update = await updateCountry(updateRecord);
      if (update.status) {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Success });
        setIsLoading(false);
        setTimeout(() => {
          setOpenPopup({ flag: false, action: '', countryID: null });
          setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
          setFormData(formFields);
        }, 1500);
      }
      else {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Error });
        setIsLoading(false);
      }
    }
    else {
      let updateResult: any;
      let updateStatusArray: any = []
      updateData?.map(async (item: any) => {
        const updateRecord = {
          // name: item?.country,
          status: multiple === "ENABLE" ? 1 : 0,
          id: item.id
        }
        updateStatusArray.push(updateRecord)

      })
      let payload = {
        "data": updateStatusArray
      }
      updateResult = await countryStatus(payload);

      setOpen({ flag: false, action: '' });
      setSuccessBanner({ flag: true, message: "success", severity: Severity.Success });


    }
    listCountries();
    setTimeout(() => {
      setOpenPopup({ flag: false, action: '', countryID: null });
      setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
    }, 1500);
  }
  const listCountries = async () => {
    setListLoader(true);
    const result = await countryList(listFilter);
    if (result.status) {
      setListLoader(false);
      setRowCount(result.totalCount);
      if (result.data.length > 0) {
        const data = result.data.map((item: any, index: any) => ({
          sno: listFilter.skip + index + 1,
          country: item.countryName,
          status: item.status ? 'Enable' : 'Disable',
          id: item.id
        }));
        setTableData(data);
      } else {
        setTableData([]);
      }
    } else {
      setListLoader(false);
    }
  };
  useEffect(() => {
    listCountries();
  }, [listFilter.search, listFilter.skip, listFilter.limit]);
  console.log("rowCount / rowsPerPage: ", rowCount, rowsPerPage)

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
      { header: 'country Name', accessorKey: 'country' },
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

  const handleEdit = (row: any) => {
    console.log('row: ', row);
    // Pre-fill formData with the selected row's data
    const newFormData = _.cloneDeep(formData);
    // Map row values to formData fields
    newFormData.countryName.value = row.country; // Map "country" to "countryName"
    newFormData.statusName.value = newFormData.statusName.options.find(
      (option) => option.label.toUpperCase() === row.status.toUpperCase()
    ) || { id: null, label: '' };
    setFormData(newFormData); // Update formData state
    setOpenPopup({ flag: true, action: 'update', countryID: row.id });
  };


  const buttonHandler = (action: string, users: any) => {
    console.log('users.......', users)
    if (action === "disable") {
      updateCountryHandler(users);
    } else if (action === "ENABLE") {
      updateCountryHandler(users, "ENABLE");
    } else if (action === "DISABLE") {
      updateCountryHandler(users, "DISABLE");
    }
  }

  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handlehandleEditDisableEdit = (row: any, action: any) => {
      setRowId(row.id);
      setIsLoading(false);

      if (action === 'Status') {
        let checkStatus = row.status === 'Disable' ? 'Enable' : 'Disable';
        setStatus(checkStatus);
        setSelectedRow(row); // Set the selected row data
        setStatusPopup(true);
        setOpenPopup({ flag: false, action: '', countryID: null });
        setIsEdit(false);
        // } else if (action === 'Edit') {
        //   setStatusPopup(false);
        //   setOpenPopup(true);
        //   setIsEdit(true);
      }

      // Pre-fill formData when editing
      const newFormData = _.cloneDeep(formData);
      newFormData.countryName.value = row.country;
      newFormData.statusName.value =
        newFormData.statusName.options.find(
          (option) => option.label.toUpperCase() === row.status.toUpperCase()
        ) || { id: null, label: '' };

      setFormData(newFormData);
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
          {/* <MenuItem onClick={() => { setOpen({ flag: true, action: 'edit' }); handleClose(); }}>Edit</MenuItem> */}

          {/* <MenuItem
            onClick={() => {
              setOpen({ flag: true, action: 'disable' });
              handleClose();
            }}
          >
            {row.status == 'Enable' ? 'Disable' : 'Enable'}
          </MenuItem> */}
          
          <MenuItem onClick={() => { handlehandleEditDisableEdit(row, 'Status'); handleClose() }}>{row.status == 'Disable' ? 'Enable' : 'Disable'}</MenuItem>
        </Menu>
      </>
    );
  };


  const statusConfirmHandler = async () => {
    if (validate()) {
      console.log('roodkoksfodksfodf', rowId)
      const newRecord = {
        name: formData.countryName.value,
        status: formData.statusName.value.label === "ENABLE" ? 0 : 1,
        id: rowId
      };
      setIsLoading(true);
      const result = await updateCountry(newRecord);
      if (result.status) {
        setSuccessBanner({
          flag: true,
          message: result.message,
          severity: Severity.Success,
        });
        setIsLoading(false);
        await listCountries(); // Explicitly call here
        setTimeout(() => {
          setOpenPopup({ flag: false, action: '', countryID: null });
          setSuccessBanner({ flag: false, message: "", severity: Severity.Success });
          setFormData(formFields);
          setIsEdit(false)
          setStatusPopup(false)
        }, 1500);
      } else {
        setSuccessBanner({
          flag: true,
          message: result.message,
          severity: Severity.Error,
        });
        setIsLoading(false);
      }
    }
  }

  const onPopupCloseHandler = () => {
    setOpenPopup({ flag: false, action: '', countryID: null })
    setFormData(formFields);
    setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
    setStatusPopup(false)
  }
  return (
    <>
      {/* Button to Open Popup */}
      <Grid style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup({ flag: true, action: 'create', countryID: null })}>
          Create Country
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
      {/* React Table */}
      <Backdrop
        sx={{
          color: 'blue',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={listLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <ReactTable
        title={'Country Management'}
        data={tableData}
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
        <DialogTitle> {openPopup.action === 'create' ? 'Create Country' : 'Update Country'}</DialogTitle>
        <DialogContent>
          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.countryName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.statusName} onSelectChange={handleSelectChange} />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            sx={{ margin: '1rem' }}
            onClick={() => {
              setOpenPopup({ flag: false, action: '', countryID: null });
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
            {openPopup.action === 'create' ? 'Create' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Status Update */}
      <Dialog open={statusPopup} maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '16px', padding: '10px',
            backgroundColor: '#f9fafb', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          },
        }}>
        {successBanner.flag && (
          <Stack spacing={2} sx={{ m: 2 }}>
            <Alert
              severity={successBanner.severity}
              onClose={() =>
                setSuccessBanner({ flag: false, severity: successBanner.severity, message: '' })
              }
            >
              {successBanner.message}
            </Alert>
          </Stack>
        )}
        <DialogTitle sx={{
          textAlign: 'center',
          color: '#374151', fontWeight: 600, fontSize: '1.25rem',
          borderBottom: '1px solid #e5e7eb', marginBottom: '10px',
        }}> Are you sure you want to {status}?</DialogTitle>
        <DialogContent >
          {selectedRow && (
            <Grid textAlign={'center'}>
              <Typography sx={{ fontWeight: 400, fontSize: '1rem', marginBottom: '5px' }}>
                <strong>Country Name:</strong> {selectedRow.country}
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: '1rem', marginBottom: '5px' }}>
                <strong>Current Status:</strong> {selectedRow.status}
              </Typography>
            </Grid>
          )}
        </DialogContent>
        <DialogActions sx={{
          display: 'flex',
          justifyContent: 'space-around',

        }}>
          <Button variant="contained" color="error" onClick={onPopupCloseHandler}
            sx={{
              padding: '5px 10px', borderRadius: '8px',
              fontSize: '0.875rem', textTransform: 'capitalize', boxShadow: 'none',
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              padding: '5px 10px',
              borderRadius: '8px', fontSize: '0.875rem', textTransform: 'capitalize', boxShadow: 'none',
            }}
            variant="contained" color="primary" onClick={statusConfirmHandler}
            startIcon={isLoading ? <CircularProgress color="inherit" size={20} /> : null}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
