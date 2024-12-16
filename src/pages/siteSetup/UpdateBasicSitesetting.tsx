import React, {useState} from 'react';
import MainCard from 'components/MainCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { padding } from '@mui/system';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container } from '@mui/material';
import _ from 'lodash';
// ==============================|| PROFILE - ACCOUNT ||============================== //

export default function UpdateBasicSitesetting() {
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
    title: {
      label: 'Title',
      id: 'title',
      name: 'title',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mobile: {
      label: 'Mobile',
      id: 'mobile',
      name: 'mobile',
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
    website: {
      label: 'Website',
      id: 'website',
      name: 'website',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
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
      state: formData.state.value,
      address: formData.address.value,
      city: formData.city.value,
      status: formData.status.value,
      pincode: formData.pincode.value
    };
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };
  return (
    <Grid>
        <MainCard>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', pb: 1 }}>
        <Typography>Update basic site setting</Typography>
        </Box>
        <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2} sx={{pt: 5}}>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.title} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.mobile} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.website} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.address} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
        </MainCard>
    </Grid>
  );
}
