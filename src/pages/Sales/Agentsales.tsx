
import * as React from 'react';

import { Chip, IconButton, Menu, MenuItem } from '@mui/material';
import ReactTable from 'ReusableComponents/ReactTable';



export default function AgentSales() {
  const [openPopup, setOpenPopup] = React.useState(false); // State for dialog visibility
  const [open, setOpen] = React.useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = React.useState(0);
  const [pageNumber, setPageNumber] = React.useState(1);
  const data = [
    { cusid: "AM28469", Custname: "Arjun Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "Mahesh", invoiceno: "9923489902", },
    { cusid: "AM28469", Custname: "Sri Lakshmi", surname: "Indhu", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "vamsi Krishana", invoiceno: "9956360227", },
    { cusid: "AM28469", Custname: "Raj Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "Mahesh", invoiceno: "9923489902", },
    { cusid: "AM28469", Custname: "Lakshman", surname: "Indhu", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "vamsi Krishana", invoiceno: "9956360227", },
    { cusid: "AM28469", Custname: "Arjun Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "Mahesh", invoiceno: "9923489902", },
    { cusid: "AM28469", Custname: "Sri Lakshmi", surname: "Indhu", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "vamsi Krishana", invoiceno: "9956360227", },
    { cusid: "AM28469", Custname: "Arjun Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "Mahesh", invoiceno: "9923489902", },
    { cusid: "AM28469", Custname: "Sri Lakshmi", surname: "Indhu", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "vamsi Krishana", invoiceno: "9956360227", },
    { cusid: "AM28469", Custname: "Arjun Kumar", surname: "Ramadevi", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "Mahesh", invoiceno: "9923489902", },
    { cusid: "AM28469", Custname: "Sri Lakshmi", surname: "Indhu", mode: "Online", bankname: "HDFC Bank", package: "Silver", cresteddate: "13-01-2018", saleby: "vamsi Krishana", invoiceno: "9956360227", },

  ];
  const handleEdit = (row: any) => {
    const newUrl = '/admin/sales/addsales';
    sessionStorage.setItem('editData', JSON.stringify(row))
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };

      const handleInvoice = (row: any) => {
        const newUrl = '/admin/invoice';
        sessionStorage.setItem('invoice',JSON.stringify(row))
        const fullPath = `${window.location.origin}${newUrl}`;
        window.open(fullPath, '_blank');
      };
  const handleView = (row: any) => {
    console.log('row.........', row)
    const newUrl = '/admin/sales/addsales';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };
  const columns = React.useMemo(() => [
    { header: 'S.No', accessorKey: 'sno', cell: (props: any) => props.row.index + 1, enableSorting: false },
    { header: 'ID', accessorKey: 'cusid' },
    { header: 'Name', accessorKey: 'Custname' },
    { header: 'Surname', accessorKey: 'surname' },
    { header: 'Mode', accessorKey: 'mode' },
    { header: 'Bank Name', accessorKey: 'bankname' },
    { header: 'Package', accessorKey: 'package' },
    { header: 'Invoice NO ', accessorKey: 'invoiceno' },
    { header: 'Invoice Date', accessorKey: 'cresteddate' },
    { header: 'Sale By', accessorKey: 'saleby' },

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
          <MenuItem onClick={() => { handleInvoice(row); handleClose(); }}>View Invoice</MenuItem>
          <MenuItem onClick={() => { handleInvoice(row); handleClose(); }}>Edit Invoice</MenuItem>
          {/* <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Downlod Invoice</MenuItem> */}
                <MenuItem onClick={() => { handleInvoice(row); handleClose(); }}>Downlod Invoice</MenuItem>

          {/* <MenuItem onClick={() => { setOpen({ flag: true, action: 'block' }); handleClose(); }}>Block</MenuItem> */}
        </Menu>
      </>
    );
  };
  return (

    <ReactTable
      title={"Agent Sales"}
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
      listSelectButton={{name1: "ENABLE", name2: "DISABLE"}}
    />

  );
}


