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
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';
import Animate from './Animate';
import {
  listFamilyStatus,
  listFamilyType,
  listRelation,
  religionList as listReligion,
  listcaste,
  listHealthCondition,
  listProfession
} from '../../services/add-new-details/AddNewDetails';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
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
  FormHelperText,
  Card,
  CardContent,
  CardHeader,
  Box,
  Checkbox
} from '@mui/material';
import MainCard from 'components/MainCard';
import { options } from '@fullcalendar/core/preact';
const FamilyDetails = ({ familyDetailsFormData, setFamilyDetailsFormData, edit }: any) => {
  const [familyStatus, setFamilyStatus] = useState([]);
  const [familyType, setFamilyType] = useState([]);
  const [relation, setRelation] = useState([]);
  const [religion, setReligion] = useState([]);
  const [caste, setCaste] = useState([]);
  const [healthCondition, setHealthCondition] = useState([]);
  const [profession, setProfession] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);

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

  type FormDataKeys = keyof typeof familyDetailsFormData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(familyDetailsFormData);
    let isValid = true;

    for (const key in familyDetailsFormData) {
      if (familyDetailsFormData.hasOwnProperty(key)) {
        const field = familyDetailsFormData[key];

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

    setFamilyDetailsFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(familyDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFamilyDetailsFormData(newFormData);
  };

  const handleSelectChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(familyDetailsFormData);
    if (name === 'fatherStatus' && value.label === 'Alive') {
      newFormData['fhealthCondition'].mandatory = true;
      newFormData['workingSector'].mandatory = true;
      newFormData['fmobile'].mandatory = true;
      newFormData['faddress'].mandatory = true;
      newFormData['fprofession'].mandatory = true;
      newFormData['fannualIncome'].mandatory = true;
      newFormData['fproperty'].mandatory = true;
    } else {
      newFormData['fhealthCondition'].mandatory = false;
      newFormData['workingSector'].mandatory = false;
      newFormData['fmobile'].mandatory = false;
      newFormData['faddress'].mandatory = false;
      newFormData['fprofession'].mandatory = false;
      newFormData['fannualIncome'].mandatory = false;
      newFormData['fproperty'].mandatory = false;
      newFormData['fhealthCondition'].error = false;
      newFormData['workingSector'].error = false;
      newFormData['fmobile'].error = false;
      newFormData['faddress'].error = false;
      newFormData['fprofession'].error = false;
      newFormData['fannualIncome'].error = false;
      newFormData['fproperty'].error = false;
    }

    if (name === 'motherStatus' && value.label === 'Alive') {
      newFormData['mhealthCondition'].mandatory = true;
      newFormData['mmobile'].mandatory = true;
      newFormData['mprofession'].mandatory = true;
      newFormData['mannualIncome'].mandatory = true;
      newFormData['mproperty'].mandatory = true;
    } else {
      newFormData['mhealthCondition'].mandatory = false;
      newFormData['mmobile'].mandatory = false;
      newFormData['mprofession'].mandatory = false;
      newFormData['mannualIncome'].mandatory = false;
      newFormData['mproperty'].mandatory = false;
      newFormData['mhealthCondition'].error = false;
      newFormData['mmobile'].error = false;
      newFormData['mprofession'].error = false;
      newFormData['mannualIncome'].error = false;
      newFormData['mproperty'].error = false;
    }
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFamilyDetailsFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
    // Change to Date | null
    const newFormData = _.cloneDeep(familyDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setFamilyDetailsFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', familyDetailsFormData);
    e.preventDefault();
    const sampleObject = {
      branchName: familyDetailsFormData.branchName.value,
      phoneNumber: familyDetailsFormData.phoneNumber.value,
      email: familyDetailsFormData.email.value,
      state: familyDetailsFormData.state.value,
      address: familyDetailsFormData.address.value,
      city: familyDetailsFormData.city.value,
      status: familyDetailsFormData.status.value,
      pincode: familyDetailsFormData.pincode.value
    };
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', familyDetailsFormData);
    }
  };

  const getDropdownsData = async () => {
    setIsLoading(true);
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

    let familyTypeRes = await listFamilyType({ meta: true });
    if (familyTypeRes.status) {
      if (familyTypeRes.data.length > 0) {
        familyTypeRes = familyTypeRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setFamilyType(familyTypeRes);
      } else {
        setFamilyType([]);
      }
    } else {
      setFamilyType([]);
    }

    let relationRes = await listRelation({ meta: true });
    if (relationRes.status) {
      if (relationRes.data.length > 0) {
        relationRes = relationRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setRelation(relationRes);
      } else {
        setRelation([]);
      }
    } else {
      setRelation([]);
    }

    let religionRes = await listReligion({ meta: true });
    if (religionRes.status) {
      if (religionRes.data.length > 0) {
        religionRes = religionRes.data.map((item: any) => ({ id: item.id, label: item.religionName }));
        setReligion(religionRes);
      } else {
        setReligion([]);
      }
    } else {
      setReligion([]);
    }

    let casteRes = await listcaste({ meta: true });
    if (casteRes.status) {
      if (casteRes.data.length > 0) {
        casteRes = casteRes.data.map((item: any) => ({ id: item.id, label: item.castName }));
        setCaste(casteRes);
      } else {
        setCaste([]);
      }
    } else {
      setCaste([]);
    }

    let healthConditionRes = await listHealthCondition({ meta: true });
    if (healthConditionRes.status) {
      if (healthConditionRes.data.length > 0) {
        healthConditionRes = healthConditionRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setHealthCondition(healthConditionRes);
      } else {
        setHealthCondition([]);
      }
    } else {
      setHealthCondition([]);
    }

    let professionList = await listProfession({ meta: true });
    if (professionList.status) {
      if (professionList.data.length > 0) {
        professionList = professionList.data.map((item: any) => ({ id: item.id, label: item.professionName }));
        setProfession(professionList);
      } else {
        setProfession([]);
      }
    } else {
      setProfession([]);
    }

    setFamilyDetailsFormData((prev: any) => ({
      ...prev,
      familyStatus: {
        ...prev.familyStatus,
        options: familyStatusRes ? familyStatusRes : []
      },
      familyType: {
        ...prev.familyType,
        options: familyTypeRes ? familyTypeRes : []
      },
      relation: {
        ...prev.relation,
        options: relationRes ? relationRes : []
      },
      freligion: {
        ...prev.freligion,
        options: religionRes ? religionRes : []
      },
      fprofession: {
        ...prev.fprofession,
        options: professionList ? professionList : []
      },
      mprofession: {
        ...prev.mprofession,
        options: professionList ? professionList : []
      },
      fcaste: {
        ...prev.fcaste,
        options: casteRes ? casteRes : []
      },
      mreligion: {
        ...prev.mreligion,
        options: religionRes ? religionRes : []
      },
      mcaste: {
        ...prev.mcaste,
        options: casteRes ? casteRes : []
      },
      fhealthCondition: {
        ...prev.fhealthCondition,
        options: healthConditionRes ? healthConditionRes : []
      },
      mhealthCondition: {
        ...prev.mhealthCondition,
        options: healthConditionRes ? healthConditionRes : []
      }
    }));
    setIsLoading(false);
  };

  const handleCheckboxChange = (event: any) => {
    if(event.target.checked) {
      setFamilyDetailsFormData({...familyDetailsFormData, permanentAddress: {...familyDetailsFormData.permanentAddress, value: familyDetailsFormData.presentAddress.value}});
    }
    setIsSameAddress(event.target.checked);
  }

  useEffect(() => {
    if (!edit) {
      getDropdownsData();
    }
  }, []);

  console.log('Form Submitted', familyDetailsFormData);
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
              Provide your family details
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.familyStatus} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={familyDetailsFormData.familyType} onSelectChange={handleSelectChange} />
          </Grid>
        </Grid>
        <Box>
          <Grid container spacing={2} style={{ marginBottom: '20px', marginTop: '20px' }}>
            <Grid item xs={12}>
              <Card elevation={4} sx={{ width: '100%' }}>
                <CardHeader title="Father Details" />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.fatherName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.freligion} onSelectChange={handleSelectChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.fcaste} onSelectChange={handleSelectChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.fIsConvertedCaste} onSelectChange={handleSelectChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.fatherStatus} onSelectChange={handleSelectChange} />
                    </Grid>
                    {familyDetailsFormData.fatherStatus?.value?.label === 'Alive' && (
                      <>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonSelectField inputProps={familyDetailsFormData.fhealthCondition} onSelectChange={handleSelectChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonInputField inputProps={familyDetailsFormData.workingSector} onChange={handleChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={2}>
                          <Animate>
                            <CommonSelectField
                              inputProps={familyDetailsFormData.fatherMobileNumberCountryCode}
                              onSelectChange={handleSelectChange}
                            />
                          </Animate>
                        </Grid>
                        <Grid item xs={4}>
                          <Animate>
                            <CommonInputField inputProps={familyDetailsFormData.fmobile} onChange={handleChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonInputField inputProps={familyDetailsFormData.faddress} onChange={handleChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonSelectField inputProps={familyDetailsFormData.fprofession} onSelectChange={handleSelectChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonInputField inputProps={familyDetailsFormData.fannualIncome} onChange={handleChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonInputField inputProps={familyDetailsFormData.fproperty} onChange={handleChange} />
                          </Animate>
                        </Grid>
                      </>
                    )}
                    <Grid item xs={6}>
                      <Animate>
                        <CommonInputField inputProps={familyDetailsFormData.pension} onChange={handleChange} />
                      </Animate>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container spacing={2} style={{ marginBottom: '20px', marginTop: '20px' }}>
            <Grid item xs={12}>
              <Card elevation={4} sx={{ width: '100%' }}>
                <CardHeader title="Mother Details" />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.motherName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.mmaidenName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.mreligion} onSelectChange={handleSelectChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.mcaste} onSelectChange={handleSelectChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.mIsConvertedCaste} onSelectChange={handleSelectChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.motherStatus} onSelectChange={handleSelectChange} />
                    </Grid>
                    {familyDetailsFormData.motherStatus?.value?.label === 'Alive' && (
                      <>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonSelectField inputProps={familyDetailsFormData.mhealthCondition} onSelectChange={handleSelectChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={2}>
                          <Animate>
                            <CommonSelectField
                              inputProps={familyDetailsFormData.motherMobileNumberCountryCode}
                              onSelectChange={handleSelectChange}
                            />
                          </Animate>
                        </Grid>
                        <Grid item xs={4}>
                          <Animate>
                            <CommonInputField inputProps={familyDetailsFormData.mmobile} onChange={handleChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonSelectField inputProps={familyDetailsFormData.mprofession} onSelectChange={handleSelectChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonInputField inputProps={familyDetailsFormData.mannualIncome} onChange={handleChange} />
                          </Animate>
                        </Grid>
                        <Grid item xs={6}>
                          <Animate>
                            <CommonInputField inputProps={familyDetailsFormData.mproperty} onChange={handleChange} />
                          </Animate>
                        </Grid>
                      </>
                    )}
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.presentAddress} onChange={handleChange} />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={isSameAddress} 
                            onChange={handleCheckboxChange}
                            color="primary"
                          />
                        }
                        label="Present Address is the same as Permanent Address"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.permanentAddress} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.brothers} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.sisters} onChange={handleChange} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container spacing={2} style={{ marginBottom: '20px', marginTop: '20px' }}>
            <Grid item xs={12}>
              <Card elevation={4} sx={{ width: '100%' }}>
                <CardHeader title="Reference Details" />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.refName} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={2}>
                      <CommonSelectField
                        inputProps={familyDetailsFormData.referenceMobileCountryCode}
                        onSelectChange={handleSelectChange}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <CommonInputField inputProps={familyDetailsFormData.refMobile} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonSelectField inputProps={familyDetailsFormData.relation} onSelectChange={handleSelectChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <CommonInputField inputProps={familyDetailsFormData.refAddress} onChange={handleChange} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Container>
  );
};

export default FamilyDetails;
