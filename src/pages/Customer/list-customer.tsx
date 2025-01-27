import { useEffect } from 'react';
import CommonList from 'pages/common-components/common-list';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BlockIcon from '@mui/icons-material/Block';
import SendIcon from '@mui/icons-material/Send';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react';
import _ from 'lodash';
import Grid from '@mui/material/Grid';
import MainCard from 'components/MainCard';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Typography} from '@mui/material';
import { useNavigate } from 'react-router';
import BlockCustomer from './block-customer';
import CustomerApprove from './customer-approve';
import {
  createPersonalDetails,
  createCustomer,
  createPartnerDetails,
  createFamilyDetails,
  createEducationDetails,
  getCustomerDetails,
  getNearestBranchList,
  savePersonalDataUploads,
  saveCustomerProfile
} from '../../services/customer-management/CustomerManagement';
// type Action = {
//   label: string;
//   icon: JSX.Element;
//   content: string;
// };

export default function ListCustomer() {
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
    const customerFilter : FormData = {
      // customer: {
      //   label: 'Customer',
      //   id: 'customer',
      //   name: 'customer',
      //   type:'select',
      //   options: [
      //     { id: 1, label: 'All' },
      //     { id: 2, label: 'Free' },
      //     { id: 3, label: 'Paid' },
      //     { id: 4, label: 'Blocked' },
      //     { id: 5, label: 'Converted' },
      //     { id: 6, label: 'Plan Expired' },
      //   ],
      //   value: { id: 1, label: 'All' },
      //   error: false,
      //   helperText: '',
      //   mandatory: false,
      //   isMulti: false,
      // },
    }

    const [customerData,setCustomerData] = useState<FormData>(customerFilter)
      const formFields: FormData = {
        profileId: {
          label: 'Profile Id',
          id: 'profileId',
          name: 'profileId',
          type: 'text',
          value: '',
          error: false,
          helperText: '',
          mandatory: false,
          options : []
        },
        mobile: {
          label: 'Mobile',
          id: 'mobile',
          name: 'mobile',
          type: 'text',
          value: '',
          error: false,
          helperText: '',
          mandatory: true,
          options : []
        },
        name: {
          label: 'Name',
          id: 'name',
          name: 'name',
          type: 'text',
          value: '',
          error: false,
          helperText: '',
          mandatory: false,
          options : []
        },
        email: {
          label: 'Email',
          id: 'email',
          name: 'email',
          type: 'text',
          value: '',
          error: false,
          helperText: '',
          mandatory: true,
          options : []
        },
        maritalStatus: {
          label: 'Marital Status',
          id: 'maritalStatus',
          name: 'maritalStatus',
          type:'select',
          options: [
            { id: 1, label: 'Un Married' },
            { id: 2, label: 'Widower' },
            { id: 3, label: 'Diverced' },
            { id: 4, label: 'Waiting for Diverce' },
            { id: 4, label: 'N0 Diverce' },
          ],
          value: '',
          error: false,
          helperText: '',
          mandatory: false,
          isMulti: false,
        },
        creates: {
          label: 'Creates',
          id: 'creates',
          name: 'creates',
          options: [
            { id: 1, label: 'Branch' },
            { id: 2, label: 'Franchise' },
            { id: 3, label: 'Agent' },
          ],
          value: '',
          error: false,
          helperText: '',
          mandatory: false,
          isMulti: false,
        },
        createdBy: {
          label: 'Created By',
          id: 'createdBy',
          name: 'createdBy',
          options: [
            { id: 1, label: 'AE10019' },
            { id: 2, label: 'AE10020' },
            { id: 3, label: 'AE10021' },
          ],
          value: '',
          error: false,
          helperText: '',
          mandatory: false,
          isMulti: false,
        }
    }
    const [customerList, setCustomerList] = useState([]);

    const [formData, setFormData] = useState<FormData>(formFields);
    const history = useNavigate();
    type FormDataKeys = keyof typeof formData;
    const handleChange = (name: FormDataKeys, value: any) => {
      const newFormData = _.cloneDeep(formData);
      newFormData[name].value = value;
      newFormData[name].error = false;
      newFormData[name].helperText = '';
      setFormData(newFormData);
    };
  
    const handleSelectChange = (name: FormDataKeys, value: any) => {
      const newFormData = _.cloneDeep(formData);
      const newCustomerData = _.cloneDeep(customerData);
      if(name == 'customer'){
        newCustomerData[name].value = value;
        setCustomerData(newCustomerData);
      }else{
        newFormData[name].value = value;
        newFormData[name].error = false;
        newFormData[name].helperText = '';
        setFormData(newFormData);
      }
      
    };

  const getCustomerDetailsList = async () => {
    const result = await getCustomerDetails({});
    if(result.status) {
      setCustomerList(result.data);
    }
    console.log("getCustomerDetails: ", result)
  }


  useEffect(()=>{
    getCustomerDetailsList()
  }, [])
  let data = [
    {
      email: 'uyewuewyeyw@gmail.com',
      caste: 'Reddy',
      maritalStatus: 'Unmarried',
      plan: 'Free',
      dateOfBirth: '1993-09-16',
      mobileNumber: '6363848003',
      createdBy: 'AE100240',
      branch: 'Guntur Head Office',
      height: '180Cms',
      status: 'Active',
      registeredDate: '2024-11-28 12:13',
      invoiceDate: '2024-11-28',
      approvedDate: '2024-11-28'
    },
    {
      email: 'uyewuewyeyw@gmail.com',
      caste: 'Reddy',
      maritalStatus: 'Unmarried',
      plan: 'Free',
      dateOfBirth: '1993-09-16',
      mobileNumber: '6363848003',
      createdBy: 'AE100240',
      branch: 'Guntur Head Office',
      height: '180Cms',
      status: 'Active',
      registeredDate: '2024-11-28 12:13',
      invoiceDate: '2024-11-28',
      approvedDate: '2024-11-28'
    }
  ];

  const actions: any = [
    {
      label: 'View Profile',
      icon: <VisibilityIcon />,
      content: 'You selected the Add Item action.',
      id : 'viewProfile'
    },
    {
      label: 'Edit Item',
      icon: <EditIcon />,
      content: 'You selected the Edit Item action.',
      id:'edit'
    },
    {
      label: 'Block',
      icon: <BlockIcon />,
      content: 'You selected the Delete Item action.',
      id:'block'
    },
    {
      label: 'Send login-Details',
      icon: <SendIcon />,
      content: 'You selected the Delete Item action.',
      id:'loginDetails'
    },
    {
      label: 'Approve',
      icon: <AttachMoneyIcon />,
      content: 'You selected the Delete Item action.',
      id:'approve'
    }
  ];
  const [blockOpen,setBlockopen] = useState(false)
  const [approveOpen,setApproveOpen] = useState(false)
  const actionHandleClick = (action: any,each:any) => {
    console.log(action,each);
    if(action == 'viewProfile'){
      sessionStorage.setItem("customerId", String(each?.id));
      console.log("each?.id: ", each?.id);
      const fullPath = `${window.location.origin}/admin/customerManagement/viewProfile`;
      window.open(fullPath, '_blank');
    }
    if(action == 'edit'){
      sessionStorage.setItem("customer", String(each?.id))
      const fullPath = `${window.location.origin}/admin/customerManagement/editCustomer`;
      window.open(fullPath, '_blank');
    }
    if(action == 'block'){
      setBlockopen(true)
    }
    if(action == 'approve'){
      setApproveOpen(true)
    }
  };

  const handleClose = () =>{
    setBlockopen(false)
    setApproveOpen(false)
  }

  return (
    <>
     <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12}>
      {/* <Grid item xs={3} style={{marginBottom:'10px'}}>
            <CommonSelectField inputProps={customerData.customer} onSelectChange={handleSelectChange} />
          </Grid> */}
        <MainCard style={{ borderColor: '#666666',marginBottom : '10px' }} >
        <Typography variant="h3" marginBottom={1} sx={{ padding: "10px 0px" }}>
          LIST CUSTOMERS
        </Typography>
            <Grid container xs = {12} spacing = {3}>
        <Grid item xs={3}>
            <CommonInputField inputProps={formData.profileId} onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <CommonInputField inputProps={formData.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <CommonInputField inputProps={formData.mobile} onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <CommonInputField inputProps={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <CommonSelectField inputProps={formData.maritalStatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={3}>
            <CommonSelectField inputProps={formData.creates} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={3}>
            <CommonSelectField inputProps={formData.createdBy} onSelectChange={handleSelectChange} />
          </Grid>
          {/* <Grid item xs={3}>
            <CommonSelectField inputProps={formData.createdBy} onSelectChange={handleSelectChange} />
          </Grid > */}
          <Grid item xs={3} style = {{marginTop:'5px'}}>
           <Button type="submit" variant="contained" color="primary" style={{marginRight:'10px'}}>
              Search
            </Button>
            <Button type="submit" variant="contained" color="secondary">
              Clear
            </Button>
            </Grid>
          </Grid>
        </MainCard >
        </Grid>
        </Grid>
      <CommonList data={customerList} actions={actions} actionHandleClick={actionHandleClick} />
      <BlockCustomer open = {blockOpen} handleClose = {handleClose}/>
      <CustomerApprove open = {approveOpen} handleClose = {handleClose}/>
    </>
  );
}
