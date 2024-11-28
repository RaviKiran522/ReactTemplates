
import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel, Grid } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';

export default function University() {
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
    universityName: {
      label: 'Enter University Name',
      id: 'universityName',
      name: 'universityName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
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
        } else if (field.type = "select") {
          if (!field.value || field.value.id === null) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`
          } else {
            newFormData[key].error = false;
            newFormData[key].helperText = ""
          }
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
    }
    console.log("Form Data: ", formData);
    const newRecord = {
      sno: (data.length + 1).toString(), // Generate a new serial number based on the length of the array

      university: formData.universityName.value, // Defaulting university to B.tech
      status: formData.status.value ? "Enable" : "Disabled", // Defaulting status to Enable
    };

    setData([...data, newRecord]); // Add the new record to the data array
    console.log("Updated Data: ", data); // Log the updated array

    // Perform API call or state update
    // Close the dialog after submission
  };

  const initailData: any = [
    { sno: "1", university: "JNTU,HYDERABAD", status: "Enable" },
    { sno: "2", university: "ANDHRA,VIZAG", status: "Disable" },
    { sno: "3", university: "AKNU,RAJAMANDRY", status: "Enable" },
    { sno: "4", university: "SSC", status: "Disable" },
    { sno: "5", university: "INTERMEDIATE", status: "Enable" },
    { sno: "6", university: "DEGREE", status: "Enable" },
    { sno: "7", university: "IIIT", status: "Enable" },
    { sno: "8", university: "AKNU,RAJAMANDRY", status: "Enable" },
    { sno: "9", university: "AKNU,RAJAMANDRY", status: "Enable" }
  ];
  const [data, setData] = useState(initailData);

  const columns = useMemo(
    () => [
      { header: "S.NO", accessorKey: "sno" },
      { header: "University Name", accessorKey: "university" },
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
      <div style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
          Create University
        </Button>
      </div>

      {/* React Table */}
      <ReactTable
        title={"University Management"}
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
        <DialogTitle> Create University</DialogTitle>
        <DialogContent>

          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.universityName} onChange={handleChange} />
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

