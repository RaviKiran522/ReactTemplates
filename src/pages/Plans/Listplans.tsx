// import { useEffect, useMemo, useState } from 'react';
// import ReactTable from "ReusableComponents/ReactTable";  // Ensure this is the correct import for ReactTable
// import Chip from '@mui/material/Chip';
// import { Menu, MenuItem } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
// import SampleForm from 'pages/dashboard/sampleForm';
// import moment from 'moment';

// // The UsersList component now passes actions to the ReactTable component
// export default function ListPlans() {
//   const [openPopup, setOpenPopup] = useState(false); // State for dialog visibility
//   const [open, setOpen] = useState({ flag: false, action: '' });
//   const [rowsPerPage, setRowsPerPage] = useState(0);
//   const [pageNumber, setPageNumber] = useState(1);

//   interface FormField {
//     label: any;
//     id: any;
//     name: any;
//     type?: any;
//     placeholder?: any;
//     value: any;
//     error?: boolean;
//     helperText?: any;
//     mandatory?: boolean;
//     options: { id: any; label: any }[];
//     isMulti?: boolean;
//   }

//   interface FormData {
//     [key: string]: FormField;
//   }

//   const formFields: FormData = {
//     duration: {
//       label: 'Enter Duration',
//       id: 'duration',
//       name: 'duration',
//       type: 'number',
//       value: '',
//       error: false,
//       helperText: '',
//       mandatory: true,
//       options : []
//     },
//     planname: {
//       label: 'Enter Plan Name',
//       id: 'naplannameme',
//       name: 'planname',
//       type: 'text',
//       value: '',
//       error: false,
//       helperText: '',
//       mandatory: true,
//       options : []
//     },
//     selectcategory: {
//       label: 'Select Category',
//       id: 'selectcategory',
//       name: 'selectcategory',
//       type:'select',
//       options: [
//         { id: 1, label: 'FREE' },
//         { id: 2, label: 'PLATINUM' },
//         { id: 3, label: 'PREMIUM' },
//       ],
//       value: {id:1,label:'PLATINUM'},
//       error: false,
//       helperText: '',
//       mandatory: true,
//       isMulti: false,
//     },
//     numberofcontacts: {
//         label: 'Select Number OF Contacts',
//         id: 'numberofcontacts',
//         name: 'numberofcontacts',
//         type:'select',
//         options: [
//           { id: 1, label: 'Income Contacts' },
//           { id: 2, label: 'Outgoing Contacts' },
        
//         ],
//         value: {id:1,label:''},
//         error: false,
//         helperText: '',
//         mandatory: true,
//         isMulti: false,
//       },
//     durationtype: {
//       label: 'Select Duration Type',
//       id: 'durationtype',
//       name: 'durationtype',
//       type:'select',
//       options: [
//         { id: 1, label: 'DAYS' },
//         { id: 2, label: 'WEEKS' },
//         { id: 3, label: 'MONTHS' },
//         { id: 2, label: 'YEARS' },
//         { id: 3, label: 'UNLIMITED' },
//       ],
//       // value: [{ id: 1, label: 'WEEKS' },{ id: 2, label: 'YEARS' },],
//       value: {id:1,label:''},
//       error: false,
//       helperText: '',
//       mandatory: true,
//       isMulti: false,
//     },
//     planamount: {
//         label: 'Enter Plan Amount',
//         id: 'planamount',
//         name: 'planamount',
//         type: 'number',
//         value: '',
//         error: false,
//         helperText: '',
//         mandatory: true,
//         options : []
//       },
//       plandiscount: {
//         label: 'Enter Plan Discount',
//         id: 'plandiscount',
//         name: 'plandiscount',
//         type: 'number',
//         value: '',
//         error: false,
//         helperText: '',
//         mandatory: true,
//         options : []
//       },
//     activedate: {
//         label: 'Plan Active Date',
//         id: 'activedate',
//         name: 'activedate',
//         value: "",
//         error: false,
//         helperText: 'Please select date',
//         mandatory: true,
//         options : []
//       },
//       enddate: {
//         label: 'Plan End Date',
//         id: 'enddate',
//         name: 'enddate',
//         value: "",
//         error: false,
//         helperText: 'Please select date',
//         mandatory: true,
//         options : []
//       },
//   };

//   const [formData, setFormData] = useState<FormData>(formFields);
//   type FormDataKeys = keyof typeof formData;

