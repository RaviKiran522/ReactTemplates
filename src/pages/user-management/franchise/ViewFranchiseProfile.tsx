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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// third-party
import { PatternFormat } from 'react-number-format';

// project-imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

import defaultImages from 'assets/images/users/default.png';

// assets
import { CallCalling, Gps, Link1, Profile, Setting, Sms } from 'iconsax-react';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import UserHistory from '../UserHistory';
import { useState } from 'react';

// ==============================|| ACCOUNT PROFILE - BASIC ||============================== //
let detailsObject = {
  personalDetails: {
    name: 'saraswathi',
    gender: 'Male',
    maritalStatus: 'Married',
    status: 'Active',
    educationalQualification: 'MCA',
    state: 'AP',
    city: 'Visakhapatnam',
    branch: "Vizag",
    religion: "Hindu",
    cast: "kamma",
    dob: '16-03-1995',
    adharNumber: '49689579133',
    joiningDate: '27-01-2018',
    experienceInyears: 4,
    tempAddress: 'guntur',
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
}

interface FranchiseViewProfileProps {
  onActivateTab: () => void;
}

export default function FranchiseViewProfile({ onActivateTab }: FranchiseViewProfileProps) {
  const matchDownMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/franchise/listStaff');// Use the route path defined in your router
  };
  const handleInactiveNavigation = () => {
    navigate('/franchise/suspendedStaff');// Use the route path defined in your router
  };
  const handleBlockedNavigation = () => {
    navigate('/franchise/blockedStaff');// Use the route path defined in your router
  };
  const [currentTab, setCurrentTab] = useState("home"); // Manage current tab

  const handleSalesNavigation = () => {
      // Trigger the callback to activate the 4th tab
      onActivateTab();
     // Switch to the UserHistory tab
  };

  const handleListCustomersNavigation = () => {
    navigate('/customerManagement/listCustomers');// Use the route path defined in your router
  };
  const handleConvertedCustomersNavigation = () => {
    navigate('/customerManagement/convertedCustomers');// Use the route path defined in your router
  };
  const handleExpiredCustomersNavigation = () => {
    navigate('/customerManagement/planExpiredCustomers');// Use the route path defined in your router
  };
  const handleBlockedRequesCustomersNavigation = () => {
    navigate('/customerManagement/blockedRequests');// Use the route path defined in your router
  };
  const handleFreeCustomersNavigation = () => {
    navigate('/customerManagement/freeCustomers');// Use the route path defined in your router
  };
  const handlePaidCustomersNavigation = () => {
    navigate('/customerManagement/paidCustomers');// Use the route path defined in your router
  };
  const handleBlockedCustomersNavigation = () => {
    navigate('/customerManagement/blockedCustomers');// Use the route path defined in your router
  };

  const handleListInboundNavigation = () => {
    navigate('/staffCalling/inbound/listinbound');// Use the route path defined in your router
  };
  const handleFreeInboundNavigation = () => {
    navigate('/staffCalling/inbound/freeinbound');// Use the route path defined in your router
  };
  const handlePaidInboundNavigation = () => {
    navigate('/staffCalling/inbound/paidinbound');// Use the route path defined in your router
  };
  const handleBlockedInboundNavigation = () => {
    navigate('/staffCalling/inbound/blockedinbound');// Use the route path defined in your router
  };



  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={5} md={4} xl={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ flexDirection: "row" }} // Moves the icon and text to the right
                      >
                        Total Staff
                      </AccordionSummary>

                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >
                          Active Staff
                        </Typography>
                        <Typography>
                          908
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleInactiveNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >InActive Staff
                        </Typography>
                        <Typography>
                          724
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleBlockedNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >Blocked Staff
                        </Typography>
                        <Typography>
                          673
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </List>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12}>

                  <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ flexDirection: "row" }} // Moves the icon and text to the right
                      >
                        Total Customers
                      </AccordionSummary>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleListCustomersNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >
                          List Customers
                        </Typography>
                        <Typography>
                          908
                        </Typography>
                      </AccordionDetails>

                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleFreeCustomersNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >
                          Free Customers
                        </Typography>
                        <Typography>
                          908
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleConvertedCustomersNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >
                          Converted Customers
                        </Typography>
                        <Typography>
                          908
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handlePaidCustomersNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >Paid Customers
                        </Typography>
                        <Typography>
                          724
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleExpiredCustomersNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >
                          Plan Expired Customers
                        </Typography>
                        <Typography>
                          908
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleBlockedCustomersNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >Blocked Cusromers
                        </Typography>
                        <Typography>
                          673
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleBlockedRequesCustomersNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >Blocked Requests
                        </Typography>
                        <Typography>
                          673
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>


                <Grid item xs={12}>

                  <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ flexDirection: "row" }} // Moves the icon and text to the right
                      >
                        Total InBound
                      </AccordionSummary>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleListInboundNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >
                          List InBound
                        </Typography>
                        <Typography>
                          908
                        </Typography>
                      </AccordionDetails>

                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleFreeInboundNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >
                          Free InBound
                        </Typography>
                        <Typography>
                          908
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handlePaidInboundNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >Paid InBound
                        </Typography>
                        <Typography>
                          724
                        </Typography>
                      </AccordionDetails>
                      <AccordionDetails sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography
                          onClick={handleBlockedInboundNavigation}
                          style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
                        >Blocked InBound
                        </Typography>
                        <Typography>
                          673
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </List>
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ flexDirection: "row" }} // Moves the icon and text to the right
                      >
                        Total Sales
                      </AccordionSummary>

                      <AccordionDetails >
                        {/* Conditionally render based on the current tab */}
                        {currentTab === "home" && (
                          <Typography
                            onClick={handleSalesNavigation}
                            style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
                          >
                            Sales History
                          </Typography>
                        )}

                        {currentTab === "userHistory" && <UserHistory />}

                      </AccordionDetails>


                    </Accordion>
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
                      <ListItemSecondaryAction>
                        <Typography align="right">anshan.dh81@gmail.com</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CallCalling size={18} />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">+91 8654 239 581</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Gps size={18} />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">New York</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Link1 size={18} />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Link align="right" href="https://google.com" target="_blank">
                          https://anshan.dh.url
                        </Link>
                      </ListItemSecondaryAction>
                    </ListItem>

                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                {/* <Grid item xs={12} >
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
                </Grid> */}
                {/* <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} >
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
                </Grid> */}

                {/* <Grid item xs={12}>
                  <Stack direction="row" justifyContent="space-around" alignItems="center">
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">86</Typography>
                      <Typography color="secondary">Post</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">40</Typography>
                      <Typography color="secondary">Project</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">4.5K</Typography>
                      <Typography color="secondary">Members</Typography>
                    </Stack>
                  </Stack>
                </Grid> */}



              </Grid>
            </MainCard>
          </Grid>
          {/* <Grid item xs={12}>
            <MainCard title="Skills">
              <Grid container spacing={1.25}>
                <Grid item xs={6}>
                  <Typography color="secondary">Junior</Typography>
                </Grid>
                <Grid item xs={6}>
                  <LinearWithLabel value={30} />
                </Grid>
                <Grid item xs={6}>
                  <Typography color="secondary">UX Reseacher</Typography>
                </Grid>
                <Grid item xs={6}>
                  <LinearWithLabel value={80} />
                </Grid>
                <Grid item xs={6}>
                  <Typography color="secondary">Wordpress</Typography>
                </Grid>
                <Grid item xs={6}>
                  <LinearWithLabel value={90} />
                </Grid>
                <Grid item xs={6}>
                  <Typography color="secondary">HTML</Typography>
                </Grid>
                <Grid item xs={6}>
                  <LinearWithLabel value={30} />
                </Grid>
                <Grid item xs={6}>
                  <Typography color="secondary">Graphic Design</Typography>
                </Grid>
                <Grid item xs={6}>
                  <LinearWithLabel value={95} />
                </Grid>
                <Grid item xs={6}>
                  <Typography color="secondary">Code Style</Typography>
                </Grid>
                <Grid item xs={6}>
                  <LinearWithLabel value={75} />
                </Grid>
              </Grid>
            </MainCard>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={7} md={8} xl={9}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
            <MainCard title="About me">
              <Typography color="secondary">
                Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a
                more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.
              </Typography>
            </MainCard>
          </Grid> */}
          <Grid item xs={12}>
            <MainCard title="PERSONAL DETAILS">
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Full Name</Typography>
                        <Typography>{detailsObject.personalDetails.name}</Typography>
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
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Status</Typography>
                        <Typography>{detailsObject.personalDetails.status}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Educational Qualification</Typography>
                        <Typography>{detailsObject.personalDetails.educationalQualification}</Typography>
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
                        <Typography color="secondary">City</Typography>
                        <Typography>{detailsObject.personalDetails.city}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Branch</Typography>
                        <Typography>{detailsObject.personalDetails.branch}</Typography>
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
                        <Typography color="secondary">Date of Birth</Typography>
                        <Typography>{detailsObject.personalDetails.dob}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Aadhar Number</Typography>
                        <Typography>{detailsObject.personalDetails.adharNumber}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Joining Date</Typography>
                        <Typography>{detailsObject.personalDetails.joiningDate}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Experience (in years)</Typography>
                        <Typography>{detailsObject.personalDetails.experienceInyears}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Temporary Address</Typography>
                        <Typography>{detailsObject.personalDetails.tempAddress}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>



              </List>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="FATHER DETAILS">
              <List sx={{ py: 0 }}>
                <ListItem divider>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Father Name</Typography>
                        <Typography>{detailsObject.fatherDetails.fathername}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Father Number</Typography>
                        <Typography>{detailsObject.fatherDetails.number}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Father Address</Typography>
                        <Typography>{detailsObject.fatherDetails.address}</Typography>
                      </Stack>
                    </Grid>

                  </Grid>
                </ListItem>

              </List>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="HUSBAND DETAILS">
              <List sx={{ py: 0 }}>
                <ListItem divider>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Husband Name</Typography>
                        <Typography>{detailsObject.husbandDetails.name}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Husband Number</Typography>
                        <Typography>{detailsObject.husbandDetails.number}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Husband Address</Typography>
                        <Typography>{detailsObject.husbandDetails.address}</Typography>
                      </Stack>
                    </Grid>

                  </Grid>
                </ListItem>

              </List>
            </MainCard>
          </Grid>
          <Grid item xs={12}>
            <MainCard title="REFERER DETAILS">
              <List sx={{ py: 0 }}>
                <ListItem divider>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Reference Name</Typography>
                        <Typography>{detailsObject.referDetails.name}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Reference Number</Typography>
                        <Typography>{detailsObject.referDetails.number}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Reference Address</Typography>
                        <Typography>{detailsObject.referDetails.address}</Typography>
                      </Stack>
                    </Grid>

                  </Grid>
                </ListItem>

              </List>
            </MainCard>
          </Grid>
          {/* <Grid item xs={12}>
            <MainCard title="Emplyment">
              <List sx={{ py: 0 }}>
                <ListItem divider>
                  <Grid container spacing={matchDownMD ? 0.5 : 3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Senior UI/UX designer (Year)</Typography>
                        <Typography>2019-Current</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Job Responsibility</Typography>
                        <Typography>
                          Perform task related to project manager with the 100+ team under my observation. Team management is key role in
                          this company.
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container spacing={matchDownMD ? 0.5 : 3}>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Trainee cum Project Manager (Year)</Typography>
                        <Typography>2017-2019</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Job Responsibility</Typography>
                        <Typography>Team management is key role in this company.</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </MainCard>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
