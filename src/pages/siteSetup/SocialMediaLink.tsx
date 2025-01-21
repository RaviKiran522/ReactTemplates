import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container, Typography } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from "moment"
import MainCard from 'components/MainCard';
import { socialmediaSetup } from 'services/Sitesetups/SiteSettings';

const SocialMediaLink: React.FC = () => {
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
    facebookLink: {
      label: 'Facebook Link',
      id: 'facebookLink',
      name: 'facebookLink',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    twitterLink: {
      label: 'Twitter Link',
      id: 'twitterLink',
      name: 'twitterLink',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    linkedinLink: {
      label: 'Linkedin Link',
      id: 'linkedinLink',
      name: 'linkedinLink',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    youtubeLink: {
      label: 'Youtube Link',
      id: 'youtubeLink',
      name: 'youtubeLink',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    instaLink: {
      label: 'Instagram Link',
      id: 'instaLink',
      name: 'instaLink',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options : []
    },
    skypeId: {
      label: 'Skype Id',
      id: 'skypeId',
      name: 'skypeId',
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
      facebookLink :String(formData.facebookLink.value),
      twitterLink :String(formData.twitterLink.value),
      linkedinLink :String(formData.linkedinLink.value),
      youtubeLink :String(formData.youtubeLink.value),
      instagramLink :String(formData.instaLink.value),
      skypeId :String(formData.skypeId.value),
      
    }
        const result = await socialmediaSetup(sampleObject);
    
    console.log('sampleObject.........',sampleObject)
    
      console.log('Form Submitted', formData);
    }
  };

  return (
    <Container sx={{ backgroundColor: '#FFF',
      padding: '40px 30px',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      borderRadius: '10px'}}>
       
        <Typography variant="h3" marginBottom={2} sx={{padding:"15px 0px"}}>
           Update Social Media Links
        </Typography>

        <MainCard border={true} sx={{padding:"10px 20px"}}>
      <form onSubmit={handleSubmit} noValidate>

        <Grid container spacing={2}>
       
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.facebookLink} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.twitterLink} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.linkedinLink} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.youtubeLink} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.instaLink} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonInputField inputProps={formData.skypeId} onChange={handleChange} />
          </Grid>
         

          <Grid item xs={12} textAlign={"end"}>
            <Button type="submit" variant="contained" color="primary" sx={{margin:"1rem"}}>
              Update Links
            </Button>
          </Grid>
        </Grid>
      </form>
      </MainCard>
    </Container>
  );
};



export default SocialMediaLink;