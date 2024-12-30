import { useEffect, useMemo, useState } from 'react';
import ReactTable from 'ReusableComponents/ReactTable'; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
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
  Grid
} from '@mui/material';
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/system';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { height } from '@mui/system';
import { Severity } from 'Common/utils';
import { countryList, statesList, districtList, createCity, cityList, updateCity } from '../../services/add-new-details/AddNewDetails';

export default function District() {
  const [openPopup, setOpenPopup] = useState({ flag: false, action: '', cityId: null }); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [listLoader, setListLoader] = useState(false);
  const [data, setData] = useState([]);
  const [listFilter, setListFilter] = useState({
    search: '',
    status: null,
    id: null,
    countryId: null,
    stateId: null,
    districtId: null,
    skip: 0,
    limit: 10
  });
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
    cityName: {
      label: 'Enter Your City Name',
      id: 'cityName',
      name: 'cityName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    districtName: {
      label: 'Select District Name',
      id: 'districtName',
      name: 'districtName',
      type: 'select',
      options: [],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
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

  const getCountryies = async () => {
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
      return result;
    } else {
      setCountryData([]);
      return [];
    }
  };

  useEffect(() => {
    getCountryies();
  }, []);

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
    if (validate()) {
      if (openPopup.action === 'create') {
        setIsLoading(true);
        const requestBody = {
          countryId: formData.country.value.id,
          stateId: formData.stateName.value.id,
          districtId: formData.districtName.value.id,
          cityName: formData.cityName.value,
          status: formData.statusName.value.id
        };
        const result = await createCity(requestBody);
        if (result.status) {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Success });
          setIsLoading(false);
          getCityList();
          setTimeout(() => {
            setOpenPopup({ flag: false, action: '', cityId: null });
            setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
            setFormData({ ...formFields, country: { ...formFields['country'], options: countryData } });
          }, 1500);
        } else {
          setSuccessBanner({ flag: true, message: result.message, severity: Severity.Error });
          setIsLoading(false);
        }
      } else {
        updateCityHandler();
      }
    }
  };

  const getCityList = async () => {
    setListLoader(true);
    const result = await cityList(listFilter);
    if (result.status) {
      setRowCount(result.totalCount);
      const cities = result.data.map((city: any, index: number) => ({
        sno: index + 1,
        id: city.id,
        city: city.cityName,
        districtId: city.district.id,
        district: city.district.districtName,
        counrtyId: city.country.id,
        counrty: city.country.countryName,
        stateId: city.state.id,
        state: city.state.stateName,
        status: city.status ? 'Enable' : 'Disable'
      }));
      setData(cities);
      setListLoader(false);
    } else {
      setData([]);
      setListLoader(false);
    }
  };

  useEffect(() => {
    getCityList();
  }, [listFilter.search, listFilter.skip, listFilter.limit]);

  useEffect(() => {
    if (globalFilter !== '') {
      setListFilter({ ...listFilter, skip: 0, limit: rowsPerPage, search: globalFilter });
    } else {
      setListFilter({ ...listFilter, skip: (pageNumber - 1) * rowsPerPage, limit: rowsPerPage, search: globalFilter });
    }
  }, [rowsPerPage, pageNumber, globalFilter]);

  const updateCityHandler = async (updateData: any = {}, multiple = '') => {
    console.log('updateData: ', updateData);
    setIsLoading(true);
    if (!multiple) {
      let d = Object.keys(updateData).length;
      const updateRecord = {
        countryId: d > 0 ? updateData?.counrtyId : formData.country.value.id,
        stateId: d > 0 ? updateData?.stateId : formData.stateName.value.id,
        districtId: d > 0 ? updateData?.districtId : formData.districtName.value.id,
        cityName: d > 0 ? updateData?.city : formData.cityName.value,
        status: d > 0 ? (updateData?.status === 'Disable' ? 1 : 0) : formData.statusName.value.id,
        id: d > 0 ? updateData?.id : openPopup.cityId
      };
      const update = await updateCity(updateRecord);
      if (update.status) {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Success });
        setIsLoading(false);
        setTimeout(() => {
          setOpenPopup({ flag: false, action: '', cityId: null });
          setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
          setFormData({ ...formFields, country: { ...formFields['country'], options: countryData } });
        }, 1500);
        setIsLoading(false);
      } else {
        setSuccessBanner({ flag: true, message: update.message, severity: Severity.Error });
        setIsLoading(false);
      }
    } else {
      let updateResult: any;
      updateData?.map(async (item: any) => {
        const updateRecord = {
          countryId: item?.counrtyId,
          stateId: item?.stateId,
          districtId: item?.districtId,
          cityName: item?.city,
          status: item?.status === 'Disable' ? 1 : 0,
          id: item?.id
        };
        updateResult = await updateCity(updateRecord);
      });
      setOpen({ flag: false, action: '' });
      setSuccessBanner({ flag: true, message: 'success', severity: Severity.Success });
    }
    getCityList();
    setTimeout(() => {
      setOpenPopup({ flag: false, action: '', cityId: null });
      setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
    }, 1500);
  };

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },
      { header: 'City Name', accessorKey: 'city' },
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

  const getStatesListByCountryId = async (countryId: number) => {
    const result = await statesList({
      search: '',
      status: null,
      id: null,
      countryId: countryId
    });
    return result;
  };

  const getDistrictsListBystateId = async (countryId: number, stateId: number) => {
    const result = await districtList({
      search: '',
      status: null,
      id: null,
      countryId: countryId,
      stateId: stateId,
      districtId: null
    });
    return result;
  };

  const handleEdit = async (row: any) => {
    // Pre-fill formData with the selected row's data
    const newFormData = _.cloneDeep(formData);
    console.log('row: ', row);
    const stateResult = await getStatesListByCountryId(row.countryId);
    const restructureStateRes = stateResult?.data?.map((item: any) => ({ id: item?.id, label: item?.stateName }));
    const getDistrictsList = await getDistrictsListBystateId(row.countryId, row.stateId);
    const restructureDistrictRes = getDistrictsList?.data?.map((item: any) => ({ id: item?.id, label: item?.districtName }));
    // Map row values to formData
    newFormData.country.value = newFormData.country.options.find((option) => option.label === row.counrty) || { id: null, label: '' };
    newFormData.stateName.value = restructureStateRes.find((option: any) => option.label === row.state) || { id: null, label: '' };
    newFormData.districtName.value = restructureDistrictRes.find((option: any) => option.label === row.district) || {
      id: null,
      label: ''
    };
    newFormData.cityName.value = row.city;
    newFormData.statusName.value = newFormData.statusName.options.find(
      (option) => option.label.toUpperCase() === row.status.toUpperCase()
    ) || { id: null, label: '' };
    newFormData['stateName'].options = stateResult?.data?.length > 0 ? restructureStateRes : [];
    newFormData['districtName'].options = getDistrictsList?.data?.length > 0 ? restructureDistrictRes : [];

    setFormData(newFormData); // Update formData state
    setOpenPopup({ flag: true, action: 'update', cityId: row.id });
  };

  const getDistrictListByStateId = async (countryId: number, stateId: number) => {
    const result = await districtList({
      search: '',
      status: null,
      id: null,
      countryId: countryId,
      stateId: stateId
    });
    return result;
  };

  const handleSelectChange = async (name: FormDataKeys, value: any) => {
    let stateResult;
    let districtResult;
    if (name === 'country') {
      stateResult = await getStatesListByCountryId(value.id);
    } else if (name === 'stateName') {
      districtResult = await getDistrictListByStateId(formData.country.value.id, value.id);
      console.log('districtResult: ', districtResult);
    }
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    if (name === 'country') {
      newFormData['stateName'].options =
        stateResult?.data?.length > 0 ? stateResult?.data?.map((item: any) => ({ id: item?.id, label: item?.stateName })) : [];
    } else if (name === 'stateName') {
      newFormData['districtName'].options =
        districtResult?.data?.length > 0 ? districtResult?.data?.map((item: any) => ({ id: item?.id, label: item?.districtName })) : [];
    }
    console.log('newFormData: ', newFormData);
    setFormData(newFormData);
  };
  useEffect(() => {
    console.log('Page Size: ', rowsPerPage, 'Page Number: ', pageNumber);
  }, [rowsPerPage, pageNumber]);

  const buttonHandler = (action: string, users: any) => {
    if (action === 'disable') {
      updateCityHandler(users);
    } else if (action === 'ENABLE') {
      updateCityHandler(users, 'ENABLE');
    } else if (action === 'DISABLE') {
      updateCityHandler(users, 'DISABLE');
    }
  };

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
          {/* <MenuItem onClick={() => handleDelete(row)}>Delete</MenuItem> */}
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
      <Grid item style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup({ flag: true, action: 'create', cityId: null })}>
          Create City
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

      {/* React Table */}
      <ReactTable
        title={'City Management'}
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
        <DialogTitle>{openPopup.action === 'create' ? 'Create City' : 'Update City'}</DialogTitle>
        <DialogContent>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.country} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.stateName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.districtName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.cityName} onChange={handleChange} />
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
            onClick={() => setOpenPopup({ flag: false, action: '', cityId: null })}
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
