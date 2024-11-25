
import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing

export default function Languages() {
  const [openPopup, setOpenPopup] = useState(false); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const [formData, setFormData] = useState({
   
    languagesName: '',
    status: true, // Toggle for "Enable"
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  const handleFormSubmit = () => {
    console.log("Form Data: ", formData);
    const newRecord = {
        sno: (data.length + 1).toString(), // Generate a new serial number based on the length of the array
    
        languages: formData.languagesName, // Defaulting languages to B.tech
        status: formData.status ? "Enable" : "Disabled", // Defaulting status to Enable
      };
    
      setData([...data, newRecord]); // Add the new record to the data array
      console.log("Updated Data: ", data); // Log the updated array
    
    // Perform API call or state update
    setOpenPopup(false); // Close the dialog after submission
  };

  const initailData: any = [
    { sno: "1",languages:"ENGLISH", status: "Enable" },
    { sno: "2",languages:"TELUGU", status: "Disable" },
    { sno: "3",languages:"TAMIL", status: "Enable" },
    { sno: "4",languages:"KANNADA", status: "Disable" },
    { sno: "5",languages:"MARATI", status: "Enable" },
    { sno: "6",languages:"HINDHI", status: "Enable" },
    { sno: "7",languages:"MALAYALAM", status: "Enable" },
    { sno: "8", languages:"SPANISH", status: "Enable" },
    { sno: "9", languages:"CHINESE", status: "Enable" }
  ];
  const [data, setData] = useState(initailData);

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },
      // { header: 'State Name', accessorKey: 'name' },
      { header: 'Languages Name', accessorKey: 'languages' },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (props: Cell<any, any>) => {
          const status = props.getValue(); // Use getValue() to get the cell value
          return (
            <Chip
              color={status === 'Enable' ? 'success' : 'error'}
              label={status}
              size="small"
              variant="light"
            />
          );
        },
      },
    ],
    []
  );
  const handleEdit = (row: any) => {
    console.log('row.........',row)
    const newUrl = '/react/userManagement/editUser';
    const fullPath = `${window.location.origin}${newUrl}`;
    window.open(fullPath, '_blank');
  };

  const ActionMenu = ({ row }: { row: any }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
      console.log("Page Size: ", rowsPerPage, "Page Number: ", pageNumber);
    }, [rowsPerPage, pageNumber]);

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <>
        <Button onClick={handleClick}>...</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => { handleEdit(row); handleClose(); }}>Edit</MenuItem>
          {/* <MenuItem onClick={() => { setOpen({ flag: true, action: 'edit' }); handleClose(); }}>Edit</MenuItem> */}
          <MenuItem onClick={() => { setOpen({ flag: true, action: 'disable' }); handleClose(); }}>Disable</MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <>
      {/* Button to Open Popup */}
      <div style={{ marginBottom: '20px',textAlign:'end'  }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
          Create Languages
        </Button>
      </div>

      {/* React Table */}
      <ReactTable
        title={"Languages Management"}
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

      {/* Dialog for Create Form */}
      <Dialog open={openPopup} onClose={() => setOpenPopup(false)} maxWidth="sm" fullWidth>
        <DialogTitle> Create Languages</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Languages Name"
            name="languagesName"
            value={formData.languagesName}
            onChange={handleFormChange}
          />
          {/* <FormControlLabel
            control={
              <Switch
                checked={formData.status}
                onChange={handleToggleChange}
                name="status"
              />
            }
            label="Enable" */}
            <FormControl component="fieldset">
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup
                    row
                    name="status"
                    value={formData.status ? "Enable" : "Disable"}
                    onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        status: e.target.value === "Enable",
                    }))
                    }
                >
                    <FormControlLabel
                    value="Enable"
                    control={<Radio color="primary" />}
                    label="Enable"
                    />
                    <FormControlLabel
                    value="Disable"
                    control={<Radio color="error" />}
                    label="Disable"
                    />
                </RadioGroup>
                </FormControl>
                            
          
         
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPopup(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleFormSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