//   const handleChange = (name: FormDataKeys, value: any) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: {
//         ...prev[name], // Preserve existing properties of the field
//         value,         // Update the value
//         error: false,  // Reset error state
//         helperText: "", // Clear helper text
//       },
//     }));
//   };
//   const validate = (): boolean => {
//     let newFormData = _.cloneDeep(formData);
//     let isValid = true;

//     for (const key in formData) {
//       if (formData.hasOwnProperty(key)) {
//         const field = formData[key];

//         if (field.mandatory && !field.value && field.value == "") {
//           newFormData[key].error = true;
//           newFormData[key].helperText = `${field.label} is required`;
//           isValid = false;
//         } else if (field.mandatory && (field.type === "select" && (!field.value || !field.value.label))) {
//           newFormData[key].error = true;
//           newFormData[key].helperText = `${field.label} is required`;
//           isValid = false;
//         }
        
//         else {
//           newFormData[key].helperText = '';
//         }
//       }
//     }

//     setFormData(newFormData);
//     return isValid;
//   };

//   const handleFormSubmit = () => {
//     if (validate()) {
//       setOpenPopup(false);
//       const newRecord = {
//         sno: (data.length + 1).toString(),
//         planname : formData.planname.value,
//         duration : formData.duration.value,
//         durationtype : formData.durationtype.value,
//         numberofcontacts : formData.numberofcontacts.value,
//         selectcategory : formData.selectcategory.value,
//         planamount : formData.planamount.value,
//         plandiscount : formData.plandiscount.value,
//         activedate : moment(formData.activedate.value).format('YYYY/MM/DD'),
//         enddate : moment(formData.enddate.value).format('YYYY/MM/DD')
       
//         // status: formData.statusName.value ? "Enable" : "Disabled",
//       };
  
//       setData((prevData: any) => [...prevData, newRecord]);
  
//       console.log("Updated Data:", [...data, newRecord]); // Log updated data array
//     }
//   };
//   const initailData: any = [
//     { sno: "1", name: "FREE", plantype: "FREE", duration: "UNLIMITED", contacts: "2", amount: "300", status: "Active" },
//     { sno: "2", name: "VIP", plantype: "PAID", duration: "1 YEAR", contacts: "6", amount: "800", status: "IN-Active" },
//     { sno: "3", name: "PREMIUM", plantype: "PAID", duration: "2 YEARS", contacts: "99", amount: "900", status: "IN-Active" },
//     { sno: "4", name: "BEST OFFER", plantype: "PAID", duration: "8 MONTHS", contacts: "140", amount: "200", status: "Active" },
//     { sno: "5", name: "PLTINUM", plantype: "PAID", duration: "3 YEARS", contacts: "70", amount: "400", status: "Active" },
//     { sno: "6", name: "SILVER", plantype: "PAID", duration: "UNLIMITED", contacts: "10", amount: "100", status: "Active" },
//     { sno: "7", name: "BEST OFFER+", plantype: "FREE", duration: "6 MONTHS", contacts: "17", amount: "3200", status: "Active" },
//     { sno: "8", name: "ENTRY", plantype: "PAID", duration: "1 YEAR", contacts: "60", amount: "00", status: "Active" },
//   ];
//   const initailData2 = [{ sno: "126", name: "vinay", plantype: "PAID", duration: "2 YEARS", contacts: "55", amount: "800", status: "Active" },
//   { sno: "9", name: "SILVER", plantype: "PAID", duration: "UNLIMITED", contacts: "0", amount: "3000", status: "Active" },
//   { sno: "10", name: "PREMIUM", plantype: "PAID", duration: "2 MONTHS", contacts: "33", amount: "700", status: "Active" },
//   { sno: "11", name: "LD SILVER", plantype: "PAID", duration: "UNLIMITED", contacts: "25", amount: "600", status: "Active" },
//   { sno: "13", name: "VIP", plantype: "PAID", duration: "5 MONTHS", contacts: "88", amount: "1000", status: "Active" }]

//   const [data, setData] = useState(initailData);
//   // const handleEdit = (row: any) => {
//   //   const newUrl = '/admin/userManagement/editUser';
//   //   sessionStorage.setItem('editData', JSON.stringify(row))
//   //   const fullPath = `${window.location.origin}${newUrl}`;
//   //   window.open(fullPath, '_blank');
//   // };

//   const handleDelete = (row: any) => {
//     console.log('delete row.........', row)
//   };

