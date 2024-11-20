import { useEffect, useState } from 'react';

// material-ui
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third-party
import { TableState, Updater } from '@tanstack/react-table';

interface TablePaginationProps {
  setPageSize: (updater: Updater<number>) => void;
  setPageIndex: (updater: Updater<number>) => void;
  getState: () => TableState;
  getPageCount: () => number;
  setRowsPerPage: (updater: Updater<number>) => void;
  setPageNumber: (updater: Updater<number>) => void;
  totalPageCount: number;
  pageNumber: number;
  initialPageSize?: number;
}

// ==============================|| TABLE PAGINATION ||============================== //

export default function TablePagination({ getPageCount, setPageIndex, setPageSize, getState, setRowsPerPage, setPageNumber, pageNumber, totalPageCount, initialPageSize }: TablePaginationProps) {
  const [open, setOpen] = useState(false);
  let options: number[] = [10, 25, 50, 100];

  if (initialPageSize) {
    options = [...options, initialPageSize]
      .filter((item, index) => [...options, initialPageSize].indexOf(item) === index)
      .sort(function (a, b) {
        return a - b;
      });
  }

  // eslint-disable-next-line
  useEffect(() => {setPageSize(initialPageSize || 10); setRowsPerPage(initialPageSize || 10)} , []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageIndex(value - 1);
    setPageNumber(value);
  };

  const handleChange = (event: SelectChangeEvent<number>) => {
    setRowsPerPage(Number(event.target.value));
    setPageSize(Number(event.target.value));
  };

  return (
    <Grid spacing={1} container alignItems="center" justifyContent="space-between" sx={{ width: 'auto' }}>
      <Grid item>
        <Stack direction="row" spacing={1} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="caption" color="secondary">
              Row per page
            </Typography>
            <FormControl sx={{ m: 1 }}>
              <Select
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={getState().pagination.pageSize}
                onChange={handleChange}
                size="small"
                sx={{ '& .MuiSelect-select': { py: 0.75, px: 1.25 } }}
              >
                {options.map((option: number) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Typography variant="caption" color="secondary">
            Go to
          </Typography>
          <TextField
            size="small"
            type="number"
            value={pageNumber > totalPageCount ? totalPageCount : pageNumber }
            onChange={(e) => {
              let page = e.target.value ? Number(e.target.value) - 1 : 0;
              if(page>=totalPageCount) {
                setPageNumber(totalPageCount);
                setPageIndex(totalPageCount-1);
              }
              else if(page<=0) {
                setPageNumber(1);
                setPageIndex(0);
              }
              else {
                setPageNumber(page+1);
                setPageIndex(page);
              }
            }}
            sx={{ '& .MuiOutlinedInput-input': { py: 0.75, px: 1.25, width: 36 } }}
          />
        </Stack>
      </Grid>
      <Grid item sx={{ mt: { xs: 2, sm: 0 } }}>
        <Pagination
          sx={{ '& .MuiPaginationItem-root': { my: 0.5 } }}
          count={totalPageCount}
          page={pageNumber}
          onChange={handleChangePagination}
          color="primary"
          variant="combined"
          showFirstButton
          showLastButton
        />
      </Grid>
    </Grid>
  );
}
