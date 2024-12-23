// import React, { useState } from 'react';

// import { Button, Grid, Container, Typography } from '@mui/material';
// import _ from 'lodash';
// import CommonDatePicker from 'pages/common-components/common-date';
// import moment from "moment"
// import MainCard from 'components/MainCard';

// const InVoicePrint: React.FC = () => {
//   // Define the structure of form data for type safety
//   interface FormField {
//     label: any;
//     id: any;
//     name: any;
//     type?: any;
//     placeholder?: any;
//     value: any;
//     error?: boolean;
//     helperText?: any;
//     mandatory?: boolean;
//     options: { id: any; label: any }[];
//     isMulti?: boolean;
//   }

//   interface FormData {
//     [key: string]: FormField;
//   }

//   const formFields: FormData = {
   
//     fromdate: {
//         label: 'From Date',
//         id: 'fromdate',
//         name: 'fromdate',
//         value: "",
//         error: false,
//         helperText: 'Please select date',
//         mandatory: true,
//         options : []
//       },
//       todate: {
//         label: 'To Date',
//         id: 'todate',
//         name: 'todate',
//         value: "",
//         error: false,
//         helperText: 'Please select date',
//         mandatory: true,
//         options : []
//       },
//   };

//   const [formData, setFormData] = useState<FormData>(formFields);

//   type FormDataKeys = keyof typeof formData;

//   const validate = (): boolean => {
//     let newFormData = _.cloneDeep(formData);
//     let isValid = true;

//     for (const key in formData) {
//       if (formData.hasOwnProperty(key)) {
//         const field = formData[key];

//         if (field.mandatory && !field.value && field.value == "") {
//           newFormData[key].error = true;
//           newFormData[key].helperText = `${field.label} is required`;
//           isValid = false;
         
       
//       } else if (field.mandatory && (field.type === "select" && (!field.value || !field.value.label))) {
//         newFormData[key].error = true;
//         newFormData[key].helperText = `${field.label} is required`;
//         isValid = false;
//         } else {
//           newFormData[key].helperText = '';
//         }
//       }
//     }

//     setFormData(newFormData);
//     return isValid;
//   };

  
 
//   const handleDateChange = (name: string, value: Date | null) => {  // Change to Date | null
//     const newFormData = _.cloneDeep(formData);
//     newFormData[name].value = value;
//     newFormData[name].error = false;
//     newFormData[name].helperText = '';
//     setFormData(newFormData);
//   };
//   const handleReset = () => {
//     setFormData(_.cloneDeep(formFields)); // Reset form data to the initial state
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     // console.log('Form Submitted', formData);
//     const sampleObject = {
      
//         fromdate : moment(formData.fromdate.value).format('YYYY/MM/DD'),
//       todate : moment(formData.todate.value).format('YYYY/MM/DD')
//     }
//     console.log('sampleObject.........',sampleObject)
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form Submitted', formData);
//     }
//   };
 

//   return (
//     <Container sx={{ backgroundColor: '#FFF',
//       padding: '40px 30px',
//       boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
//       borderRadius: '10px'}}>
       
//         <Typography variant="h3" marginBottom={2} sx={{padding:"15px 0px"}}>
//             INVOICE GANARATED
//         </Typography>

//         <MainCard border={true} sx={{padding:"10px 20px"}}>
//       <form onSubmit={handleSubmit} noValidate>

//         <Grid container spacing={2}>
        
          
//           <Grid item xs={12} sm={6} md={6}>
//             <CommonDatePicker inputProps={formData.fromdate} onDateChange={handleDateChange} />
//           </Grid>
//           <Grid item xs={12} sm={6} md={6}>
//             <CommonDatePicker inputProps={formData.todate} onDateChange={handleDateChange} />
//           </Grid>

//           <Grid item xs={12} textAlign={"end"}>
//             <Button type="submit" variant="contained" color="primary" sx={{margin:"1rem"}}>
//               SAVE 
//             </Button>
//             <Button
//                 type="button"
//                 variant="contained"
//                 color="secondary"
//                 sx={{ margin: '1rem' }}
//                 onClick={handleReset}
//               >
//                 RESET
//               </Button>
//             </Grid>
//           </Grid>
//         {/* </Grid> */}
//       </form>
//       </MainCard>
//     </Container>
//   );
// };

// export default InVoicePrint;


import React, { useState } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container, Typography } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from "moment"
import MainCard from 'components/MainCard';

const InVoicePrint: React.FC = () => {
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
    
    typeofinvoice: {
      label: 'Type of Invoice',
      id: 'typeofinvoice',
      name: 'typeofinvoice',
      type:'select',
      options: [
        { id: 1, label: 'Branch' },
        { id: 2, label: 'Franchise' },
        { id: 3, label: 'Customer' },
        { id: 3, label: 'Agent' },
      ],
      value: {id:1,label:''},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false,
    },
 
    fromdate: {
        label: 'Plan Active Date',
        id: 'fromdate',
        name: 'fromdate',
        value: "",
        error: false,
        helperText: 'Please select date',
        mandatory: true,
        options : []
      },
      todate: {
        label: 'Plan End Date',
        id: 'todate',
        name: 'todate',
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
     
      typeofinvoice : formData.typeofinvoice.value,
      
      fromdate : moment(formData.fromdate.value).format('YYYY/MM/DD'),
      todate : moment(formData.todate.value).format('YYYY/MM/DD')
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
       
        <Typography variant="h3" marginBottom={2} sx={{padding:"15px 0px",borderBottom:"1px solid #ccc"}}>
            INVOICE GANARATE
        </Typography>

        <MainCard border={true} sx={{padding:"10px 20px"}}>
      <form onSubmit={handleSubmit} noValidate>

        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <CommonSelectField inputProps={formData.typeofinvoice} onSelectChange={handleSelectChange} />
          </Grid>
        
          
          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.fromdate} onDateChange={handleDateChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CommonDatePicker inputProps={formData.todate} onDateChange={handleDateChange} />
          </Grid>

          <Grid item xs={12} textAlign={"end"}>
            <Button type="submit" variant="contained" color="primary" sx={{margin:"1rem"}}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      </MainCard>
    </Container>
  );
};

export default InVoicePrint;

