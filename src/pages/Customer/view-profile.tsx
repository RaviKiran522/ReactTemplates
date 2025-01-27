// material-ui
import { useEffect } from 'react';
import moment from 'moment';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

// third-party

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

import defaultImages from 'assets/images/users/default.png';
import {
  personalDetails,
  educationDetails,
  familyDetails,
  partnerDetails,
  setCustomerDetailsToIndividualFormData,
  personalDetailsDropdowns,
  educationDetailsDropdowns,
  familyDetailsDropdowns,
  partnerDetailsDropdowns
} from '../customer-management/CustomerCommonDetails';

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

// assets
import { CallCalling, Gps, Link, Link1, Sms, Profile, Setting, Mobile, Verify } from 'iconsax-react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import CommonTextAreaField from 'pages/common-components/common-textarea';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import { C } from '@fullcalendar/core/internal-common';

// ==============================|| ACCOUNT PROFILE - BASIC ||============================== //
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

let detailsObject = {
  personalDetails: {
    gender: 'Male',
    religion: 'Hindu',
    cast: 'Brahmin',
    newCast: null, // Empty field
    subCast: null, // Empty field
    dateOfBirth: '15-06-1994',
    timeOfBirth: null, // Empty field
    aadharNumber: null, // Empty field
    birthPlace: null, // Empty field
    address: null, // Empty field
    state: 'Andhra Pradesh',
    district: 'Visakhapatnam',
    city: 'Visakhapatnam (Urban)',
    star: null, // Empty field
    raasi: null, // Empty field
    padam: null, // Empty field
    gothram: null, // Empty field
    khujaDosham: null, // Empty field
    height: null, // Empty field
    bloodGroup: null, // Empty field
    motherTongue: null, // Empty field
    healthCondition: null, // Empty field
    complexion: null, // Empty field
    smoke: null, // Empty field
    drink: null, // Empty field,
    food: 'Biryani',
    maritalStatus: 'Married'
  },
  employmentDetails: {
    education: "Bachelor's Degree in Computer Science",
    university: 'Andhra University',
    employedIn: 'Private Sector',
    designation: 'Software Developer',
    profession: 'IT Professional',
    newEmployedIn: null, // Placeholder for "New Employed In"
    newProfession: null, // Placeholder for "New Profession"
    newDesignation: null, // Placeholder for "New Designation"
    workingLocation: 'Hyderabad',
    workingCountry: 'India',
    workingState: 'Telangana',
    workingCity: 'Hyderabad',
    companyAddress: 'Madhapur, Hyderabad, Telangana',
    companyName: 'Tech Solutions Pvt. Ltd.',
    workingSince: '2018',
    totalExperience: '5 Years',
    passportNumber: 'A1234567',
    collegeDetails: 'Andhra Engineering College',
    propertyDetails: 'Owned a 2BHK apartment in Visakhapatnam',
    annualIncome: '1200000', // Annual income in INR
    monthlyIncome: '100000' // Monthly income in INR
  },
  familyDeatails: {
    familytype: 'Joint Family',
    familystatus: 'Rich',
    farhername: 'Sai',
    religion: 'Hindhu',
    cast: 'Reddy',
    status: 'Rich',
    pension: null,
    mothername: 'Lakshmi',
    maidenname: 'Sumathi',
    mothereligion: 'Hindhu',
    mothercast: 'Reddy',
    peramanentaddres: 'Andhra,West Godavari, Tanuku',
    presenttaddres: 'Telangana,Hyderabadh, Madhapur',
    noofbrothers: '2',
    noofsisters: '1',
    refname: 'Sathyanarayana',
    refnumber: '8844999390',
    refrelation: 'Relative',
    refaddress: 'Andhra,West Godavari, Palakol'
  },
  fatherDetails: {
    fathername: 'anjaneyulu',
    number: '9963838871',
    address: 'pedhakancharla vinukonda(m) guntur(d)'
  },
  husbandDetails: {
    name: 'movva umesh',
    number: '8367055588',
    address: 'pedhakancharla vinukonda(m) guntur(d)'
  },
  referDetails: {
    name: 'ashok',
    number: '9642670464',
    address: 'anjaneyulu,9963838871,pedhakancharla,vinukomda(m),guntur(d)'
  },
  partnerDetails: {
    lokingfor: 'Girl',
    agefrom: '20',
    ageto: '30',
    heightfrom: '5.3 ft',
    heightto: '6 ft',
    familystatu: 'Rich',
    reddyforintercast: 'YES',
    khujadosham: 'NO',
    complexion: null,
    partenerSmoke: 'NO',
    partenerDrink: 'YES',
    partenerEducation: 'B.tech',
    partenerProfession: 'Softawrw Field',
    passport: 'NO'
  }
};

