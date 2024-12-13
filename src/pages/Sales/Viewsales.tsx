
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Chip, IconButton, Menu, MenuItem } from '@mui/material';
import ReactTable from 'ReusableComponents/ReactTable';

function createData(
  name: string,
  planName: string,
  packageAmount: number,
  todaySales: number,
  todaysCollection: string,
) {
  return { name, planName, packageAmount, todaySales, todaysCollection };
}

const rows = [
  createData('-', 'Basic Plan', 6000, 24,'NILL'),
  createData('-', 'Premium Plan', 900, 37, 'NILL'),
  createData('-', 'Standard Plan', 1600, 24, 'NILL'),
  createData('-', 'Deluxe Plan', 3700, 67, 'NILL'),
  createData('-', 'Enterprise Plan', 1260, 49, 'NILL'),
  createData('-', 'Basic Plan', 6500, 24,'NILL'),
  createData('-', 'Premium Plan', 1290, 37, 'NILL'),
  createData('-', 'Standard Plan', 3160, 24, 'NILL'),
  createData('Total Sales', '-', 0, 0, '-'),
  createData('Total Collection($)', '-', 0, 0,'-' ),
];

export default function ViewSales() {
    const [openPopup, setOpenPopup] = React.useState(false); // State for dialog visibility
    const [open, setOpen] = React.useState({ flag: false, action: '' });
    const [rowsPerPage, setRowsPerPage] = React.useState(0);
    const [pageNumber, setPageNumber] = React.useState(1);
    const data = [
        { sno: "1",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Arjun Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"Mahesh", invoiceno: "9923489902", branch: "Guntur Head Office", status: "Active" },
        { sno: "2",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Sri Lakshmi", surname: "Indhu", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"vamsi Krishana", invoiceno: "9956360227", branch: "Guntur Head Office", status: "Active" },
        { sno: "3",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Raj Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"Mahesh", invoiceno: "9923489902", branch: "Guntur Head Office", status: "Active" },
        { sno: "4",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Lakshman", surname: "Indhu", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"vamsi Krishana", invoiceno: "9956360227", branch: "Guntur Head Office", status: "IN-Active" },
        { sno: "5",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Arjun Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"Mahesh", invoiceno: "9923489902", branch: "Guntur Head Office", status: "Active" },
        { sno: "6",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Sri Lakshmi", surname: "Indhu", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"vamsi Krishana", invoiceno: "9956360227", branch: "Guntur Head Office", status: "Active" },
        { sno: "7",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Arjun Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"Mahesh", invoiceno: "9923489902", branch: "Guntur Head Office", status: "Active" },
        { sno: "8",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Sri Lakshmi", surname: "Indhu", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"vamsi Krishana", invoiceno: "9956360227", branch: "Guntur Head Office", status: "Active" },
        { sno: "9",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Arjun Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"Mahesh", invoiceno: "9923489902", branch: "Guntur Head Office", status: "Active" },
        { sno: "10",cusid: "AM28469",Generated:"Annapurna Marriages", Custname: "Sri Lakshmi", surname: "Indhu", mode: "Online", bankname: "HDFC Bank",package: "Silver",cresteddate:"13-01-2018",saleby:"vamsi Krishana", invoiceno: "9956360227", branch: "Guntur Head Office", status: "IN-Active" },
    
      ];
      const handleEdit = (row: any) => {
        const newUrl = '/admin/sales/addsales';
        sessionStorage.setItem('editData',JSON.stringify(row))
        const fullPath = `${window.location.origin}${newUrl}`;
        window.open(fullPath, '_blank');
      };
    
      const handleDelete = (row: any) => {
        console.log('delete row.........',row)
      };
    
      const handleView = (row: any) => {
        console.log('row.........',row)
        const newUrl = '/admin/sales/addsales';
        const fullPath = `${window.location.origin}${newUrl}`;
        window.open(fullPath, '_blank');
      };
    
      const handleBlock = (row: any) => {
        console.log('block row.........',row)
      };
    
      const handleLeave = (row: any) => {
        console.log('leave row.........',row)
      };
      
      const buttonHandler = (action: string, users: any) => {
        if(action === "delete") {
          handleDelete(users)
        }
        else if(action === "block") {
          handleBlock(users)
        }
        else if(action === "leave") {
          handleLeave(users)
        }
        else if(action ==="suspend") {
          console.log("action: ", action, "users: ", users)
        }
        else if(action ==="activate") {
          console.log("action: ", action, "users: ", users)
        }
      }
    
      const columns = React.useMemo(() => [
        { header: 'S.NO', accessorKey: 'sno' },
        { header: 'Cust ID', accessorKey: 'cusid' },
        { header: 'Name', accessorKey: 'Custname' },
        { header: 'Surname', accessorKey: 'surname' },
        { header: 'Mode', accessorKey: 'mode' },
        { header: 'Bank Name', accessorKey: 'bankname' },
        { header: 'Package', accessorKey: 'package' },
        { header: 'Invoice NO ', accessorKey: 'invoiceno' },
        { header: ' Date',accessorKey:'cresteddate'},
        { header: 'Branch', accessorKey: 'branch' },
        { header: 'Invoice Genereated', accessorKey: 'Generated' },

        { header: 'Sale By',accessorKey:'saleby'},
        {
            header: "Status",
            accessorKey: "status",
            cell: ({ getValue }: { getValue: () => string }) => {
              const status = getValue(); // Retrieve the value of the "status" field
              return (
                <Chip
                  color={status === "Active" ? "success" : "error"} // Conditional color assignment
                  label={status}
                  size="small"
                  variant="outlined" // Outlined variant for better visual distinction
                />
              );
            },
            
            
        },
      ], []);
      
    
     
    
      React.useEffect(() => {
        console.log("Page Size: ", rowsPerPage, "Page Number: ", pageNumber);
      }, [rowsPerPage, pageNumber]);
      
      const ActionMenu = ({ row }: { row: any }) => {
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
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
                {/* <MenuItem onClick={() => { setOpen({ flag: true, action: 'block' }); handleClose(); }}>Block</MenuItem> */}
              </Menu>
            </>
          );
        };
  return (
    <div>
      <Typography variant="h3" component="div" gutterBottom>
        Todays Total Sales Report
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>-</TableCell>
              <TableCell align="right">Plan Name</TableCell>
              <TableCell align="right">Package Amount&nbsp;</TableCell>
              <TableCell align="right">Today Sales&nbsp;</TableCell>
              <TableCell align="right">Todays Collection&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.planName}</TableCell>
                <TableCell align="right">{row.packageAmount}</TableCell>
                <TableCell align="right">{row.todaySales}</TableCell>
                <TableCell align="right">{row.todaysCollection}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <div style={{ marginTop: '20px' }}>
      <ReactTable
        title={"View Sales"}
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
      </div>
    </div>
  );
}


