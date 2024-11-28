import React, { useState, SyntheticEvent, useEffect } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import {
  Button,
  Grid,
  Container,
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
import _ from 'lodash';
import moment from 'moment';
import CommonDatePicker from 'pages/common-components/common-date';
import MainCard from 'components/MainCard';
// import { Category, TableDocument } from 'iconsax-react';
import { Formik } from 'formik';
import * as yup from 'yup';
import UploadAvatar from 'components/third-party/dropzone/Avatar';
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';
import { useLocation, Link, Outlet } from 'react-router-dom';

// material-ui
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
// import SvgIcon from '@mui/joy/SvgIcon';
// import style from '@mui/material'

function TabPanel({ children, value, index, ...other }: any) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Create = ({
  title,
  formData,
  setFormData,
  formDataForContactDetails,
  setFormDataForContactDetails,
  certificatesUploadFormData,
  setCertificatesUploadFormData,
  list,
  setList,
  validate,
  handleChange,
  handleSelectChange,
  handleDateChange,
  handleChangeForContact,
  handleSelectChangeForContact,
  handleDateChangeForContact,
  handleSubmit,
  handleContactSubmit,
  handleUploadCertificatesSubmit
}: any) => {
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
  let selectedTab = 0;

  const [value, setValue] = useState(selectedTab);

  const handleTabsChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const months = ['January', 'February', 'March'];
  const years = [2020, 2021, 2022];
  // const days = [1, 2, 3];

  //   const [formData, setFormData] = useState<FormData>(formFields);
  //   const [list, setList] = useState(false);

  type FormDataKeys = keyof typeof formData;

  //   const validate = (): boolean => {
  //     let newFormData = _.cloneDeep(formData);
  //     let isValid = true;
  //     for (const key in formData) {
  //       if (formData.hasOwnProperty(key)) {
  //         const field = formData[key];

  //         if (field.mandatory) {
  //           if (key === 'email') {
  //             if (!field.value || !/\S+@\S+\.\S+/.test(field.value)) {
  //               newFormData[key].error = true;
  //               newFormData[key].helperText = 'Invalid email address';
  //               isValid = false;
  //             } else {
  //               newFormData[key].error = false;
  //               newFormData[key].helperText = '';
  //             }
  //           } else if (key === 'date') {
  //             if (!field.value?.day || !field.value?.month || !field.value?.year) {
  //               newFormData[key].error = true;
  //               newFormData[key].helperText = 'Please select a complete date';
  //               isValid = false;
  //             } else {
  //               newFormData[key].error = false;
  //               newFormData[key].helperText = '';
  //             }
  //           } else if (field.type === 'select') {
  //             if (!field.value || field.value.id === null) {
  //               newFormData[key].error = true;
  //               // newFormData[key].helperText = `${field.label} is required`;
  //               isValid = false;
  //             } else {
  //               newFormData[key].error = false;
  //               newFormData[key].helperText = '';
  //             }
  //           } else if (!field.value) {
  //             newFormData[key].error = true;
  //             newFormData[key].helperText = `${field.label} is required`;
  //             isValid = false;
  //           } else {
  //             newFormData[key].error = false;
  //             newFormData[key].helperText = '';
  //           }
  //         }
  //       }
  //     }

  //     setFormData(newFormData);
  //     return isValid;
  //   };

  //   const handleChange = (name: FormDataKeys, value: any) => {
  //     const newFormData = _.cloneDeep(formData);
  //     newFormData[name].value = value;

  //     if (newFormData[name].error) {
  //       newFormData[name].error = false;
  //       newFormData[name].helperText = ''; // Reset error message
  //     }

  //     setFormData(newFormData);
  //   };

  //   const handleSelectChange = (name: FormDataKeys, value: any) => {
  //     const newFormData = _.cloneDeep(formData);
  //     newFormData[name].value = value;
  //     newFormData[name].error = false;
  //     newFormData[name].helperText = '';

  //     setFormData(newFormData);
  //   };

  //   const handleDateChange = (name: keyof FormData, value: Date | null) => {
  //     const newFormData = _.cloneDeep(formData);
  //     newFormData[name].value = value;
  //     newFormData[name].error = false;
  //     newFormData[name].helperText = '';
  //     setFormData(newFormData);
  //   };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();

  //     console.log('formData', formData);

  //     const expDate = formData.expereincedate?.value ? moment(formData.expereincedate.value) : null;

  //     const experienceYear = expDate ? expDate.year() : null;
  //     const experienceMonth = expDate ? expDate.month() + 1 : null;

  //     const sampleObject = {
  //       name: formData.name?.value || '',
  //       surname: formData.surname?.value || '',
  //       email: formData.email?.value || '',
  //       personalEmail: formData.personalemail?.value || '',
  //       address: formData.address?.value || '',
  //       state: formData.state?.value?.label || '',
  //       branch: formData.branch?.value?.label || '',
  //       religion: formData.religion?.value?.label || '',
  //       caste: formData.caste?.value?.label || '',
  //       role: formData.role?.value?.label || '',
  //       city: formData.city?.value?.label || '',
  //       qualification: formData.qualification?.value?.label || '',
  //       source: formData.source?.value?.label || '',
  //       gender: formData.gender?.value?.label || '',
  //       education: formData.education?.value?.label || '',
  //       maritalstatus: formData.maritalstatus?.value?.label || '',
  //       number: formData.number?.value || '',
  //       aadharcard: formData.aadharcard?.value || '',
  //       officenumber: formData.officenumber?.value || '',
  //       fathernumber: formData.fatherno?.value || '',
  //       fathername: formData.fathername?.value || '',
  //       referenceno: formData.referenceno?.value || '',
  //       referencename: formData.referencename?.value || '',
  //       referenceaddress: formData.referenceaddress?.value || '',
  //       fatheraddress: formData.fatheraddress?.value || '',
  //       ssccertificate: formData.ssccertificate?.value || '',
  //       aadharcardphoto: formData.aadharcardphoto?.value || '',
  //       pancard: formData.pancard?.value || '',
  //       highercertificate: formData.highercertificate?.value || '',
  //       profile: formData.profile?.value || '',
  //       dateofbirth: formData.dateofbirth?.value ? moment(formData.dateofbirth.value).format('YYYY/MM/DD') : '',
  //       joiningdate: formData.joiningdate?.value ? moment(formData.joiningdate.value).format('YYYY/MM/DD') : '',
  //       expereincedate: experienceYear && experienceMonth ? `${experienceYear}-${String(experienceMonth).padStart(2, '0')}` : ''
  //     };

  //     console.log('Form Submitted:', sampleObject);
  //     if (!validate()) {
  //       console.log('Validation failed. Please check all fields.');
  //       return;
  //     }
  //   };
console.log("formDataForContactDetails: ", formDataForContactDetails)
console.log("formData: ", formData)
console.log("uploadcertificates: ", certificatesUploadFormData)
  return (
    <Container
      style={{
        backgroundColor: '#FFF',
        padding: '40px 30px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        borderRadius: '10px'
      }}
    >
      {title !== '' && title !== null && title !== undefined && (
        <Typography variant="h3" marginBottom={2}>
          {title}
        </Typography>
      )}
      <MainCard border={true}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <Tabs value={value} onChange={handleTabsChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
            <Tab label="Personal Details" iconPosition="start" />
            <Tab label="Contact Details" iconPosition="start" />
            <Tab label="User Files" iconPosition="start" />
          </Tabs>
        </Box>
        <Box sx={{ width: '100%' }}>
          <TabPanel value={value} index={0}>
            <form onSubmit={handleSubmit} noValidate>
              <Grid item xs={12} sm={6} md={6} marginBottom={2} textAlign={'center'}>
                <Formik
                  initialValues={{ files: null }}
                  onSubmit={() => {
                    // submit form
                  }}
                  validationSchema={yup.object().shape({
                    files: yup.mixed().required('Avatar is a required.')
                  })}
                >
                  {({ values, handleSubmit, setFieldValue, touched, errors }) => (
                    <form onSubmit={handleSubmit}>
                      <Typography variant="h6" marginBottom={0.5}>
                        {formData.profile.label}
                      </Typography>
                      <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={8} md={4}>
                          <Stack alignItems="center">
                            <Stack spacing={0.5} alignItems="center">
                              <UploadAvatar
                                setFieldValue={setFieldValue}
                                file={values.files}
                                error={touched.files && !!errors.files}
                                // inputProps={{
                                //   label: formData?.profile?.label || 'Upload Profile Picture',
                                //   accept: 'image/*'
                                // }}
                                sx={{
                                  width: '80px',
                                  height: '80px'
                                }}
                              />
                              {/* <Stack>
                          <Typography align="center" variant="caption" color="secondary">
                            Allowed &apos;image/*&apos;
                          </Typography>
                          <Typography align="center" variant="caption" color="secondary">
                            *.png, *.jpeg, *.jpg, *.gif
                          </Typography>
                        </Stack> */}
                            </Stack>
                            {touched.files && errors.files && (
                              <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.files as string}
                              </FormHelperText>
                            )}
                          </Stack>
                          <Stack direction="row" justifyContent="center" paddingTop={2}>
                            {values.files !== null && (
                              <Button color="error" onClick={() => setFieldValue('files', null)}>
                                Cancel
                              </Button>
                            )}
                          </Stack>
                        </Grid>
                      </Grid>
                    </form>
                  )}
                </Formik>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.role} onSelectChange={handleSelectChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formData.name} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formData.surname} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formData.number} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formData.email} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.gender} onSelectChange={handleSelectChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.maritalstatus} onSelectChange={handleSelectChange} />
                </Grid>
                {/* <Grid item xs={12} sm={6} md={3} textAlign="left">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{formData.gender.label}</FormLabel>
                    <RadioGroup row value={formData.gender.value} onChange={(e) => handleChange('gender', e.target.value)}>
                      {formData.gender.options.map((option) => (
                        <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.label} />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} textAlign="left">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{formData.maritalstatus.label}</FormLabel>
                    <RadioGroup row value={formData.maritalstatus.value} onChange={(e) => handleChange('maritalstatus', e.target.value)}>
                      {formData.maritalstatus.options.map((option) => (
                        <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.label} />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid> */}
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formData.officenumber} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formData.personalemail} onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.state} onSelectChange={handleSelectChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.city} onSelectChange={handleSelectChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.branch} onSelectChange={handleSelectChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.religion} onSelectChange={handleSelectChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.caste} onSelectChange={handleSelectChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonDatePicker inputProps={formData.dateofbirth} onDateChange={handleDateChange} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formData.education} onSelectChange={handleSelectChange} />
                </Grid>
                <Grid item xs={12} textAlign={'end'}>
                  <Button type="submit" variant="contained" color="primary">
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form onSubmit={handleContactSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formDataForContactDetails.qualification} onSelectChange={handleSelectChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formDataForContactDetails.temporaryaddress} onChange={handleChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formDataForContactDetails.aadharcard} onChange={handleChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formDataForContactDetails.fathername} onChange={handleChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formDataForContactDetails.fatherno} onChange={handleChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formDataForContactDetails.fatheraddress} onChange={handleChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formDataForContactDetails.referencename} onChange={handleChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formDataForContactDetails.referenceno} onChange={handleChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonInputField inputProps={formDataForContactDetails.referenceaddress} onChange={handleChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <CommonSelectField inputProps={formDataForContactDetails.source} onSelectChange={handleSelectChangeForContact} />
                </Grid>
                <Grid item xs={12} sm={6} md={6} marginTop={2}>
                  <CommonDatePicker inputProps={formDataForContactDetails.joiningdate} onDateChange={handleDateChangeForContact} />
                </Grid>
                <Grid container item xs={12} sm={6} md={6} marginBottom={1} textAlign={'center'}>
                  <InputLabel>{formDataForContactDetails.expereince.label}</InputLabel>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <FormControl fullWidth error={formDataForContactDetails.expereince.error}>
                        <InputLabel>Month</InputLabel>
                        <Select
                          value={formDataForContactDetails.expereince.value.month || ''}
                          onChange={(e) => handleSelectChangeForContact('expereince', { ...formDataForContactDetails.expereince.value, month: e.target.value })}
                        >
                          {months.map((month, index) => (
                            <MenuItem key={index + 1} value={index + 1}>
                              {month}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth error={formDataForContactDetails.expereince.error}>
                        <InputLabel>Year</InputLabel>
                        <Select
                          value={formDataForContactDetails.expereince.value.year || ''}
                          onChange={(e) => handleSelectChangeForContact('expereince', { ...formDataForContactDetails.expereince.value, year: e.target.value })}
                        >
                          {years.map((year) => (
                            <MenuItem key={year} value={year}>
                              {year}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} textAlign={'end'}>
                  <Button type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <form onSubmit={handleUploadCertificatesSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <MainCard title={certificatesUploadFormData.ssccertificate.label}>
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
                        useEffect(()=>{
                          setCertificatesUploadFormData({...certificatesUploadFormData, ssccertificate: {...certificatesUploadFormData?.ssccertificate, value: values?.files}})
                        }, [values])
                        return <form onSubmit={handleUploadCertificatesSubmit}>
                          <Grid spacing={3}>
                            <Grid item xs={12}>
                              <Stack spacing={1.5} alignItems="center">
                                <UploadMultiFile
                                  showList={list}
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
                      }}
                    </Formik>
                  </MainCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <MainCard title={certificatesUploadFormData.highercertificate.label}>
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
                        useEffect(()=>{
                          setCertificatesUploadFormData({...certificatesUploadFormData, highercertificate: {...certificatesUploadFormData?.highercertificate, value: values?.files}})
                        }, [values])
                        return <form onSubmit={handleUploadCertificatesSubmit}>
                          <Grid spacing={3}>
                            <Grid item xs={12}>
                              <Stack spacing={1.5} alignItems="center">
                                <UploadMultiFile
                                  showList={list}
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
                      }}
                    </Formik>
                  </MainCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <MainCard title={certificatesUploadFormData.aadharcardphoto.label}>
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
                        useEffect(()=>{
                          setCertificatesUploadFormData({...certificatesUploadFormData, aadharcardphoto: {...certificatesUploadFormData?.aadharcardphoto, value: values?.files}})
                        }, [values])
                        return <form onSubmit={handleUploadCertificatesSubmit}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Stack spacing={1.5} alignItems="center">
                                <UploadMultiFile
                                  showList={list}
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
                      }}
                    </Formik>
                  </MainCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <MainCard title={certificatesUploadFormData.pancard.label}>
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
                        useEffect(()=>{
                          setCertificatesUploadFormData({...certificatesUploadFormData, pancard: {...certificatesUploadFormData?.pancard, value: values?.files}})
                        }, [values])
                        return <form onSubmit={handleUploadCertificatesSubmit}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Stack spacing={1.5} alignItems="center">
                                <UploadMultiFile
                                  showList={list}
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
                      }}
                    </Formik>
                  </MainCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <MainCard
                    title={certificatesUploadFormData.passbook.label}
                    sx={{
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <Formik
                      initialValues={{ files: [] }}
                      onSubmit={(values) => {
                        console.log('Submitted files:', values.files);
                      }}
                      validationSchema={yup.object().shape({
                        files: yup.array().min(1, 'At least one file is required.').required('Files are required.')
                      })}
                    >
                      {({ values, handleSubmit, setFieldValue, touched, errors }) => {
                        useEffect(()=>{
                          setCertificatesUploadFormData({...certificatesUploadFormData, passbook: {...certificatesUploadFormData?.passbook, value: values?.files}})
                        }, [values])
                        return <form onSubmit={handleUploadCertificatesSubmit}>
                          <Grid container spacing={3}>
                            <Grid item xs={12}>
                              <Stack spacing={0} alignItems="center">
                                <UploadMultiFile
                                  showList={list}
                                  setFieldValue={setFieldValue}
                                  files={values.files}
                                  error={touched.files && !!errors.files}
                                  // inputProps={{
                                  //   label: formData.passbook.label,
                                  //   accept: 'image/*,application/pdf',
                                  //   multiple: true
                                  // }}
                                  sx={{
                                    width: '100%',
                                    height: '100%'
                                  }}
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
                      }}
                    </Formik>
                  </MainCard>
                </Grid>
                <Grid item xs={12} textAlign={'end'}>
                  <Button type="submit" variant="contained" color="primary">
                    Upload
                  </Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
        </Box>
        <Box sx={{ mt: 2.5 }}>
          <Outlet />
        </Box>
      </MainCard>
    </Container>
  );
};

export default Create;
