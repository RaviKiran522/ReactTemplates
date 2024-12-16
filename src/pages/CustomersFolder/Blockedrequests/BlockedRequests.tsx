import { useEffect, useMemo, useState } from 'react';
import ReactTable from 'ReusableComponents/ReactTable'; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import SampleForm from 'pages/dashboard/sampleForm';

// The UsersList component now passes actions to the ReactTable component
export default function BlockedRequests() {
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const data: any = [
    { sno: '1', name: 'Vamsi', profileid: 'AM96799', package: 'GOLD', reason: 'Not Interested',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96799', employname: 'Ramesh', status: 'Pending' },
    { sno: '2', name: 'Ravi', profileid: 'AM56788', package: 'SILVER', reason: 'Marriege Settled',requestdate: '2024-1-13 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96798', employname: 'Nani', status: 'Blocked' },
    { sno: '3', name: 'kiran', profileid: 'AM96799', package: 'TITANIUM', reason: 'Marriege Settled',requestdate: '2024-10-16 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96719', employname: 'vasu', status: 'Blocked' },
    { sno: '4', name: 'Mani', profileid: 'AM96799', package: 'SILVER', reason: 'Not Interested',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96777', employname: 'Sathya', status: 'Pending' },
    { sno: '5', name: 'virat', profileid: 'AM96799', package: 'GOLD', reason: 'Marriege Settled',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96764', employname: 'Raju', status: 'Pending' },
    { sno: '6', name: 'Mahesh', profileid: 'AM96799', package: 'TITANIUM', reason: 'Not Interested',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96700', employname: 'Harish',status: 'Blocked' },
    { sno: '7', name: 'vinay', profileid: 'AM96799', package: 'SILVER', reason: 'Marriege Settled',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96788', employname: 'Madhu', status: 'Pending' },
    { sno: '8', name: 'Rajesh', profileid: 'AM96799', package: 'BEST', reason: 'Not Interested',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96719', employname: 'Sandhya', status: 'Pending' }
  ];
  const data2 = [
    { sno: '9', name: 'vinay', profileid: 'AM96799', package: 'SILVER', reason: 'Not Interested',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96799', employname: 'Kiran', status: 'Blocked' },
    { sno: '10', name: 'vinay', profileid: 'AM96799', package: 'GOLD', reason: 'Not Interested',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96799', employname: 'Pardhu', status: 'Pending' },
    { sno: '11', name: 'vinay', profileid: 'AM96799', package: 'SILVER', reason: 'Marriege Settled',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96799', employname: 'Pardhu', status: 'Pending' },
    { sno: '12', name: 'vinay', profileid: 'AM96799', package: 'LD GOLD', reason: 'Not Interested',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96799', employname: 'Pardhu', status: 'Pending' },
    { sno: '13', name: 'vinay', profileid: 'AM96799', package: 'BEST OFFER+', reason: 'Marriege Settled',requestdate: '2024-10-18 20:48:14',acceptdate: '2024-10-35 20:48:14',empolyid: 'AE96799', employname: 'Pardhu', status: 'Blocked' }
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
      { header: 'Profile ID', accessorKey: 'profileid' },
      { header: 'Name', accessorKey: 'name' },
      { header: 'Package', accessorKey: 'package' },
      { header: 'Reason', accessorKey: 'reason' },
      { header: 'Request Date', accessorKey: 'requestdate' },
      { header: 'Accept Date', accessorKey: 'acceptdate' },
      { header: 'Employee ID', accessorKey: 'empolyid' },
      { header: 'Employee Name', accessorKey: 'employname' },
      {
        header: 'Status',
        accessorKey: 'status',
        // Typing the props parameter
        cell: (props: Cell<any, any>) => {
          const status = props.getValue(); // Use getValue() to get the cell value

          switch (status) {
            case 'Blocked':
              return <Chip color="error" label="Blocked" size="small" variant="light" />;
            // case 'Blocked':
            //   return <Chip color="success" label="Pending" size="small" variant="light" />;
            default:
              return <Chip color="info" label="Pending" size="small" variant="light" />;
          }
        }
      }
    ],
    []
  );

  return (
    <ReactTable
      title={'CUSTOMERS BLOCKED REQUESTS'}
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
    />
  );
}
