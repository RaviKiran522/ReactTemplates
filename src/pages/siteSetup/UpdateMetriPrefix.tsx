import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container, Typography } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from "moment"
import MainCard from 'components/MainCard';
import { martiprefixSetup } from 'services/Sitesetups/SiteSetting';

const UpdateMetricPrefix: React.FC = () => {
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
    customerPrefix: {
      label: 'Customer Matri Prefix',
      id: 'customerPrefix',
      name: 'customerPrefix',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    branchPrefix: {
      label: 'Branch Matri Prefix',
      id: 'branchPrefix',
      name: 'branchPrefix',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    franchisePrefix: {
      label: 'Franchise Matri Prefix',
      id: 'franchisePrefix',
      name: 'franchisePrefix',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    agentPrefix: {
      label: 'Agent Matri Prefix',
      id: 'agentPrefix',
      name: 'agentPrefix',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
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

        if (field.mandatory && !field.value && field.value == "") {
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
 
  const handleDateChange = (name: string, value: Date | null) => {  // Change to Date | null
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // console.log('Form Submitted', formData);
    e.preventDefault();
    if (validate()) {

    const sampleObject = {
      customerMatriPrefix :String(formData.customerPrefix.value),
      branchMatriPrefix :String(formData.branchPrefix.value),
      franchiseMatriPrefix :String(formData.franchisePrefix.value),
      agentMatriPrefix :String(formData.agentPrefix.value),
      
    }
       const result = await martiprefixSetup(sampleObject);
    
    console.log('sampleObject.........',sampleObject)
  
      console.log('Form Submitted', formData);
    }
    
  };
  console.log('formData: ', formData)

  return (
    <Container sx={{ backgroundColor: '#FFF',
      padding: '40px 30px',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      borderRadius: '10px'}}>
       
        <Typography variant="h3" marginBottom={2} sx={{padding:"15px 0px"}}>
           Update Matri Prifix
        </Typography>

        <MainCard border={true} sx={{padding:"10px 20px"}}>
      <form onSubmit={handleSubmit} noValidate>

        <Grid container spacing={2}>
       
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.customerPrefix} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.branchPrefix} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.franchisePrefix} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.agentPrefix} onChange={handleChange} />
          </Grid>
         

          <Grid item xs={12} textAlign={"end"}>
            <Button type="submit" variant="contained" color="primary" sx={{margin:"1rem"}}>
              Update Prefix
            </Button>
          </Grid>
        </Grid>
      </form>
      </MainCard>
    </Container>
  );
};



export default UpdateMetricPrefix;