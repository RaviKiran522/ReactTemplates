import React, { useState, SyntheticEvent } from 'react';
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
import Create from '../Create';
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

const CreateBranchStaff = ({ needTitle = true, userData = {} }): any => {
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

  const contactDetailsFormData: FormData = {
    qualification: {
      label: 'Select  Qualification',
      id: 'selectqualification',
      name: 'qualification',
      type: 'select',
      options: [
        { id: 1, label: 'BSc' },
        { id: 2, label: 'B.tech' },
        { id: 3, label: 'B.com' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    address: {
      label: ' Enter Your Address',
      id: 'adress',
      name: 'address',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    aadharcard: {
      label: ' Enter Your AAdhar No',
      id: 'aadharcard',
      name: 'aadharcard',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fathername: {
      label: 'Enter Your Father Name',
      id: 'fathername',
      name: 'fathername',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fatherno: {
      label: ' Enter Your Father Mobie No',
      id: 'fatherno',
      name: 'fatherno',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fatheraddress: {
      label: 'Enter Your Father Address',
      id: 'fatheraddress',
      name: 'fatheraddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    referenceno: {
      label: 'Enter refrence Number',
      id: 'referenceno',
      name: 'referenceno',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    referenceaddress: {
      label: 'Enter refrence Address',
      id: 'referenceaddress',
      name: 'referenceaddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    referencename: {
      label: 'Enter refrence Name',
      id: 'referenceaddress',
      name: 'referencename',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    source: {
      label: 'Select Source',
      id: 'source',
      name: 'source',
      type: 'select',
      options: [
        { id: 1, label: 'Source' },
        { id: 2, label: 'Website' },
        { id: 3, label: 'Self' },
        { id: 4, label: 'Tv 9' },
        { id: 5, label: 'Tv 9' },
        { id: 6, label: 'Etv Telangana' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    joiningdate: {
      label: 'Joining Date',
      id: 'joiningdate',
      name: 'joiningdate',
      value: '',
      error: false,
      helperText: 'Please select date',
      mandatory: true,
      options: []
    },
    expereince: {
      label: 'Your Past Expereince',
      id: 'expereince',
      name: 'expereince',
      value: '',
      error: false,
      helperText: 'Please select date',
      mandatory: true,
      options: []
    },
    temporaryaddress: {
      label: 'Enter Your Address',
      id: 'temporaryaddress',
      name: 'temporaryaddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    }
  };

  const uploadCertificatesFormData: FormData = {
    ssccertificate: {
      label: 'Upload Your Ssc Certificate',
      id: 'ssccertificate',
      name: 'ssccertificate',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    highercertificate: {
      label: 'Upload Your Higher Certificate',
      id: 'highercertificate',
      name: 'highercertificate',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    aadharcardphoto: {
      label: 'Upload Your Aadhar Card',
      id: 'aadharcardphoto',
      name: 'aadharcardphoto',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    pancard: {
      label: ' Upload Your Pan card',
      id: 'pancard',
      name: 'pancard',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    passbook: {
      label: 'Upload Your Bank PassBook',
      id: 'passbook',
      name: 'passbook',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    }
  };

  const formFields: FormData = {
    profile: {
      label: 'Upload Your Profile',
      id: 'profile',
      name: 'profile',
      type: 'file',
      value: '',
      error: false,
      mandatory: true,
      options: []
    },
    role: {
      label: 'Select Role',
      id: 'selectrole',
      name: 'role',
      type: 'select',
      options: [
        { id: 1, label: 'Workers' },
        { id: 2, label: 'Manager' },
        { id: 3, label: 'BPO' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    name: {
      label: 'Enter Your Name',
      id: 'name',
      name: 'name',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    surname: {
      label: 'Enter Your SurName',
      id: 'surname',
      name: 'surname',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    number: {
      label: ' Enter Mobile Number',
      id: 'number',
      name: 'number',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    email: {
      label: 'Enter Your Email ID',
      id: 'email',
      name: 'email',
      type: 'email',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    gender: {
      label: 'Select Gender',
      id: 'gender',
      name: 'gender',
      type: 'select',
      options: [
        { id: 1, label: 'Male' },
        { id: 2, label: 'Female' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    maritalstatus: {
      label: 'Select Marital Status',
      id: 'maritalstatus',
      name: 'maritalstatus',
      type: 'select',
      options: [
        { id: 1, label: 'Married' },
        { id: 2, label: 'Unmarried' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    officenumber: {
      label: ' Enter office Number',
      id: 'officenumber',
      name: 'officenumber',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    personalemail: {
      label: 'Enter Your Personal Email ID',
      id: 'personalemail',
      name: 'personalemail',
      type: 'email',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    state: {
      label: 'Select State',
      id: 'selectState',
      name: 'state',
      type: 'select',
      options: [
        { id: 1, label: 'Select Your State' },
        { id: 2, label: 'Mumbi' },
        { id: 3, label: 'Hyderabad' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    city: {
      label: 'Select City',
      id: 'selectCity',
      name: 'city',
      type: 'select',
      options: [
        { id: 1, label: 'Madhapur' },
        { id: 2, label: 'Mumbi' },
        { id: 3, label: 'Hyderabad' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    branch: {
      label: 'Select Branch',
      id: 'selectbranch',
      name: 'branch',
      type: 'select',
      options: [
        { id: 1, label: 'Odisha' },
        { id: 2, label: 'Mumbi' },
        { id: 3, label: 'Hyderabad' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    religion: {
      label: 'Select Religion',
      id: 'selectreligion',
      name: 'religion',
      type: 'select',
      options: [
        { id: 1, label: 'Hindu' },
        { id: 2, label: 'Shik' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    caste: {
      label: 'Select Caste',
      id: 'selectcaste',
      name: 'caste',
      type: 'select',
      options: [
        { id: 1, label: 'cats' },
        { id: 2, label: 'Mumbi' },
        { id: 3, label: 'Hyderabad' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    dateofbirth: {
      label: ' Date of Birth',
      id: 'dateofbirth',
      name: 'dateofbirth',
      value: '',
      error: false,
      helperText: 'Please select date',
      mandatory: true,
      options: []
    },
    pincode: {
      label: ' Enter Pin Code',
      id: 'pincode',
      name: 'pincode',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    address: {
      label: ' Enter Your Address',
      id: 'adress',
      name: 'address',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    education: {
      label: 'Select Education Level ',
      id: 'education',
      name: 'education',
      type: 'select',
      options: [
        { id: 'regular', label: 'Regular' },
        { id: 'distance', label: 'Distance' }
      ],
      value: { id: null, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    }
  };

  const months = ['January', 'February', 'March'];
  const years = [2020, 2021, 2022];
  // const days = [1, 2, 3];

  const [formData, setFormData] = useState<FormData>(formFields);
  const [formDataForContactDetails, setFormDataForContactDetails] = useState<FormData>(contactDetailsFormData);
  const [certificatesUploadFormData, setCertificatesUploadFormData] = useState<FormData>(uploadCertificatesFormData);
  const [list, setList] = useState(false);

  type FormDataKeys = keyof typeof formData;

  const validate = (formData: any) => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        if (field.mandatory) {
          if (key === 'email') {
            if (!field.value || !/\S+@\S+\.\S+/.test(field.value)) {
              newFormData[key].error = true;
              newFormData[key].helperText = 'Invalid email address';
              isValid = false;
            } else {
              newFormData[key].error = false;
              newFormData[key].helperText = '';
            }
          } else if (key === 'date') {
            if (!field.value?.day || !field.value?.month || !field.value?.year) {
              newFormData[key].error = true;
              newFormData[key].helperText = 'Please select a complete date';
              isValid = false;
            } else {
              newFormData[key].error = false;
              newFormData[key].helperText = '';
            }
          } else if (field.type === 'select') {
            if (!field.value || field.value.id === null) {
              newFormData[key].error = true;
              // newFormData[key].helperText = `${field.label} is required`;
              isValid = false;
            } else {
              newFormData[key].error = false;
              newFormData[key].helperText = '';
            }
          } else if (!field.value) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`;
            isValid = false;
          } else {
            newFormData[key].error = false;
            newFormData[key].helperText = '';
          }
        }
      }
    }
    return { newFormData: newFormData, isValid: isValid };
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;

    if (newFormData[name].error) {
      newFormData[name].error = false;
      newFormData[name].helperText = ''; // Reset error message
    }

    setFormData(newFormData);
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';

    setFormData(newFormData);
  };

  const handleDateChange = (name: keyof FormData, value: Date | null) => {
    const newFormData = _.cloneDeep(formData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormData(newFormData);
  };

  const handleChangeForContact = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formDataForContactDetails);
    newFormData[name].value = value;
    if (newFormData[name].error) {
      newFormData[name].error = false;
      newFormData[name].helperText = ''; // Reset error message
    }
    setFormDataForContactDetails(newFormData);
  };

  const handleSelectChangeForContact = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(formDataForContactDetails);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormDataForContactDetails(newFormData);
  };

  const handleDateChangeForContact = (name: keyof FormData, value: Date | null) => {
    const newFormData = _.cloneDeep(formDataForContactDetails);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFormDataForContactDetails(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('formData', formData);

    const expDate = formData.expereincedate?.value ? moment(formData.expereincedate.value) : null;

    const experienceYear = expDate ? expDate.year() : null;
    const experienceMonth = expDate ? expDate.month() + 1 : null;

    const sampleObject = {
      name: formData.name?.value || '',
      surname: formData.surname?.value || '',
      email: formData.email?.value || '',
      personalEmail: formData.personalemail?.value || '',
      address: formData.address?.value || '',
      state: formData.state?.value?.label || '',
      branch: formData.branch?.value?.label || '',
      religion: formData.religion?.value?.label || '',
      caste: formData.caste?.value?.label || '',
      role: formData.role?.value?.label || '',
      city: formData.city?.value?.label || '',
      qualification: formData.qualification?.value?.label || '',
      source: formData.source?.value?.label || '',
      gender: formData.gender?.value?.label || '',
      education: formData.education?.value?.label || '',
      maritalstatus: formData.maritalstatus?.value?.label || '',
      number: formData.number?.value || '',
      aadharcard: formData.aadharcard?.value || '',
      officenumber: formData.officenumber?.value || '',
      fathernumber: formData.fatherno?.value || '',
      fathername: formData.fathername?.value || '',
      referenceno: formData.referenceno?.value || '',
      referencename: formData.referencename?.value || '',
      referenceaddress: formData.referenceaddress?.value || '',
      fatheraddress: formData.fatheraddress?.value || '',
      ssccertificate: formData.ssccertificate?.value || '',
      aadharcardphoto: formData.aadharcardphoto?.value || '',
      pancard: formData.pancard?.value || '',
      highercertificate: formData.highercertificate?.value || '',
      profile: formData.profile?.value || '',
      dateofbirth: formData.dateofbirth?.value ? moment(formData.dateofbirth.value).format('YYYY/MM/DD') : '',
      joiningdate: formData.joiningdate?.value ? moment(formData.joiningdate.value).format('YYYY/MM/DD') : '',
      expereincedate: experienceYear && experienceMonth ? `${experienceYear}-${String(experienceMonth).padStart(2, '0')}` : ''
    };

    console.log('Form Submitted:', sampleObject);
    const validation = validate(formData);
    if (!validation?.isValid) {
      setFormData(validation?.newFormData);
      console.log('Validation failed. Please check all fields.');
      return;
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('formDataForContactDetails', formDataForContactDetails);

    const expDate = formDataForContactDetails.expereincedate?.value ? moment(formDataForContactDetails.expereincedate.value) : null;

    const experienceYear = expDate ? expDate.year() : null;
    const experienceMonth = expDate ? expDate.month() + 1 : null;

    const sampleObject = {
      name: formDataForContactDetails.name?.value || '',
      surname: formDataForContactDetails.surname?.value || '',
      email: formDataForContactDetails.email?.value || '',
      personalEmail: formDataForContactDetails.personalemail?.value || '',
      address: formDataForContactDetails.address?.value || '',
      state: formDataForContactDetails.state?.value?.label || '',
      branch: formDataForContactDetails.branch?.value?.label || '',
      religion: formDataForContactDetails.religion?.value?.label || '',
      caste: formDataForContactDetails.caste?.value?.label || '',
      role: formDataForContactDetails.role?.value?.label || '',
      city: formDataForContactDetails.city?.value?.label || '',
      qualification: formDataForContactDetails.qualification?.value?.label || '',
      source: formDataForContactDetails.source?.value?.label || '',
      gender: formDataForContactDetails.gender?.value?.label || '',
      education: formDataForContactDetails.education?.value?.label || '',
      maritalstatus: formDataForContactDetails.maritalstatus?.value?.label || '',
      number: formDataForContactDetails.number?.value || '',
      aadharcard: formDataForContactDetails.aadharcard?.value || '',
      officenumber: formDataForContactDetails.officenumber?.value || '',
      fathernumber: formDataForContactDetails.fatherno?.value || '',
      fathername: formDataForContactDetails.fathername?.value || '',
      referenceno: formDataForContactDetails.referenceno?.value || '',
      referencename: formDataForContactDetails.referencename?.value || '',
      referenceaddress: formDataForContactDetails.referenceaddress?.value || '',
      fatheraddress: formDataForContactDetails.fatheraddress?.value || '',
      ssccertificate: formDataForContactDetails.ssccertificate?.value || '',
      aadharcardphoto: formDataForContactDetails.aadharcardphoto?.value || '',
      pancard: formDataForContactDetails.pancard?.value || '',
      highercertificate: formDataForContactDetails.highercertificate?.value || '',
      profile: formDataForContactDetails.profile?.value || '',
      dateofbirth: formDataForContactDetails.dateofbirth?.value
        ? moment(formDataForContactDetails.dateofbirth.value).format('YYYY/MM/DD')
        : '',
      joiningdate: formDataForContactDetails.joiningdate?.value
        ? moment(formDataForContactDetails.joiningdate.value).format('YYYY/MM/DD')
        : '',
      expereincedate: experienceYear && experienceMonth ? `${experienceYear}-${String(experienceMonth).padStart(2, '0')}` : ''
    };

    console.log('Form Submitted:', sampleObject);
    const validation = validate(formDataForContactDetails);
    if (!validation?.isValid) {
      setFormDataForContactDetails(validation?.newFormData);
      console.log('Validation failed. Please check all fields.');
      return;
    }
  };

  const handleUploadCertificatesSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('passbook', certificatesUploadFormData);
    const sampleObject = {
      ssccertificate: certificatesUploadFormData.ssccertificate?.value || '',
      aadharcardphoto: certificatesUploadFormData.aadharcardphoto?.value || '',
      pancard: certificatesUploadFormData.pancard?.value || '',
      highercertificate: certificatesUploadFormData.highercertificate?.value || '',
      passbook: certificatesUploadFormData?.passbook?.value || ''
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
    <Create
      title={needTitle ? 'Create New Branch Staff' : ''}
      formData={formData}
      setFormData={setFormData}
      formDataForContactDetails={formDataForContactDetails}
      setFormDataForContactDetails={setFormDataForContactDetails}
      certificatesUploadFormData={certificatesUploadFormData}
      setCertificatesUploadFormData={setCertificatesUploadFormData}
      list={list}
      setList={setList}
      validate={validate}
      handleChange={handleChange}
      handleSelectChange={handleSelectChange}
      handleDateChange={handleDateChange}
      handleChangeForContact={handleChangeForContact}
      handleSelectChangeForContact={handleSelectChangeForContact}
      handleDateChangeForContact={handleDateChangeForContact}
      handleSubmit={handleSubmit}
      handleContactSubmit={handleContactSubmit}
      handleUploadCertificatesSubmit={handleUploadCertificatesSubmit}
    />
  );
};

export default CreateBranchStaff;
