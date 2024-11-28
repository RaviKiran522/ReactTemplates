
import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel, Grid } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { height } from '@mui/system';

export default function District() {
  const [openPopup, setOpenPopup] = useState(false); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  
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
      type:'select',
      options: [
        { id: 1, label: 'HYDERABADH' },
        { id: 2, label: 'VIZAG' },
        { id: 3, label: 'VARANGAL' },
      ],
      value: {id:null,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },

    stateName: {
      label: 'Select State Name',
      id: 'stateName',
      name: 'stateName',
      type:'select',
      options: [
        { id: 1, label: 'ANDHRAPRADESH' },
        { id: 2, label: 'TELANGANA' },
        { id: 3, label: 'TAMILANADU' },
      ],
      value: {id:null,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
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
    status: {
      label: "Status",
      id: "status",
      name: "status",
      type: "radio",
      value: true, 
      error: false,
      helperText: "",
      mandatory: true,
      options: [], 
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
        state: formData.stateName.value.label,
        district:formData.districtName.value.label,
        city: formData.cityName.value,
       
        status: formData.status.value ? "Enable" : "Disable",
      };
  
      setData((prevData: any) => [...prevData, newRecord]);
  
      console.log("Updated Data:", [...data, newRecord]); // Log updated data array
    }
  };
  

  const initailData: any = [
    { sno: "1",city:"MADHAPUR",district:"HYDERABADH",counrty:"INDIA",state:"ANDHRAPRADESH",status: "Enable" },
    { sno: "2",city:"KUKATPALLY",district:"HITECH-CITY",counrty:"INDIA",state:"TELANGANA", status: "Enable" },
    { sno: "3",city:"HITECH-CITY",district:"HYDERABADH",counrty:"INDIA",state:"KARNATAKA", status: "Enable" },
    { sno: "4",city:"TANUKU",district:"HYDERABADH",counrty:"INDIA",state:"ODISHA", status: "Enable" },
    { sno: "5",city:"PALAKOL",district:"HYDERABADH",counrty:"INDIA",state:"TAMILANADU", status: "Enable" },
    { sno: "6",city:"TPG",district:"HYDERABADH",counrty:"INDIA",state:"BIHAR", status: "Disable" },
    { sno: "7",city:"RAVULAPLEM",district:"HYDERABADH",counrty:"INDIA",state:"DELHI", status: "Enable" },
    { sno: "8",city:"PENUGONDA",district:"HYDERABADH", counrty:"INDIA",state:"KERALA", status: "Disable" },
    { sno: "9",city:"NARSAPUR",district:"HYDERABADH", counrty:"INDIA",state:"GUJARAT", status: "Enable" }
  ];
  const [data, setData] = useState(initailData);

  const columns = useMemo(
    () => [
      { header: "S.NO", accessorKey: "sno" },
      { header: 'City Name', accessorKey: 'city' },
      { header: 'District Name', accessorKey: 'district' },
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
    console.log('row.........', row)
    const newUrl = '/react/userManagement/editUser';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
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
      <div style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
          Create City
        </Button>
      </div>

      {/* React Table */}
      <ReactTable
        title={"City Management"}
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
      <Dialog open={openPopup} onClose={() => setOpenPopup(false)} maxWidth="sm" fullWidth>
        <DialogTitle> Create City</DialogTitle>
        <DialogContent>
          
        <Grid item xs={12} padding={2} >
            <CommonSelectField inputProps={formData.selectName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2} >
            <CommonSelectField inputProps={formData.stateName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2} >
            <CommonSelectField inputProps={formData.districtName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.cityName} onChange={handleChange} />
          </Grid>
          

          <FormControl component="fieldset">
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

          </FormControl>



        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={() => setOpenPopup(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}