//   // const handleView = (row: any) => {
//   //   console.log('row.........', row)
//   //   const newUrl = '/admin/userManagement/contacts';
//   //   const fullPath = `${window.location.origin}${newUrl}`;
//   //   window.open(fullPath, '_blank');
//   // };

//   const handleEdit = (row: any) => {
//     setOpenPopup(true); // Open dialog
//   };
  
//   const handleSelectChange = (name: FormDataKeys, value: any) => {
//     const newFormData = _.cloneDeep(formData);
//     newFormData[name].value = value;
//     newFormData[name].error = false;
//     newFormData[name].helperText = '';
//     setFormData(newFormData);
//   };
//   const handleDateChange = (name: string, value: Date | null) => {  // Change to Date | null
//     const newFormData = _.cloneDeep(formData);
//     newFormData[name].value = value;
//     newFormData[name].error = false;
//     newFormData[name].helperText = '';
//     setFormData(newFormData);
//   };
//   useEffect(() => {
//     console.log("Page Size: ", rowsPerPage, "Page Number: ", pageNumber);
//   }, [rowsPerPage, pageNumber]);
  
//   const ActionMenu = ({ row }: { row: any }) => {
//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//     const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//       setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//       setAnchorEl(null);
//     };
//     return (
//       <>
//         <IconButton onClick={handleClick}>...</IconButton>
//         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//           {/* <MenuItem onClick={() => { handleView(row); handleClose(); }}>View Profile</MenuItem> */}
//           <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Edit</MenuItem>
//           <MenuItem onClick={() => { setOpen({ flag: true, action: 'delete' }); handleClose(); }}>Delete</MenuItem>
//         </Menu>
//       </>
//     );
//   };

//   const columns = useMemo(
//     () => [
//       { header: 'S.NO', accessorKey: 'sno' },
//       { header: 'plan Name', accessorKey: 'name' },
//       { header: 'Plan Type', accessorKey: 'plantype' },
//       { header: 'Duration', accessorKey: 'duration' },
//       { header: 'NO.OF Contacts', accessorKey: 'contacts' },
//       { header: 'Amount', accessorKey: 'amount' },
//       {
//         header: 'Status',
//         accessorKey: 'status',
//         // Typing the props parameter
//         cell: (props: Cell<any, any>) => {
//           const status = props.getValue();  // Use getValue() to get the cell value

//           switch (status) {
//             case 'IN-ACTIVE':
//               return <Chip color="error" label="IN-ACTIVE" size="small" variant="light" />;
//             // case 'IN-ACTIVE':
//             //   return <Chip color="success" label="IN-ACTIVE" size="small" variant="light" />;
//             default:
//               return <Chip color="info" label="Active" size="small" variant="light" />;
//           }
//         }
//       }
//     ],
//     []
//   );

//   return (
//     <ReactTable
//       title={"MEMBERSHIP PLANS"}
//       data={data}
//       columns={columns}
//         actions={(row: any) => <ActionMenu row={row} />}
//       includeSearch={true}
//       needCSV={true}
//       pagination={'top'}
//       columnVisibility={true}
//       needCheckBoxes={true}
//       needActivateAndSuspendButtons={true}
//       buttonHandler={buttonHandler}
//       open={open}
//       setOpen={setOpen}
//       HandleFormInPopup={SampleForm}
//       setRowsPerPage={setRowsPerPage}
//       setPageNumber={setPageNumber}
//       pageNumber={pageNumber}
//       totalPageCount={60}
//     />
    
//   );
// } 

// function setData(arg0: (prevData: any) => any[]) {
//   throw new Error('Function not implemented.');
// }






import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel, Grid } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { height } from '@mui/system';
import moment from 'moment';
import CommonDatePicker from 'pages/common-components/common-date';
import MainCard from 'components/MainCard';

