import { useEffect, useMemo, useState } from 'react';
import ReactTable from 'ReusableComponents/ReactTable'; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import SampleForm from 'pages/dashboard/sampleForm';
import EditCareerPopup from './Editpopup';
// import BranchStaffCreateInvoice from '../ActionsPopUps/BranchstaffInvoice';

// The UsersList component now passes actions to the ReactTable component
export default function CareersList() {
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [invoice,setInvoice] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const data: any = [
    { email: 'wyehbjewu23@gamil.com', name: 'vamsi', number: '9788374747', gender: 'Male', time: '1', attebdedate: '23-12-24', varified:'No'  },
    { email: 'wyehbjewu23@gamil.com', name: 'ravi', number: '9788374747', gender: 'Male', time: '7', attebdedate: '23-12-24', varified:'Yes'  },
    { email: 'wyehbjewu23@gamil.com', name: 'kiran', number: '9788374747', gender: 'Male', time: '10', attebdedate: '23-12-24', varified: 'No' },
    { email: 'wyehbjewu23@gamil.com', name: 'pavani', number: '9788374747', gender: 'Female', time: '17', attebdedate: '23-12-24', varified:'Yes'  },
    { email: 'wyehbjewu23@gamil.com', name: 'rani', number: '9788374747', gender: 'Female', time: '20', attebdedate: '23-12-24', varified:'No'  },
    { email: 'wyehbjewu23@gamil.com', name: 'mahesh', number: '9788374747', gender: 'Male', time: '14', attebdedate: '20-10-24', varified:'Yes'  },
    { email: 'wyehbjewu23@gamil.com', name: 'angi', number: '9788374747', gender: 'Male', time: '25', attebdedate: '23-12-24', varified:'No'  },
    { email: 'wyehbjewu23@gamil.com', name: 'vina', number: '9788374747', gender: 'Female', time: '15', attebdedate: '23-12-24', varified:'Yes'  }
  ];
  const data2 = [
    { email: 'wyehbjewu23@gamil.com', name: 'vinay', number: '9788374747', gender: 'Female', time: '1', attebdedate: '23-12-24',varified:'No' },
    { email: 'wyehbjewu23@gamil.com', name: 'vinay', number: '9788374747', gender: 'Female', time: '1', attebdedate: '23-12-24',varified:'No' },
    { email: 'wyehbjewu23@gamil.com', name: 'vinay', number: '9788374747', gender: 'Female', time: '1', attebdedate: '23-12-24',varified:'No' },
    { email: 'wyehbjewu23@gamil.com', name: 'vinay', number: '9788374747', gender: 'Female', time: '1', attebdedate: '23-12-24',varified:'No' },
    { email: 'wyehbjewu23@gamil.com', name: 'vinay', number: '9788374747', gender: 'Female', time: '1', attebdedate: '23-12-24',varified:'No' }
  ];

  const handleEdit = (row: any) => {
    const newUrl = '/admin/userManagement/editUser';
    sessionStorage.setItem('branchUser', JSON.stringify(row));
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };

  const handleDelete = (row: any) => {
    console.log('delete row.........', row);
  };

  const handleView = (row: any) => {
    console.log('row.........', row);
    const newUrl = '/admin/careers/viewProfile';
    sessionStorage.setItem('carrresuser', JSON.stringify(row));
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
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
    return (
      <>
        <IconButton onClick={handleClick}>...</IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleView(row);
              handleClose();
            }}
          >
            View Profile
          </MenuItem>
          {/* <MenuItem
            onClick={() => {
              handleEdit(row);
              handleClose();
            }}
          >
            Edit
          </MenuItem> */}
          <MenuItem
            onClick={() => {
              setOpen({ flag: true, action: 'block' });
              handleClose();
            }}
          >
            Block
          </MenuItem> 
          <MenuItem onClick={() => { setInvoice(true); handleClose(); }}>Register</MenuItem>
        </Menu>
      </>
    );
  };

  const columns = useMemo(
    () => [
      { header: 'S.No', accessorKey: 'sno' ,cell:(props:any) => props.row.index + 1,enableSorting:false},
      { header: 'Name', accessorKey: 'name' },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Mobile', accessorKey: 'number' },
      { header: 'Gender', accessorKey: 'gender' },
      { header: 'Time Taken', accessorKey: 'time' },
      {header: 'Date Attended',accessorKey: 'attebdedate'},
      {header: 'Mobile Verified',accessorKey: 'varified',
         // Typing the props parameter
         cell: (props: Cell<any, any>) => {
            const varified = props.getValue(); // Use getValue() to get the cell value
  
            switch (varified) {
              case 'No':
                return <Chip color="error" label="No" size="small" variant="light" />;
              case 'Yes':
                return <Chip color="success" label="Yes" size="small" variant="light" />;
              
            }
          }
      }
    ],
    []
  );

  const handleInvoiceClose =() =>{
    setInvoice(false)
  }

  return (
    <>
    <ReactTable
      title={'List Careers'}
      data={data}
      columns={columns}
      actions={(row: any) => <ActionMenu row={row} />}
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

{invoice && (
        <div style={{ position: 'fixed', top: '10%', right: '10%', zIndex: 1000 }}>
          <EditCareerPopup open={invoice} onClose={handleInvoiceClose} />
        </div>
      )}
    </>
  
  );
}
