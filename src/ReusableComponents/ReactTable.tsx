import { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Grid from '@mui/material/Grid';
import AnimateButton from 'components/@extended/AnimateButton';
import Button from '@mui/material/Button';
// material-ui
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import { Modal, Typography } from '@mui/material';
import { DebouncedInput, EmptyTable, Filter } from 'components/third-party/react-table';
import {
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedMinMaxValues,
  getFacetedUniqueValues,
  ColumnFiltersState,
  FilterFn,
  SortingFn,
  sortingFns
} from '@tanstack/react-table';
// third-party
import {
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  useReactTable,
  getPaginationRowModel,
  ColumnDef,
  HeaderGroup,
  SortingState
} from '@tanstack/react-table';
// project import
import makeData from 'data/react-table';
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import {
  CSVExport,
  HeaderSort,
  SelectColumnVisibility,
  TablePagination,
  RowSelection,
  IndeterminateCheckbox
} from 'components/third-party/react-table';

// types
import { TableDataProps } from 'types/table';
import { LabelKeyObject } from 'react-csv/lib/core';
import { compareItems, rankItem, RankingInfo } from '@tanstack/match-sorter-utils';

import { InputBase } from '@mui/material';
import { styled } from '@mui/system';
import { forEach } from 'lodash';

interface ReactTableProps {
  columns: ColumnDef<TableDataProps>[];
  data: TableDataProps[];
}

// ==============================|| REACT TABLE ||============================== //

export const fuzzyFilter: FilterFn<TableDataProps> = (row, columnId, value, addMeta) => {
  // rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // store the ranking info
  addMeta(itemRank);

  // return if the item should be filtered in/out
  return itemRank.passed;
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', // Increase the width
  maxWidth: '800px', // Set a maximum width
  bgcolor: 'background.paper',
  boxShadow: 24,
  maxHeight: '80vh',
  overflowY: 'auto',
  p: 4,
  borderRadius: '8px'
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 700,
  // bgcolor: 'background.paper',
  // boxShadow: 24,
  // borderRadius: '8px',
  // p: 8
};

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', // Increase the width
  maxWidth: '800px', // Set a maximum width
  bgcolor: 'background.paper',
  boxShadow: 24,
  maxHeight: '80vh',
  overflowY: 'auto',
  p: 4,
  borderRadius: '8px'
};

function formatToINR(amount: any, decimals: any = 2) {
  if (isNaN(amount)) {
    throw new Error('Invalid number provided for conversion.');
  }

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(amount);
}

