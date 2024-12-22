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
const UpdateLogoFevicon = () => {
  const uploadCertificatesFormData: any = {
    logoNo: {
      label: 'Upload LogoNo file chosen',
      id: 'logoNo',
      name: 'logoNo',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    footerLogoNo: {
      label: 'Upload Footer LogoNo file chosen',
      id: 'footerLogoNo',
      name: 'footerLogoNo',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    feviconNo: {
      label: 'Upload FaviconNo file chosen',
      id: 'feviconNo',
      name: 'feviconNo',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    watermarkNo: {
      label: 'Upload WatermarkNo file chosen',
      id: 'watermarkNo',
      name: 'watermarkNo',
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
      ssccertificate: certificatesUploadFormData.logoNo?.value || '',
      footerLogoNo: certificatesUploadFormData.footerLogoNo?.value || '',
      feviconNo: certificatesUploadFormData.feviconNo?.value || '',
      logoNo: certificatesUploadFormData.watermarkNo?.value || ''
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
        Update logo & favicon
      </Typography>
      <MainCard border={true} sx={{padding:"10px 20px"}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <MainCard title={certificatesUploadFormData.logoNo.label}>
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
                        logoNo: { ...certificatesUploadFormData?.logoNo, value: values?.files }
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
              <MainCard title={certificatesUploadFormData.footerLogoNo.label}>
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
                        footerLogoNo: { ...certificatesUploadFormData?.footerLogoNo, value: values?.files }
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
            <Grid item xs={12} sm={6} md={4}>
              <MainCard title={certificatesUploadFormData.feviconNo.label}>
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
                        feviconNo: { ...certificatesUploadFormData?.feviconNo, value: values?.files }
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
            <Grid item xs={12} sm={6} md={4}>
              <MainCard title={certificatesUploadFormData.watermarkNo.label}>
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
                        watermarkNo: { ...certificatesUploadFormData?.watermarkNo, value: values?.files }
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

export default UpdateLogoFevicon;
