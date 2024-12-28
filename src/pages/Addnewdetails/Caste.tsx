
import { useEffect, useMemo, useState } from 'react';
import ReactTable from "ReusableComponents/ReactTable"; // Ensure this is the correct import for ReactTable
import Chip from '@mui/material/Chip';
import { Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Switch, FormControlLabel, Select, MenuItem as DropdownItem, FormControl, InputLabel, SelectChangeEvent, RadioGroup, Radio, FormLabel, Grid } from '@mui/material';
import { Cell } from '@tanstack/react-table'; // Import Cell type for typing
import CommonInputField from 'pages/common-components/common-input';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { Severity } from 'Common/utils';
import { createCaste, updateCaste, casteList } from '../../services/add-new-details/AddNewDetails';
export default function Caste() {
  const [openPopup, setOpenPopup] = useState({ flag: false, action: '', casteId: null }); // State for dialog visibility
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [listLoader, setListLoader] = useState(false);
  //const [data, setData] = useState([]);
  const [listFilter, setListFilter] = useState({
    search: '',
    status: null,
    id: null,
    countryId: null,
    stateId: null,
    districtId: null,
    skip: 0,
    limit: 10
  });
  const [rowCount, setRowCount] = useState(0);
  const [globalFilter, setGlobalFilter] = useState('');

  // const [formData, setFormData] = useState({

  //   casteName: '',
  //   status: true, // Toggle for "Enable"
  // });
  interface FormField {
    label: any;
    id: any;
    name: any;
    type?: any;
    placeholder?: any;
    value: any;
    error?: boolean;
    helperText?: any;
    mandatory?: boolean;
    options: { id: any; label: any }[];
    isMulti?: boolean;
  }

  interface FormData {
    [key: string]: FormField;
  }

  const formFields: FormData = {
    casteName: {
      label: 'Enter Caste Name',
      id: 'casteName',
      name: 'casteName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    statusName: {
      label: "Status",
      id: "statusName",
      name: "statusName",
      type: "select",
      options: [
        { id: 1, label: 'ENABLE' },
        { id: 0, label: 'DISABLE' },
      ],
      value: {id:null,label:''},
      error: false,
      helperText: "",
      mandatory: true,
      isMulti: false,
    },

  }

  const [formData, setFormData] = useState<FormData>(formFields);
  type FormDataKeys = keyof typeof formData;

  const handleChange = (name: FormDataKeys, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name], // Preserve existing properties of the field
        value,         // Update the value
        error: false,  // Reset error state
        helperText: "", // Clear helper text
      },
    }));
  };
  const validate = (): boolean => {
    let newFormData = _.cloneDeep(formData); // Clone the current form data
    let isValid = true;
  
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];
  
        // Validate mandatory fields
        if (field.mandatory && (!field.value || field.value === "")) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.type === "select" && (field.value === undefined || field.value === "" || field.value.id === null)) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
          newFormData[key].error = false;
          newFormData[key].helperText = '';
        }
      }
    }
    console.log("isValid: ", isValid)
    setFormData(newFormData); // Update the form data with validation errors
    return isValid;
  };
  
  
  
  const handleFormSubmit = async () => {
    if (validate()) {
      if (openPopup.action === 'create') {
      console.log("calling")
      const requestBody = {
        name: formData.casteName.value,
        status: formData.statusName.value.id
      }
      const response = await createCaste(requestBody);
      if(response.status) {

      }
      } else {

      }
    }
  };
  
  

  const initailData: any = [
    { sno: "1", caste: "REDDY", status: "Enable" },
    { sno: "2", caste: "SETTYBALIJA", status: "Disable" },
    { sno: "3", caste: "CHOUDARY", status: "Enable" },
    { sno: "4", caste: "MADHIGA", status: "Disable" },
    { sno: "5", caste: "MALA", status: "Enable" },
    { sno: "6", caste: "BRAHMIN", status: "Enable" },
    { sno: "7", caste: "KAAPU", status: "Enable" },
    { sno: "8", caste: "BRAHMIN", status: "Enable" },
    { sno: "9", caste: "CHOUDARY", status: "Enable" }
  ];
  const [data, setData] = useState(initailData);

  const columns = useMemo(
    () => [
      { header: "S.NO", accessorKey: "sno" },
      { header: "Caste Name", accessorKey: "caste" },
      {
        header: "Status",
        accessorKey: "status",
        cell: (props: Cell<any, any>) => {
          const status = props.getValue(); // Get the value of the "status" field
          return (
            <Chip
              color={status === "Enable" ? "success" : "error"} // Use success for "Enable"
              label={status}
              size="small"
              variant="outlined" // Optionally change to "filled" for stronger color
            />
          );
        },
      },
    ],
    []
  );

    const getListCastes = async () => {
      const result = await casteList(listFilter);
      if(result.status) {
        setRowCount(result.totalCount);
        setData(result.data.length > 0 ? result.data.map((item: any, index: number)=>({ sno: index + 1, caste: item?.castName, id: item?.id, status: item?.status === 1 ? "Enable" : "Disable"})) : []);
      }
    };

  const buttonHandler = (action: string, users: any) => {
    if(action === "disable") {
      updateCasteHandler(users);
    } else if(action === "ENABLE") {
      updateCasteHandler(users, "ENABLE");
    } else if(action === "DISABLE") {
      updateCasteHandler(users, "DISABLE");
    }
  }

    const updateCasteHandler = async (updateData: any = {}, multiple = "") => {
      console.log("updateData: ", updateData)
        if(!multiple) {
          let d = Object.keys(updateData).length;
          const updateRecord = {
              name: d> 0 ? updateData?.countryId : formData.casteName.value,
              status: d> 0 ? (updateData?.status === "Disable" ? 1 : 0) : formData.statusName.value.id,
              id: d> 0 ? updateData?.id : openPopup.casteId
          }
          const update = await updateCaste(updateRecord);
          if (update.status) {
            setSuccessBanner({ flag: true, message: update.message, severity: Severity.Success });
            setIsLoading(false);
            getListCastes();
            setTimeout(() => {
              setOpenPopup({ flag: false, action: '', casteId: null });
              setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
              setFormData(formFields);
            }, 1500);
          }
          else {
            setSuccessBanner({ flag: true, message: update.message, severity: Severity.Error });
            setIsLoading(false);
          }
        }
        else {
          updateData?.map(async (item: any) => {
            const updateRecord = {
              countryId: item?.countryId,
              stateId: item?.stateId,
              districtName: item?.district,
              status: item?.status === "Disable" ? 1 : 0,
              id: item?.id
            }
            const update = await updateCaste(updateRecord);
          })
          setOpen({ flag: false, action: '' });
          setSuccessBanner({ flag: true, message: 'success', severity: Severity.Success });
        }
        getListCastes();
        setTimeout(() => {
          setOpenPopup({ flag: false, action: '', casteId: null });
          setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
        }, 1500);
      }
  
  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };
  const handleEdit = (row: any) => {
    // Pre-fill formData with the selected row's data
    const newFormData = _.cloneDeep(formData);
  
    // Map row values to formData fields
    newFormData.casteName.value = row.caste; // Map "country" to "countryName"
    newFormData.statusName.value = newFormData.statusName.options.find(
      (option) => option.label.toUpperCase() === row.status.toUpperCase()
    ) || { id: null, label: '' };
  
    setFormData(newFormData); // Update formData state
    setOpenPopup({ flag: true, action: 'update', casteId: null })  };

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
      <Grid style={{ marginBottom: '20px', textAlign: 'end' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenPopup({ flag: true, action: 'create', casteId: null })}>
          Create Caste
        </Button>
        </Grid>

      {/* React Table */}
      <ReactTable
        title={"Caste Management"}
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
        totalPageCount={Math.ceil(rowCount / rowsPerPage)}
        listSelectButton={{ name1: 'ENABLE', name2: 'DISABLE' }}
        buttonHandler={buttonHandler}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}      />

      {/* Dialog for Create Form */}
      <Dialog open={openPopup.flag}  maxWidth="sm" fullWidth>
        <DialogTitle> Create Caste</DialogTitle>
        <DialogContent>

          <Grid item xs={12} padding={2}>
            <CommonInputField inputProps={formData.casteName} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} padding={2} >
            <CommonSelectField inputProps={formData.statusName} onSelectChange={handleSelectChange} />
          </Grid>



        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" sx={{margin:"1rem"}} onClick={() => setOpenPopup({ flag: false, action: 'create', casteId: null })}>Cancel</Button>
          <Button variant="contained" color="primary" sx={{margin:"1rem"}} onClick={handleFormSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

