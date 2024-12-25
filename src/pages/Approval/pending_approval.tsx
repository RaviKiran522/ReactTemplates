
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
import MainCard from 'components/MainCard';
import Viewapprovalpopup from './Viewapprovalpopup';

export default function PendingApprovals() {
  const [openPopup, setOpenPopup] = useState(false); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [approve, setApprove] = useState(false);

  
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
    mobileno: {
      label: 'Enter Mobile NO',
      id: 'mobileno',
      name: 'mobileno',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
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
      options: []
    },
    customername: {
      label: 'Enter Customer Name',
      id: 'customername',
      name: 'customername',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    customersurname: {
      label: 'Enter Customer Surname',
      id: 'customersurname',
      name: 'customersurname',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    approvedby: {
      label: 'Select Approved By',
      id: 'approvedby',
      name: 'approvedby',
      type: 'select',
      options: [
        { id: 1, label: 'Admin' },
        { id: 2, label: 'Agent' },
        { id: 3, label: 'Baranch' },
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    documenttype: {
      label: 'Select Document Type',
      id: 'documenttype',
      name: 'documenttype',
      type: 'select',
      options: [
        { id: 1, label: 'First' },
        { id: 2, label: 'Second' },

      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    selectcaste: {
      label: 'Select Caste',
      id: 'selectcaste',
      name: 'selectcaste',
      type: 'select',
      options: [
        { id: 1, label: 'Kaapu/Naidu' },
        { id: 2, label: 'Reddy' },

      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },

    documentnumber: {
      label: 'Enter Document Number',
      id: 'documentnumber',
      name: 'documentnumber',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },

    approveddate: {
      label: 'Appeoved Date',
      id: 'approveddate',
      name: 'approveddate',
      value: "",
      error: false,
      helperText: 'Please select date',
      mandatory: true,
      options: []
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

  const handleFormSubmit = (e: React.FormEvent) => {
      if (validate()) {
        // Close the popup immediately after validation
        // setOpenPopup(false);
        setOpenPopup(false)
        // Construct the new record
        const newRecord = {
          customerid: formData.customerid.value,
          customername: formData.customername.value,
          customersurname: formData.customersurname.value,
          mobileno: formData.mobileno.value,
          selectcaste: formData.selectcaste.value,
          documenttype: formData.documenttype.value,
          documentnumber: formData.documentnumber.value,
          approvedby: formData.approvedby.value,
          approveddate: moment(formData.approveddate.value).format('YYYY/MM/DD'),
  
        };
        // Log or update data
        console.log("New Record:", newRecord);
  
        e.preventDefault();
        if (validate()) {
          console.log('Form Submitted', formData);
        }
      }
  
  
  
    };
  
  
// xii.actions
// 1.view
// a.show the document, detais and photo
// 2.edit
  const initailData: any = [
        { sno: "1",id:'1', name: "Mahesh",surName :'koppisetti',mobileNumber:'9089389383',caste:'BC-b' ,documentType:'uyeuw',documentNumber:'8383',status:'Active',
            approvedBy:'Admin',approvedDate:'13-01-2018 11:35:35' },
            { sno: "1",id:'1', name: "Mahesh",surName :'koppisetti',mobileNumber:'9089389383',caste:'BC-b' ,documentType:'uyeuw',documentNumber:'8383',status:'Active',
                approvedBy:'Admin',approvedDate:'13-01-2018 11:35:35' },
                { sno: "1",id:'1', name: "Mahesh",surName :'koppisetti',mobileNumber:'9089389383',caste:'BC-b' ,documentType:'uyeuw',documentNumber:'8383',status:'Active',
                    approvedBy:'Admin',approvedDate:'13-01-2018 11:35:35' },
                    { sno: "1",id:'1', name: "Mahesh",surName :'koppisetti',mobileNumber:'9089389383',caste:'BC-b' ,documentType:'uyeuw',documentNumber:'8383',status:'Active',
                        approvedBy:'Admin',approvedDate:'13-01-2018 11:35:35' },
        ];
  const [data, setData] = useState(initailData);
 
  
     const columns = useMemo(
        () => [
          { header: 'S.NO', accessorKey: 'sno' },
          { header: 'ID', accessorKey: 'id' },
          { header: 'Name', accessorKey: 'name' },
          { header: 'SurName', accessorKey: 'surName' },
          { header: 'Mobile Number', accessorKey: 'mobileNumber' },
          { header: 'Caste', accessorKey: 'caste' },
          { header: 'Document Type', accessorKey: 'documentType' },
          { header: 'Document Number', accessorKey: 'documentNumber' },
          { header: 'Status', accessorKey: 'status' },
          { header: 'Approved By', accessorKey: 'approvedBy' },
          { header: 'Approved Date', accessorKey: 'approvedDate' },
          
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
               <MenuItem onClick={() => {setApprove(true);; handleClose(); }}>View</MenuItem>
                <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Edit</MenuItem>
              </Menu>
            </>
          );
        };
        
        const handleInvoiceClose =() =>{
          setApprove(false)
        }

return (
  <>
    {/* Removed Button to Open Popup */}

    {/* React Table */}
    <ReactTable
      title={"Pending Approvals"}
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
      <DialogTitle>Pending Approval</DialogTitle>
      <DialogContent>
      
      <MainCard>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <CommonInputField inputProps={formData.customerid} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <CommonInputField inputProps={formData.customername} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <CommonInputField inputProps={formData.customersurname} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <CommonInputField inputProps={formData.mobileno} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <CommonSelectField inputProps={formData.selectcaste} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonSelectField inputProps={formData.documenttype} onSelectChange={handleSelectChange} />
              </Grid>

              <Grid item xs={12} sm={6} md={6} >
                <CommonInputField inputProps={formData.documentnumber} onChange={handleChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonSelectField inputProps={formData.approvedby} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CommonDatePicker inputProps={formData.approveddate} onDateChange={handleDateChange} />
              </Grid>
            </Grid>
          </MainCard>
          

      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" sx={{ margin: "1rem" }} onClick={() => setOpenPopup(false)}>Cancel</Button>
        <Button variant="contained" color="primary" sx={{ margin: "1rem" }} onClick={handleFormSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>

    {approve && (
        <div style={{ position: 'fixed', top: '10%', right: '10%', zIndex: 1000 }}>
          <Viewapprovalpopup open={approve} onClose={handleInvoiceClose} />
        </div>
      )}
  </>
);
}



