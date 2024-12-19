import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container } from '@mui/material';
import _ from 'lodash';
import {
  
  Typography,
  
} from '@mui/material';
import CommonTextAreaField from 'pages/common-components/common-textarea';

const AddContacts: React.FC = () => {
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
    addcontacts: {
      label: 'Add contacts',
      id: 'addcontacts',
      name: 'addcontacts',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
   
    selectuser: {
      label: 'Select User',
      id: 'selectuser',
      name: 'selectuser',
      type: 'select',
      options: [
        { id: 1, label: 'Mahesh' },
        { id: 2, label: 'Virat' },
        { id: 3, label: 'Harish' },
        { id: 4, label: 'Sathya' },
        { id: 5, label: 'Nani' },
        { id: 6, label: 'Prakash' },
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
  
          if (field.mandatory && !field.value && field.value == "") {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`;
            isValid = false;
          } else if (field.mandatory && (field.type === "select" && (!field.value || !field.value.label))) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`;
            isValid = false;
          }
          
          else {
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
    // console.log('Form Submitted', formData);
    e.preventDefault();
    const sampleObject = {
      
      addcontacts: formData.addcontacts.value,
      selectuser: formData.selectuser.value,
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
        Add Contacts
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CommonSelectField inputProps={formData.selectuser} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={formData.addcontacts} onChange={handleChange} />
          </Grid>
          {/* <Grid item xs={6}>
            <CommonTextAreaField inputProps={formData.addcontacts} onChange={handleChange} />
          </Grid> */}
          
          <Grid item xs={12} textAlign={"end"}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddContacts;
