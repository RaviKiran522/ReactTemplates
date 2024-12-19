import React from "react";
import {
  Box,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { List, ListItem, ListItemText } from '@mui/material';
const Invoice = () => {
  return (
    <Box p={3} sx={{
      width: '80%', // Set width to 80%
      backgroundColor: 'white', // Optional styling
      margin: 'auto', // Center the box horizontally
    }}>
      {/* Invoice Header */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <img
            src="https://www.annapurnamarriages.com/public/assets/layouts/layout3/img/logo.png"
            alt="Company Logo"
            style={{ maxWidth: "100%" }}
          />
          <Typography variant="body2" mt={1}>
            H.O: 2nd Floor, V.S.R.Complex, Arundalpet 7th line, Guntur - 522002
          </Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Typography variant="h6">Cash / Credit</Typography>
          <Typography variant="h5" fontWeight="bold">
            TAX INVOICE
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2">
            <strong>GSTIN:</strong> 37AANCA6883F1Z7
          </Typography>
          <Typography variant="body2">
            <strong>PAN:</strong> AANCA6883F
          </Typography>
          <Typography variant="body2">
            <strong>Contact:</strong> 7731011119, 8297547666
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Customer Details */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="body1" fontWeight="bold">
            Service Receiver (Billed To)
          </Typography>
          <Typography variant="body2">Service Receiver's Name: Shreshta Pyaram</Typography>
          <Typography variant="body2">Address: Near JNTU, Hyderabad, Telangana</Typography>
          <Typography variant="body2">Profile ID: am101251</Typography>
          <Typography variant="body2">Marriage Type: First</Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Typography variant="body2">
            <strong>Invoice No:</strong> AM2024-240157
          </Typography>
          <Typography variant="body2">
            <strong>Invoice Date:</strong> 17-12-2024
          </Typography>
          <Typography variant="body2">
            <strong>State:</strong> Andhra Pradesh
          </Typography>
          <Typography variant="body2">
            <strong>CODE:</strong> 37
          </Typography>
          <Box
            border={1}
            p={1}
            mt={1}
            display="inline-block"
            borderColor="black"
            fontWeight="bold"
          >
            Mode Of Payment: ONLINE
          </Box>
          <Typography variant="body2" mt={2}>
            <strong>Bank Name:</strong> HDFC Bank
          </Typography>
          <Typography variant="body2">
            <strong>Credited Date:</strong> 17-Dec-2024
          </Typography>
        </Grid>
      </Grid>

      {/* Service Table */}
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Description of Service</TableCell>
              <TableCell>HSN Code: 99979</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Marriages Consultancy & Service</TableCell>
              <TableCell></TableCell>
              <TableCell>5000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Package Opted</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Tax and Summary */}
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2} colSpan={2}>
                <Typography fontWeight="bold">Total Invoice Amount (in words)</Typography>
                <Typography>Rupees: Five Thousand rupees only.</Typography>
              </TableCell>
              <TableCell>TOTAL AMOUNT BEFORE TAX</TableCell>
              <TableCell>4238</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CGST: 9%</TableCell>
              <TableCell>381</TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={5} colSpan={2}>
                <Typography fontWeight="bold">Bank Details:</Typography>
                <Typography>Bank: HDFC Bank, Guntur</Typography>
                <Typography>Account No: 50200033280848</Typography>
                <Typography>IFSC Code: HDFC0000189</Typography>
              </TableCell>
              <TableCell>SGST: 9%</TableCell>
              <TableCell>381</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>TOTAL AMOUNT OF TAX</TableCell>
              <TableCell>762</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>TOTAL AMOUNT AFTER TAX</TableCell>
              <TableCell>5000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>



      {/* Footer */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={4}>
          <Typography variant="body2">&nbsp;</Typography>
          <Typography>Signature of Customer</Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Typography variant="body2">FOR ANNAPURNA MARRIAGES PVT LTD</Typography>
          <Typography>Authorised Signatory</Typography>
        </Grid>
      </Grid>

      <Box sx={{ margin: '1% 0', fontSize: '13px' }}>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Note:
      </Typography>
      <List sx={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        <ListItem sx={{ display: 'list-item', padding: 0 }}>
          <ListItemText
            primary="By updating your profile with 75%, photo, Aadhar (for identification proof), you can search and verify matching profiles. If yes, then only you can register your profile with Annapurna marriages/website."
          />
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: 0 }}>
          <ListItemText
            primary="For second marriage people, if divorcee, upload divorcee certificate issued from Court. If widower, upload death certificate issued from Municipalities or Panchayats. Without certificates, Annapurna will not see matches."
          />
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: 0 }}>
          <ListItemText
            primary="You can send interest to members through our website (www.annapurnamarriages.com) with your AM ID number. If the member accepts your interest, then only you can see the accepted member's contact details."
          />
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: 0 }}>
          <ListItemText
            primary="On the website, based on (Date of Birth) age-wise, Property, income, Doctor specialization, Location, USA/Abroad, Green Card holder (Visa Type), Sub-caste-wise profiles should be filtered by the customer only."
          />
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: 0 }}>
          <ListItemText
            primary="Invoice time period validation depends upon the packages. See details on www.annapurnamarriages.com. Once a GST invoice has been generated, payment will not be refunded or transferred at any cost."
          />
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: 0 }}>
          <ListItemText
            primary="I agree to the terms and conditions of Annapurna Marriages Pvt Ltd."
          />
        </ListItem>
      </List>
    </Box>

      {/* Buttons */}
      <Box textAlign="right" mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.print()}
          sx={{ mr: 2, "@media print": {
            display: "none",
          }, }}
        >
          Print
        </Button>
        {/* <Button
          variant="contained"
          color="success"
          href="https://www.annapurnamarriages.com/sales"
          sx={{"@media print": {
            display: "none",
          } }}
        >
          View Sales
        </Button> */}
      </Box>
    </Box>
  );
};

export default Invoice;
