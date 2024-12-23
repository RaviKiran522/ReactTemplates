import React, { useState } from 'react';
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
const CreateBranch: React.FC = () => {
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
    branchName: {
      label: 'Branch Name',
      id: 'branchName',
      name: 'branchName',
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
     
    statename: {
      label: 'Select State Name',
      id: 'statename',
      name: 'statename',
      type:'select',
      options: [
        { id: 1, label: 'ANDHRAPRADESH' },
        { id: 2, label: 'TELANGANA' },
        { id: 3, label: 'TAMILANADU' },
      ],
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
      options: [
        { id: 1, label: 'Hyderabadh' },
        { id: 2, label: 'Vizag' },
        { id: 3, label: 'Tanuku' },
      ],
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
        { id: 1, label: 'Hyderabadh' },
        { id: 2, label: 'Vizag' },
        { id: 3, label: 'Tanuku' },
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    adress: {
      label: 'Address',
      id: 'adress',
      name: 'adress',
      type:'select',
      options: [
        { id: 1, label: 'Hyderabadh' },
        { id: 2, label: 'Vizag' },
        { id: 3, label: 'Tanuku' },
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
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
    date: {
      label: 'Date',
      id: 'date',
      name: 'date',
      value: '',
      error: false,
      helperText: 'Please select date',
      mandatory: true,
      options: []
    }
  };

  const [formData, setFormData] = useState<FormData>(formFields);

  type FormDataKeys = keyof typeof formData;

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

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
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

  const handleSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', formData);
    e.preventDefault();
    const sampleObject = {
      branchName: formData.branchName.value,
      phoneNumber: formData.phoneNumber.value,
      email: formData.email.value,
      statename: formData.statename.value,
      adress: formData.adress.value,
      cityname: formData.cityname.value,
      status: formData.status.value,
      pincode: formData.pincode.value
    };
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', formData);
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
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.branchName} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.phoneNumber} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.statename} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.cityname} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.adress} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.pincode} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.status} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateBranch;