export default function ViewProfile() {
  const matchDownMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);
  const customerId = sessionStorage.getItem('customerId');
  const [personalDetailsFormData, setPersonalDetailsFormData] = useState<any>(personalDetails);
  const [educationDetailsFormData, setEducationDetailsFormData] = useState<any>(educationDetails);
  const [familyDetailsFormData, setFamilyDetailsFormData] = useState<any>(familyDetails);
  const [partnerDetailsFormData, setPartnerDetailsFormData] = useState<any>(partnerDetails);
  const [customerDetails, setCustomerDetails] = useState<any>({});
  const [allDropdownsLoaded, setAllDropdownsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getAllDropdownsData = async () => {
    setIsLoading(true);
    await personalDetailsDropdowns(setPersonalDetailsFormData);
    await educationDetailsDropdowns(setEducationDetailsFormData);
    await familyDetailsDropdowns(setFamilyDetailsFormData);
    await partnerDetailsDropdowns(setPartnerDetailsFormData);
    setAllDropdownsLoaded(true);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllDropdownsData();
  }, []);

  useEffect(() => {
    setCustomerDetailsToIndividualFormData(
      personalDetailsFormData,
      setPersonalDetailsFormData,
      educationDetailsFormData,
      setEducationDetailsFormData,
      familyDetailsFormData,
      setFamilyDetailsFormData,
      partnerDetailsFormData,
      setPartnerDetailsFormData,
      customerDetails,
      true
    );
  }, [customerDetails]);

  useEffect(() => {
    if (allDropdownsLoaded) {
      setIsLoading(true);
      getCustomerDetailsList();
      setIsLoading(false);
    }
  }, [allDropdownsLoaded]);

  const getCustomerDetailsList = async () => {
    const result = await getCustomerDetails({ id: customerId });
    console.log('result: ', result);
    if (result.data.length > 0) {
      setCustomerDetails(result.data[0]);
    }
  };

  // interface FormField {
  //   [x: string]: any;
  //   label: any;
  //   id: any;
  //   name: any;
  //   type?: any;
  //   placeholder?: any;
  //   value: any;
  //   error?: boolean;
  //   helperText?: any;
  //   mandatory?: boolean;
  //   options: { id: any; label: any }[];
  //   isMulti?: boolean;
  // }

  // interface FormData {
  //   [key: string]: FormField;
  // }
  // const formFields: FormData = {
  //   addcomments: {
  //     label: 'Comments',
  //     id: 'addcomments',
  //     name: 'addcomments',
  //     type: 'textarea',
  //     value: '',
  //     error: false,
  //     helperText: '',
  //     mandatory: true,
  //     options: []
  //   },
  //   support: {
  //     label: 'Support',
  //     id: 'support',
  //     name: 'support',
  //     type: 'textarea',
  //     value: '',
  //     error: false,
  //     helperText: '',
  //     mandatory: true,
  //     options: []
  //   },
  // }
  // const [formData, setFormData] = useState<FormData>(formFields);

  // type FormDataKeys = keyof typeof formData;

  const [supportFormData, setSupportFormData] = useState({
    support: '',
    status: '' // Added status field
  });

  // State for storing comments in the table
  const [supportTable, setSupportTable] = useState<{ id: number; date: string; support: string; status: string }[]>([]);

  // Handle form field changes
  const handleCommentChanged = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setSupportFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCustomerInfoSubmited = (e: React.FormEvent) => {
    e.preventDefault();

    if (!supportFormData.support.trim()) {
      alert('Please fill out all fields before submitting.');
      return;
    }
    // if (!supportFormData.support.trim() || !supportFormData.status.trim()) {
    //   alert("Please fill out all fields before submitting.");
    //   return;
    // }

    // Add new comment to the table with date, ID, and status
    const newSupport = {
      id: supportTable.length + 1, // Incremental ID
      date: new Date().toLocaleDateString(), // Current date
      support: supportFormData.support,
      status: supportFormData.status // Include status
    };

    setSupportTable((prevState) => [...prevState, newSupport]);

    // Perform form submission logic
    console.log('Form Submitted:', supportFormData);

    // Clear the form (optional)
    setSupportFormData({
      support: '',
      status: ''
    });
  };

  const verifiedPercentage = 75;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
        {value === index && <div>{children}</div>}
      </div>
    );
  }

  const [commentFormData, setCommentFormData] = useState({
    comment: ''
  });
  // State for storing comments in the table
  const [commentsTable, setCommentsTable] = useState<{ id: number; date: string; comment: string }[]>([]);

  // Handle form field changes
  const handleCommentChanges = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setCommentFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCustomerInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!commentFormData.comment.trim()) {
      alert('Please add a comment before submitting.');
      return;
    }

    // Add new comment to the table with date and ID
    const newComment = {
      id: commentsTable.length + 1, // Incremental ID
      date: new Date().toLocaleDateString(), // Current date
      comment: commentFormData.comment
    };

    setCommentsTable((prevState) => [...prevState, newComment]);

    // Perform form submission logic
    console.log('Form Submitted:', commentFormData);

    // Clear the form (optional)
    setCommentFormData({
      comment: ''
    });
  };

  const handleListCustomersNavigation = (row: any) => {
    console.log('row.........', row);
    const newUrl = '/admin/customerManagement/listCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleConvertedCustomersNavigation = (row: any) => {
    console.log('row.........', row);
    const newUrl = '/admin/customerManagement/convertedCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleExpiredCustomersNavigation = (row: any) => {
    console.log('row.........', row);
    const newUrl = '/admin/customerManagement/planExpiredCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleBlockedRequesCustomersNavigation = (row: any) => {
    console.log('row.........', row);
    const newUrl = '/admin/customerManagement/blockedRequests';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleFreeCustomersNavigation = (row: any) => {
    console.log('row.........', row);
    const newUrl = '/admin/customerManagement/freeCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handlePaidCustomersNavigation = (row: any) => {
    console.log('row.........', row);
    const newUrl = '/admin/customerManagement/paidCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleBlockedCustomersNavigation = (row: any) => {
    console.log('row.........', row);
    const newUrl = '/admin/customerManagement/blockedCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };

  // const navigate = useNavigate();
  // const handleListCustomersNavigation = () => {
  //   navigate('/customerManagement/listCustomers');// Use the route path defined in your router
  // };
  // const handleConvertedCustomersNavigation = () => {
  //   navigate('/customerManagement/convertedCustomers');// Use the route path defined in your router
  // };
  // const handleExpiredCustomersNavigation = () => {
  //   navigate('/customerManagement/planExpiredCustomers');// Use the route path defined in your router
  // };
  // const  handleBlockedRequesCustomersNavigation = () => {
  //   navigate('/customerManagement/blockedRequests');// Use the route path defined in your router
  // };
  // const handleFreeCustomersNavigation = () => {
  //   navigate('/customerManagement/freeCustomers');// Use the route path defined in your router
  // };
  // const handlePaidCustomersNavigation = () => {
  //   navigate('/customerManagement/paidCustomers');// Use the route path defined in your router
  // };
  // const handleBlockedCustomersNavigation = () => {
  //   navigate('/customerManagement/blockedCustomers');// Use the route path defined in your router
  // };

  return (
    <Grid container spacing={2}>
      {/* Profile Card Section */}
      <Grid item xs={12} sm={5} md={4} xl={3}>
        <MainCard>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="flex-end">
                <Chip label="Pro" size="small" color="primary" />
              </Stack>
              <Stack spacing={2.5} alignItems="center" marginBottom={2}>
                <Avatar alt="Avatar 1" size="xl" src={defaultImages} />
                <Stack spacing={0.5} alignItems="center">
                  <Typography variant="h5">Anshan H.</Typography>
                  <Typography color="secondary">AE100057</Typography>
                  <Typography color="secondary">Project Manager</Typography>
                  <Typography color="secondary">Password : 34354343</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            {/* Verified Percentage */}
            <Grid>
              <Stack spacing={1} alignItems="center" marginTop={2}>
                <Typography variant="subtitle1" color="primary">
                  {verifiedPercentage}% Verified
                </Typography>
                <LinearProgress variant="determinate" value={verifiedPercentage} sx={{ width: '80%' }} />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack marginBottom={2} marginTop={2}>
                <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                  <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ListItemIcon>
                      <Sms size={20} />
                    </ListItemIcon>
                    <a href="/verify-email" style={{ textDecoration: 'none', fontWeight: 'normal', color: '#4f4b4b', marginRight: '25px' }}>
                      Email Verified
                    </a>
                  </ListItem>
                  {/* Mobile Verification */}
                  <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ListItemIcon>
                      <Mobile size={20} />
                    </ListItemIcon>
                    <a
                      href="/verify-mobile"
                      style={{ textDecoration: 'none', fontWeight: 'normal', color: '#4f4b4b', marginRight: '25px' }}
                    >
                      Mobile Verified
                    </a>
                  </ListItem>
                  {/* ID Verification */}
                  <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ListItemIcon>
                      <Verify size={20} />
                    </ListItemIcon>
                    <a href="/verify-id" style={{ textDecoration: 'none', fontWeight: 'normal', color: '#4f4b4b', marginRight: '25px' }}>
                      ID Verified
                    </a>
                  </ListItem>
                </List>
              </Stack>
            </Grid>

            <Grid item xs={12} marginBottom={2} marginTop={2}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ flexDirection: 'row-reverse' }} // Moves the icon and text to the right
                  >
                    Total Customers
                  </AccordionSummary>
                  <AccordionDetails sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      onClick={handleListCustomersNavigation}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                    >
                      List Customers
                    </Typography>
                    <Typography>908</Typography>
                  </AccordionDetails>

                  <AccordionDetails sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      onClick={handleFreeCustomersNavigation}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                    >
                      Free Customers
                    </Typography>
                    <Typography>908</Typography>
                  </AccordionDetails>
                  <AccordionDetails sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      onClick={handleConvertedCustomersNavigation}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                    >
                      Converted Customers
                    </Typography>
                    <Typography>908</Typography>
                  </AccordionDetails>
                  <AccordionDetails sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      onClick={handlePaidCustomersNavigation}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                    >
                      Paid Customers
                    </Typography>
                    <Typography>724</Typography>
                  </AccordionDetails>
                  <AccordionDetails sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      onClick={handleExpiredCustomersNavigation}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                    >
                      Plan Expired Customers
                    </Typography>
                    <Typography>908</Typography>
                  </AccordionDetails>
                  <AccordionDetails sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      onClick={handleBlockedCustomersNavigation}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                    >
                      Blocked Cusromers
                    </Typography>
                    <Typography>673</Typography>
                  </AccordionDetails>
                  <AccordionDetails sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography
                      onClick={handleBlockedRequesCustomersNavigation}
                      style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                    >
                      Blocked Requests
                    </Typography>
                    <Typography>673</Typography>
                  </AccordionDetails>
                </Accordion>
              </List>
            </Grid>
            <Grid item xs={12} marginBottom={2} marginTop={2}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                <ListItem>
                  <ListItemIcon>
                    <Profile size={18} />
                  </ListItemIcon>

                  <Typography align="left">Profile</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Setting size={18} />
                  </ListItemIcon>

                  <Typography align="left">Profile Settings</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Gps size={18} />
                  </ListItemIcon>

                  <Typography align="left">Shortlisted Profiles</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">Blocked Profiles</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">Profiles I Viewed</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">Viewed My Profile</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">Interest Sent</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">Interest Received</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">Viewed Contacts</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">My Contacts Viewed</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">mobile Request Sent</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Link1 size={18} />
                  </ListItemIcon>
                  <Typography align="left">Mobile Requests Received</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} marginBottom={2} marginTop={2}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                <ListItem>
                  <ListItemIcon>
                    <Sms size={18} />
                  </ListItemIcon>

                  <Typography align="left">anshan.dh81@gmail.com</Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CallCalling size={18} />
                  </ListItemIcon>

                  <Typography align="left">8654 239 581</Typography>
                </ListItem>
                <ListItem>
                  <Typography align="left">Branch : Hyderabad</Typography>
                </ListItem>
                <ListItem>
                  <Typography align="left">Date of Birth : 09-12-1982</Typography>
                </ListItem>
                <ListItem>
                  <Typography align="left">Inbond Date : 09-12-1982</Typography>
                </ListItem>
                <ListItem>
                  <Typography align="left">Registered Date : 09-12-1982</Typography>
                </ListItem>
                <ListItem>
                  <Typography align="left">Created By : 09-12-1982</Typography>
                </ListItem>
                <ListItem>
                  <Typography align="left">Blocked By : 09-12-1982</Typography>
                </ListItem>
                <ListItem>
                  <Typography align="left">Invoice date : 09-12-1982</Typography>
                </ListItem>
                <ListItem>
                  <Typography align="left">Approved date : 09-12-1982</Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>

      {/* Tabs Section */}
      <Grid item xs={12} sm={7} md={8} xl={9}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Personal Info" {...a11yProps(0)} />

          <Tab label="Education & Work" {...a11yProps(1)} />

          <Tab label="Family Info" {...a11yProps(2)} />

          <Tab label="Partner Info" {...a11yProps(3)} />

          <Tab label="Files" {...a11yProps(4)} />

          <Tab label="Customer Info" {...a11yProps(5)} />

          <Tab label="Complaints" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid item xs={12} style={{ marginTop: '5px' }}>
            <MainCard>
              <List sx={{ py: 0 }}>
                <Grid container>
                  {Object.entries(personalDetailsFormData).map(([key, value]: any, index: number) => {
                    return value?.type === 'file' ? null : (
                      <>
                        <Grid item xs={6} key={index}>
                          <Typography color="secondary">{value?.label} </Typography>
                          {(value?.type == 'text' || value?.type == 'email' || value?.type == 'number') && (
                            <Typography>{value?.value !== '' ? value?.value : '--'}</Typography>
                          )}
                          {value?.type === 'select' && !value?.isMulti && (
                            <Typography>{value?.value?.label ? value?.value?.label : '--'}</Typography>
                          )}
                          {value?.type === 'select' && value?.isMulti && (
                            <Typography>
                              {value?.value?.length > 0
                                ? value?.value?.reduce((acc: any, item: any, index: number) => {
                                    return acc + item?.label + (index === value?.value?.length - 1 ? '' : ', ');
                                  }, '')
                                : '--'}
                            </Typography>
                          )}
                          {value?.type === 'date' && (
                            <Typography>{value?.value ? moment(value?.value).format('DD/MM/YYYY') : '--'}</Typography>
                          )}
                          {value?.type === 'time' && <Typography>{value?.value ? moment(value?.value).format('HH:mm') : '--'}</Typography>}
                        </Grid>
                        {(index + 1) % 2 == 0 && (
                          <Grid item xs={12} key={index}>
                            <hr
                              style={{
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                margin: '20px 0',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                              }}
                            />{' '}
                          </Grid>
                        )}
                      </>
                    );
                  })}
                </Grid>
                {/* <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Gender</Typography>
                        <Typography>{detailsObject.personalDetails.gender}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem> */}
              </List>
            </MainCard>
            {/* <MainCard style={{ marginTop: '5px' }}>
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Star</Typography>
                        <Typography>{detailsObject.personalDetails.star}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Raasi</Typography>
                        <Typography>{detailsObject.personalDetails.raasi}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Padam</Typography>
                        <Typography>{detailsObject.personalDetails.padam}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Gothram</Typography>
                        <Typography>{detailsObject.personalDetails.gothram}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Khuja Dosham</Typography>
                        <Typography>{detailsObject.personalDetails.khujaDosham}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Height</Typography>
                        <Typography>{detailsObject.personalDetails.height}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Blood Group</Typography>
                        <Typography>{detailsObject.personalDetails.bloodGroup}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Mother Tongue</Typography>
                        <Typography>{detailsObject.personalDetails.motherTongue}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Health Condition</Typography>
                        <Typography>{detailsObject.personalDetails.healthCondition}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Complexion</Typography>
                        <Typography>{detailsObject.personalDetails.complexion}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Smoke</Typography>
                        <Typography>{detailsObject.personalDetails.smoke}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Drink</Typography>
                        <Typography>{detailsObject.personalDetails.drink}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Food</Typography>
                        <Typography>{detailsObject.personalDetails.food}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Marital Status</Typography>
                        <Typography>{detailsObject.personalDetails.maritalStatus}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </MainCard> */}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid item xs={12} style={{ marginTop: '5px' }}>
            <MainCard>
              <List sx={{ py: 0 }}>
              <Grid container>
                  {Object.entries(educationDetailsFormData).map(([key, value]: any, index: number) => {
                    return value?.type === 'file' ? null : (
                      <>
                        <Grid item xs={6} key={index}>
                          <Typography color="secondary">{value?.label} </Typography>
                          {(value?.type == 'text' || value?.type == 'email' || value?.type == 'number') && (
                            <Typography>{value?.value !== '' ? value?.value : '--'}</Typography>
                          )}
                          {value?.type === 'select' && !value?.isMulti && (
                            <Typography>{value?.value?.label ? value?.value?.label : '--'}</Typography>
                          )}
                          {value?.type === 'select' && value?.isMulti && (
                            <Typography>
                              {value?.value?.length > 0
                                ? value?.value?.reduce((acc: any, item: any, index: number) => {
                                    return acc + item.label + (index === value?.value?.length - 1 ? '' : ', ');
                                  }, '')
                                : '--'}
                            </Typography>
                          )}
                          {value?.type === 'date' && (
                            <Typography>{value?.value ? moment(value?.value).format('DD/MM/YYYY') : '--'}</Typography>
                          )}
                          {value?.type === 'time' && <Typography>{value?.value ? moment(value?.value).format('HH:mm') : '--'}</Typography>}
                        </Grid>
                        {(index + 1) % 2 == 0 && (
                          <Grid item xs={12} key={index}>
                            <hr
                              style={{
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                margin: '20px 0',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                              }}
                            />{' '}
                          </Grid>
                        )}
                      </>
                    );
                  })}
                </Grid>
              </List>
            </MainCard>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid item xs={12} style={{ marginTop: '5px' }}>
            <MainCard>
              <List sx={{ py: 0 }}>
              <Grid container>
                  {Object.entries(familyDetailsFormData).map(([key, value]: any, index: number) => {
                    return value?.type === 'file' ? null : (
                      <>
                        <Grid item xs={6} key={index}>
                          <Typography color="secondary">{value?.label} </Typography>
                          {(value?.type == 'text' || value?.type == 'email' || value?.type == 'number') && (
                            <Typography>{value?.value !== '' ? value?.value : '--'}</Typography>
                          )}
                          {value?.type === 'select' && !value?.isMulti && (
                            <Typography>{value?.value?.label ? value?.value?.label : '--'}</Typography>
                          )}
                          {value?.type === 'select' && value?.isMulti && (
                            <Typography>
                              {value?.value?.length > 0
                                ? value?.value?.reduce((acc: any, item: any, index: number) => {
                                    return acc + item.label + (index === value?.value?.length - 1 ? '' : ', ');
                                  }, '')
                                : '--'}
                            </Typography>
                          )}
                          {value?.type === 'date' && (
                            <Typography>{value?.value ? moment(value?.value).format('DD/MM/YYYY') : '--'}</Typography>
                          )}
                          {value?.type === 'time' && <Typography>{value?.value ? moment(value?.value).format('HH:mm') : '--'}</Typography>}
                        </Grid>
                        {(index + 1) % 2 == 0 && (
                          <Grid item xs={12} key={index}>
                            <hr
                              style={{
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                margin: '20px 0',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                              }}
                            />{' '}
                          </Grid>
                        )}
                      </>
                    );
                  })}
                </Grid>
              </List>
            </MainCard>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid item xs={12} style={{ marginTop: '5px' }}>
            <MainCard>
              <List sx={{ py: 0 }}>
              <Grid container>
                  {Object.entries(partnerDetailsFormData).map(([key, value]: any, index: number) => {
                    return value?.type === 'file' ? null : (
                      <>
                        <Grid item xs={6} key={index}>
                          <Typography color="secondary">{value?.label} </Typography>
                          {(value?.type == 'text' || value?.type == 'email' || value?.type == 'number') && (
                            <Typography>{value?.value !== '' ? value?.value : '--'}</Typography>
                          )}
                          {value?.type === 'select' && !value?.isMulti && (
                            <Typography>{value?.value?.label ? value?.value?.label : '--'}</Typography>
                          )}
                          {value?.type === 'select' && value?.isMulti && (
                            <Typography>
                              {value?.value?.length > 0
                                ? value?.value?.reduce((acc: any, item: any, index: number) => {
                                    return acc + item.label + (index === value?.value?.length - 1 ? '' : ', ');
                                  }, '')
                                : '--'}
                            </Typography>
                          )}
                          {value?.type === 'date' && (
                            <Typography>{value?.value ? moment(value?.value).format('DD/MM/YYYY') : '--'}</Typography>
                          )}
                          {value?.type === 'time' && <Typography>{value?.value ? moment(value?.value).format('HH:mm') : '--'}</Typography>}
                        </Grid>
                        {(index + 1) % 2 == 0 && (
                          <Grid item xs={12} key={index}>
                            <hr
                              style={{
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                margin: '20px 0',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                              }}
                            />{' '}
                          </Grid>
                        )}
                      </>
                    );
                  })}
                </Grid>
              </List>
            </MainCard>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid item xs={12} style={{ marginTop: '5px' }}>
            <MainCard>
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  {/* <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}> */}
                  <Box
                    p={3}
                    sx={{
                      width: '80%',
                      maxWidth: '100%',
                      margin: 'auto',
                      backgroundColor: 'white',
                      borderRadius: 2,
                      boxShadow: 3
                    }}
                  >
                    {/* Image Section */}
                    <Card
                      sx={{
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: '8px',
                        padding: 2,
                        marginBottom: 2 // Add spacing here
                      }}
                    >
                      <img
                        src="https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_1280.png"
                        alt="Sample"
                        style={{
                          width: '100%',
                          maxWidth: '100%',
                          borderRadius: '8px'
                        }}
                      />
                    </Card>

                    <Card
                      sx={{
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: '8px',
                        padding: 2,
                        marginBottom: 2 // Add spacing here
                      }}
                    >
                      <Grid
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        gap={2} // Space between the items
                      >
                        {/* <Card sx={{ padding: 1, flex: 1 }}> */}
                        <Button variant="contained" sx={{ padding: 1, flex: 1, backgroundColor: 'primary' }}>
                          Aadhar Uploaded By
                        </Button>
                        {/* </Card> */}
                        {/* <Card sx={{ padding: 1, flex: 1 }}> */}
                        <Button variant="contained" sx={{ padding: 1, flex: 1 }}>
                          Aadhar Verified By
                        </Button>
                        {/* </Card> */}
                        {/* <Card sx={{ padding: 1, flex: 1 }}> */}
                        <Button variant="contained" sx={{ padding: 1, flex: 1 }}>
                          Aadhar Verified Date
                        </Button>
                        {/* </Card> */}
                        {/* <Card sx={{ padding: 1, flex: 1 }}> */}
                        <Button variant="contained" sx={{ padding: 1, flex: 1 }}>
                          Delete
                        </Button>
                        {/* </Card> */}
                      </Grid>
                    </Card>

                    <Card
                      sx={{
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: '8px',
                        padding: 2,
                        marginBottom: 2 // Add spacing here
                      }}
                    >
                      <Grid
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        gap={2} // Space between the items
                      >
                        {/* <Card sx={{ padding: 1, flex: 1 }}> */}
                        <Button variant="contained" startIcon={<CheckCircleIcon />} sx={{ padding: 1, flex: 1, backgroundColor: 'green' }}>
                          AE100625
                        </Button>
                        {/* </Card> */}
                        {/* <Card sx={{ padding: 1, flex: 1 }}> */}
                        <Button variant="contained" startIcon={<CheckCircleIcon />} sx={{ padding: 1, flex: 1, backgroundColor: 'green' }}>
                          AEADMIN
                        </Button>
                        {/* </Card> */}
                        {/* <Card sx={{ padding: 1, flex: 1 }}> */}
                        <Button
                          variant="contained"
                          startIcon={<CheckCircleIcon />}
                          sx={{ textAlign: 'center', flex: 1, backgroundColor: 'green' }}
                        >
                          20-12-2024 01:59:44
                        </Button>
                        {/* </Card> */}
                        {/* <Card sx={{ padding: 1, flex: 1 }}> */}
                        <Button variant="contained" startIcon={<DeleteIcon />} sx={{ padding: 1, flex: 1, backgroundColor: 'green' }}>
                          Delete
                        </Button>
                        {/* </Card> */}
                      </Grid>
                    </Card>

                    {/* Buttons Section */}
                    {/* <Paper elevation={3} sx={{ p: 2 }}> */}
                    {/* <Grid container spacing={2} alignItems="center">
                              <Grid item xs={12} sm={3}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  startIcon={<CheckCircleIcon />}
                                  fullWidth
                                >
                                  AE100625
                                </Button>
                                <Typography variant="caption" display="block" textAlign="center">
                                  AADHAR UPLOADED BY
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sm={3}>
                                <Button
                                  variant="contained"
                                  color="success"
                                  startIcon={<CheckCircleIcon />}
                                  fullWidth
                                >
                                  AEADMIN
                                </Button>
                                <Typography variant="caption" display="block" textAlign="center">
                                  AADHAR VERIFIED BY
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sm={3}>
                                <Button
                                  variant="contained"
                                  color="success"
                                  startIcon={<CheckCircleIcon />}
                                  fullWidth
                                >
                                  20-12-2024 01:59:44
                                </Button>
                                <Typography variant="caption" display="block" textAlign="center">
                                  AADHAR VERIFIED DATE
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sm={3}>
                                <Button
                                  variant="contained"
                                  color="error"
                                  startIcon={<DeleteIcon />}
                                  fullWidth
                                >
                                  DELETE
                                </Button>
                              </Grid>
                            </Grid>
                          {/* </Paper> */}
                  </Box>
                  {/* </Stack>
                    </Grid>
                  </Grid> */}
                </ListItem>
              </List>
            </MainCard>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Grid item xs={12} style={{ marginTop: '5px' }}>
            <MainCard>
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack>
                        <form onSubmit={handleCustomerInfoSubmit} noValidate>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <TextField
                                label="Comment"
                                id="comment"
                                name="comment"
                                placeholder="add comment"
                                fullWidth
                                required
                                multiline
                                value={commentFormData.comment}
                                onChange={handleCommentChanges}
                                rows={4}
                                variant="outlined"
                                autoComplete="off"
                              />
                              {/* <CommonTextAreaField inputProps={formData.addcomments} onChange={handleChanges} /> */}
                            </Grid>

                            <Grid item xs={12} textAlign={'end'}>
                              <Button type="submit" variant="contained" color="primary">
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Stack>

                      {/* Comments Table */}
                    </Grid>
                    <Grid item xs={12}>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Employee ID</TableCell>
                              <TableCell>Date</TableCell>

                              <TableCell>Comment</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {commentsTable.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.date}</TableCell>

                                <TableCell>{row.comment}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </MainCard>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Grid item xs={12} style={{ marginTop: '5px' }}>
            <MainCard>
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack>
                        <form onSubmit={handleCustomerInfoSubmited} noValidate>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <TextField
                                label="Support"
                                id="support"
                                name="support"
                                placeholder="Add support"
                                fullWidth
                                required
                                multiline
                                value={supportFormData.support}
                                onChange={handleCommentChanged}
                                rows={4}
                                variant="outlined"
                                autoComplete="off"
                              />
                            </Grid>
                            {/* <Grid item xs={12}>
                              <TextField
                                label="Status"
                                id="status"
                                name="status"
                                placeholder="Add status"
                                fullWidth
                                required
                                value={supportFormData.status}
                                onChange={handleCommentChanged}
                                variant="outlined"
                                autoComplete="off"
                              />
                            </Grid> */}
                            <Grid item xs={12} textAlign={'end'}>
                              <Button type="submit" variant="contained" color="primary">
                                Submit
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                      </Stack>
                    </Grid>
                    {/* Comments Table */}
                    <Grid item xs={12}>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Employee ID</TableCell>
                              <TableCell>Date</TableCell>
                              <TableCell>Support</TableCell>
                              {/* <TableCell>Status</TableCell> */}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {supportTable.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.support}</TableCell>
                                {/* <TableCell>{row.status}</TableCell> */}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </MainCard>
          </Grid>
        </TabPanel>
      </Grid>
    </Grid>
  );
}
