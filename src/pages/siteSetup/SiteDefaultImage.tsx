import React, { useState, useEffect } from 'react';
import MainCard from 'components/MainCard';
import Box from '@mui/material/Box';
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';
import { Formik } from 'formik';
import * as yup from 'yup';
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

const SiteDefaultImage = () => {
  const uploadCertificatesFormData: any = {
    male: {
      label: 'Male Placeholder',
      id: 'male',
      name: 'male',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    female: {
      label: 'Female Placeholder',
      id: 'female',
      name: 'female',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    }
  };
  const [certificatesUploadFormData, setCertificatesUploadFormData] = useState<any>(uploadCertificatesFormData);
  const handleUploadCertificatesSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('passbook', certificatesUploadFormData);
    const sampleObject = {
      ssccertificate: certificatesUploadFormData.male?.value || '',
      female: certificatesUploadFormData.female?.value || ''
    };

    console.log('Form Submitted:', sampleObject);
    // const validation = validate(formData)
    // if (!validation?.isValid) {
    //   setFormData(validation?.newFormData)
    //   console.log('Validation failed. Please check all fields.');
    //   return;
    // }
  };
  return (
    <Container
      sx={{
        backgroundColor: '#FFF',
        padding: '40px 30px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        borderRadius: '10px'
      }}
    >
      <Typography variant="h3" marginBottom={2} sx={{ padding: '15px 0px' }}>
        Site default image
      </Typography>
      <MainCard border={true} sx={{ padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <MainCard title={certificatesUploadFormData.male.label}>
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
                    setCertificatesUploadFormData({
                      ...certificatesUploadFormData,
                      male: { ...certificatesUploadFormData?.male, value: values?.files }
                    });
                  }, [values]);
                  return (
                    <form onSubmit={handleUploadCertificatesSubmit}>
                      <Grid spacing={3}>
                        <Grid item xs={12}>
                          <Stack spacing={1.5} alignItems="center">
                            <UploadMultiFile
                              showList={false}
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
          <Grid item xs={12} sm={6} md={4}>
            <MainCard title={certificatesUploadFormData.female.label}>
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
                    setCertificatesUploadFormData({
                      ...certificatesUploadFormData,
                      female: { ...certificatesUploadFormData?.female, value: values?.files }
                    });
                  }, [values]);
                  return (
                    <form onSubmit={handleUploadCertificatesSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Stack spacing={1.5} alignItems="center">
                            <UploadMultiFile
                              showList={false}
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
          <Grid item xs={12} textAlign={'end'}>
            <Button type="submit" variant="contained" color="primary">
              Upload
            </Button>
          </Grid>
        </Grid>
      </MainCard>
    </Container>
  );
};

export default SiteDefaultImage;
