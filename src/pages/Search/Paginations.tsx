import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationButtonsProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function PaginationButtons({ count, page, onChange }: PaginationButtonsProps) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        showFirstButton
        showLastButton
        color="primary"
        shape="rounded"
      />
    </Stack>
  );
}
