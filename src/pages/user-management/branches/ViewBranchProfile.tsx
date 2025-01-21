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
import React, { useEffect, useState } from 'react';
import { branchesList } from 'services/add-new-details/AddNewDetails';

// ==============================|| ACCOUNT PROFILE - BASIC ||============================== //
// let detailsObject = {
//   personalDetails: {
//     name: 'saraswathi',
//     gender: 'Male',
//     maritalStatus: 'Married',
//     status: 'Active',
//     educationalQualification: 'MCA',
//     state: 'AP',
//     city: 'Visakhapatnam',
//     branch: "Vizag",
//     religion: "Hindu",
//     cast: "kamma",
//     dob: '16-03-1995',
//     adharNumber: '49689579133',
//     joiningDate: '27-01-2018',
//     experienceInyears: 4,
//     tempAddress: 'guntur',
//   },
//   fatherDetails: {
//     fathername: 'anjaneyulu',
//     number: '9963838871',
//     address: 'pedhakancharla vinukonda(m) guntur(d)'
//   },
//   husbandDetails: {
//     name: 'movva umesh',
//     number: '8367055588',
//     address: 'pedhakancharla vinukonda(m) guntur(d)'
//   },
//   referDetails: {
//     name: 'ashok',
//     number: '9642670464',
//     address: 'anjaneyulu,9963838871,pedhakancharla,vinukomda(m),guntur(d)'
//   }
// }



