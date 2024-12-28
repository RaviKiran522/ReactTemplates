import { useEffect, useMemo, useState } from 'react';
import ReactTable from 'ReusableComponents/ReactTable'; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import SampleForm from 'pages/dashboard/sampleForm';

// The UsersList component now passes actions to the ReactTable component
export default function ListContacts() {
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const data: any = [
    { sno: '1', name: 'Vamsi', customerid: 'AM96799', noofcontacts: '1', date: '2024-10-18', },
    { sno: '2', name: 'Ravi', customerid: 'AM56788', noofcontacts: '2',date: '2024-1-13', },
    { sno: '3', name: 'kiran', customerid: 'AM96799', noofcontacts: '2',date: '2024-10-16', },
    { sno: '4', name: 'Mani', customerid: 'AM96799', noofcontacts: '3', date: '2024-10-18',},
    { sno: '5', name: 'virat', customerid: 'AM96799', noofcontacts: '1',date: '2024-10-18', },
    { sno: '6', name: 'Mahesh', customerid: 'AM96799', noofcontacts: '6', date: '2024-10-18', },
    { sno: '7', name: 'vinay', customerid: 'AM96799', noofcontacts: '2',date: '2024-10-18',},
    { sno: '8', name: 'Rajesh', customerid: 'AM96799', noofcontacts: '2', date: '2024-10-22',}
  ];
  const data2 = [
    { sno: '9', name: 'vinay', customerid: 'AM96799', noofcontacts: '2', date: '2024-10-18', },
    { sno: '10', name: 'vinay', customerid: 'AM96799', noofcontacts: '2', date: '2024-10-18', },
    { sno: '11', name: 'vinay', customerid: 'AM96799', noofcontacts: '2',date: '2024-10-18',},
    { sno: '12', name: 'vinay', customerid: 'AM96799', noofcontacts: '2 ', date: '2024-10-18',},
    { sno: '13', name: 'vinay', customerid: 'AM96799', noofcontacts: '2',date: '2024-10-18', }
  ];

  

  const handleDelete = (row: any) => {
    console.log('delete row.........', row);
  };

  const handleBlock = (row: any) => {
    console.log('block row.........', row);
  };

  const handleLeave = (row: any) => {
    console.log('leave row.........', row);
  };

  const buttonHandler = (action: string, users: any) => {
    if (action === 'delete') {
      handleDelete(users);
    } else if (action === 'block') {
      handleBlock(users);
    } else if (action === 'leave') {
      handleLeave(users);
    } else if (action === 'suspend') {
      console.log('action: ', action, 'users: ', users);
    } else if (action === 'activate') {
      console.log('action: ', action, 'users: ', users);
    }
  };

  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
      console.log('page size: ', rowsPerPage, 'pageNumber: ', pageNumber);
    }, [rowsPerPage, pageNumber]);

    const handleClose = () => {
      setAnchorEl(null);
    };

  };

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },
      { header: 'Customer Name', accessorKey: 'name' },
      { header: 'Customer ID', accessorKey: 'customerid' },
      { header: 'NO.OF Contacts', accessorKey: 'noofcontacts' },
     
      { header: 'Date', accessorKey: 'date' },
      // { header: 'Accept Date', accessorKey: 'acceptdate' },
      // { header: 'Employee ID', accessorKey: 'empolyid' },
      // { header: 'Employee Name', accessorKey: 'employname' },
      // {
      //   header: 'Status',
      //   accessorKey: 'status',
      //   // Typing the props parameter
      //   cell: (props: Cell<any, any>) => {
      //     const status = props.getValue(); // Use getValue() to get the cell value

      //     switch (status) {
      //       case 'Blocked':
      //         return <Chip color="error" label="Blocked" size="small" variant="light" />;
      //       // case 'Blocked':
      //       //   return <Chip color="success" label="Pending" size="small" variant="light" />;
      //       default:
      //         return <Chip color="info" label="Pending" size="small" variant="light" />;
      //     }
      //   }
      // }
    ],
    []
  );

  return (
    <ReactTable
      title={'List Contacts'}
      data={data}
      columns={columns}
    //   actions={(row: any) => <ActionMenu row={row} />}
      includeSearch={true}
      needCSV={true}
      pagination={'top'}
      columnVisibility={true}
      needCheckBoxes={true}
      needActivateAndSuspendButtons={true}
      buttonHandler={buttonHandler}
      open={open}
      setOpen={setOpen}
      HandleFormInPopup={SampleForm}
      setRowsPerPage={setRowsPerPage}
      setPageNumber={setPageNumber}
      pageNumber={pageNumber}
      totalPageCount={60}
      listSelectButton={{name1: "ENABLE", name2: "DISABLE"}}
    />
  );
}
