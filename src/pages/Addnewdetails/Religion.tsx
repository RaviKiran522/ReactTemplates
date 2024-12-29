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
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { createReligion, religionList, updateReligion } from '../../services/add-new-details/AddNewDetails';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Severity } from 'Common/utils';

export default function Religion() {
  const [openPopup, setOpenPopup] = useState({ flag: false, action: '', religionId: null }); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [listLoader, setListLoader] = useState(false);
  const [rowCount, setRowCount] = useState(0);
  const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [globalFilter, setGlobalFilter] = useState('');
  const [listFilter, setListFilter] = useState({ status: null, id: null, search: '', skip: 0, limit: 10 });

  // const [formData, setFormData] = useState({

  //   religionName: '',
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
    religionName: {
      label: ' Enter Your Religion',
      id: 'religionName',
      name: 'religionName',
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

    // Check each form field for validity
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory && (field.value === undefined || field.value === null || field.value === '')) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.type === 'select' && (field.value.id === null || field.value.id === '' || field.value.id === undefined)) {
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

  const buttonHandler = (action: string, users: any) => {
    if (action === 'disable') {
      updateReligionHandler(users);
    } else if (action === 'ENABLE') {
      updateReligionHandler(users, 'ENABLE');
    } else if (action === 'DISABLE') {
      updateReligionHandler(users, 'DISABLE');
    }
  };

  const updateReligionHandler = async (updateData: any = {}, multiple = '') => {
    setIsLoading(true);
    if (!multiple) {
      console.log('updateData: ', updateData, openPopup);
      let d = Object.keys(updateData).length;
      const updateRecord = {
        name: d > 0 ? updateData?.religion : formData.religionName.value,
        status: d > 0 ? (updateData?.status === 'Enable' ? 0 : 1) : formData.statusName.value.id,
        id: d > 0 ? updateData.id : openPopup.religionId
      };
      console.log('updateRecord', updateRecord);
      const update = await updateReligion(updateRecord);
      if (update.status) {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Success });
        setIsLoading(false);
        getReligionData();
        setTimeout(() => {
          setOpenPopup({ flag: false, action: '', religionId: null });
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
          name: item?.religion,
          status: multiple === 'ENABLE' ? 1 : 0,
          id: item.id
        };
        const update = await updateReligion(updateRecord);
      });
      setOpen({ flag: false, action: '' });
      setSuccessBanner({ flag: true, message: 'success', severity: Severity.Success });
      setIsLoading(false);
    }
    getReligionData();
    setTimeout(() => {
      setOpenPopup({ flag: false, action: '', religionId: null });
      setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
    }, 1500);
  };

  const getReligionData = async () => {
    setListLoader(true);
    const result = await religionList(listFilter);
    if (result.status) {
      setRowCount(result.totalCount || 11);
      const resData = result.data.map((item: any, index: any) => ({
        sno: listFilter.skip + index + 1,
        religion: item?.religionName,
        status: item?.status ? 'Enable' : 'Disable',
        id: item?.id
      }));
      setData(resData);
      setListLoader(false);
    } else {
      setListLoader(false);
    }
  };

  useEffect(() => {
    getReligionData();
  }, [listFilter.search, listFilter.skip, listFilter.limit]);

  useEffect(() => {
    if (globalFilter !== '') {
      setListFilter({ ...listFilter, skip: 0, limit: rowsPerPage, search: globalFilter });
    } else {
      setListFilter({ ...listFilter, skip: (pageNumber - 1) * rowsPerPage, limit: rowsPerPage, search: globalFilter });
    }
  }, [rowsPerPage, pageNumber, globalFilter]);

  const handleFormSubmit = async () => {
    if (validate()) {
      if (openPopup.action === 'create') {
        const requestBody = {
          name: formData.religionName.value,
          status: formData.statusName.value.id
        };
        const result = await createReligion(requestBody);
        if (result.status) {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Success });
          setIsLoading(false);
          getReligionData();
          setTimeout(() => {
            setOpenPopup({ flag: false, action: '', religionId: null });
            setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
            setFormData(formFields);
          }, 1500);
        } else {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Error });
          setIsLoading(false);
        }
      } else {
        updateReligionHandler();
      }
    }
  };

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },
      { header: 'Religion Name', accessorKey: 'religion' },
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
    // Pre-fill formData with the selected row's data
    const newFormData = _.cloneDeep(formData);

    // Map row values to formData fields
    newFormData.religionName.value = row.religion; // Map "country" to "countryName"
    newFormData.statusName.value = newFormData.statusName.options.find(
      (option) => option.label.toUpperCase() === row.status.toUpperCase()
    ) || { id: null, label: '' };

    setFormData(newFormData); // Update formData state
    setOpenPopup({ flag: true, action: 'update', religionId: row.id });
  };

  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
      console.log('Page Size: ', rowsPerPage, 'Page Number: ', pageNumber);
    }, [rowsPerPage, pageNumber]);

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
          {/* <MenuItem onClick={() => { setOpen({ flag: true, action: 'edit' }); handleClose(); }}>Edit</MenuItem> */}
          <MenuItem
            onClick={() => {
              setOpen({ flag: true, action: 'disable' });
              handleClose();
            }}
          >
            Disable
          </MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <>
      {/* Button to Open Popup */}
      <Grid style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup({ flag: true, action: '', religionId: null })}>
          Create Religion
        </Button>
      </Grid>

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
        title={'Religion Management'}
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
        pageNumber={pageNumber}
        buttonHandler={buttonHandler}
        totalPageCount={Math.ceil(rowCount / rowsPerPage)}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        listSelectButton={{ name1: 'ENABLE', name2: 'DISABLE' }}
      />

      {/* Dialog for Create Form */}
      <Dialog open={openPopup.flag} maxWidth="sm" fullWidth>
        <DialogTitle> Create Religion</DialogTitle>
        <DialogContent>
          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.religionName} onChange={handleChange} />
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
            onClick={() => setOpenPopup({ flag: false, action: '', religionId: null })}
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
    </>
  );
}