interface FranchiseViewProfileProps {
  onActivateTab: () => void;
}
export default function BranchViewProfile({onActivateTab}:FranchiseViewProfileProps ) {
  const [detailsObject, setDetailsObject] = useState<any>({});
const [checkData,setCheckData] = useState(false)



const branchId = sessionStorage.getItem('id')
  
  const getbranchDetails = async() =>{
   
    let branchDetails = await branchesList({id:branchId})
    if(branchDetails.status){
      setDetailsObject(branchDetails.data)
      setCheckData(true)
    }
      
  }
  
  useEffect(()=>{
    const selectionApiFunction = async() =>{
      await getbranchDetails()
    }
    selectionApiFunction()
   
  },[])

  const matchDownMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [currentTab, setCurrentTab] = React.useState("home");

  // const navigate = useNavigate();



  const handleNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/branches/listStaff';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleInactiveNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/branches/suspendedStaff';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleBlockedNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/branches/blockedStaff';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
 


  const handleListCustomersNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/customerManagement/listCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleConvertedCustomersNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/customerManagement/convertedCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleExpiredCustomersNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/customerManagement/planExpiredCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleBlockedRequesCustomersNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/customerManagement/blockedRequests';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleFreeCustomersNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/customerManagement/freeCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handlePaidCustomersNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/customerManagement/paidCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleBlockedCustomersNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/customerManagement/blockedCustomers';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };

 

  const handleListInboundNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/staffCalling/inbound/listinbound';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleFreeInboundNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/staffCalling/inbound/freeinbound';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handlePaidInboundNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/staffCalling/inbound/paidinbound';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const handleBlockedInboundNavigation = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/staffCalling/inbound/blockedinbound';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  // {
  //   "status": true,
  //   "message": "Branch retrieved successfully.",
  //   "data": {
  //       "id": 6,
  //       "branchName": "edited branch",
  //       "phoneNumber": "7545454354",
  //       "emailId": "kaasu22koppisetti@gmail.com",
  //       "address": "chinthalapalem,sidhantham",
  //       "pincode": "534326",
  //       "mapUrl": "asdeefewrewrew",
  //       "status": 1,
  //       "createdAt": "2025-01-04T10:37:52.520Z",
  //       "updatedAt": "2025-01-04T11:21:47.000Z",
  //       "country": {
  //           "id": 30,
  //           "countryName": "Australia",
  //           "status": 1,
  //           "createdAt": "2024-12-29T07:04:42.916Z",
  //           "updatedAt": "2025-01-03T12:56:25.000Z"
  //       },
  //       "state": {
  //           "id": 18,
  //           "stateName": "sydney",
  //           "status": 1,
  //           "createdAt": "2024-12-29T07:05:04.318Z",
  //           "updatedAt": "2025-01-02T13:02:07.000Z"
  //       },
  //       "district": {
  //           "id": 19,
  //           "districtName": "hayden",
  //           "status": 1,
  //           "createdAt": "2024-12-29T07:06:39.638Z",
  //           "updatedAt": "2024-12-30T15:47:32.000Z"
  //       },
  //       "city": {
  //           "id": 18,
  //           "cityName": "Adam gilchrist",
  //           "status": 1,
  //           "createdAt": "2024-12-29T07:07:19.371Z",
  //           "updatedAt": "2024-12-29T07:07:19.371Z",
  //           "country": {
  //               "id": 30,
  //               "countryName": "Australia",
  //               "status": 1,
  //               "createdAt": "2024-12-29T07:04:42.916Z",
  //               "updatedAt": "2025-01-03T12:56:25.000Z"
  //           },
  //           "state": {
  //               "id": 18,
  //               "stateName": "sydney",
  //               "status": 1,
  //               "createdAt": "2024-12-29T07:05:04.318Z",
  //               "updatedAt": "2025-01-02T13:02:07.000Z"
  //           },
  //           "district": {
  //               "id": 19,
  //               "districtName": "hayden",
  //               "status": 1,
  //               "createdAt": "2024-12-29T07:06:39.638Z",
  //               "updatedAt": "2024-12-30T15:47:32.000Z"
  //           }
  //       }
  //   }
  // }
  const handleSalesNavigation = () => {
    // Trigger the callback to activate the 4th tab
    onActivateTab();
   // Switch to the UserHistory tab
};

  return (
    <div>

    
    {checkData == true ? <Grid container spacing={3}>
      <Grid item xs={12} sm={5} md={4} xl={4}>
        <Grid container spacing={4}>
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
                      <Typography variant="h5">{detailsObject?.branchName}</Typography>
                      {/* <Typography color="secondary">AE100057</Typography> */}
                      {/* <Typography color="secondary">Project Manager</Typography> */}
                      {/* <Typography color="secondary">Password : 34354343</Typography> */}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                    <ListItem>
                      <ListItemIcon>
                        <Sms size={18} />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">{detailsObject?.emailId}</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CallCalling size={18} />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">{detailsObject?.phoneNumber}</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Gps size={18} />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Typography align="right">{detailsObject?.country?.countryName}</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Link1 size={18} />
                      </ListItemIcon>
                      <ListItemSecondaryAction>
                        <Link align="right" href="https://google.com" target="_blank">
                          {detailsObject?.mapUrl}
                        </Link>
                      </ListItemSecondaryAction>
                    </ListItem>

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
                  <Divider />
                </Grid>
                




              </Grid>
            </MainCard>
          </Grid>
        
        </Grid>
      </Grid>
      <Grid item xs={12} sm={7} md={8} xl={8}>
        <Grid container spacing={3}>
         
           <Grid item xs={12}>
            <MainCard title="BRANCH DETAILS">
              <List sx={{ py: 0 }}>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Branch Name</Typography>
                        <Typography>{detailsObject?.branchName}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Mobile Number</Typography>
                        <Typography>{detailsObject?.phoneNumber}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Address</Typography>
                        <Typography>{detailsObject?.address}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Pincode</Typography>
                        <Typography>{detailsObject?.pincode}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Country</Typography>
                        <Typography>{detailsObject?.country.countryName}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">State</Typography>
                        <Typography>{detailsObject?.state?.stateName}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">District</Typography>
                        <Typography>{detailsObject?.district?.districtName}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">City</Typography>
                        <Typography>{detailsObject?.city?.cityName}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                {/* <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Cast</Typography>
                        <Typography>{detailsObject?.cast}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Date of Birth</Typography>
                        <Typography>{detailsObject?.dob}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem> */}
                {/* <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Aadhar Number</Typography>
                        <Typography>{detailsObject?.adharNumber}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Joining Date</Typography>
                        <Typography>{detailsObject?.joiningDate}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!matchDownMD}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>

                      <Stack spacing={0.5}>
                        <Typography color="secondary">Experience (in years)</Typography>
                        <Typography>{detailsObject?.experienceInyears}</Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack spacing={0.5}>
                        <Typography color="secondary">Temporary Address</Typography>
                        <Typography>{detailsObject?.tempAddress}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem> */}



              </List>
            </MainCard>
          </Grid>
          {/* <Grid item xs={12}>
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
          </Grid>  */}
        </Grid>
      </Grid>
    </Grid> : <p>Loading...</p>}
    </div>
  );
}
