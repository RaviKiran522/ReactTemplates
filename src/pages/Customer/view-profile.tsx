// material-ui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

// third-party
import { PatternFormat } from 'react-number-format';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

import defaultImages from 'assets/images/users/default.png';

// assets
import { CallCalling, Gps, Link1, Sms } from 'iconsax-react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

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
    religion: "Hindu",
    cast: "Brahmin",
    newCast: null, // Empty field
    subCast: null, // Empty field
    dateOfBirth: "15-06-1994",
    timeOfBirth: null, // Empty field
    aadharNumber: null, // Empty field
    birthPlace: null, // Empty field
    address: null, // Empty field
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    city: "Visakhapatnam (Urban)",
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
    food : 'Biryani',
    maritalStatus : 'Married'
  },
  employmentDetails : {
    education: "Bachelor's Degree in Computer Science",
    university: "Andhra University",
    employedIn: "Private Sector",
    designation: "Software Developer",
    profession: "IT Professional",
    newEmployedIn: null, // Placeholder for "New Employed In"
    newProfession: null, // Placeholder for "New Profession"
    newDesignation: null, // Placeholder for "New Designation"
    workingLocation: "Hyderabad",
    workingCountry: "India",
    workingState: "Telangana",
    workingCity: "Hyderabad",
    companyAddress: "Madhapur, Hyderabad, Telangana",
    companyName: "Tech Solutions Pvt. Ltd.",
    workingSince: "2018",
    totalExperience: "5 Years",
    passportNumber: "A1234567",
    collegeDetails: "Andhra Engineering College",
    propertyDetails: "Owned a 2BHK apartment in Visakhapatnam",
    annualIncome: "1200000", // Annual income in INR
    monthlyIncome: "100000"  // Monthly income in INR
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
  }
};

export default function ViewProfile() {
  const matchDownMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function TabPanel(props:any) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    );
  }

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
              <Stack spacing={2.5} alignItems="center">
                <Avatar alt="Avatar 1" size="xl" src={defaultImages} />
                <Stack spacing={0.5} alignItems="center">
                  <Typography variant="h5">Anshan H.</Typography>
                  <Typography color="secondary">AE100057</Typography>
                  <Typography color="secondary">Project Manager</Typography>
                  <Typography color="secondary">Password : 34354343</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                <ListItem>
                  <ListItemIcon>
                    <Sms size={18} />
                  </ListItemIcon>
                  
                    <Typography align="left">Profile</Typography>
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CallCalling size={18} />
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
            <Grid item xs={12}>
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
          <Tab label="Personel Info" {...a11yProps(0)} />

          <Tab label="Education & Work" {...a11yProps(1)} />

          <Tab label="Family Info" {...a11yProps(2)} />

          <Tab label="Partner Info" {...a11yProps(2)} />

          <Tab label="Files" {...a11yProps(2)} />

          <Tab label="Customer Info" {...a11yProps(2)} />

          <Tab label="Complaints" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
        <Grid item xs={12} style={{marginTop:'5px'}}>
            <MainCard >
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Gender</Typography>
                        <Typography>{detailsObject.personalDetails.gender}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Religion</Typography>
                        <Typography>{detailsObject.personalDetails.religion}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Cast</Typography>
                        <Typography>{detailsObject.personalDetails.cast}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">New Cast</Typography>
                        <Typography>{detailsObject.personalDetails.newCast}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Sub-Cast</Typography>
                        <Typography>{detailsObject.personalDetails.subCast}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Date of Birth</Typography>
                        <Typography>{detailsObject.personalDetails.dateOfBirth}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Time of Birth</Typography>
                        <Typography>{detailsObject.personalDetails.timeOfBirth}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Aadhar Number</Typography>
                        <Typography>{detailsObject.personalDetails.aadharNumber}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Birth Place</Typography>
                        <Typography>{detailsObject.personalDetails.birthPlace}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Date of Address</Typography>
                        <Typography>{detailsObject.personalDetails.address}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">State</Typography>
                        <Typography>{detailsObject.personalDetails.state}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">District</Typography>
                        <Typography>{detailsObject.personalDetails.district}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">City</Typography>
                        <Typography>{detailsObject.personalDetails.city}</Typography>
                      </Stack>
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Temporary Address</Typography>
                        <Typography>{detailsObject.personalDetails.tempAddress}</Typography>
                      </Stack>
                    </Grid> */}
                  </Grid>
                </ListItem>
                
                
               
              </List>
            </MainCard>
            <MainCard style = {{marginTop : '5px'}}>
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
            </MainCard>
          </Grid>
        </TabPanel>
        <TabPanel value = {value} index = {1}>
        <Grid item xs={12} style={{marginTop:'5px'}}>
            <MainCard >
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Education</Typography>
                        <Typography>{detailsObject.employmentDetails.education}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">University</Typography>
                        <Typography>{detailsObject.employmentDetails.university}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Emplyoed In</Typography>
                        <Typography>{detailsObject.employmentDetails.employedIn}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Designaion</Typography>
                        <Typography>{detailsObject.employmentDetails.designation}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Profession</Typography>
                        <Typography>{detailsObject.employmentDetails.profession}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">New Emplyoed In</Typography>
                        <Typography>{detailsObject.employmentDetails.newEmployedIn}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">New Profession</Typography>
                        <Typography>{detailsObject.employmentDetails.newProfession}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">New Designaion</Typography>
                        <Typography>{detailsObject.employmentDetails.newDesignation}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Working location</Typography>
                        <Typography>{detailsObject.employmentDetails.workingLocation}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Working Country</Typography>
                        <Typography>{detailsObject.employmentDetails.workingCountry}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Working State</Typography>
                        <Typography>{detailsObject.employmentDetails.workingState}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Working City</Typography>
                        <Typography>{detailsObject.employmentDetails.workingCity}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Company Address</Typography>
                        <Typography>{detailsObject.employmentDetails.companyAddress}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Company Name</Typography>
                        <Typography>{detailsObject.employmentDetails.companyName}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Working Since</Typography>
                        <Typography>{detailsObject.employmentDetails.workingSince}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Total Experience</Typography>
                        <Typography>{detailsObject.employmentDetails.totalExperience}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Passport Number</Typography>
                        <Typography>{detailsObject.employmentDetails.passportNumber}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Collegue Details</Typography>
                        <Typography>{detailsObject.employmentDetails.collegeDetails}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Property Details</Typography>
                        <Typography>{detailsObject.employmentDetails.propertyDetails}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Annual Income</Typography>
                        <Typography>{detailsObject.employmentDetails.annualIncome}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Monthly Income</Typography>
                        <Typography>{detailsObject.employmentDetails.monthlyIncome}</Typography>
                      </Stack>
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Company Name</Typography>
                        <Typography>{detailsObject.employmentDetails.companyName}</Typography>
                      </Stack>
                    </Grid> */}
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
