
import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel, Grid, IconButton } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { height } from '@mui/system';
import moment from 'moment';
import CommonDatePicker from 'pages/common-components/common-date';

export default function ViewOnlinePayment() {
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
    invoiceno: {
      label: 'Enter Invoice NO',
      id: 'invoiceno',
      name: 'invoiceno',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    customerid: {
      label: 'Enter Customer ID',
      id: 'customerid',
      name: 'customerid',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    selectpackage: {
      label: 'Select Package',
      id: 'selectpackage',
      name: 'selectpackage',
      type:'select',
      options: [
        { id: 1, label: 'FREE' },
        { id: 2, label: 'PLATINUM' },
        { id: 3, label: 'SILVER' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    marriagetype: {
        label: 'Select Marriage Type',
        id: 'marriagetype',
        name: 'marriagetype',
        type:'select',
        options: [
          { id: 1, label: 'First' },
          { id: 2, label: 'Second' },
        
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
    durationtype: {
      label: 'Select Duration Type',
      id: 'durationtype',
      name: 'durationtype',
      type:'select',
      options: [
        { id: 1, label: 'DAYS' },
        { id: 2, label: 'WEEKS' },
        { id: 3, label: 'MONTHS' },
        { id: 2, label: 'YEARS' },
        { id: 3, label: 'UNLIMITED' },
      ],
      // value: [{ id: 1, label: 'WEEKS' },{ id: 2, label: 'YEARS' },],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    planamount: {
        label: 'Enter Plan Amount',
        id: 'planamount',
        name: 'planamount',
        type: 'number',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options : []
      },
      plandiscount: {
        label: 'Enter Plan Discount',
        id: 'plandiscount',
        name: 'plandiscount',
        type: 'number',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options : []
      },
    invoicedate: {
        label: 'Invoice Date',
        id: 'invoicedate',
        name: 'invoicedate',
        value: "",
        error: false,
        helperText: 'Please select date',
        mandatory: true,
        options : []
      },
      enddate: {
        label: 'Plan End Date',
        id: 'enddate',
        name: 'enddate',
        value: "",
        error: false,
        helperText: 'Please select date',
        mandatory: true,
        options : []
      },
      branch: {
        label: 'Select Branch',
        id: 'branch',
        name: 'branch',
        type: 'select',
        options: [
          { id: 1, label: 'Guntur Head Office' },
          { id: 2, label: 'Ongole' },
          { id: 3, label: 'Nellure' },
          { id: 4, label: 'Hyderabad' },
          { id: 5, label: 'Vijayawada' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
      paymentmode: {
        label: 'Payment Mode',
        id: 'paymentmode',
        name: 'paymentmode',
        type: 'select',
        options: [
          { id: 1, label: 'Cheque' },
          { id: 2, label: 'Cash' },
          { id: 3, label: 'Online' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
  };

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
      // Close the popup immediately after validation
      setOpenPopup(false);
  
      // Construct the new record
      const newRecord = {
        customerid: formData.customerid.value,
        invoiceno: formData.invoiceno.value,
        durationtype: formData.durationtype.value,
        marriagetype: formData.marriagetype.value,
        selectpackage: formData.selectpackage.value,
        branch: formData.branch.value,
        paymentmode: formData.paymentmode.value,
        invoicedate: moment(formData.invoicedate.value).format('YYYY/MM/DD'),
      };
  
      // Log or update data
      console.log("New Record:", newRecord);
      // Example: Add the new record to your data
      setData((prevData: any) => [...prevData, newRecord]);
    }
  };
  
  
  const initailData: any = [
        { sno: "1", cusid: "AM28469", name: "Mahesh",        mode: "Online", package: "Silver", transectionid: "Cd9r299r39r300", date: "13-01-2018" },
        { sno: "2", cusid: "AM27487", name: "Dileep Kumar",  mode: "Online", package: "Silver", transectionid: "Ca34993jfe800", date: "09-07-2018" },
        { sno: "3", cusid: "AM27597", name: "Vamsi",         mode: "Online", package: "Silver", transectionid: "Cfhdwur3r23ri900", date: "05-10-2018" },
        ];
  const [data, setData] = useState(initailData);
 
  
     const columns = useMemo(
        () => [
          { header: 'S.NO', accessorKey: 'sno' },
          { header: 'Cust ID', accessorKey: 'cusid' },
          { header: 'Name', accessorKey: 'name' },
          { header: 'Mode', accessorKey: 'mode' },
          { header: 'Package', accessorKey: 'package' },
          { header: 'Transection ID', accessorKey: 'transectionid' },
          {
            header: 'Date',accessorKey:'date'
           
          }
        ],
        []
      );
  
      
      const handleView = (row: any) => {
        console.log('row.........', row)
        const newUrl = '/admin/sales/addsales';
        const fullPath = `${window.location.origin}${newUrl}`;
        window.open(fullPath, '_blank');
      };

  const handleEdit = (row: any) => {
    setOpenPopup(true); // Open dialog
  };
  
  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {  // Change to Date | null
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };
  useEffect(() => {
    console.log("Page Size: ", rowsPerPage, "Page Number: ", pageNumber);
  }, [rowsPerPage, pageNumber]);
  
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
              <IconButton onClick={handleClick}>...</IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
               <MenuItem onClick={() => { handleView(row); handleClose(); }}>View Profile</MenuItem>
                <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Edit</MenuItem>
              </Menu>
            </>
          );
        };

return (
  <>
    {/* Removed Button to Open Popup */}

    {/* React Table */}
    <ReactTable
      title={"ONLINE PAYMENT DETAILS "}
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
      <DialogTitle>Customer Details</DialogTitle>
      <DialogContent>
      
      {/* <Grid container spacing={2}> */}
         <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.customerid} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.invoiceno} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonDatePicker inputProps={formData.invoicedate} onDateChange={handleDateChange} />
          </Grid>
         <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.selectpackage} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
            <CommonSelectField inputProps={formData.marriagetype} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} padding={2}>
              <CommonSelectField inputProps={formData.branch} onSelectChange={handleSelectChange} />
            </Grid>
         
          <Grid item xs={12} padding={2}>
              <CommonSelectField inputProps={formData.paymentmode} onSelectChange={handleSelectChange} />
            </Grid>
          

      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" sx={{ margin: "1rem" }} onClick={() => setOpenPopup(false)}>Cancel</Button>
        <Button variant="contained" color="primary" sx={{ margin: "1rem" }} onClick={handleFormSubmit}>
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  </>
);
}



