
import { useCallback, useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel, Grid, Typography } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _, { debounce } from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { Severity } from 'Common/utils';
import Alert from '@mui/material/Alert';
import { Stack } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from "@mui/material/Backdrop";
import { createUniversitys, editUniversitys, listUniversitys } from 'services/add-new-details/AddNewDetails';


export default function University() {
  const [openPopup, setOpenPopup] = useState(false); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [listLoader, setListLoader] = useState(false);
  const [listFilter, setListFilter] = useState({ status: null, id: null, search: "", skip: 0, limit: 10 });
  const [tableData, setTableData] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  const [globalFilter, setGlobalFilter] = useState('');
  const [isEdit, setIsEdit] = useState(false)
  const [statusPopup, setStatusPopup] = useState(false)
  const [rowId, setRowId] = useState(0)
  const [status, setStatus] = useState("")
  const [selectedRow, setSelectedRow] = useState<any>(null); // State to hold selected row data

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
    univercityName: {
      label: 'Enter University Name',
      id: 'univercityName',
      name: 'univercityName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    statusName: {
      label: "Status",
      id: "statusName",
      name: "statusName",
      type: "select",
      options: [
        { id: 1, label: 'ENABLE' },
        { id: 2, label: 'DISABLE' },
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: "",
      mandatory: true,
      isMulti: false,
    },

  }

  const [formData, setFormData] = useState<FormData>(formFields);
  type FormDataKeys = keyof typeof formData;

  const handleChange = (name: FormDataKeys, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name], // Preserve existing properties of the field
        value,         // Update the value
        error: false,  // Reset error state
        helperText: "", // Clear helper text
      },
    }));
  };
  const validate = (): boolean => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;

    // Check each form field for validity
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory && (!field.value || field.value === "")) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.type === "select" && (field.value.id === null || !field.value.id)) {
          // Handle select validation for status field
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
          newFormData[key].error = false;
          newFormData[key].helperText = "";
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
      const newRecord = {
        name: formData.univercityName.value,
        status: formData.statusName.value.label === "ENABLE" ? 1 : 0,
      };
      setIsLoading(true);
      const result = await createUniversitys(newRecord);
      if (result.status) {
        setSuccessBanner({
          flag: true,
          message: result.message,
          severity: Severity.Success,
        });
        setIsLoading(false);
        await universityList(); // Explicitly call here
        setTimeout(() => {
          setOpenPopup(false);
          setSuccessBanner({ flag: false, message: "", severity: Severity.Success });
          setFormData(formFields);
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
  };

  // console.log("hello",formData);


  const universityList = async () => {
    setListLoader(true);
    const result = await listUniversitys(listFilter);
    if (result.status) {
      setListLoader(false);
      setRowCount(result.totalCount);
      if (result.data.length > 0) {
        const data = result.data.map((item: any, index: any) => ({
          id: item.id,
          sno: listFilter.skip + index + 1,
          university: item.univercityName,
          status: item.status ? 'Enable' : 'Disable',
        }));

        setTableData(data);
      } else {
        setTableData([]);
      }
    } else {
      setListLoader(false);
    }
  };

  console.log("tableData", tableData);

  // const debouncedListSource = useCallback(
  //   debounce(() => universityList(), 500), // Adjust debounce time as needed
  //   []
  // );

  useEffect(() => {
    if (globalFilter !== "") {
      setListFilter({ ...listFilter, skip: 0, limit: rowsPerPage, search: globalFilter })
    }
    else {
      setListFilter({ ...listFilter, skip: (pageNumber - 1) * rowsPerPage, limit: rowsPerPage, search: globalFilter })
    }
  }, [rowsPerPage, pageNumber, globalFilter]);
  useEffect(() => {
    universityList();
  }, [listFilter.search, listFilter.skip, listFilter.limit]);


  const initailData: any = [
    { sno: "1", university: "Andhara", status: "Enable" },
    { sno: "2", university: "Jntu", status: "Disable" },
    { sno: "3", university: "AKNU", status: "Enable" },
    { sno: "4", university: "BOOKS", status: "Disable" },
    { sno: "5", university: "MUSIC", status: "Enable" },
    { sno: "6", university: "SELF", status: "Enable" },
    { sno: "7", university: "TV", status: "Enable" },
    { sno: "8", university: "MOBILE", status: "Enable" },
    { sno: "9", university: "LAPTOP", status: "Enable" }
  ];
  const [data, setData] = useState(initailData);

  const columns = useMemo(
    () => [
      { header: "S.NO", accessorKey: "sno" },
      { header: "Universities Name", accessorKey: "university" },
      {
        header: "Status",
        accessorKey: "status",
        cell: (props: Cell<any, any>) => {
          const status = props.getValue();
          return (
            <Chip
              color={status === "Enable" ? "success" : "error"}
              label={status}
              size="small"
              variant="outlined"
            />
          );
        },
      },
    ],
    []
  );


  // const [rowId,setRowId] = useState()


  const handleEdit = (row: any, action: any) => {
    setRowId(row.id);
    setIsLoading(false);

    if (action === 'Status') {
      let checkStatus = row.status === 'Disable' ? 'Enable' : 'Disable';
      setStatus(checkStatus);
      setSelectedRow(row); // Set the selected row data
      setStatusPopup(true);
      setOpenPopup(false);
      setIsEdit(false);
    } else if (action === 'Edit') {
      setStatusPopup(false);
      setOpenPopup(true);
      setIsEdit(true);
    }

    // Pre-fill formData when editing
    const newFormData = _.cloneDeep(formData);
    newFormData.univercityName.value = row.university;
    newFormData.statusName.value =
      newFormData.statusName.options.find(
        (option) => option.label.toUpperCase() === row.status.toUpperCase()
      ) || { id: null, label: '' };

    setFormData(newFormData);
  };


  const handleEditFormSubmit = async () => {
    if (validate()) {
      console.log('roodkoksfodksfodf', rowId)
      const newRecord = {
        name: formData.univercityName.value,
        status: formData.statusName.value.label === "ENABLE" ? 1 : 0,
        id: rowId
      };
      setIsLoading(true);
      const result = await editUniversitys(newRecord);
      if (result.status) {
        setSuccessBanner({
          flag: true,
          message: result.message,
          severity: Severity.Success,
        });
        setIsLoading(false);
        await universityList(); // Explicitly call here
        setTimeout(() => {
          setOpenPopup(false);
          setSuccessBanner({ flag: false, message: "", severity: Severity.Success });
          setFormData(formFields);
          setIsEdit(false)
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
  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
      console.log("Page Size: ", rowsPerPage, "Page Number: ", pageNumber);
    }, [rowsPerPage, pageNumber]);

    const handleClose = () => {
      setAnchorEl(null);
    };



    return (
      <>
        <Button onClick={handleClick}>...</Button>
        {/* < <Button onClick={handleClick}>...</Button> */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => { handleEdit(row, 'Edit'); handleClose(); }}>Edit</MenuItem>
          <MenuItem onClick={() => { handleEdit(row, 'Status'); handleClose() }}>{row.status == 'Disable' ? 'Enable' : 'Disable'}</MenuItem>
        </Menu>
      </>
    );
  };

  const statusConfirmHandler = async () => {
    if (validate()) {
      console.log('roodkoksfodksfodf', rowId)
      const newRecord = {
        name: formData.univercityName.value,
        status: formData.statusName.value.label === "ENABLE" ? 0 : 1,
        id: rowId
      };
      setIsLoading(true);
      const result = await editUniversitys(newRecord);
      if (result.status) {
        setSuccessBanner({
          flag: true,
          message: result.message,
          severity: Severity.Success,
        });
        setIsLoading(false);
        await universityList(); // Explicitly call here
        setTimeout(() => {
          setOpenPopup(false);
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
    setOpenPopup(false)
    setFormData(formFields);
    setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
    setStatusPopup(false)
  }

  return (
    <>
      {/* Button to Open Popup */}
      <Grid style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
          Create Universities
        </Button>
      </Grid>
      <Backdrop
        sx={{
          color: "blue",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={listLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* React Table */}
      <ReactTable
        title={'Universities Management'}
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
        pageNumber={pageNumber}
        totalPageCount={Math.ceil(rowCount / rowsPerPage)}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        listSelectButton={{ name1: "ENABLE", name2: "DISABLE" }}

      />

      {/* Dialog for Create Form */}
      <Dialog open={openPopup} maxWidth="sm" fullWidth>
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
        <DialogTitle> Create Universities</DialogTitle>
        <DialogContent>

          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.univercityName} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} padding={2} >
            <CommonSelectField inputProps={formData.statusName} onSelectChange={handleSelectChange} />
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" sx={{ margin: "1rem" }} onClick={() => setOpenPopup(false)}>Cancel</Button>
          <Button variant="contained" color="primary" sx={{ margin: "1rem" }} onClick={!isEdit ? handleFormSubmit : handleEditFormSubmit}>
            {isEdit ? 'Edit' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>


      {/* Dialog for Status popup */}
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
            <Grid  textAlign={'center'}>
              <Typography sx={{ fontWeight: 400, fontSize: '1rem', marginBottom: '5px' }}>
                <strong>Universities Name:</strong> {selectedRow.university}
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







