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
import { TextField, Card, Box, CardContent, CardHeader, List, ListItem, ListItemText } from '@mui/material';
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
const Confirm = ({ personalDetailsFormData, educationDetailsFormData, familyDetailsFormData, partnerDetailsFormData }: any) => {
  console.log('personalDetailsFormData: ', personalDetailsFormData);
  return (
    <Container
      style={{
        backgroundColor: '#FFF',
        padding: '40px 30px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        borderRadius: '10px'
      }}
    >
      <Grid container spacing={2}>
        <Grid style={{ marginLeft: '20px' }}>
          <h3>Confirmation details</h3>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                <Card elevation={4} sx={{ width: '100%' }}>
                  <CardHeader title="Personal Details" />
                  <CardContent>
                    <Grid container spacing={2}>
                      {Object.entries(personalDetailsFormData).map(([key, value]: any, index: number) => {
                        return value.type === 'file' ? null : (
                          <Grid item xs={4} key={index}>
                            <Typography variant="subtitle1">{value.label}:</Typography>
                            {(value.type == 'text' || value.type == 'email' || value.type == 'number') && (
                              <Typography variant="body1">{value.value !== '' ? value.value : '--'}</Typography>
                            )}
                            {value.type === 'select' && !value.isMulti && (
                              <Typography variant="body1">{value.value.label ? value.value.label : '--'}</Typography>
                            )}
                            {value.type === 'select' && value.isMulti && (
                              <Typography variant="body1">
                                {value.value.length > 0
                                  ? value.value.reduce((acc: any, item: any, index: number) => {
                                      return acc + item.label + (index === value.value.length - 1 ? '' : ', ');
                                    }, '')
                                  : '--'}
                              </Typography>
                            )}
                            {value.type === 'date' && (
                              <Typography variant="body1">{value.value ? moment(value.value).format('DD/MM/YYYY') : '--'}</Typography>
                            )}
                            {value.type === 'time' && (
                              <Typography variant="body1">{value.value ? moment(value.value).format('HH:mm') : '--'}</Typography>
                            )}
                          </Grid>
                        );
                      })}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                <Card elevation={4} sx={{ width: '100%' }}>
                  <CardHeader title="Education Details" />
                  <CardContent>
                    <Grid container spacing={2}>
                    {Object.entries(educationDetailsFormData).map(([key, value]: any, index: number) => {
                        return value.type === 'file' ? null : (
                          <Grid item xs={4} key={index}>
                            <Typography variant="subtitle1">{value.label}:</Typography>
                            {(value.type == 'text' || value.type == 'email' || value.type == 'number') && (
                              <Typography variant="body1">{value.value !== '' ? value.value : '--'}</Typography>
                            )}
                            {value.type === 'select' && !value.isMulti && (
                              <Typography variant="body1">{value.value.label ? value.value.label : '--'}</Typography>
                            )}
                            {value.type === 'select' && value.isMulti && (
                              <Typography variant="body1">
                                {value.value.length > 0
                                  ? value.value.reduce((acc: any, item: any, index: number) => {
                                      return acc + item.label + (index === value.value.length - 1 ? '' : ', ');
                                    }, '')
                                  : '--'}
                              </Typography>
                            )}
                            {value.type === 'date' && (
                              <Typography variant="body1">{value.value ? moment(value.value).format('DD/MM/YYYY') : '--'}</Typography>
                            )}
                            {value.type === 'time' && (
                              <Typography variant="body1">{value.value ? moment(value.value).format('HH:mm') : '--'}</Typography>
                            )}
                          </Grid>
                        );
                      })}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                <Card elevation={4} sx={{ width: '100%' }}>
                  <CardHeader title="Family Details" />
                  <CardContent>
                    <Grid container spacing={2}>
                    {Object.entries(familyDetailsFormData).map(([key, value]: any, index: number) => {
                        return value.type === 'file' ? null : (
                          <Grid item xs={4} key={index}>
                            <Typography variant="subtitle1">{value.label}:</Typography>
                            {(value.type == 'text' || value.type == 'email' || value.type == 'number') && (
                              <Typography variant="body1">{value.value !== '' ? value.value : '--'}</Typography>
                            )}
                            {value.type === 'select' && !value.isMulti && (
                              <Typography variant="body1">{value.value.label ? value.value.label : '--'}</Typography>
                            )}
                            {value.type === 'select' && value.isMulti && (
                              <Typography variant="body1">
                                {value.value.length > 0
                                  ? value.value.reduce((acc: any, item: any, index: number) => {
                                      return acc + item.label + (index === value.value.length - 1 ? '' : ', ');
                                    }, '')
                                  : '--'}
                              </Typography>
                            )}
                            {value.type === 'date' && (
                              <Typography variant="body1">{value.value ? moment(value.value).format('DD/MM/YYYY') : '--'}</Typography>
                            )}
                            {value.type === 'time' && (
                              <Typography variant="body1">{value.value ? moment(value.value).format('HH:mm') : '--'}</Typography>
                            )}
                          </Grid>
                        );
                      })}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Grid container spacing={2} style={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                <Card elevation={4} sx={{ width: '100%' }}>
                  <CardHeader title="Partner Details" />
                  <CardContent>
                    <Grid container spacing={2}>
                    {Object.entries(partnerDetailsFormData).map(([key, value]: any, index: number) => {
                        return value.type === 'file' ? null : (
                          <Grid item xs={4} key={index}>
                            <Typography variant="subtitle1">{value.label}:</Typography>
                            {(value.type == 'text' || value.type == 'email' || value.type == 'number') && (
                              <Typography variant="body1">{value.value !== '' ? value.value : '--'}</Typography>
                            )}
                            {value.type === 'select' && !value.isMulti && (
                              <Typography variant="body1">{value.value.label ? value.value.label : '--'}</Typography>
                            )}
                            {value.type === 'select' && value.isMulti && (
                              <Typography variant="body1">
                                {value.value.length > 0
                                  ? value.value.reduce((acc: any, item: any, index: number) => {
                                      return acc + item.label + (index === value.value.length - 1 ? '' : ', ');
                                    }, '')
                                  : '--'}
                              </Typography>
                            )}
                            {value.type === 'date' && (
                              <Typography variant="body1">{value.value ? moment(value.value).format('DD/MM/YYYY') : '--'}</Typography>
                            )}
                            {value.type === 'time' && (
                              <Typography variant="body1">{value.value ? moment(value.value).format('HH:mm') : '--'}</Typography>
                            )}
                          </Grid>
                        );
                      })}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Confirm;
