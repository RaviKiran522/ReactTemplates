import React, { useEffect, useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from 'moment';
import {
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
  // Divider,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  // IconButton,
  FormHelperText
} from '@mui/material';
import GoogleMaps from '../GoogleMaps';
import { cityList, countryList, createBranch, districtList, statesList } from 'services/add-new-details/AddNewDetails';
import { Severity } from 'Common/utils';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { createFranchise } from 'services/franchise/franchise';
const CreateFranchise: React.FC = () => {
  // Define the structure of form data for type safety
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
    franchiseName: {
      label: 'Franchise Name',
      id: 'franchiseName',
      name: 'franchiseName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    phoneNumber: {
      label: 'Phone Number',
      id: 'phoneNumber',
      name: 'phoneNumber',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    email: {
      label: 'Email Address',
      id: 'email',
      name: 'email',
      type: 'email',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    }, 
    countryName: {
      label: 'Select Country Name',
      id: 'countryName',
      name: 'countryName',
      type:'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
     
    statename: {
      label: 'Select State Name',
      id: 'statename',
      name: 'statename',
      type:'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    district: {
      label: 'Select District Name',
      id: 'district',
      name: 'district',
      type:'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    
    cityname: {
      label: 'Select City Name',
      id: 'cityname',
      name: 'cityname',
      type:'select',
      options: [],
      value:'',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    status: {
      label: 'Status',
      id: 'status',
      name: 'status',
      type:'select',
      options: [
        { id: 1, label: 'ENABLE' },
        { id: 2, label: 'DISABLE' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    address: {
      label: 'Address',
      id: 'address',
      name: 'address',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    }, 
    
    pincode: {
      label: 'Pincode',
      id: 'pincode',
      name: 'pincode',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mapUrl: {
      label: 'Map Url',
      id: 'mapUrl',
      name: 'mapUrl',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    wallet: {
      label: 'Wallet Balance',
      id: 'wallet',
      name: 'wallet',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    // date: {
    //   label: 'Date',
    //   id: 'date',
    //   name: 'date',
    //   value: '',
    //   error: false,
    //   helperText: 'Please select date',
    //   mandatory: true,
    //   options: []
    // }
  };

  const [formData, setFormData] = useState<FormData>(formFields);
  const [isLoading, setIsLoading] = useState(false);
    const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  

  type FormDataKeys = keyof typeof formData;

  useEffect(()=>{
    const selectionApiFunction = async() =>{
      const newFormFields = _.cloneDeep(formData)
      let countryDetails = await countryList({meta:true,status:1})
      if(countryDetails.status){
        let countryoptions = countryDetails.data.map((each:any)=>({ id: each.id, label: each.countryName }))
        newFormFields.countryName.options = countryoptions
        setFormData(newFormFields)
      }
    }
    selectionApiFunction()
   
  },[])

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;
  
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];
  
        // Check for mandatory fields
        if (field.mandatory) {
          // Check for empty text, number, or email fields
          if (
            field.type !== 'select' &&
            field.type !== 'date' &&
            (!field.value || field.value === '')
          ) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`;
            isValid = false;
          }
          // Check for empty select fields
          else if (
            field.type === 'select' &&
            (!field.value || !field.value.id || field.value.id === null)
          ) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} must be selected`;
            isValid = false;
          }
          // Check for empty date fields
          else if (field.type === 'date' && !field.value) {
            newFormData[key].error = true;
            newFormData[key].helperText = 'Date is required';
            isValid = false;
          }
          // Email validation
          else if (
            key === 'email' &&
            field.value &&
            !/\S+@\S+\.\S+/.test(field.value)
          ) {
            newFormData[key].error = true;
            newFormData[key].helperText = 'Invalid email address';
            isValid = false;
          }
        }
  
        // No errors
        else {
          newFormData[key].error = false;
          newFormData[key].helperText = '';
        }
      }
    }
  
    setFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleSelectChange = async(name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    if(name == 'countryName'){
      let stateList = await statesList({meta:true,status:1,countryId:value?.id})
      if(stateList.status){
        let stateOptions = stateList.data.map((each:any)=>({ id: each.id, label: each.stateName }))
        newFormData.statename.options = stateOptions
      }
      
    }else if(name == 'statename'){
      let districtLists = await districtList({meta:true,status:1,stateId:value?.id})
      if(districtLists.status){
        let districtoptions = districtLists.data.map((each:any)=>({ id: each.id, label: each.districtName }))
        newFormData.district.options = districtoptions
      }
      
    }else if(name == 'district'){
      let cityLists = await cityList({meta:true,status:1,districtId:value?.id})
      if(cityLists.status){
        let cityOptions = cityLists.data.map((each:any)=>({ id: each.id, label: each.cityName }))
        newFormData.cityname.options = cityOptions
      }
      
    }
    
      
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
    // Change to Date | null
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleFormSubmit = async(e: React.FormEvent) => {
    // console.log('Form Submitted', formData);
    e.preventDefault();
    
    
    let object = {
      "name": formData.franchiseName.value,
      "mobile": formData.phoneNumber.value,
      "emailId": formData.email.value,
      "address": formData.address.value,
      "countryId": formData.countryName.value?.id,
      "stateId": formData.statename.value?.id,
      "districtId": formData.district.value?.id,
      "cityId": formData.cityname.value?.id,
      "pincode": formData.pincode.value,
      "mapUrl": formData.mapUrl.value,
      "status": formData.status.value?.id,
      "walletBalance" : Number(formData.wallet.value)
    }

    if (validate()) {
       setIsLoading(true);
           
              const result = await createFranchise(object);
              if (result.status) {
                setSuccessBanner({ flag: true, message: result.message, severity: Severity.Success });
                setIsLoading(false);
                setTimeout(() => {
                  setSuccessBanner({ flag: false, message: '', severity: Severity.Success });
                  setFormData(formFields);
                }, 2000);
              } else {
                setSuccessBanner({ flag: true, message: result.message, severity: Severity.Error });
                setIsLoading(false);
              }
            
    }
  };

  return (
    <Container
      style={{
        backgroundColor: '#FFF',
        padding: '40px 30px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        borderRadius: '10px'
      }}
    >
      <Typography variant="h3" marginBottom={2}>
        Create Branch
      </Typography>
      {successBanner.flag && (
          <Stack spacing={2} sx={{ m: 2 }}>
            <Alert
              severity={successBanner.severity}
              onClose={() => {
                setSuccessBanner({ flag: false, severity: successBanner.severity, message: '' });
              }}
            >
              {successBanner.message}
            </Alert>
          </Stack>
        )}
      <form  noValidate>
        <Grid container spacing={2}>
       
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.franchiseName} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.phoneNumber} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.countryName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.statename} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.district} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.cityname} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.address} onChange={handleChange} />
          </Grid>
          {/* <Grid item xs={6}>
            <CommonSelectField inputProps={formData.address} onSelectChange={handleSelectChange} />
          </Grid> */}
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.pincode} onChange={handleChange} />
          </Grid>
         
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.mapUrl} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.wallet} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.status} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}style={{display:'flex',justifyContent:'flex-end'}}>
             <Button
                        variant="contained"
                        color="primary"
                        sx={{ margin: '1rem' }}
                        onClick={handleFormSubmit}
                        
                        startIcon={isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                      >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateFranchise;
