import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing

export default function City() {
  const [openPopup, setOpenPopup] = useState(false); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const [formData, setFormData] = useState({
    stateName: '',
    countryName: '',
    districtName:'',
    cityName:'',
    status: true, // Toggle for "Enable"
  });

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      status: e.target.checked,
    });
  };

  const handleFormSubmit = () => {
    console.log("Form Data: ", formData);
    const newRecord = {
        sno: (data.length + 1).toString(), // Generate a new serial number based on the length of the array
        name: formData.stateName, // Assuming formData contains the new name
        country: formData.countryName, // Defaulting country to INDIA
        district:formData.districtName,
        city:formData.cityName,
        status: formData.status ? "Enable" : "Disabled", // Defaulting status to Enable
      };
    
      setData([...data, newRecord]); // Add the new record to the data array
      console.log("Updated Data: ", data); // Log the updated array
    
    // Perform API call or state update
    setOpenPopup(false); // Close the dialog after submission
  };

  const initailData: any = [
    { sno: "1",city:"MADHAPUR",district:"HYDERABADH", name: "TELANGANA",country:"INDIA", status: "Enable" },
    { sno: "2",city:"MADHAPUR",district:"HYDERABADH", name: "ANDHRAPRADESH",country:"INDIA", status: "Enable" },
    { sno: "3", city:"MADHAPUR",district:"HYDERABADH",name: "MAHARASTRA",country:"INDIA", status: "Enable" },
    { sno: "4",city:"MADHAPUR",district:"HYDERABADH", name: "TAMILNADU",country:"INDIA", status: "Enable" },
    { sno: "5",city:"MADHAPUR",district:"HYDERABADH", name: "KARNATAKA",country:"INDIA", status: "Enable" },
    { sno: "6",city:"MADHAPUR",district:"HYDERABADH", name: "HIMACHALPRADESH",country:"INDIA", status: "Enable" },
    { sno: "7",city:"MADHAPUR",district:"HYDERABADH", name: "UTTARPRADESH",country:"INDIA", status: "Enable" },
    { sno: "8", city:"MADHAPUR",district:"HYDERABADH",name: "ODISHA",country:"INDIA", status: "Enable" },
    { sno: "9",city:"MADHAPUR",district:"HYDERABADH", name: "KASHMIR",country:"INDIA", status: "Enable" }
  ];
  const [data, setData] = useState(initailData);

  const columns = useMemo(
    () => [
      { header: 'S.NO', accessorKey: 'sno' },
      { header: 'City Name', accessorKey: 'city' },
      { header: 'District Name', accessorKey: 'district' },
      { header: 'State Name', accessorKey: 'name' },
      { header: 'Counrty Name', accessorKey: 'country' },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (props: Cell<any, any>) => {
          const status = props.getValue(); // Use getValue() to get the cell value
          return (
            <Chip
              color={status === 'Enable' ? 'success' : 'default'}
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
          <MenuItem onClick={() => { setOpen({ flag: true, action: 'delete' }); handleClose(); }}>Delete</MenuItem>
          <MenuItem onClick={() => { setOpen({ flag: true, action: 'disable' }); handleClose(); }}>Disable</MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <>
      {/* Button to Open Popup */}
      <div style={{ marginBottom: '20px',textAlign:'end'   }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup(true)}>
          Create City
        </Button>
      </div>

      {/* React Table */}
      <ReactTable
        title={"City Management"}
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
        <DialogTitle>Create City</DialogTitle>
        <DialogContent>
         
              <FormControl
            fullWidth
            margin="normal"
        >
            <InputLabel id="country-label">Country</InputLabel>
            <Select
            labelId="country-label"
            id="country"
            name="countryName"
            value={formData.countryName}
            onChange={handleFormChange}
            >
            <MenuItem value="INDIA">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="CANADA">Canada</MenuItem>
            <MenuItem value="AUSTRALIA">Australia</MenuItem>
            </Select>
        </FormControl>

         <FormControl
            fullWidth
            margin="normal"
        >
            <InputLabel id="state-label">State</InputLabel>
            <Select
            labelId="state-label"
            id="state"
            name="stateName"
            value={formData.stateName}
            onChange={handleFormChange}
            >
            <MenuItem value="ODISHA">ODISHA</MenuItem>
            <MenuItem value="KARNATAKA">KARNATAKA</MenuItem>
            <MenuItem value="TAMILNADU">TAMILNADU</MenuItem>
            <MenuItem value="ANDHRAPRADESH">ANDHRAPRADESH</MenuItem>
            </Select>
        </FormControl>
           <FormControl
            fullWidth
            margin="normal"
        >
            <InputLabel id="country-label">District</InputLabel>
            <Select
            labelId="district-label"
            id="district"
            name="districtName"
            value={formData.districtName}
            onChange={handleFormChange}
            >
            <MenuItem value="HYDERABADH">HYDERABADH</MenuItem>
            <MenuItem value="VARANGAL">VARANGAL</MenuItem>
            <MenuItem value="KAMAREDDY">KAMAREDDY</MenuItem>
            <MenuItem value="VIZAG">VIZAG</MenuItem>
            </Select>
        </FormControl>
        <TextField
            fullWidth
            margin="normal"
            label="City Name"
            name="cityName"
            value={formData.cityName}
            onChange={handleFormChange}
          />
        {/* <FormControl
            fullWidth
            margin="normal"
        >
            <InputLabel id="country-label">City</InputLabel>
            <Select
            labelId="city-label"
            id="city"
            name="citytName"
            value={formData.cityName}
            onChange={handleFormChange}
            >
            <MenuItem value="MADHAPUR">MADHAPUR</MenuItem>
            <MenuItem value="AMEERPET">AMEERPET</MenuItem>
            <MenuItem value="KUKATPALLY">KUKATPALLY</MenuItem>
            <MenuItem value="PALKOL">PALKOL</MenuItem>
            </Select>
        </FormControl> */}
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
