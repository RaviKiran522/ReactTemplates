import React, { useState } from 'react';
import { Button, Grid, Typography, Tab, Tabs, Box, Container } from '@mui/material';
import CommonSelectField from 'pages/common-components/common-select';
import _ from 'lodash';
import MainCard from 'components/MainCard';
import { padding } from '@mui/system';
import CommonInputField from 'pages/common-components/common-input';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from 'moment';

const AddInbound: React.FC = () => {
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
    countryName: {
        label: 'Enter Country Name',
        id: 'countryName',
        name: 'countryName',
        type: 'text',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
  
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
      mandatory: true,
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
        mandatory: true,
        isMulti: false,
      },
    selectuniversity: {
      label: 'Select Your University',
      id: 'selectuniversity',
      name: 'selectuniversity',
      type:'select',
      options: [
        { id: 1, label: 'Anhra' },
        { id: 2, label: 'JNTU ' },
        { id: 3, label: 'AKNU' },
       
      ],
      // value: [{ id: 1, label: 'WEEKS' },{ id: 2, label: 'YEARS' },],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    selectemployeeid: {
        label: 'Select Employee ID',
        id: 'selectemployeeid',
        name: 'selectemployeeid',
        type:'select',
        options: [
          { id: 1, label: 'Private' },
          { id: 2, label: 'Government' },
          { id: 3, label: 'Student' },
          { id: 4, label: 'Doctor' },
          { id: 5, label: 'UN Empoly' },
        ],
        // value: [{ id: 1, label: 'WEEKS' },{ id: 2, label: 'YEARS' },],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
        isMulti: false,
      },
      selectreligion: {
        label: 'Select Your Religion',
        id: 'selectreligion',
        name: 'selectreligion',
        type:'select',
        options: [
          { id: 1, label: 'Hindhu' },
          { id: 2, label: 'Muslim' },
          { id: 3, label: 'Chrisrtian' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
      selectfamilystatus: {
        label: 'Family Status ',
        id: 'selectfamilystatus',
        name: 'selectfamilystatus',
        type:'select',
        options: [
          { id: 1, label: 'Rich' },
          { id: 2, label: 'poor' },
          { id: 3, label: 'Very Rich' },
          { id: 4, label: 'Medium' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
      familytype: {
        label: 'Select Family Type',
        id: 'familytype',
        name: 'familytype',
        type:'select',
        options: [
          { id: 1, label: 'Joint Family' },
          { id: 2, label: 'Nuclear Family' },
          { id: 2, label: 'Others' },
        ],
        value: {id:1,label:''},
        error: false,
        helperText: '',
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
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
        mandatory: true,
        isMulti: false,
      },
      contactno: {
        label: 'Enter Contact NO',
        id: 'contactno',
        name: 'contactno',
        type: 'number',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
      Adharno: {
        label: 'Enter Adhar NO',
        id: 'Adharno',
        name: 'Adharno',
        type: 'number',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
      emailid: {
        label: 'Enter Email ID',
        id: 'emailid',
        name: 'emailid',
        type: 'email',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
      customername: {
        label: 'Enter Customer Name',
        id: 'customername',
        name: 'customername',
        type: 'text',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
      surname: {
        label: 'Enter Surname',
        id: 'surname',
        name: 'surname',
        type: 'text',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
      propertydetails: {
        label: 'Enter Property Details',
        id: 'propertydetails',
        name: 'propertydetails',
        type: 'text',
        value: '',
        error: false,
        helperText: '',
        mandatory: true,
        options: []
      },
      dateofbirth: {
        label: 'Select Date Of Birth',
        id: 'dateofbirth',
        name: 'dateofbirth',
        value: "",
        error: false,
        helperText: 'Please select date',
        mandatory: true,
        options : []
      },
      countryname: {
        label: 'Select Country Name',
        id: 'countryname',
        name: 'countryname',
        type:'select',
        options: [
          { id: 1, label: 'INDIA' },
          { id: 2, label: 'AUSTRALIA' },
          { id: 3, label: 'ENGLAND' },
        ],
        value: {id:null,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
      cityName: {
        label: 'Select Your City Name',
        id: 'cityName',
        name: 'cityName',
        type: 'slect',
        options: [
            { id: 1, label: 'Palakol' },
            { id: 2, label: 'Tanuku' },
            { id: 3, label: 'Madhapur' },
          ],
          value: {id:null,label:''},
          error: false,
          helperText: '',
          mandatory: true,
          isMulti: false,
       
      },
      districtName: {
        label: 'Select District Name',
        id: 'districtName',
        name: 'districtName',
        type:'select',
        options: [
          { id: 1, label: 'HYDERABADH' },
          { id: 2, label: 'VIZAG' },
          { id: 3, label: 'VARANGAL' },
        ],
        value: {id:null,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
  
      stateName: {
        label: 'Select State Name',
        id: 'stateName',
        name: 'stateName',
        type:'select',
        options: [
          { id: 1, label: 'ANDHRAPRADESH' },
          { id: 2, label: 'TELANGANA' },
          { id: 3, label: 'TAMILANADU' },
        ],
        value: {id:null,label:''},
        error: false,
        helperText: '',
        mandatory: true,
        isMulti: false,
      },
      statusName: {
        label: "Status",
        id: "statusName",
        name: "statusName",
        type: "select",
        options: [
            { id: 1, label: 'ENABLE' },
            { id: 2, label: 'DISABLE' },
        ],
        value: {id:null,label:''},
        error: false,
        helperText: "",
        mandatory: true,
        isMulti: false,
    },
    fatherrname: {
      label: 'Enter Father Name',
      id: 'fatherrname',
      name: 'fatherrname',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fatherrnumber: {
      label: 'Fatherr Mobile Number',
      id: 'fatherrnumber',
      name: 'fatherrnumber',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mothername: {
      label: 'Enter Mother Name',
      id: 'mothername',
      name: 'mothername',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mothernumber: {
      label: 'Mother Mobile Number',
      id: 'mothernumber',
      name: 'mothernumber',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fathercaste: {
      label: 'Select Your Father Caste',
      id: 'fathercaste',
      name: 'fathercaste',
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
      mandatory: true,
      isMulti: false,
    },
    fatherreligion: {
      label: 'Select Your Father Religion',
      id: 'fatherreligion',
      name: 'fatherreligion',
      type:'select',
      options: [
        { id: 1, label: 'Hindhu' },
        { id: 2, label: 'Muslim' },
        { id: 3, label: 'Chrisrtian' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
    mothercaste: {
      label: 'Select Your Mother Caste',
      id: 'mothercaste',
      name: 'mothercaste',
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
      mandatory: true,
      isMulti: false,
    },
    motherreligion: {
      label: 'Select Your Mother Religion',
      id: 'motherreligion',
      name: 'motherreligion',
      type:'select',
      options: [
        { id: 1, label: 'Hindhu' },
        { id: 2, label: 'Muslim' },
        { id: 3, label: 'Chrisrtian' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
  };

  const [formData, setFormData] = useState<FormData>(formFields);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  
  const handleChange = (name: keyof FormData, value: any) => {
    const updatedFormData: FormData = _.cloneDeep(formData);
    
    // Ensure TypeScript knows updatedFormData[name] has a valid structure
    if (updatedFormData[name]) {
      updatedFormData[name].value = value;
      updatedFormData[name].error = false; // Clear any existing errors
      updatedFormData[name].helperText = '';
    }
  
    setFormData(updatedFormData);
  };
  
  
  
//   const handleChange = (name: FormData, value: any) => {
//     setFormData((prev) => ({
//       ...prev,
//       [name]: {
//         ...prev[name], // Preserve existing properties of the field
//         value,         // Update the value
//         error: false,  // Reset error state
//         helperText: "", // Clear helper text
//       },
//     }));
//   };

  // Handle tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleDateChange = (name: string, value: Date | null) => {  // Change to Date | null
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };
  const handleSelectChange = (name: keyof FormData, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sampleObject = {
        contactno: formData.contactno.value,
        Adharno: formData.Adharno.value,
        emailid: formData.emailid.value,
        customername: formData.customername.value,
        surname: formData.surname.value,

        selectgender : formData.selectgender.value,
        selectmaritalstatus : formData.selectmaritalstatus.value,
        dateofbirth : moment(formData.dateofbirth.value).format('YYYY/MM/DD'),
        selectreligion : formData.selectreligion.value,
        selectcaste : formData.selectcaste.value,
        countryname: formData.countryname.value,
        stateName: formData.stateName.value,
        districtName:formData.districtName.value,
        cityName: formData.cityName.value,

        selectannualincome : formData.selectannualincome.value,
        selecteducation : formData.selecteducation.value,
        selectdesignations : formData.selectdesignations.value,
          selectprofession : formData.selectprofession.value,
          propertydetails: formData.propertydetails.value,
          selectuniversity : formData.selectuniversity.value,
          selectemployeeid : formData.selectemployeeid.value,
          
         
          fatherrname: formData.fatherrname.value,
          fatherrnumber: formData.fatherrnumber.value,
          mothername: formData.mothername.value,
          mothernumber: formData.mothernumber.value,
          fatherreligion : formData.fatherreligion.value,
          fathercaste : formData.fathercaste.value,
          motherreligion : formData.motherreligion.value,
          mothercaste : formData.mothercaste.value,
        
          selectfamilystatus : formData.selectfamilystatus.value,
          familytype : formData.familytype.value,
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

    // function handleChange(name: any, value: any): void {
    //     throw new Error('Function not implemented.');
    // }

  return (
    // <Container sx={{ backgroundColor: '#FFF',
    //     padding: '40px 30px',
    //     boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    //     borderRadius: '10px'}}>
    <Grid>
          <Typography variant="h3" marginBottom={2} sx={{padding:"15px 0px"}}>
              ADD INBOUND
          </Typography>

          <MainCard border={true} sx={{padding:'20px'}}>
            
      <Tabs value={selectedTab} onChange={handleTabChange} centered>
        <Tab label="Personal Info" />
        <Tab label="Family Info" />
        <Tab label="Reference Info" />
      </Tabs>

      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {selectedTab === 0 && (
            <>
              {/* <Grid container spacing={2}> */}
              
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.contactno} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.Adharno} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.emailid} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.customername} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.surname} onChange={handleChange} />
          </Grid>
        <Grid item xs={12} sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectgender} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectmaritalstatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.dateofbirth} onDateChange={handleDateChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectreligion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectcaste} onSelectChange={handleSelectChange} />
          </Grid>
         
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.countryname} onSelectChange={handleSelectChange} />
          </Grid>
          
          <Grid item xs={12} sm={6} md={6} >
            <CommonSelectField inputProps={formData.stateName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} >
            <CommonSelectField inputProps={formData.districtName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.cityName} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectprofession} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selecteducation} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectdesignations} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectuniversity} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectemployeeid} onSelectChange={handleSelectChange} />
          </Grid>
            <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectannualincome} onSelectChange={handleSelectChange} />
          </Grid>
          
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.propertydetails} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} textAlign={'end'}>
          <Button onClick={() => setSelectedTab(1)}  variant="contained">Next</Button>
          </Grid>
            </>
          )}

          {selectedTab === 1 && (
            <>
           
         
        
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectfamilystatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.familytype} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.fatherrname} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.fatherrnumber} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.mothername} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}  sm={6} md={6}>
            <CommonInputField inputProps={formData.mothernumber} onChange={handleChange} />
          </Grid>
          
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.fatherreligion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.fathercaste} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.motherreligion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.mothercaste} onSelectChange={handleSelectChange} />
          </Grid>

          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectpassport} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectworkinglocation} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} textAlign={'end'}>
          <Button onClick={() => setSelectedTab(2)}  variant="contained">Next</Button>
          </Grid>
            </>
          )}

          {selectedTab === 2 && (
            <>
            <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectmothertongue} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectcountyrliving} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6} >
            <CommonSelectField inputProps={formData.selectsmoke} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}  >
            <CommonSelectField inputProps={formData.selectdrink} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}  >
            <CommonSelectField inputProps={formData.selectcomplexion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}  >
            <CommonSelectField inputProps={formData.selectkhujadosam} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12}sm={6} md={6}  >
            <CommonSelectField inputProps={formData.selectgothram} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item  xs={12}sm={6} md={6}  >
            <CommonSelectField inputProps={formData.selectphoto} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} style={{  textAlign: 'end' }}>
            <Button type="submit" variant="contained" color="primary" >
              Submit
            </Button>
          </Grid>
          
            </>
          )}
        </Grid>
        
      </form>
     </MainCard>
     </Grid>
  );
};

export default AddInbound;
