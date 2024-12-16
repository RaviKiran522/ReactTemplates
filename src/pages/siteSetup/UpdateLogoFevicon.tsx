import React, {useState, useEffect} from 'react';
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
  const logoFeviconInitial: any = {
    logo: {
      label: 'Upload Logo',
      id: 'logo',
      name: 'logo',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    fevicon: {
      label: 'Upload Fevicon',
      id: 'fevicon',
      name: 'fevicon',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
  };
  const [logoFevicon, setLogofevicon] = useState(logoFeviconInitial);
  return (
    <Grid>
      <MainCard>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', pb: 1 }}>
          <Typography>Update logo & favicon</Typography>
        </Box>
        {/* <Box sx={{ width: '100%' }}>
          <Grid item xs={12} sm={6} md={4}>
            <MainCard title={logoFevicon.highercertificate.label}>
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
                    setLogofevicon({
                      ...logoFevicon,
                      highercertificate: { ...logoFevicon?.highercertificate, value: values?.files }
                    });
                  }, [values]);
                  return (
                    <form onSubmit={handleUploadCertificatesSubmit}>
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
                  );
                }}
              </Formik>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MainCard title={logoFevicon.aadharcardphoto.label}>
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
                    setLogofevicon({
                      ...logoFevicon,
                      aadharcardphoto: { ...logoFevicon?.aadharcardphoto, value: values?.files }
                    });
                  }, [values]);
                  return (
                    <form onSubmit={handleUploadCertificatesSubmit}>
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
                  );
                }}
              </Formik>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MainCard title={logoFevicon.pancard.label}>
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
                    setLogofevicon({
                      ...logoFevicon,
                      pancard: { ...logoFevicon?.pancard, value: values?.files }
                    });
                  }, [values]);
                  return (
                    <form onSubmit={handleUploadCertificatesSubmit}>
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
                  );
                }}
              </Formik>
            </MainCard>
          </Grid>
        </Box> */}
      </MainCard>
    </Grid>
  );
};

export default UpdateLogoFevicon;
