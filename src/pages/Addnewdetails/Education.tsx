
import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel, Grid, Backdrop, CircularProgress, Stack, Alert } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { Severity } from 'Common/utils';
import { createEducation, listEducation } from 'services/add-new-details/AddNewDetails';

export default function Education() {
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
    educationName: {
      label: 'Education Name',
      id: 'educationName',
      name: 'educationName',
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
      value: {id:null,label:''},
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

  useEffect(() => {
    listeducation();
  }, [listFilter.search, listFilter.skip, listFilter.limit]);


  const handleFormSubmit = async () => {
    if (validate()) {
      const newRecord = {
        name: formData.educationName.value,
        status: formData.statusName.value.label === "ENABLE" ? 1 : 0,
      }
     setIsLoading(true);
          const result = await createEducation(newRecord);
          if (result.status) {
            setSuccessBanner({
              flag: true,
              message: result.message,
              severity: Severity.Success,
            });
            setIsLoading(false);
            await listeducation(); // Explicitly call here
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

  const initailData: any = [
    { sno: "1", education: "Btech", status: "Enable" },
    { sno: "2", education: "Bcom", status: "Disable" },
    { sno: "3", education: "Bsc", status: "Enable" },
    { sno: "4", education: "MBA", status: "Disable" },
    { sno: "5", education: "Msc", status: "Enable" },
    { sno: "6", education: "Btech", status: "Enable" },
    { sno: "7", education: "Btech", status: "Enable" },
    { sno: "8", education: "Btech", status: "Enable" },
    { sno: "9", education: "Btech", status: "Enable" }
  ];
  const [data, setData] = useState(initailData);

  const columns = useMemo(
    () => [
      { header: "S.NO", accessorKey: "sno" },
      { header: "Education Name", accessorKey: "education" },
      {
        header: "Status",
        accessorKey: "status",
        cell: (props: Cell<any, any>) => {
          const status = props.getValue(); // Get the value of the "status" field
          return (
            <Chip
              color={status === "Enable" ? "success" : "error"}
              label={status}
              size="small"
              variant="outlined" // Changed to "outlined" for better visual distinction
            />
          );
        },
      },
    ],
    []
  );
   const listeducation = async () => {
      setListLoader(true);
      const result = await listEducation(listFilter);
      if (result.status) {
        setListLoader(false);
        setRowCount(result.totalCount);
        if (result.data.length > 0) {
          const data = result.data.map((item: any, index: any) => ({ id: item.id, sno: listFilter.skip + index + 1, education: item.educationName, status: item.status ? 'Enable' : 'Disable' }));
          setTableData(data);
        }
  
        else {
          setTableData([]);
        }
      }
      else {
        setListLoader(false);
      }
    }
    useEffect(() => {
      if (globalFilter !== "") {
        setListFilter({ ...listFilter, skip: 0, limit: rowsPerPage, search: globalFilter })
      }
      else {
        setListFilter({ ...listFilter, skip: (pageNumber - 1) * rowsPerPage, limit: rowsPerPage, search: globalFilter })
      }
    }, [rowsPerPage, pageNumber, globalFilter]);
  
  const handleEdit = (row: any) => {
    // Pre-fill formData with the selected row's data
    const newFormData = _.cloneDeep(formData);
  
    // Map row values to formData
    newFormData.educationName.value = row.education;
    newFormData.statusName.value = newFormData.statusName.options.find(
      (option) => option.label.toUpperCase() === row.status.toUpperCase()
    ) || { id: null, label: '' };
  
    setFormData(newFormData); // Update formData state
    setOpenPopup(true); // Open dialog
  };
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
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Edit</MenuItem>
          {/* <MenuItem onClick={() => { setOpen({ flag: true, action: 'edit' }); handleClose(); }}>Edit</MenuItem> */}
          <MenuItem onClick={() => { setOpen({ flag: true, action: 'disable' }); handleClose(); }}>Disable</MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <>
      {/* Button to Open Popup */}
      <Grid style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
          Create Education
        </Button>
      </Grid>

      {/* Backdrop */}
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

      {/* React Table */}
      <ReactTable
        title={"Education Management"}
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
      <Dialog open={openPopup}  maxWidth="sm" fullWidth>
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
        <DialogTitle> Create Education</DialogTitle>
        <DialogContent>

          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.educationName} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} padding={2} >
            <CommonSelectField inputProps={formData.statusName} onSelectChange={handleSelectChange} />
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" sx={{margin:"1rem"}} onClick={() => setOpenPopup(false)}>Cancel</Button>
          <Button variant="contained" color="primary" sx={{margin:"1rem"}} onClick={handleFormSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

