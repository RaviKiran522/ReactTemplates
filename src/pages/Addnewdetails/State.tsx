
import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel, Grid } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { height } from '@mui/system';

export default function State() {
  const [openPopup, setOpenPopup] = useState(false); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

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
    selectName: {
      label: 'Select Country Name',
      id: 'selectName',
      name: 'selectName',
      type:'select',
      options: [
        { id: 1, label: 'INDIA' },
        { id: 2, label: 'AUSTRALIA' },
        { id: 3, label: 'ENGLAND' },
      ],
      value: {id:null,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
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

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory && !field.value && field.value == "") {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.mandatory && (field.type === "select" && (!field.value || !field.value.label))) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        }
        
        else {
          newFormData[key].helperText = '';
        }
      }
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleFormSubmit = () => {
    if (validate()) {
      setOpenPopup(false);
      const newRecord = {
        sno: (data.length + 1).toString(),
        counrty: formData.selectName.value.label,
        state: formData.stateName.value,
        // status: formData.status.value ? "Enable" : "Disable",
        status: formData.statusName.value.label 
      };
  
      setData((prevData: any) => [...prevData, newRecord]);
  
      console.log("Updated Data:", [...data, newRecord]); // Log updated data array
    }
  };
  

  const initailData: any = [
    { sno: "1",counrty:"INDIA",state:"ANDHRAPRADESH",status: "Enable" },
    { sno: "2",counrty:"INDIA",state:"TELANGANA", status: "Enable" },
    { sno: "3",counrty:"INDIA",state:"KARNATAKA", status: "Enable" },
    { sno: "4",counrty:"INDIA",state:"ODISHA", status: "Enable" },
    { sno: "5",counrty:"INDIA",state:"TAMILANADU", status: "Enable" },
    { sno: "6",counrty:"INDIA",state:"BIHAR", status: "Disable" },
    { sno: "7",counrty:"INDIA",state:"DELHI", status: "Enable" },
    { sno: "8", counrty:"INDIA",state:"KERALA", status: "Disable" },
    { sno: "9", counrty:"INDIA",state:"GUJARAT", status: "Enable" }
  ];
  const [data, setData] = useState(initailData);

  const columns = useMemo(
    () => [
      { header: "S.NO", accessorKey: "sno" },
      
      { header: "State Name", accessorKey: "state" },
      { header: "Counrty Name", accessorKey: "counrty" },
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
  
  const handleEdit = (row: any) => {
    // Pre-fill formData with the selected row's data
    const newFormData = _.cloneDeep(formData);
  
    // Map row values to formData
    newFormData.selectName.value = newFormData.selectName.options.find(
      (option) => option.label === row.counrty
    ) || { id: null, label: '' };
    newFormData.stateName.value = row.state;
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
          <MenuItem onClick={() => { setOpen({ flag: true, action: 'delete' }); handleClose(); }}>Delete</MenuItem>
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
          Create State
        </Button>
        </Grid>

      {/* React Table */}
      <ReactTable
        title={"State Management"}
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
        totalPageCount={60}
      />

      {/* Dialog for Create Form */}
      <Dialog open={openPopup} maxWidth="sm" fullWidth>
        <DialogTitle> Create State</DialogTitle>
        <DialogContent>
        <Grid item xs={12} padding={2} >
            <CommonSelectField inputProps={formData.selectName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.stateName} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} padding={2} >
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
          <Button variant="contained" color="error" sx={{margin:"1rem"}} onClick={() => setOpenPopup(false)}>Cancel</Button>
          <Button variant="contained" color="primary" sx={{margin:"1rem"}} onClick={handleFormSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
