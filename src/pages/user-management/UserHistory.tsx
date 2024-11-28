import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import ReactTable from 'ReusableComponents/ReactTable'; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import SampleForm from 'pages/dashboard/sampleForm';

const UserHistory = () => {
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const data: any = [
    { sno: '1', customerId: '454534', name: 'Ganesg', surname: 'Bejjipuram', mode: 'online', bankName: 'HDFC', package: 'Sun', invoiceNo: '12345', date: '12/07/2024', branch: 'Hyd', amount: 5000 },
    { sno: '1', customerId: '454534', name: 'Ganesg', surname: 'Bejjipuram', mode: 'online', bankName: 'HDFC', package: 'Sun', invoiceNo: '12345', date: '12/07/2024', branch: 'Hyd', amount: 5000 },
    { sno: '1', customerId: '454534', name: 'Ganesg', surname: 'Bejjipuram', mode: 'online', bankName: 'HDFC', package: 'Sun', invoiceNo: '12345', date: '12/07/2024', branch: 'Hyd', amount: 7000 },
    { sno: '1', customerId: '454534', name: 'Ganesg', surname: 'Bejjipuram', mode: 'online', bankName: 'HDFC', package: 'Sun', invoiceNo: '12345', date: '12/07/2024', branch: 'Hyd', amount: 8000 },
    { sno: '1', customerId: '454534', name: 'Ganesg', surname: 'Bejjipuram', mode: 'online', bankName: 'HDFC', package: 'Sun', invoiceNo: '12345', date: '12/07/2024', branch: 'Hyd', amount: 5000 },
    { sno: '1', customerId: '454534', name: 'Ganesg', surname: 'Bejjipuram', mode: 'online', bankName: 'HDFC', package: 'Sun', invoiceNo: '12345', date: '12/07/2024', branch: 'Hyd', amount: 5000 },
    { sno: '1', customerId: '454534', name: 'Ganesg', surname: 'Bejjipuram', mode: 'online', bankName: 'HDFC', package: 'Sun', invoiceNo: '12345', date: '12/07/2024', branch: 'Hyd', amount: 5000 },
    { sno: '1', customerId: '454534', name: 'Ganesg', surname: 'Bejjipuram', mode: 'online', bankName: 'HDFC', package: 'Sun', invoiceNo: '12345', date: '12/07/2024', branch: 'Hyd', amount: 5000 },
  ];

  useEffect(() => {
    console.log('page size: ', rowsPerPage, 'pageNumber: ', pageNumber);
  }, [rowsPerPage, pageNumber]);

  const columns = useMemo(
    () => [
      { header: 'S.No', accessorKey: 'sno' },
      { header: 'Customer ID', accessorKey: 'customerId' },
      { header: 'Name', accessorKey: 'name' },
      { header: 'Surname', accessorKey: 'surname' },
      {
        header: 'Mode',
        accessorKey: 'mode',
        cell: (props: Cell<any, any>) => {
          const status = props.getValue(); // Use getValue() to get the cell value

          switch (status) {
            case 'online':
              return <Chip color="error" label="Online" size="small" variant="light" />;
            default:
              return <Chip color="info" label="Offline" size="small" variant="light" />;
          }
        }
      },
      { header: 'Bank Name', accessorKey: 'bankName' },
      {
        header: 'Package',
        accessorKey: 'package',
        // Typing the props parameter
        cell: (props: Cell<any, any>) => {
          const status = props.getValue(); // Use getValue() to get the cell value

          switch (status) {
            case 'SpecialOffer':
              return <Chip color="error" label="Special Offer" size="small" variant="light" />;
            case 'Sun':
              return <Chip color="success" label="Sun" size="small" variant="light" />;
            default:
              return <Chip color="info" label="Pearl" size="small" variant="light" />;
          }
        }
      },
      { header: 'Invoice No.', accessorKey: 'invoiceNo' },
      { header: 'Date', accessorKey: 'date' },
      { header: 'Branch', accessorKey: 'branch' }
    ],
    []
  );

  return (
    <ReactTable
      title={'History'}
      data={data}
      columns={columns}
      includeSearch={true}
      needCSV={true}
      pagination={'top'}
      columnVisibility={true}
      needCheckBoxes={true}
      needActivateAndSuspendButtons={false}
      open={open}
      setOpen={setOpen}
      HandleFormInPopup={SampleForm}
      setRowsPerPage={setRowsPerPage}
      setPageNumber={setPageNumber}
      pageNumber={pageNumber}
      totalPageCount={60}
      needTotalCount={true}
    />
  );
};

export default UserHistory;