export default function ListPlans() {
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
    duration: {
      label: 'Enter Duration',
      id: 'duration',
      name: 'duration',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    planname: {
      label: 'Enter Plan Name',
      id: 'naplannameme',
      name: 'planname',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    selectcategory: {
      label: 'Select Category',
      id: 'selectcategory',
      name: 'selectcategory',
      type:'select',
      options: [
        { id: 1, label: 'FREE' },
        { id: 2, label: 'PLATINUM' },
        { id: 3, label: 'PREMIUM' },
      ],
      value: {id:1,label:'PLATINUM'},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    numberofcontacts: {
        label: 'Select Number OF Contacts',
        id: 'numberofcontacts',
        name: 'numberofcontacts',
        type:'select',
        options: [
          { id: 1, label: 'Income Contacts' },
          { id: 2, label: 'Outgoing Contacts' },
        
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
    activedate: {
        label: 'Plan Active Date',
        id: 'activedate',
        name: 'activedate',
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
      setOpenPopup(false);
      const newRecord = {
        // sno: (data.length + 1).toString(),
        planname : formData.planname.value,
        duration : formData.duration.value,
        durationtype : formData.durationtype.value,
        numberofcontacts : formData.numberofcontacts.value,
        selectcategory : formData.selectcategory.value,
        planamount : formData.planamount.value,
        plandiscount : formData.plandiscount.value,
        activedate : moment(formData.activedate.value).format('YYYY/MM/DD'),
        enddate : moment(formData.enddate.value).format('YYYY/MM/DD')
       
        // status: formData.statusName.value ? "Enable" : "Disabled",
      };
  
      // setData((prevData: any) => [...prevData, newRecord]);
  
      console.log("Updated Data:", [...data, newRecord]); // Log updated data array
    }
  };
  

  const initailData: any = [
    { sno: "1", name: "FREE", plantype: "FREE", duration: "UNLIMITED", contacts: "2", amount: "300", status: "Active" },
    { sno: "2", name: "VIP", plantype: "PAID", duration: "1 YEAR", contacts: "6", amount: "800", status: "IN-Active" },
    { sno: "3", name: "PREMIUM", plantype: "PAID", duration: "2 YEARS", contacts: "99", amount: "900", status: "IN-Active" },
    { sno: "4", name: "BEST OFFER", plantype: "PAID", duration: "8 MONTHS", contacts: "140", amount: "200", status: "Active" },
    { sno: "5", name: "PLTINUM", plantype: "PAID", duration: "3 YEARS", contacts: "70", amount: "400", status: "Active" },
    { sno: "6", name: "SILVER", plantype: "PAID", duration: "UNLIMITED", contacts: "10", amount: "100", status: "Active" },
    { sno: "7", name: "BEST OFFER+", plantype: "FREE", duration: "6 MONTHS", contacts: "17", amount: "3200", status: "Active" },
    { sno: "8", name: "ENTRY", plantype: "PAID", duration: "1 YEAR", contacts: "60", amount: "00", status: "Active" },
  ];
  const [data, setData] = useState(initailData);
 

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },
      { header: 'plan Name', accessorKey: 'name' },
      { header: 'Plan Type', accessorKey: 'plantype' },
      { header: 'Duration', accessorKey: 'duration' },
      { header: 'NO.OF Contacts', accessorKey: 'contacts' },
      { header: 'Amount', accessorKey: 'amount' },
      {
        header: 'Status',
        accessorKey: 'status',
        // Typing the props parameter
        cell: (props: Cell<any, any>) => {
          const status = props.getValue();  // Use getValue() to get the cell value

          switch (status) {
            case 'IN-ACTIVE':
              return <Chip color="error" label="IN-ACTIVE" size="small" variant="light" />;
            // case 'IN-ACTIVE':
            //   return <Chip color="success" label="IN-ACTIVE" size="small" variant="light" />;
            default:
              return <Chip color="info" label="Active" size="small" variant="light" />;
          }
        }
      }
    ],
    []
  );
  

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
        <Button onClick={handleClick}>...</Button>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Edit</MenuItem>
          {/* <MenuItem onClick={() => handleDelete(row)}>Delete</MenuItem> */}
          <MenuItem onClick={() => { setOpen({ flag: true, action: 'delete' }); handleClose(); }}>Delete</MenuItem>
          {/* <MenuItem onClick={() => { setOpen({ flag: true, action: 'disable' }); handleClose(); }}>Disable</MenuItem> */}
        </Menu>
      </>
    );
  };
return (
  <>
    {/* Removed Button to Open Popup */}

    {/* React Table */}
    <ReactTable
      title={"List Plans"}
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
      <DialogTitle>Update Plan</DialogTitle>
      <DialogContent>
      <MainCard>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <CommonSelectField inputProps={formData.selectcategory} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.planname} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.duration} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonSelectField inputProps={formData.durationtype} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonSelectField inputProps={formData.numberofcontacts} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.planamount} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.plandiscount} onChange={handleChange} />
          </Grid>
          
          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.activedate} onDateChange={handleDateChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.enddate} onDateChange={handleDateChange} />
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
  </>
);
}




