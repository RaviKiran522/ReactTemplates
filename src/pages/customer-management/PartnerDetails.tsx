import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';
import {
  listLookingfor,
  listFamilyStatus,
  listEducation,
  listProfession,
  listcaste,
  listSubCaste
} from '../../services/add-new-details/AddNewDetails';
import Animate from './Animate';
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
const PartnerDetails = ({ partnerDetailsFormData, setPartnerDetailsFormData, edit }: any) => {
  const [familyStatus, setFamilyStatus] = useState<any>([]);
  const [education, setEducation] = useState<any>([]);
  const [profession, setProfession] = useState<any>([]);
  const [lookingFor, setLookingFor] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  type FormDataKeys = keyof typeof partnerDetailsFormData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(partnerDetailsFormData);
    let isValid = true;

    for (const key in partnerDetailsFormData) {
      if (partnerDetailsFormData.hasOwnProperty(key)) {
        const field = partnerDetailsFormData[key];

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

    setPartnerDetailsFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(partnerDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setPartnerDetailsFormData(newFormData);
  };

  const handleSelectChange = async (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(partnerDetailsFormData);
    if(name === "caste") {
      let subCasteList = await listSubCaste({castId: value.id, meta: true});
      console.log("subCasteList: ", subCasteList)
      if(subCasteList?.data?.length > 0) {
        subCasteList = subCasteList.data.map((item: any) => ({id: item.id, label: item.castName}));
        newFormData.subCaste.options = subCasteList;
      }
    }
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setPartnerDetailsFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
    // Change to Date | null
    const newFormData = _.cloneDeep(partnerDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setPartnerDetailsFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', partnerDetailsFormData);
    e.preventDefault();
    const sampleObject = {
      branchName: partnerDetailsFormData.branchName.value,
      phoneNumber: partnerDetailsFormData.phoneNumber.value,
      email: partnerDetailsFormData.email.value,
      state: partnerDetailsFormData.state.value,
      address: partnerDetailsFormData.address.value,
      city: partnerDetailsFormData.city.value,
      status: partnerDetailsFormData.status.value,
      pincode: partnerDetailsFormData.pincode.value
    };
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', partnerDetailsFormData);
    }
  };

  const getDropdownsData = async () => {
    setIsLoading(true);
    let lookingForRes = await listLookingfor({ meta: true });
    if (lookingForRes.status) {
      if (lookingForRes.data.length > 0) {
        lookingForRes = lookingForRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setLookingFor(lookingForRes);
      } else {
        setLookingFor([]);
      }
    } else {
      setLookingFor([]);
    }

    let familyStatusRes = await listFamilyStatus({ meta: true });
    if (familyStatusRes.status) {
      if (familyStatusRes.data.length > 0) {
        familyStatusRes = familyStatusRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setFamilyStatus(familyStatusRes);
      } else {
        setFamilyStatus([]);
      }
    } else {
      setFamilyStatus([]);
    }

    let educationRes = await listEducation({ meta: true });
    if (educationRes.status) {
      if (educationRes.data.length > 0) {
        educationRes = educationRes.data.map((item: any) => ({ id: item.id, label: item.educationName }));
        setEducation(educationRes);
      } else {
        setEducation([]);
      }
    } else {
      setEducation([]);
    }

    let professionRes = await listProfession({ meta: true });
    if (professionRes.status) {
      if (professionRes.data.length > 0) {
        professionRes = professionRes.data.map((item: any) => ({ id: item.id, label: item.professionName }));
        setProfession(professionRes);
      } else {
        setProfession([]);
      }
    } else {
      setProfession([]);
    }

    let casteRes = await listcaste({ meta: true });
    if (casteRes.status) {
      if (casteRes.data.length > 0) {
        casteRes = casteRes.data.map((item: any) => ({ id: item.id, label: item.castName }));
        setProfession(professionRes);
      } else {
        setProfession([]);
      }
    } else {
      setProfession([]);
    }

    setPartnerDetailsFormData((prev: any) => ({
      ...prev,
      lookingFor: {
        ...prev.lookingFor,
        options: lookingForRes ? lookingForRes : []
      },
      familyStatus: {
        ...prev.familyStatus,
        options: familyStatusRes ? familyStatusRes : []
      },
      profession: {
        ...prev.profession,
        options: professionRes ? professionRes : []
      },
      education: {
        ...prev.education,
        options: educationRes ? educationRes : []
      },
      caste: {
        ...prev.caste,
        options: casteRes ? casteRes : []
      }
    }));
    setIsLoading(false);
  };

  useEffect(() => {
    if(!edit) {
      getDropdownsData();
    }
  }, []);

  console.log('Form Submitted', partnerDetailsFormData?.workingLocation);
  return (
    <Container
      style={{
        backgroundColor: '#FFF',
        padding: '40px 30px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px ,rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        borderRadius: '10px'
      }}
    >
      <Backdrop
        sx={{
          color: 'blue',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <CardHeader title="Provide your family details" /> */}
            <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
              Provide your partner details
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.lookingFor} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.ageFrom} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.ageTo} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.heightFrom} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.heightTo} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.familyStatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.interCasteMarriage} onSelectChange={handleSelectChange} />
          </Grid>
          {partnerDetailsFormData.interCasteMarriage?.value?.label === 'Yes' && (
            <>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={partnerDetailsFormData.interReligion} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={partnerDetailsFormData.interCasteChild} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={partnerDetailsFormData.caste} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                <CommonSelectField inputProps={partnerDetailsFormData.subCaste} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.khujaDhosam} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.complexion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.smoke} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.drink} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.education} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.profession} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={partnerDetailsFormData.passport} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MainCard title={partnerDetailsFormData.profilePicture.label}>
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
                    setPartnerDetailsFormData({
                      ...partnerDetailsFormData,
                      profilePicture: { ...partnerDetailsFormData?.profilePicture, value: values?.files }
                    });
                  }, [values]);
                  return (
                    <form onSubmit={() => {}}>
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
        </Grid>
      </form>
    </Container>
  );
};

export default PartnerDetails;
