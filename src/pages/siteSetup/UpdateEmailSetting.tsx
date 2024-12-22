import React, { useState, SyntheticEvent, useMemo } from 'react';
import MainCard from 'components/MainCard';
import Typography from '@mui/material/Typography';
import { Box, TextField } from '@mui/material';
import { padding } from '@mui/system';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container } from '@mui/material';
import _, { flatMap } from 'lodash';
import ReactTable from 'ReusableComponents/ReactTable';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
const UpdateEmailSetting = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState({ flag: false, action: '' });
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const data: any = [
    { subject: "4321", to: "vamsi", status: "0987654" },
    { subject: "1234", to: "ravi", status: "0987654" },
    { subject: "3432", to: "kiran", status: "0987654" }
  ];
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

  const smtpSettings: FormData = {
    mailEngine: {
      label: 'Mail Engine',
      id: 'mailEngine',
      name: 'mailEngine',
      type: 'select',
      options: [
        { id: 0, label: 'Please Select' },
        { id: 1, label: 'PHPMailer' },
        { id: 2, label: 'CodeIgniter' }
      ],
      value: { id: 0, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    emailProtocol: {
      label: 'Email Protocol',
      id: 'emailProtocol',
      name: 'emailProtocol',
      type: 'select',
      options: [
        { id: 0, label: 'Please Select' },
        { id: 1, label: 'SMTP' },
        { id: 2, label: 'Microsoft OAuth 2.0' },
        { id: 2, label: 'Gmail OAuth 2.0' },
        { id: 2, label: 'Sendmail' },
        { id: 2, label: 'Mail' }
      ],
      value: { id: 0, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    emailEncryption: {
      label: 'Email Encryption',
      id: 'emailEncryption',
      name: 'emailEncryption',
      type: 'select',
      options: [
        { id: 0, label: 'Please Select' },
        { id: 1, label: 'NONE' },
        { id: 2, label: 'SSL' },
        { id: 2, label: 'TLS' }
      ],
      value: { id: 0, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    smtpHost: {
      label: 'SMTP Host',
      id: 'smtpHost',
      name: 'smtpHost',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    smtpPort: {
      label: 'SMTP Port',
      id: 'smtpPort',
      name: 'smtpPort',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    email: {
      label: 'Email',
      id: 'email',
      name: 'email',
      type: 'email',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },

    smtpUsername: {
      label: 'SMTP Username',
      id: 'smtpUsername',
      name: 'smtpUsername',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    smtpPassword: {
      label: 'SMTP Password',
      id: 'smtpPassword',
      name: 'smtpPassword',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    emailCharset: {
      label: 'Email Charset',
      id: 'emailCharset',
      name: 'emailCharset',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    bccallMailsto: {
      label: 'BCC All Emails To',
      id: 'bccallMailsto',
      name: 'bccallMailsto',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    emailSignature: {
      label: 'Email Signature',
      id: 'emailSignature',
      name: 'emailSignature',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    sendTestEmail: {
      label: 'Send Test Email',
      id: 'sendTestEmail',
      name: 'sendTestEmail',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    }
  };
  const emailQueue: FormData = {
    emailQueue: {
      label: 'Enable Email Queue',
      id: 'emailQueue',
      name: 'emailQueue',
      type: 'select',
      options: [
        { id: 0, label: 'Please Select' },
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: { id: 0, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    withAttachment: {
      label: 'Do not add emails with attachments in the queue?',
      id: 'withAttachment',
      name: 'withAttachment',
      type: 'select',
      options: [
        { id: 0, label: 'Please Select' },
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: { id: 0, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    }
  };
  const [smtpSettingsFormData, setSmtpSettingsFormdata] = useState<FormData>(smtpSettings);
  const [emailQueueFormData, setEmailQueueFormData] = useState<FormData>(emailQueue);
  const [predefined, setPredefined] = useState<any>({
    header: '',
    headerError: false,
    footer: '',
    footerError: false,
    emailSignature: '',
    emailSignatureError: false
  });
  type FormDataKeys = keyof typeof smtpSettingsFormData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(smtpSettingsFormData);
    let isValid = true;

    for (const key in smtpSettingsFormData) {
      if (smtpSettingsFormData.hasOwnProperty(key)) {
        const field = smtpSettingsFormData[key];

        if (field.mandatory && !field.value && field.value == '') {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.mandatory && field.type === 'select' && (!field.value || !field.value.label)) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
          newFormData[key].helperText = '';
        }
      }
    }
    for (const key in smtpSettingsFormData) {
      if (smtpSettingsFormData.hasOwnProperty(key)) {
        const field = smtpSettingsFormData[key];

        if (field.mandatory && !field.value && field.value == '') {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.mandatory && field.type === 'select' && (!field.value || !field.value.label)) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
          newFormData[key].helperText = '';
        }
      }
    }
    let errors = {
      emailSignatureError: false,
      footerError: false,
      headerError: false
    };
    if (predefined.emailSignature === '') {
      errors.emailSignatureError = true;
      isValid = false;
    }
    if (predefined.footer === '') {
      errors.footerError = true;
      isValid = false;
    }
    if (predefined.header === '') {
      errors.headerError = true;
      isValid = false;
    }
    setPredefined({ ...predefined, ...errors });
    setSmtpSettingsFormdata(newFormData);
    return isValid;
  };

  const validateEmail = (): boolean => {
    let newFormData = _.cloneDeep(emailQueueFormData);
    let isValid = true;

    for (const key in emailQueueFormData) {
      if (emailQueueFormData.hasOwnProperty(key)) {
        const field = emailQueueFormData[key];

        if (field.mandatory && !field.value && field.value == '') {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else if (field.mandatory && field.type === 'select' && (!field.value || !field.value.label)) {
          newFormData[key].error = true;
          newFormData[key].helperText = `${field.label} is required`;
          isValid = false;
        } else {
          newFormData[key].helperText = '';
        }
      }
    }
    setEmailQueueFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    console.log('checking: ');
    const newFormData = _.cloneDeep(smtpSettingsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setSmtpSettingsFormdata(newFormData);
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(smtpSettingsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setSmtpSettingsFormdata(newFormData);
  };

  const handleSelectEmailChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(emailQueueFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setEmailQueueFormData(newFormData);
  };

  const handleTabsChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log('checking.......');
    // console.log('Form Submitted', smtpSettingsFormData);
    e.preventDefault();
    const sampleObject = {};
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', smtpSettingsFormData);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', smtpSettingsFormData);
    e.preventDefault();
    const sampleObject = {};
    if (validateEmail()) {
      console.log('Form Submitted', smtpSettingsFormData);
    }
  };

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

  const handlePredefinedChange = (event: any) => {
    if (event.target.name === 'header') {
      setPredefined({ ...predefined, header: event.target.value, headerError: false });
    } else if (event.target.name === 'footer') {
      setPredefined({ ...predefined, footer: event.target.value, footerError: false });
    } else if (event.target.name === 'emailSignature') {
      setPredefined({ ...predefined, emailSignature: event.target.value, emailSignatureError: false });
    }
  };

  const columns = useMemo(
    () => [
      { header: 'Subject', accessorKey: 'subject' },
      { header: 'To', accessorKey: 'to' },
      { header: 'Status', accessorKey: 'status' },
    ],
    []
  );

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
        Update email setting
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleTabsChange} variant="scrollable" scrollButtons="auto" aria-label="account profile tab">
          <Tab label="Smtp settings" iconPosition="start" />
          <Tab label="Email queue" iconPosition="start" />
        </Tabs>
      </Box>
      <MainCard border={true} sx={{ padding: '2px 2px' }}>
        <Box sx={{ width: '100%' }}>
          <TabPanel value={value} index={0}>
            <Typography variant="h5">SMTP Settings</Typography>
            <Box sx={{ width: '100%' }}>
              <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2} sx={{ pt: 5 }}>
                  <Grid item xs={6}>
                    <CommonSelectField inputProps={smtpSettingsFormData.mailEngine} onSelectChange={handleSelectChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonSelectField inputProps={smtpSettingsFormData.emailProtocol} onSelectChange={handleSelectChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonSelectField inputProps={smtpSettingsFormData.emailEncryption} onSelectChange={handleSelectChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonInputField inputProps={smtpSettingsFormData.smtpHost} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonInputField inputProps={smtpSettingsFormData.smtpPort} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonInputField inputProps={smtpSettingsFormData.email} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonInputField inputProps={smtpSettingsFormData.smtpUsername} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonInputField inputProps={smtpSettingsFormData.smtpPassword} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonInputField inputProps={smtpSettingsFormData.emailCharset} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonInputField inputProps={smtpSettingsFormData.bccallMailsto} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <CommonInputField inputProps={smtpSettingsFormData.emailSignature} onChange={handleChange} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Email Signature"
                      multiline
                      rows={4}
                      name="emailSignature"
                      variant="outlined"
                      value={predefined.emailSignature}
                      onChange={handlePredefinedChange}
                      fullWidth
                      sx={{ maxWidth: 'auto' }}
                      error={predefined.emailSignatureError} // Display error state
                      helperText={predefined.emailSignatureError ? 'This field is required.' : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Predefined Header"
                      multiline
                      rows={12}
                      name="header"
                      variant="outlined"
                      value={predefined.header}
                      onChange={handlePredefinedChange}
                      fullWidth
                      sx={{ maxWidth: 'auto' }}
                      error={predefined.headerError} // Display error state
                      helperText={predefined.headerError ? 'This field is required.' : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Predefined Footer"
                      multiline
                      rows={12}
                      name="footer"
                      variant="outlined"
                      value={predefined.footer}
                      onChange={handlePredefinedChange}
                      fullWidth
                      sx={{ maxWidth: 'auto' }}
                      error={predefined.footerError} // Display error state
                      helperText={predefined.footerError ? 'This field is required.' : ''}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        width: '100%',
                        maxWidth: 'auto'
                      }}
                    >
                      <TextField type="email" placeholder="Email Address" variant="outlined" fullWidth name="test_email" />
                      <Button variant="contained" color="info" className="test_email">
                        Test
                      </Button>
                    </Box>{' '}
                  </Grid>
                  <Grid item xs={12} textAlign={'end'}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form onSubmit={handleEmailSubmit} noValidate>
              <Grid container spacing={2} sx={{ pt: 5 }}>
                <Grid item xs={6}>
                  <CommonSelectField inputProps={emailQueueFormData.emailQueue} onSelectChange={handleSelectEmailChange} />
                </Grid>
                <Grid item xs={6}>
                  <CommonSelectField inputProps={emailQueueFormData.withAttachment} onSelectChange={handleSelectEmailChange} />
                </Grid>
                <Grid item xs={12}>
                  <ReactTable
                    title={'Email Queue'}
                    data={data}
                    columns={columns}
                    includeSearch={true}
                    needCSV={true}
                    pagination={'top'}
                    columnVisibility={true}
                    needCheckBoxes={false}
                    needActivateAndSuspendButtons={false}
                    open={open}
                    setOpen={setOpen}
                    setRowsPerPage={setRowsPerPage}
                    setPageNumber={setPageNumber}
                    pageNumber={pageNumber}
                    totalPageCount={60}
                  />
                </Grid>
                <Grid item xs={12} textAlign={'end'}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
        </Box>
      </MainCard>
    </Container>
  );
};

export default UpdateEmailSetting;
