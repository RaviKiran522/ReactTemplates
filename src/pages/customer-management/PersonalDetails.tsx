import React, { useState, useEffect } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from 'moment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Formik } from 'formik';
import * as yup from 'yup';
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';

import {
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
  // Divider,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  // IconButton,
  FormHelperText
} from '@mui/material';
import MainCard from 'components/MainCard';
const PersonalDetails = ({ personalDetailsFormData, setPersonalDetailsFormData }: any) => {
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
    branchName: {
      label: 'Branch Name',
      id: 'branchName',
      name: 'branchName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    phoneNumber: {
      label: 'Phone Number',
      id: 'phoneNumber',
      name: 'phoneNumber',
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
    state: {
      label: 'State',
      id: 'state',
      name: 'state',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    city: {
      label: 'Select City',
      id: 'address',
      name: 'address',
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ],
      value: { id: 1, label: 'hyderabad' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    status: {
      label: 'Status',
      id: 'status',
      name: 'status',
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ],
      value: { id: 1, label: 'hyderabad' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
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
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ]
    },
    pincode: {
      label: 'Pincode',
      id: 'pincode',
      name: 'pincode',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    date: {
      label: 'Date',
      id: 'date',
      name: 'date',
      value: '',
      error: false,
      helperText: 'Please select date',
      mandatory: true,
      options: []
    }
  };

  type FormDataKeys = keyof typeof personalDetailsFormData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(personalDetailsFormData);
    let isValid = true;

    for (const key in personalDetailsFormData) {
      if (personalDetailsFormData.hasOwnProperty(key)) {
        const field = personalDetailsFormData[key];

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

    setPersonalDetailsFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(personalDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setPersonalDetailsFormData(newFormData);
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(personalDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setPersonalDetailsFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
    // Change to Date | null
    const newFormData = _.cloneDeep(personalDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setPersonalDetailsFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', personalDetailsFormData);
    e.preventDefault();
    const sampleObject = {
      branchName: personalDetailsFormData.branchName.value,
      phoneNumber: personalDetailsFormData.phoneNumber.value,
      email: personalDetailsFormData.email.value,
      state: personalDetailsFormData.state.value,
      address: personalDetailsFormData.address.value,
      city: personalDetailsFormData.city.value,
      status: personalDetailsFormData.status.value,
      pincode: personalDetailsFormData.pincode.value
    };
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', personalDetailsFormData);
    }
  };

  console.log('Form Submitted', personalDetailsFormData);
  return (
    <Container
      style={{
        backgroundColor: '#FFF',
        padding: '40px 30px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        borderRadius: '10px'
      }}
    >
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.fullName} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.surname} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.gender} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.mobileNumber} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.aadharNumber} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonDatePicker inputProps={personalDetailsFormData.dateOfBirth} onDateChange={handleDateChange} />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <TimePicker
                  label={personalDetailsFormData.timeOfBirth.label}
                  value={personalDetailsFormData.timeOfBirth.value}
                  onChange={(newValue: Date | null) => {
                    if (newValue) {
                      setPersonalDetailsFormData({
                        ...personalDetailsFormData,
                        timeOfBirth: { ...personalDetailsFormData.timeOfBirth, value: newValue }
                      });
                    } else {
                      setPersonalDetailsFormData({
                        ...personalDetailsFormData,
                        timeOfBirth: { ...personalDetailsFormData.timeOfBirth, value: null }
                      });
                    }
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.birthPlace} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectReligion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectCaste} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectStar} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectRassi} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectPadam} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.gothram} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectkujadosham} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectheight} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectbloodgroup} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectmothertounge} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selecthealthcodition} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectcomplexion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectmaritalstatus} onSelectChange={handleSelectChange} />
          </Grid>
          {personalDetailsFormData.selectmaritalstatus.value.label === 'Widower' && (
            <>
              <Grid item xs={6}>
                <CommonSelectField inputProps={personalDetailsFormData.havingChildren} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <MainCard title={personalDetailsFormData.deathCertificate.label}>
                  <Formik
                    initialValues={{ files: null }}
                    onSubmit={() => {
                      // submit form
                    }}
                    validationSchema={yup.object().shape({
                      files: yup.mixed().required('Avatar is a required.')
                    })}
                  >
                    {({ values, handleSubmit, setFieldValue, touched, errors }) => {
                      useEffect(() => {
                        setPersonalDetailsFormData({
                          ...personalDetailsFormData,
                          ssccertificate: { ...personalDetailsFormData?.deathCertificate, value: values?.files }
                        });
                      }, [values]);
                      return (
                        <form onSubmit={() => {}}>
                          <Grid spacing={3}>
                            <Grid item xs={12}>
                              <Stack spacing={1.5} alignItems="center">
                                <UploadMultiFile
                                  showList={true}
                                  setFieldValue={setFieldValue}
                                  files={values.files}
                                  error={touched.files && !!errors.files}
                                />
                              </Stack>
                              {touched.files && errors.files && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                  {errors.files as string}
                                </FormHelperText>
                              )}
                            </Grid>
                          </Grid>
                        </form>
                      );
                    }}
                  </Formik>
                </MainCard>
              </Grid>
              <Grid item xs={6}>
                <CommonDatePicker inputProps={personalDetailsFormData.dateOfMarriage} onDateChange={handleDateChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonDatePicker inputProps={personalDetailsFormData.dateOfDeath} onDateChange={handleDateChange} />
              </Grid>
            </>
          )}
          {personalDetailsFormData.selectmaritalstatus.value.label === 'Divorced' && (
            <>
              <Grid item xs={6}>
                <CommonSelectField inputProps={personalDetailsFormData.havingChildren} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <MainCard title={personalDetailsFormData.divorceCertificate.label}>
                  <Formik
                    initialValues={{ files: null }}
                    onSubmit={() => {
                      // submit form
                    }}
                    validationSchema={yup.object().shape({
                      files: yup.mixed().required('Avatar is a required.')
                    })}
                  >
                    {({ values, handleSubmit, setFieldValue, touched, errors }) => {
                      useEffect(() => {
                        setPersonalDetailsFormData({
                          ...personalDetailsFormData,
                          ssccertificate: { ...personalDetailsFormData?.divorceCertificate, value: values?.files }
                        });
                      }, [values]);
                      return (
                        <form onSubmit={() => {}}>
                          <Grid spacing={3}>
                            <Grid item xs={12}>
                              <Stack spacing={1.5} alignItems="center">
                                <UploadMultiFile
                                  showList={true}
                                  setFieldValue={setFieldValue}
                                  files={values.files}
                                  error={touched.files && !!errors.files}
                                />
                              </Stack>
                              {touched.files && errors.files && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                  {errors.files as string}
                                </FormHelperText>
                              )}
                            </Grid>
                          </Grid>
                        </form>
                      );
                    }}
                  </Formik>
                </MainCard>
              </Grid>
              <Grid item xs={6}>
                <CommonDatePicker inputProps={personalDetailsFormData.dateOfMarriage} onDateChange={handleDateChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonDatePicker inputProps={personalDetailsFormData.dateOfDivorce} onDateChange={handleDateChange} />
              </Grid>
              <Grid item xs={6}>
                <CommonInputField inputProps={personalDetailsFormData.reasonForDivorce} onChange={handleChange} />
              </Grid>
            </>
          )}
          {personalDetailsFormData.selectmaritalstatus.value.label === 'Waiting for Divorce' && (
            <>
              <Grid item xs={6}>
                <CommonSelectField inputProps={personalDetailsFormData.havingChildren} onSelectChange={handleSelectChange} />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <MainCard title={personalDetailsFormData.uploadAcknowledgement.label}>
                  <Formik
                    initialValues={{ files: null }}
                    onSubmit={() => {
                      // submit form
                    }}
                    validationSchema={yup.object().shape({
                      files: yup.mixed().required('Avatar is a required.')
                    })}
                  >
                    {({ values, handleSubmit, setFieldValue, touched, errors }) => {
                      useEffect(() => {
                        setPersonalDetailsFormData({
                          ...personalDetailsFormData,
                          ssccertificate: { ...personalDetailsFormData?.uploadAcknowledgement, value: values?.files }
                        });
                      }, [values]);
                      return (
                        <form onSubmit={() => {}}>
                          <Grid spacing={3}>
                            <Grid item xs={12}>
                              <Stack spacing={1.5} alignItems="center">
                                <UploadMultiFile
                                  showList={true}
                                  setFieldValue={setFieldValue}
                                  files={values.files}
                                  error={touched.files && !!errors.files}
                                />
                              </Stack>
                              {touched.files && errors.files && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                  {errors.files as string}
                                </FormHelperText>
                              )}
                            </Grid>
                          </Grid>
                        </form>
                      );
                    }}
                  </Formik>
                </MainCard>
              </Grid>
            </>
          )}
          {personalDetailsFormData.selectmaritalstatus.value.label === 'No Divorce' && (
            <>
              <Grid item xs={6}>
                <CommonSelectField inputProps={personalDetailsFormData.havingChildren} onSelectChange={handleSelectChange} />
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectsmoke} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectdrink} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectfood} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.about} onChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.hobbies} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.intrests} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.favouritemusic} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.sports} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.favouritecuisne} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.favouritereads} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.preferedmovies} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.prefereddressingstyle} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.spokenlanguages} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectcountry} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectstate} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectdistrict} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.city} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.address} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.altmobile} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.altemail} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <TimePicker
                  label={personalDetailsFormData.timeToCall.label}
                  value={personalDetailsFormData.timeToCall.value}
                  onChange={(newValue: Date | null) => {
                    if (newValue) {
                      setPersonalDetailsFormData({
                        ...personalDetailsFormData,
                        timeToCall: { ...personalDetailsFormData.timeToCall, value: newValue }
                      });
                    } else {
                      setPersonalDetailsFormData({
                        ...personalDetailsFormData,
                        timeToCall: { ...personalDetailsFormData.timeToCall, value: null }
                      });
                    }
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.pincode} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.status} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.applicationfor} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.source} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.nearestbranch} onSelectChange={handleSelectChange} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PersonalDetails;
