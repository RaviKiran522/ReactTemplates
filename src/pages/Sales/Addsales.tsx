import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container, Typography, Box } from '@mui/material';
import _ from 'lodash';
import MainCard from 'components/MainCard';

const AddSales: React.FC = () => {
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
    paymentmode: {
      label: 'Payment Mode',
      id: 'paymentmode',
      name: 'paymentmode',
      type: 'select',
      options: [
        { id: 1, label: 'Cheque' },
        { id: 2, label: 'Cash' },
        { id: 3, label: 'Online' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    customerid: {
      label: 'Enter Customer ID',
      id: 'customerid',
      name: 'customerid',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    branch: {
      label: 'Select Branch',
      id: 'branch',
      name: 'branch',
      type: 'select',
      options: [
        { id: 1, label: 'Guntur Head Office' },
        { id: 2, label: 'Ongole' },
        { id: 3, label: 'Nellure' },
        { id: 4, label: 'Hyderabad' },
        { id: 5, label: 'Vijayawada' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    type: {
      label: 'Select Type',
      id: 'type',
      name: 'type',
      type: 'select',
      options: [
        { id: 1, label: 'Package' },
        { id: 2, label: 'Custom' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    marriagetype: {
      label: 'Select Marriage Type',
      id: 'marriagetype',
      name: 'marriagetype',
      type: 'select',
      options: [
        { id: 1, label: 'First' },
        { id: 2, label: 'Second' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
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

        if (field.mandatory && (!field.value || field.value.label === '')) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };

//   const handleReset = () => {
//     setFormData({
//       customerid: { label: 'Enter Customer ID', id: 'customerid', name: 'customerid', type: 'text', value: '', error: false, helperText: '', mandatory: true, options: [] },
//       type: { label: 'Select Type', id: 'type', name: 'type', type: 'select', options: [{ id: 1, label: 'Package' }, { id: 2, label: 'Custom' }], value: { id: 1, label: '' }, error: false, helperText: '', mandatory: true, isMulti: false },
//       marriagetype: { label: 'Select Marriage Type', id: 'marriagetype', name: 'marriagetype', type: 'select', options: [{ id: 1, label: 'First' }, { id: 2, label: 'Second' }], value: { id: 1, label: '' }, error: false, helperText: '', mandatory: true, isMulti: false },
//       branch: { label: 'Select Branch', id: 'branch', name: 'branch', type: 'select', options: [{ id: 1, label: 'Guntur Head Office' }, { id: 2, label: 'Ongole' }, { id: 3, label: 'Nellure' }, { id: 4, label: 'Hyderabad' }, { id: 5, label: 'Vijayawada' }], value: { id: 1, label: 'Select Branch' }, error: false, helperText: '', mandatory: true, isMulti: false },
//       paymentmode: { label: 'Payment Mode', id: 'paymentmode', name: 'paymentmode', type: 'select', options: [{ id: 1, label: 'Cheque' }, { id: 2, label: 'Cash' }, { id: 3, label: 'Online' }], value: { id: 1, label: '' }, error: false, helperText: '', mandatory: true, isMulti: false }
//     });
//   };
   const handleReset = () => {
    setFormData(_.cloneDeep(formFields)); // Reset form data to initial state
  };
  return (
    <Container sx={{
      backgroundColor: '#FFF',
      padding: '40px 30px',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      borderRadius: '10px'
    }}>
      <Typography variant="h3" marginBottom={2} sx={{ padding: "15px 0px" }}>
        ADD SALES
      </Typography>

      <MainCard border={true} sx={{ padding: "10px 20px" }}>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <CommonInputField inputProps={formData.customerid} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button variant="contained" sx={{ marginTop: "8px", backgroundColor: "#008000" }} size="large">
                Get Data
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.type} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.marriagetype} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.branch} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <CommonSelectField inputProps={formData.paymentmode} onSelectChange={handleSelectChange} />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, marginTop: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "primary",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  Generate Invoice
                </Button>
                <Button
                  variant="contained" color="secondary"
                  sx={{
                   
                    borderColor: "#808080",
                  }}
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </MainCard>
    </Container>
  );
};

export default AddSales;
