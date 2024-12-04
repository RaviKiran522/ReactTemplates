import React, { useState, useEffect } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from 'moment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Formik } from 'formik';
import * as yup from 'yup';
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';

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
import MainCard from 'components/MainCard';
const EducationDetails = ({ educationDetailsFormData, setEducationDetailsFormData }: any) => {
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
    state: {
      label: 'State',
      id: 'state',
      name: 'state',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    city: {
      label: 'Select City',
      id: 'address',
      name: 'address',
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ],
      value: { id: 1, label: 'hyderabad' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    status: {
      label: 'Status',
      id: 'status',
      name: 'status',
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ],
      value: { id: 1, label: 'hyderabad' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
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
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ]
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

  type FormDataKeys = keyof typeof educationDetailsFormData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(educationDetailsFormData);
    let isValid = true;

    for (const key in educationDetailsFormData) {
      if (educationDetailsFormData.hasOwnProperty(key)) {
        const field = educationDetailsFormData[key];

        if (field.mandatory && !field.value && field.value == '') {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (key === 'email' && field.value && !/\S+@\S+\.\S+/.test(field.value)) {
          newFormData[key].error = true;
          newFormData[key].helperText = 'Invalid email address';
          isValid = false;
        } else {
          newFormData[key].helperText = '';
        }
      }
    }

    setEducationDetailsFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(educationDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setEducationDetailsFormData(newFormData);
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(educationDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setEducationDetailsFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
    // Change to Date | null
    const newFormData = _.cloneDeep(educationDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setEducationDetailsFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', educationDetailsFormData);
    e.preventDefault();
    const sampleObject = {
      branchName: educationDetailsFormData.branchName.value,
      phoneNumber: educationDetailsFormData.phoneNumber.value,
      email: educationDetailsFormData.email.value,
      state: educationDetailsFormData.state.value,
      address: educationDetailsFormData.address.value,
      city: educationDetailsFormData.city.value,
      status: educationDetailsFormData.status.value,
      pincode: educationDetailsFormData.pincode.value
    };
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', educationDetailsFormData);
    }
  };

  console.log('Form Submitted', educationDetailsFormData?.workingLocation);
  return (
    <Container
      style={{
        backgroundColor: '#FFF',
        padding: '40px 30px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        borderRadius: '10px'
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.education} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.university} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.employedin} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.designation} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.profession} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.workingLocation} onSelectChange={handleSelectChange} />
          </Grid>
          {educationDetailsFormData.workingLocation?.value?.label === "Abroad" && (
            <>
              <Grid item xs={6}>
                <CommonSelectField inputProps={educationDetailsFormData.country} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonSelectField inputProps={educationDetailsFormData.state} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonSelectField inputProps={educationDetailsFormData.visaType} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.passportNumber} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonDatePicker inputProps={educationDetailsFormData.validFrom} onDateChange={handleDateChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonDatePicker inputProps={educationDetailsFormData.validTill} onDateChange={handleDateChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.workingCompanyName} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.companyAddress} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.propertyDetails} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.annualIncome} onChange={handleChange} />
              </Grid>
            </>
          )}
          {educationDetailsFormData.workingLocation?.value?.label === 'India' && (
            <>
              <Grid item xs={6}>
                <CommonSelectField inputProps={educationDetailsFormData.workingState} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonSelectField inputProps={educationDetailsFormData.city} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.locationAdd} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.compName} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.workingSince} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.totalExp} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.passNumber} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.collegueName} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.propertyDetails} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={educationDetailsFormData.annualIncome} onChange={handleChange} />
              </Grid>
            </>
          )}
        </Grid>
      </form>
    </Container>
  );
};

export default EducationDetails;
