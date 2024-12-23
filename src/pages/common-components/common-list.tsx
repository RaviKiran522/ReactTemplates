import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import MainCard from 'components/MainCard';
import Typography from '@mui/material/Typography';
import { borderColor, width } from '@mui/system';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import Card from '@mui/material/Card';

import React, { useState } from 'react';
import PaginationButtons from 'pages/Search/Paginations';

export default function CommonList(props: any) {
  const { data = [], actions = [], actionHandleClick } = props;
  const [openDialog, setOpenDialog] = useState<any>(false);
  const [dialogContent, setDialogContent] = useState<any>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<any>(null);
  const [selectedAction, setSelectedAction] = useState<any>('');
  const navigation = useNavigate();
  // const handleActionClick = (action: any) => {
  //   setDialogContent(action.content); // Set the content for the dialog
  //   actionHandleClick(action);
  //   setOpenDialog(true); // Open the dialog
  // };

  // const handleClose = () => {
  //   setOpenDialog(false); // Close the dialog
  //   setDialogContent(null); // Clear the content
  // };
  const rowsPerPage = 10; // Define rows per page
  const [pageNumber, setPageNumber] = useState(1);

  // Calculate the displayed data based on the page number
  const paginatedData = data.slice((pageNumber - 1) * rowsPerPage, pageNumber * rowsPerPage);

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };

  const handleMenuOpen = (event: any) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleActionSelect = (actionLabel: any,each:any) => {
    console.log("actionLabel: ", actionLabel, each)
    
    setSelectedAction(actionLabel);
    actionHandleClick(actionLabel, each);
    setOpenDialog(true);
    handleMenuClose();
    if(actionLabel === "Edit Item") {
      navigation('../createCustomer', {state: {customer: each}})
    }
  };
  return (
    <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12}>
        <MainCard style={{ borderColor: '#666666' }}>
          <Grid container sx={{ display: "flex", flexDirection: "row", padding: "10px 0px", marginBottom: "1", }} >
            <Typography variant="h3" >
              SEARCH RESULTS
            </Typography>


            <Card style={{ backgroundColor: "#e3e291", width: '40%', height: '30px', marginLeft: "17%", padding: "5px" }} >
              Total Profiles Based on Your Filter's is
              <Button sx={{ color: "white", backgroundColor: "#e3526c", width: '40px', height: '20px', marginLeft: "26px" }}>51123</Button>
            </Card>
            <Grid item xs={12} marginBottom={2} marginTop={2}>
              <Divider />
            </Grid>
            {/* Top Pagination */}
            <Grid item xs={12} display="flex" justifyContent="flex-end" padding="10px">
              <PaginationButtons
                count={Math.ceil(data.length / rowsPerPage)}
                page={pageNumber}
                onChange={handlePageChange}
              />
            </Grid>
          </Grid>
          {paginatedData.length > 0 &&
            paginatedData.map((each: any, index: number) => (
              <MainCard key={index} style={{ marginBottom: '16px', borderColor: '#4680FF' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={5} md={4} xl={2}>
                    <Card style={{ borderColor: '#4680FF', padding: '10px' }} >
                      <div style={{ textAlign: 'center' }}>
                        {/* Image */}
                        <img
                          src="https://via.placeholder.com/150"
                          alt="Sample"
                          style={{ width: '100%', maxWidth: '70px', borderRadius: '8px', marginBottom: '10px' }}
                        />
                        {/* Name */}
                        <Typography variant="h6" color="error">
                          John Doe
                        </Typography>
                        <Card style={{ marginTop: '2px', padding: '2px', borderColor: 'black' }} >
                          AM101060
                        </Card>
                        {/* <Typography variant="h6" color="primary">
                          AM101060
                        </Typography> */}
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={5} md={4} xl={4}>
                    <Card style={{ borderColor: '#4680FF', padding: '10px' }}>
                      {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Email :</Typography>
                        <Typography>{each.email}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Mobile Number :</Typography>
                        <Typography>{each.mobileNumber}</Typography>
                      </div> */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary"> Date Of Birth :</Typography>
                        <Typography>{each.dateOfBirth}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Caste :</Typography>
                        <Typography>{each.caste}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Marital Status :</Typography>
                        <Typography>{each.maritalStatus}</Typography>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Create dBy :</Typography>
                        <Typography>{each.createdBy}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Branch :</Typography>
                        <Typography>{each.branch}</Typography>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={5} md={4} xl={4}>
                    <Card style={{ borderColor: '#4680FF', padding: '10px' }}>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Height :</Typography>
                        <Typography>{each.height}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Status :</Typography>
                        <Typography>{each.status}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Registered Date :</Typography>
                        <Typography>{each.registeredDate}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary"> Invoice Date :</Typography>
                        <Typography>{each.invoiceDate}</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Typography color="secondary">Approved Date :</Typography>
                        <Typography>{each.approvedDate}</Typography>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={5} md={4} xl={2}>
                    <Card style={{ borderColor: '#4680FF', padding: '10px' }}>
                      {/* Actions Button */}
                      <div style={{ textAlign: 'center' }}>
                        <Button variant="contained" color="primary" onClick={handleMenuOpen} >
                          Actions
                        </Button>
                      </div>


                      {/* Menu for Actions */}
                      <Menu anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
                        {actions.map((action: any, index: any) => (
                          <MenuItem key={index} onClick={() => handleActionSelect(action.id, each)}>
                            <ListItemIcon style={{ minWidth: '36px', color: '#555' }}>{action.icon}</ListItemIcon>
                            <ListItemText primary={action.label} />
                          </MenuItem>
                        ))}
                      </Menu>

                      {/* Dialog for Action Details */}
                      {/* <Dialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogTitle>Action Selected</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              You selected: {selectedAction}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog> */}
                    </Card>
                  </Grid>
                </Grid>
              </MainCard>
            ))}
        </MainCard>
      </Grid>
    </Grid>
  );
}
