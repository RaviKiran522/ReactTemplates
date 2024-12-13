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
const FamilyInfo = ({ familyDetailsFormData, setFamilyDetailsFormData }: any) => {
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

  type FormDataKeys = keyof typeof familyDetailsFormData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(familyDetailsFormData);
    let isValid = true;

    for (const key in familyDetailsFormData) {
      if (familyDetailsFormData.hasOwnProperty(key)) {
        const field = familyDetailsFormData[key];

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

    setFamilyDetailsFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(familyDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFamilyDetailsFormData(newFormData);
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(familyDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFamilyDetailsFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
    // Change to Date | null
    const newFormData = _.cloneDeep(familyDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFamilyDetailsFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', familyDetailsFormData);
    e.preventDefault();
    const sampleObject = {
      branchName: familyDetailsFormData.branchName.value,
      phoneNumber: familyDetailsFormData.phoneNumber.value,
      email: familyDetailsFormData.email.value,
      state: familyDetailsFormData.state.value,
      address: familyDetailsFormData.address.value,
      city: familyDetailsFormData.city.value,
      status: familyDetailsFormData.status.value,
      pincode: familyDetailsFormData.pincode.value
    };
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', familyDetailsFormData);
    }
  };

  console.log('Form Submitted', familyDetailsFormData?.workingLocation);
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
            <CommonSelectField inputProps={familyDetailsFormData.familyStatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.familyType} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.fatherName} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.freligion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.fcaste} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.fatherStatus} onSelectChange={handleSelectChange} />
          </Grid>
          {familyDetailsFormData.fatherStatus?.value?.label === 'Alive' && (
            <>
              <Grid item xs={6}>
                <CommonSelectField inputProps={familyDetailsFormData.fhealthCondition} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.workingSector} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.fmobile} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.faddress} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.fprofession} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.fannualIncome} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.fproperty} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.pension} onChange={handleChange} />
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.motherName} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.mmaidenName} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.mreligion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.mcaste} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.motherStatus} onSelectChange={handleSelectChange} />
          </Grid>
          {familyDetailsFormData.motherStatus?.value?.label === 'Alive' && (
            <>
              <Grid item xs={6}>
                <CommonSelectField inputProps={familyDetailsFormData.mhealthCondition} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.mmobile} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.mprofession} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.mannualIncome} onChange={handleChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={familyDetailsFormData.mproperty} onChange={handleChange} />
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.presentAddress} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.permanentAddress} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.brothers} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.sisters} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.refName} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.refMobile} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.relation} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={familyDetailsFormData.refAddress} onChange={handleChange} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default FamilyInfo;