export default function ReactTable({
  title,
  columns,
  data,
  includeSearch,
  needCSV,
  pagination,
  actions,
  columnVisibility,
  needCheckBoxes,
  needActivateAndSuspendButtons,
  buttonHandler,
  open,
  setOpen,
  HandleFormInPopup,
  setRowsPerPage,
  setPageNumber,
  pageNumber,
  totalPageCount,
  needTotalCount
}: any) {
  const [globalFilter, setGlobalFilter] = useState('');
  //const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowdata, setRowdata] = useState<any>({});
  const [columnFilters, setColumnFilters] = useState<any>([]);
  const matchDownSM = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [sorting, setSorting] = useState<SortingState>([{ id: 'age', desc: false }]);
  const [rowSelection, setRowSelection] = useState({});
  const [totalAmount, setTotalAmount] = useState<any>(10000);

  const checkBoxOnTable = {
    id: 'select',
    header: ({ table }: any) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler()
        }}
      />
    ),
    cell: ({ row }: any) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler()
        }}
      />
    )
  };
  if (needCheckBoxes) {
    columns.splice(0, 0, checkBoxOnTable);
  }
  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters, globalFilter, rowSelection },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter
  });

  let headers: LabelKeyObject[] = [];
  if (needCSV) {
    columns.map(
      (columns: any) =>
        // @ts-ignore
        columns.accessorKey &&
        headers.push({
          label: typeof columns.header === 'string' ? columns.header : '#',
          // @ts-ignore
          key: columns.accessorKey
        })
    );
  } else {
    table.getAllColumns().map((columns) =>
      headers.push({
        label: typeof columns.columnDef.header === 'string' ? columns.columnDef.header : '#',
        // @ts-ignore
        key: columns.columnDef.accessorKey
      })
    );
  }

  const handleClose = () => {
    setOpen({ flag: false, action: '' });
  };

  const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '4px',
    overflow: 'hidden',
    width: '300px', // Adjust width as needed
    height: '41px',
    boxSizing: 'border-box'
  }));

  const LabelBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#f0f0f0', // Adjust background color
    width: '25%', // One-fourth of the box
    height: '100%',
    fontSize: 45,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  }));

  const InputField = styled(InputBase)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    outline: 'none',
    border: 'none',
    color: 'black', // Different color for the amount value
    fontWeight: 'bold'
  }));

  useEffect(()=>{
    console.log("data: ", table.getSelectedRowModel().flatRows.map((row) => row.original))
    let amount = 0;
    table.getSelectedRowModel().flatRows.map((row) => row.original).forEach((item: any)=>{
      amount += item?.amount
    })
    console.log("amount: ", amount)
    setTotalAmount(amount);
  }, [table.getSelectedRowModel().flatRows.map((row) => row.original)])
  console.log("totalAmount: ", totalAmount)
  return (
    <>
      <MainCard
        title={title}
        content={false}
        secondary={
          includeSearch || needCSV || columnVisibility ? (
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" sx={{ padding: 2 }}>
              {needTotalCount && (
                <StyledBox>
                  <LabelBox>
                    <Typography>
                      Total
                    </Typography>
                  </LabelBox>
                  <InputField placeholder="Enter amount" value={formatToINR(totalAmount)}/>
                </StyledBox>
              )}
              {includeSearch && (
                <DebouncedInput
                  value={globalFilter ?? ''}
                  onFilterChange={(value) => setGlobalFilter(String(value))}
                  placeholder={`Search ${data.length} records...`}
                />
              )}
              {columnVisibility && (
                <SelectColumnVisibility
                  {...{
                    getVisibleLeafColumns: table.getVisibleLeafColumns,
                    getIsAllColumnsVisible: table.getIsAllColumnsVisible,
                    getToggleAllColumnsVisibilityHandler: table.getToggleAllColumnsVisibilityHandler,
                    getAllColumns: table.getAllColumns
                  }}
                />
              )}
              {needCSV && (
                <CSVExport
                  {...{
                    data:
                      table.getSelectedRowModel().flatRows.map((row) => row.original).length === 0
                        ? data
                        : table.getSelectedRowModel().flatRows.map((row) => row.original),
                    headers,
                    filename: 'row-selection.csv'
                  }}
                />
              )}
            </Stack>
          ) : (
            <></>
          )
        }
      >
        {pagination == 'top' && (
          <ScrollX>
            <Stack>
              <Box sx={{ p: 1 }}>
                <TablePagination
                  {...{
                    setPageSize: table.setPageSize,
                    setPageIndex: table.setPageIndex,
                    getState: table.getState,
                    getPageCount: table.getPageCount,
                    setRowsPerPage: setRowsPerPage,
                    setPageNumber: setPageNumber,
                    pageNumber: pageNumber,
                    totalPageCount: totalPageCount
                  }}
                />
              </Box>
            </Stack>
          </ScrollX>
        )}

        <ScrollX>
          <RowSelection selected={Object.keys(rowSelection).length} />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                {table.getHeaderGroups().map((headerGroup: HeaderGroup<any>) => (
                  <TableRow key={headerGroup.id} sx={{ '& > th:first-of-type': { width: '58px' } }}>
                    {headerGroup.headers.map((header) => {
                      if (header.column.columnDef.meta !== undefined && header.column.getCanSort()) {
                        Object.assign(header.column.columnDef.meta, {
                          className: header.column.columnDef.meta.className + ' cursor-pointer prevent-select'
                        });
                      }

                      return (
                        <TableCell
                          key={header.id}
                          {...header.column.columnDef.meta}
                          onClick={header.column.getToggleSortingHandler()}
                          {...(header.column.getCanSort() &&
                            header.column.columnDef.meta === undefined && {
                              className: 'cursor-pointer prevent-select'
                            })}
                        >
                          {header.isPlaceholder ? null : (
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Box>{flexRender(header.column.columnDef.header, header.getContext())}</Box>
                              {header.column.getCanSort() && <HeaderSort column={header.column} />}
                            </Stack>
                          )}
                        </TableCell>
                      );
                    })}
                    {actions && <TableCell>Actions</TableCell>}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                    {/* Render Actions for Each Row */}
                    {actions && <TableCell onClick={() => setRowdata(row)}>{actions(row.original)}</TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ScrollX>
      </MainCard>
      {pagination == 'bottom' && (
        <MainCard>
          <ScrollX>
            <Stack>
              <Box sx={{ p: 1 }}>
                <TablePagination
                  {...{
                    setPageSize: table.setPageSize,
                    setPageIndex: table.setPageIndex,
                    getState: table.getState,
                    getPageCount: table.getPageCount,
                    setRowsPerPage: setRowsPerPage,
                    setPageNumber: setPageNumber,
                    pageNumber: pageNumber,
                    totalPageCount: totalPageCount
                  }}
                />
              </Box>
            </Stack>
          </ScrollX>
        </MainCard>
      )}
      {needActivateAndSuspendButtons && (
        <Grid container spacing={3} paddingTop={3} paddingBottom={3}>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-start" spacing={3}>
              <AnimateButton>
                <Button
                  color="error"
                  variant="contained"
                  type="button"
                  disabled={table.getSelectedRowModel().flatRows.map((row) => row.original).length === 0}
                  onClick={() => setOpen({ flag: true, action: 'suspend' })}
                >
                  SUSPEND
                </Button>
              </AnimateButton>
              <AnimateButton>
                <Button
                  variant="contained"
                  type="button"
                  disabled={table.getSelectedRowModel().flatRows.map((row) => row.original).length === 0}
                  onClick={() => setOpen({ flag: true, action: 'activate' })}
                >
                  ACTIVATE
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      )}
      <Modal open={open.flag} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={open.action === 'delete' || open.action === 'block' || open.action === 'leave' ? style : style1}>
          {open.action === 'edit' ? (
            <>
              <HandleFormInPopup />
              <Grid container spacing={3} paddingTop={3} paddingBottom={3}>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="content-start" paddingLeft={3}>
                    <Button
                      sx={{
                        mt: 3,
                        backgroundColor: 'darkgray',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: 'gray',
                          color: 'black'
                        }
                      }}
                      onClick={handleClose}
                    >
                      Close
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </>
          ) : (
            <Stack direction="row" justifyContent="space-around" spacing={3}>
              <Typography id="modal-description" sx={{ mt: 2,fontSize:19 }}>
                Are you sure, you want to {open.action} this row?
              </Typography>
            </Stack>
          )}
          {open.action !== 'edit' && (
            <Grid container spacing={3} paddingTop={3} paddingBottom={3}>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-around" spacing={3}>
                  <Button
                    sx={{
                      mt: 3,
                      backgroundColor: '#f03f32',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'darkred',
                        color: 'white'
                      }
                    }}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{
                      mt: 3,
                      backgroundColor: 'blue',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'darkblue',
                        color: 'white'
                      }
                    }}
                    onClick={() => {
                      console.log(open,"open")
                      if (open.action === 'delete' || open.action === 'block' || open.action === 'leave' || open.action === 'disable') {
                        console.log('rowdata: ', rowdata.original);
                        buttonHandler(open.action, rowdata.original);
                        setOpen(false);
                      } else if (open.action === 'edit') {
                      } else {
                        buttonHandler(
                          open.action,
                          table.getSelectedRowModel().flatRows.map((row) => row.original)
                        );
                      }
                    }}
                  >
                    Ok
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>
    </>
  );
}
