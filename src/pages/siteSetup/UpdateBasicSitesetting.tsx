import React, { useState } from 'react';
import MainCard from 'components/MainCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { padding, Stack } from '@mui/system';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container, Alert } from '@mui/material';
import _ from 'lodash';
import { Severity } from 'Common/utils';
import { basicSetup } from '../../services/Sitesetups/SiteSettings'
// ==============================|| PROFILE - ACCOUNT ||============================== //

export default function UpdateBasicSitesetting() {
  const [successBanner, setSuccessBanner] = useState({ flag: false, severity: Severity.Success, message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [listLoader, setListLoader] = useState(false);
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
    webName: {
      label: 'Web Name',
      id: 'webName',
      name: 'webName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    webTitle: {
      label: 'Website Title',
      id: 'webTitle',
      name: 'webTitle',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    websiteDes: {
      label: 'Website Description',
      id: 'websiteDes',
      name: 'websiteDes',
      type: 'email',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    countryCode: {
      label: 'Country Code',
      id: 'countryCode',
      name: 'countryCode',
      type: 'select',
      options: [
        { id: 1, label: 'Please Select' },
        { id: 2, label: 'Male' },
        { id: 3, label: 'Female' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    contactNumber: {
      label: 'Contact Number',
      id: 'contactNumber',
      name: 'contactNumber',
      type: 'text',
      options: [

      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    fullAddress: {
      label: 'Full Address',
      id: 'fullAddress',
      name: 'fullAddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    taxApplicable: {
      label: 'Tax Applicable',
      id: 'taxApplicable',
      name: 'taxApplicable',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' },
        // { id: 3, label: 'No' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    taxName: {
      label: 'Tax Name ',
      id: 'taxName',
      name: 'taxName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    serviceTax: {
      label: 'Service Tax (%)',
      id: 'serviceTax',
      name: 'serviceTax',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    defaultCountryCode: {
      label: 'Default Country Code',
      id: 'defaultCountryCode',
      name: 'defaultCountryCode',
      type: 'select',
      options: [
        { id: 1, label: '+91' },
        { id: 2, label: '+44' },
        // { id: 3, label: 'Female' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
  };

  const [formData, setFormData] = useState<FormData>(formFields);

  type FormDataKeys = keyof typeof formData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory && !field.value && field.value == '') {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.mandatory && (field.type === "select" && (!field.value || !field.value.label))) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
          newFormData[key].helperText = '';
        }
      }
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    console.log("checking: ")
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

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("checking.......")
    // console.log('Form Submitted', formData);
    e.preventDefault();
    if (validate()) {

      const sampleObject = {
        webName: formData.webName.value,
        websiteTitle: formData.webTitle.value,
        websiteDescription: formData.websiteDes.value,
        contactNo: formData.contactNumber.value,
        fullAddress: formData.fullAddress.value,
        taxApplicable: formData.taxApplicable.value.id == 1 ? true : false,
        taxName: formData.taxName.value,
        serviceTax: Number(formData.serviceTax.value),
        defaultCountryCode: String(formData.defaultCountryCode.value.id),

      };
      const result = await basicSetup(sampleObject);

      console.log('sampleObject.........', sampleObject);
      console.log('Form Submitted', formData);
    }
  };
  console.log('formData: ', formData)
  return (
    <Container sx={{
      backgroundColor: '#FFF',
      padding: '40px 30px',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      borderRadius: '10px'
    }}>


      <Typography variant="h3" marginBottom={2} sx={{ padding: "15px 0px" }}>Update basic site setting</Typography>
      <MainCard border={true} sx={{ padding: "10px 20px" }}>

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

        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item xs={6}>
              <CommonInputField inputProps={formData.webName} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <CommonInputField inputProps={formData.webTitle} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <CommonInputField inputProps={formData.websiteDes} onChange={handleChange} />
            </Grid>
            {/* <Grid item xs={2}>
              <CommonSelectField inputProps={formData.countryCode} onSelectChange={handleSelectChange} />
            </Grid> */}
            <Grid item xs={4}>
              <CommonInputField inputProps={formData.contactNumber} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <CommonInputField inputProps={formData.fullAddress} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <CommonSelectField inputProps={formData.taxApplicable} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={6}>
              <CommonInputField inputProps={formData.taxName} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <CommonInputField inputProps={formData.serviceTax} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <CommonSelectField inputProps={formData.defaultCountryCode} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} textAlign={"end"}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </MainCard>
    </Container>
  );
}
