import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable";  // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import SampleForm from 'pages/dashboard/sampleForm';

// The UsersList component now passes actions to the ReactTable component
export default function PlanCategory() {
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const data: any = [
    { sno: "1", planname: "FREE", plantype: "FREE",       duration: "UNLIMITED", contacts: "2",amount:"300", status: "Active" },
    { sno: "2", planname: "VIP", plantype: "PAID",        duration: "1 YEAR", contacts: "6", amount:"800", status: "IN-Active" },
    { sno: "3", planname: "PREMIUM", plantype: "PAID",    duration: "2 YEARS", contacts: "99",amount:"900", status: "IN-Active" },
    { sno: "4", planname: "BEST OFFER", plantype: "PAID", duration: "8 MONTHS", contacts: "140",amount:"200", status: "Active" },
    { sno: "5", planname: "PLTINUM", plantype: "PAID",     duration: "3 YEARS", contacts: "70",amount:"400", status: "Active" },
    { sno: "6", planname: "SILVER", plantype: "PAID",      duration: "UNLIMITED", contacts: "10", amount:"100",status: "Active" },
    { sno: "7", planname: "BEST OFFER+", plantype: "FREE", duration: "6 MONTHS", contacts: "17",amount:"3200", status: "Active" },
    { sno: "8", planname: "ENTRY", plantype: "PAID",       duration: "1 YEAR", contacts: "60", amount:"00",status: "Active" },
  ];
  const data2 = [    { sno: "126", planname: "vinay", plantype: "PAID", duration: "2 YEARS", contacts: "55", amount:"800",status: "Active" },
    { sno: "9", planname: "SILVER", plantype: "PAID",          duration: "UNLIMITED", contacts: "0",amount:"3000", status: "Active" },
    { sno: "10", planname: "PREMIUM", plantype: "PAID",        duration: "2 MONTHS", contacts: "33",amount:"700", status: "Active" },
    { sno: "11", planname: "LD SILVER", plantype: "PAID",       duration: "UNLIMITED", contacts: "25",amount:"600", status: "Active" },
    { sno: "13", planname: "VIP", plantype: "PAID",            duration: "5 MONTHS", contacts: "88", amount:"1000",  status: "Active" }]

  const handleEdit = (row: any) => {
    const newUrl = '/admin/plans/createplans';
    sessionStorage.setItem('editData',JSON.stringify(row))
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };

  const handleDelete = (row: any) => {
    console.log('delete row.........',row)
  };

  const handleView = (row: any) => {
    console.log('row.........',row)
    const newUrl = '/admin/plans/listplans';
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

  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    useEffect(()=>{
      console.log("page size: ", rowsPerPage, "pageNumber: ", pageNumber)
    }, [rowsPerPage, pageNumber])
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <IconButton onClick={handleClick}>...</IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => { handleView(row); handleClose(); }}>View Profile</MenuItem>
          <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Edit</MenuItem>
          <MenuItem onClick={() => { setOpen({ flag: true, action: 'delete' }); handleClose(); }}>Delete</MenuItem>
        </Menu>
      </>
    );
  };

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },
      { header: 'plan Category', accessorKey: 'planname' },
    //   { header: 'Plan Type', accessorKey: 'plantype' },
    //   { header: 'Duration', accessorKey: 'duration' },
    //   { header: 'NO.OF Contacts', accessorKey: 'contacts' },
    //   { header: 'Amount', accessorKey: 'amount' },
      {
        header: 'Status',
        accessorKey: 'status',
        // Typing the props parameter
        cell: (props: Cell<any, any>) => {
          const status = props.getValue();  // Use getValue() to get the cell value

          switch (status) {
            case 'IN-ACTIVE':
              return <Chip color="error" label="IN-ACTIVE" size="small" variant="light" />;
            // case 'IN-ACTIVE':
            //   return <Chip color="success" label="IN-ACTIVE" size="small" variant="light" />;
            default:
              return <Chip color="info" label="Active" size="small" variant="light" />;
          }
        }
      }
    ],
    []
  );

  return (
    <ReactTable
      title={"PLAN CATRGORY"}
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
      open = {open}
      setOpen = {setOpen}
      HandleFormInPopup={SampleForm}
      setRowsPerPage={setRowsPerPage}
      setPageNumber={setPageNumber}
      pageNumber={pageNumber}
      totalPageCount={60}
    />
  );
} 
