import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container, Typography } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from "moment"
import MainCard from 'components/MainCard';

const CreatePlans: React.FC = () => {
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
    duration: {
      label: 'Enter Duration',
      id: 'duration',
      name: 'duration',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    planname: {
      label: 'Enter Plan Name',
      id: 'naplannameme',
      name: 'planname',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    selectcategory: {
      label: 'Select Category',
      id: 'selectcategory',
      name: 'selectcategory',
      type:'select',
      options: [
        { id: 1, label: 'FREE' },
        { id: 2, label: 'PLATINUM' },
        { id: 3, label: 'PREMIUM' },
      ],
      value: {id:1,label:'PLATINUM'},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    numberofcontacts: {
        label: 'Select Number OF Contacts',
        id: 'numberofcontacts',
        name: 'numberofcontacts',
        type:'select',
        options: [
          { id: 1, label: 'Income Contacts' },
          { id: 2, label: 'Outgoing Contacts' },
        
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
    durationtype: {
      label: 'Select Duration Type',
      id: 'durationtype',
      name: 'durationtype',
      type:'select',
      options: [
        { id: 1, label: 'DAYS' },
        { id: 2, label: 'WEEKS' },
        { id: 3, label: 'MONTHS' },
        { id: 2, label: 'YEARS' },
        { id: 3, label: 'UNLIMITED' },
      ],
      // value: [{ id: 1, label: 'WEEKS' },{ id: 2, label: 'YEARS' },],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    planamount: {
        label: 'Enter Plan Amount',
        id: 'planamount',
        name: 'planamount',
        type: 'number',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options : []
      },
      plandiscount: {
        label: 'Enter Plan Discount',
        id: 'plandiscount',
        name: 'plandiscount',
        type: 'number',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options : []
      },
    activedate: {
        label: 'Plan Active Date',
        id: 'activedate',
        name: 'activedate',
        value: "",
        error: false,
        helperText: 'Please select date',
        mandatory: true,
        options : []
      },
      enddate: {
        label: 'Plan End Date',
        id: 'enddate',
        name: 'enddate',
        value: "",
        error: false,
        helperText: 'Please select date',
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

  const handleSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', formData);
    const sampleObject = {
      planname : formData.planname.value,
      duration : formData.duration.value,
      durationtype : formData.durationtype.value,
      numberofcontacts : formData.numberofcontacts.value,
      selectcategory : formData.selectcategory.value,
      planamount : formData.planamount.value,
      plandiscount : formData.plandiscount.value,
      activedate : moment(formData.activedate.value).format('YYYY/MM/DD'),
      enddate : moment(formData.enddate.value).format('YYYY/MM/DD')
    }
    console.log('sampleObject.........',sampleObject)
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <Container sx={{ backgroundColor: '#FFF',
      padding: '40px 30px',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      borderRadius: '10px'}}>
       
        <Typography variant="h3" marginBottom={2} sx={{padding:"15px 0px"}}>
            Create New Plan
        </Typography>

        <MainCard border={true} sx={{padding:"10px 20px"}}>
      <form onSubmit={handleSubmit} noValidate>

        <Grid container spacing={2}>
        <Grid item xs={12}>
            <CommonSelectField inputProps={formData.selectcategory} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.planname} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.duration} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}>
            <CommonSelectField inputProps={formData.durationtype} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}>
            <CommonSelectField inputProps={formData.numberofcontacts} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.planamount} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.plandiscount} onChange={handleChange} />
          </Grid>
          
          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.activedate} onDateChange={handleDateChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.enddate} onDateChange={handleDateChange} />
          </Grid>

          <Grid item xs={12} textAlign={"end"}>
            <Button type="submit" variant="contained" color="primary" sx={{margin:"1rem"}}>
              SAVE PLAN
            </Button>
          </Grid>
        </Grid>
      </form>
      </MainCard>
    </Container>
  );
};

export default CreatePlans;
