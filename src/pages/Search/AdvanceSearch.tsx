import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container, Typography } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from "moment"
import MainCard from 'components/MainCard';

const AdvanceSearch: React.FC = () => {
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
  
    selectgender: {
      label: 'Select Gender',
      id: 'selectgender',
      name: 'selectgender',
      type:'select',
      options: [
        { id: 1, label: 'Male' },
        { id: 2, label: 'Female' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false,
    },
    selectdesignations: {
        label: 'Select Your Designation',
        id: 'selectdesignations',
        name: 'selectdesignations',
        type:'select',
        options: [
                { id: 1, label: 'Teacher' },
                { id: 2, label: 'Chairman ' },
                { id: 3, label: 'Assistent Manager' },
                { id: 4, label: 'Driver' },
                { id: 5, label: 'Conductor' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
    selectage: {
      label: 'Select Your Age',
      id: 'selectage',
      name: 'selectage',
      type:'select',
      options: [
        { id: 1, label: '18 Yeras' },
        { id: 2, label: '20 Yeras ' },
        { id: 3, label: '23 Yeras' },
        { id: 4, label: '25 Yeras' },
        { id: 5, label: '30 Years' },
      ],
      // value: [{ id: 1, label: 'WEEKS' },{ id: 2, label: 'YEARS' },],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false,
    },
    selectheight: {
        label: 'Select Your Height',
        id: 'selectheight',
        name: 'selectheight',
        type:'select',
        options: [
          { id: 1, label: 'Below 4ft' },
          { id: 2, label: '4ft 5in' },
          { id: 3, label: '5ft 3in' },
          { id: 4, label: '5ft 7in' },
          { id: 5, label: 'Above 6ft' },
        ],
        // value: [{ id: 1, label: 'WEEKS' },{ id: 2, label: 'YEARS' },],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selecteducation: {
        label: 'Select Your Education',
        id: 'selecteducation',
        name: 'selecteducation',
        type:'select',
        options: [
          { id: 1, label: 'B.com' },
          { id: 2, label: 'BSc' },
          { id: 3, label: 'BED' },
          { id: 4, label: 'MCA' },
          { id: 5, label: 'MBA' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectmaritalstatus: {
        label: 'Select Your Marital Status',
        id: 'selectmaritalstatus',
        name: 'selectmaritalstatus',
        type:'select',
        options: [
          { id: 1, label: 'Dovorced' },
          { id: 2, label: 'Single' },
          { id: 3, label: 'Waiting for Divorce' },
          { id: 4, label: 'WidoWer' },
          { id: 5, label: 'No Divorce' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectprofession: {
        label: 'Select Your Profession',
        id: 'selectprofession',
        name: 'selectprofession',
        type:'select',
        options: [
          { id: 1, label: 'Former' },
          { id: 2, label: 'Doctor' },
          { id: 3, label: 'Clerk' },
          { id: 4, label: 'Civil Engineer' },
          { id: 5, label: 'Police' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectannualincome: {
        label: 'Select Your Annual Income',
        id: 'selectannualincome',
        name: 'selectannualincome',
        type:'select',
        options: [
          { id: 1, label: 'Below 1Lack' },
          { id: 2, label: '1Lack to 2Lacks' },
          { id: 3, label: '2Lack to 3Lacks' },
          { id: 4, label: '3Lack to 4lacks' },
          { id: 5, label: 'Above 5Lacks' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectcaste: {
        label: 'Select Your Caste',
        id: 'selectcaste',
        name: 'selectcaste',
        type:'select',
        options: [
          { id: 1, label: 'Kaapu/Naidu' },
          { id: 2, label: 'Brahmin' },
          { id: 3, label: 'Reddys' },
          { id: 4, label: 'Settys' },
          { id: 5, label: 'Aghnikula Kshathriyulu' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectsubcaste: {
        label: 'Select Your Subcaste',
        id: 'selectsubcaste',
        name: 'selectsubcaste',
        type:'select',
        options: [
          { id: 1, label: 'OC' },
          { id: 2, label: 'BC' },
          { id: 3, label: 'ST' },
          { id: 4, label: 'SC' },
          { id: 5, label: 'BC-B' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectraasi: {
        label: 'Select Your Raasi',
        id: 'selectraasi',
        name: 'selectraasi',
        type:'select',
        options: [
          { id: 1, label: 'Mesha' },
          { id: 2, label: 'Mithuna' },
          { id: 3, label: 'Vrishabha' },
          { id: 4, label: 'Karkataka' },
          { id: 5, label: 'Kanya' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectreadyforintercast: {
        label: 'Ready For Inter-cast',
        id: 'selectreadyforintercast',
        name: 'selectreadyforintercast',
        type:'select',
        options: [
          { id: 1, label: 'YES' },
          { id: 2, label: 'NO' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectpassport: {
        label: 'Select Passport',
        id: 'selectpassport',
        name: 'selectpassport',
        type:'select',
        options: [
          { id: 1, label: 'YES' },
          { id: 2, label: 'NO' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectworkinglocation: {
        label: 'Select Working Location',
        id: 'selectworkinglocation',
        name: 'selectworkinglocation',
        type:'select',
        options: [
          { id: 1, label: 'INDIA' },
          { id: 2, label: 'ABROAD' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectmothertongue: {
        label: 'Select Your Mother Tongue',
        id: 'selectmothertongue',
        name: 'selectmothertongue',
        type:'select',
        options: [
          { id: 1, label: 'TELUGU' },
          { id: 2, label: 'TAMIL' },
          { id: 3, label: 'KANNADA' },
          { id: 4, label: 'HINDHI' },
          { id: 5, label: 'MALAYALAM' },
          { id: 6, label: 'BENGALI' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectcountyrliving: {
        label: 'Select Country Living In',
        id: 'selectcountyrliving',
        name: 'selectcountyrliving',
        type:'select',
        options: [
          { id: 1, label: 'INDIA' },
          { id: 2, label: 'AUSTRALIA' },
          { id: 3, label: 'AMERICA' },
          { id: 4, label: 'CANADA' },
          { id: 5, label: 'ENGLAND' },
          { id: 6, label: 'JAPAN' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectsmoke: {
        label: 'Select Smoke',
        id: 'selectsmoke',
        name: 'selectsmoke',
        type:'select',
        options: [
          { id: 1, label: 'Occasional' },
          { id: 2, label: 'Regular' },
          { id: 3, label: 'NO' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectdrink: {
        label: 'Select Drink',
        id: 'selectdrink',
        name: 'selectdrink',
        type:'select',
        options: [
          { id: 1, label: 'Occasional' },
          { id: 2, label: 'Regular' },
          { id: 3, label: 'NO' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectcomplexion: {
        label: 'Select Complexion',
        id: 'selectcomplexion',
        name: 'selectcomplexion',
        type:'select',
        options: [
          { id: 1, label: 'Fair' },
          { id: 2, label: 'Very Fair' },
          { id: 3, label: 'Medium' },
          { id: 4, label: 'Dark' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectkhujadosam: {
        label: 'Select Khuja Dhosham',
        id: 'selectkhujadosam',
        name: 'selectkhujadosam',
        type:'select',
        options: [
          { id: 1, label: 'YES' },
          { id: 2, label: 'NO' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectgothram: {
        label: 'Select Gothram',
        id: 'selectgothram',
        name: 'selectgothram',
        type:'select',
        options: [
          { id: 1, label: 'VASISHTA' },
          { id: 2, label: 'DANANJAYA' },
          { id: 3, label: 'KAASHI' },
          { id: 4, label: 'HARITASA' },
          { id: 5, label: 'KOUNDINYA' },
          { id: 6, label: 'SRIVASTA' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
        isMulti: false,
      },
      selectphoto: {
        label: 'Select Photo',
        id: 'selectphoto',
        name: 'selectphoto',
        type:'select',
        options: [
          { id: 1, label: 'WITH PHOTO' },
          { id: 2, label: 'WITHOUT PHOTO' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: false,
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
  
  const handleReset = () => {
    setFormData(_.cloneDeep(formFields)); // Reset form data to initial state
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };


  const handleSubmit = (e: React.FormEvent) => {
   
    const sampleObject = {
   
    selectgender : formData.selectgender.value,
      selectage : formData.selectage.value,
      selectheight : formData.selectheight.value,
      selecteducation : formData.selecteducation.value,
      selectmaritalstatus : formData.selectmaritalstatus.value,
      selectprofession : formData.selectprofession.value,
      selectannualincome : formData.selectannualincome.value,
      selectdesignations : formData.selectdesignations.value,
      selectcaste : formData.selectcaste.value,
      selectsubcaste : formData.selectsubcaste.value,
      selectraasi : formData.selectraasi.value,
      selectreadyforintercast : formData.selectreadyforintercast.value,
      selectpassport : formData.selectpassport.value,
      selectworkinglocation : formData.selectworkinglocation.value,
      selectmothertongue : formData.selectmothertongue.value,
      selectcountyrliving : formData.selectcountyrliving.value,
      selectsmoke : formData.selectsmoke.value,
      selectdrink : formData.selectdrink.value,
      selectcomplexion : formData.selectcomplexion.value,
      selectkhujadosam : formData.selectkhujadosam.value,
      selectgothram : formData.selectgothram.value,
      selectphoto : formData.selectphoto.value,
    }
    console.log('sampleObject.........',sampleObject)
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    }
  };

  return (
    <div  
    style={{ backgroundColor: '#FFF',
      padding: '10px 20px',
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      borderRadius: '10px'}}
      >
       
        <Typography variant="h3" marginBottom={1}  sx={{padding:"10px 0px"}}>
            ADVANCE SEARCH
        </Typography>

        {/* <MainCard border={true} sx={{padding:"10px 10px"}}> */}
      <form onSubmit={handleSubmit} noValidate>

        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectgender} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectage} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectheight} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selecteducation} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectmaritalstatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectprofession} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectannualincome} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectdesignations} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectcaste} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectsubcaste} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectraasi} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectreadyforintercast} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectpassport} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectworkinglocation} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectmothertongue} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectcountyrliving} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} xl={3}>
            <CommonSelectField inputProps={formData.selectsmoke} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}  xl={3}>
            <CommonSelectField inputProps={formData.selectdrink} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}  xl={3}>
            <CommonSelectField inputProps={formData.selectcomplexion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}  xl={3}>
            <CommonSelectField inputProps={formData.selectkhujadosam} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}  xl={3}>
            <CommonSelectField inputProps={formData.selectgothram} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item  xs={12}sm={6} md={6} xl={3} >
            <CommonSelectField inputProps={formData.selectphoto} onSelectChange={handleSelectChange} />
          </Grid>

          <Grid item xs={12} textAlign={"end"}>
            <Button type="submit" variant="contained" color="primary" sx={{margin:"1rem"}}>
              SEARCH
            </Button>
            <Button type="submit" variant="contained" color="info" onClick={handleReset} sx={{margin:"1rem"}}>
              RESET
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* </MainCard> */}
    {/* 
     */}
     </div>
  );
};

export default AdvanceSearch;
