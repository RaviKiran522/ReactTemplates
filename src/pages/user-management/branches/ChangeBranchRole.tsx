import Grid from '@mui/material/Grid';
import MainCard from 'components/MainCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import _ from 'lodash';
import CommonSelectField from 'pages/common-components/common-select';
import { Button } from '@mui/material';

export default function ChnageBranchRole() {
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
    selectRole: {
      label: 'Select Role',
      id: 'selectRole',
      name: 'selectRole',
      type: 'select',
      options: [
        { id: 1, label: 'satya' },
        { id: 2, label: 'dhana' },
        { id: 3, label: 'swami' }
      ],
      value: { id: 1, label: 'satya' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
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
        debugger;

        if ((field.mandatory && !field.value) || (field.mandatory && field.value == '')) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
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

  const hancleChageRole = async () => {
    await validate();
  };
  return (
    <Grid container spacing={3}>
      {/* <MainCard title="PERSONAL DETAILS"> */}
      <Grid item xs={12}>
        <Typography style={{ marginTop: '10px' }}>
          Current Role :{' '}
          <span style={{ backgroundColor: '#659BE0', color: '#FFFFFF', padding: 8, borderRadius: '5px' }}>BRANCH ADMINISTRATOR</span>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography style={{ marginTop: '5px' }}>
          <span style={{ backgroundColor: '#ED6B75', color: '#FFFFFF', padding: 8, borderRadius: '5px' }}>Note</span> : Please check the
          user before changing the role
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ backgroundColor: '#FAEAA9', padding: 5, borderRadius: '10px', marginTop: '5px' }}>
          <Typography style={{ fontSize: '20px', color: 'red', fontWeight: 'bold', marginBottom: '5px' }}>Warning !</Typography>
          <Typography>If you change the user role, The user permissions are updated to default according to role</Typography>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <CommonSelectField inputProps={formData.selectRole} onSelectChange={handleSelectChange} />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="primary" style={{ marginTop: '4px' }} onClick={hancleChageRole}>
          Change Role
        </Button>
      </Grid>

      {/* </MainCard> */}
    </Grid>
  );
}
