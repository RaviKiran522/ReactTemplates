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
import { motion, AnimatePresence } from 'framer-motion';
import Animate from './Animate';
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';
import {
  listEducation,
  listUniversitys,
  listEmployedIn,
  listDesingation,
  listProfession,
  countryList as listCountry,
  statesList,
  districtList,
  cityList
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
  FormHelperText
} from '@mui/material';
import MainCard from 'components/MainCard';
const EducationDetails = ({ educationDetailsFormData, setEducationDetailsFormData, edit }: any) => {
  const [educationList, setEducationList] = useState([]);
  const [universityList, setUniversityList] = useState([]);
  const [employedInList, setEmployedInList] = useState([]);
  const [designationList, setDesignationList] = useState([]);
  const [professionList, setProfessionList] = useState([]);
  const [countryList, setCountryList] = useState([]);
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

  type FormDataKeys = keyof typeof educationDetailsFormData;

  const validate = (): boolean => {
    let newFormData = _.cloneDeep(educationDetailsFormData);
    let isValid = true;

    for (const key in educationDetailsFormData) {
      if (educationDetailsFormData.hasOwnProperty(key)) {
        const field = educationDetailsFormData[key];

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

    setEducationDetailsFormData(newFormData);
    return isValid;
  };

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(educationDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setEducationDetailsFormData(newFormData);
  };

  const getStatesListByCountryId = async (countryId: number) => {
    const result = await statesList({
      search: '',
      status: null,
      id: null,
      countryId: countryId,
      meta: true
    });
    return result;
  };

  const getDistrictsListBystateId = async (countryId: number, stateId: number) => {
    const result = await districtList({
      search: '',
      status: null,
      id: null,
      countryId: countryId,
      stateId: stateId,
      districtId: null,
      meta: true
    });
    return result;
  };

  const getCitiesListByDistrictId = async (countryId: number, stateId: number, districtId: number) => {
    const result = await cityList({
      search: '',
      status: null,
      id: null,
      countryId: countryId,
      stateId: stateId,
      districtId: districtId,
      meta: true
    });
    return result;
  };

  const handleSelectChange = async (name: FormDataKeys, value: any) => {
    let stateResult;
    let districtResult;
    let cityResult;
    if (name === 'country') {
      stateResult = await getStatesListByCountryId(value.id);
    } else if (name === 'state' || name === 'indiaWorkingState') {
      districtResult = await getDistrictsListBystateId(educationDetailsFormData.country.value.id, value.id);
      console.log('districtResult: ', districtResult);
    } else if (name === 'selectdistrict') {
      cityResult = await getCitiesListByDistrictId(
        educationDetailsFormData.country.value.id,
        educationDetailsFormData.indiaWorkingState.value.id,
        value.id
      );
    } else if (name === 'workingLocation' && value.id === 2) {
      const getCoutryId: any = educationDetailsFormData.country.options.find((iten: any) => iten.label.toLowerCase() === 'india');
      console.log('countryList: ', educationDetailsFormData.country.options, 'getCoutryId: ', getCoutryId);
      if (getCoutryId) {
        stateResult = await getStatesListByCountryId(getCoutryId.id ? getCoutryId.id : 0);
      }
    }
    const newFormData = _.cloneDeep(educationDetailsFormData);
    if (name === 'country' || name === 'workingLocation') {
      if (name === 'workingLocation' && value.id === 2) {
        newFormData['country'].options = countryList;
        newFormData['indiaWorkingState'].mandatory = true;
        newFormData['selectdistrict'].mandatory = true;
        newFormData['city'].mandatory = true;
        newFormData['locationAdd'].mandatory = true;
        newFormData['compName'].mandatory = true;
        newFormData['workingSince'].mandatory = true;
        newFormData['totalExp'].mandatory = true;
        newFormData['passNumber'].mandatory = true;
        newFormData['indiaColleaguesName'].mandatory = true;
        newFormData['indiaColleagueMobileNo'].mandatory = true;

        newFormData['country'].mandatory = false;
        newFormData['state'].mandatory = false;
        newFormData['visaType'].mandatory = false;
        newFormData['passportNumber'].mandatory = false;
        newFormData['validFrom'].mandatory = false;
        newFormData['validTill'].mandatory = false;
        newFormData['workingCompanyName'].mandatory = false;
        newFormData['companyAddress'].mandatory = false;

        newFormData['country'].error = false;
        newFormData['state'].error = false;
        newFormData['visaType'].error = false;
        newFormData['passportNumber'].error = false;
        newFormData['validFrom'].error = false;
        newFormData['validTill'].error = false;
        newFormData['workingCompanyName'].error = false;
        newFormData['companyAddress'].error = false;
        
        newFormData['country'].value = "";
        newFormData['state'].value = "";
        newFormData['visaType'].value = "";
        newFormData['passportNumber'].value = "";
        newFormData['validFrom'].value = "";
        newFormData['validTill'].value = "";
        newFormData['workingCompanyName'].value = "";
        newFormData['companyAddress'].value = "";

      } else if (name === 'workingLocation' && value.id === 1) {
        newFormData['country'].mandatory = true;
        newFormData['state'].mandatory = true;
        newFormData['visaType'].mandatory = true;
        newFormData['passportNumber'].mandatory = true;
        newFormData['validFrom'].mandatory = true;
        newFormData['validTill'].mandatory = true;
        newFormData['workingCompanyName'].mandatory = true;
        newFormData['companyAddress'].mandatory = true;

        newFormData['indiaWorkingState'].mandatory = false;
        newFormData['selectdistrict'].mandatory = false;
        newFormData['city'].mandatory = false;
        newFormData['locationAdd'].mandatory = false;
        newFormData['compName'].mandatory = false;
        newFormData['workingSince'].mandatory = false;
        newFormData['totalExp'].mandatory = false;
        newFormData['passNumber'].mandatory = false;
        newFormData['indiaColleaguesName'].mandatory = false;
        newFormData['indiaColleagueMobileNo'].mandatory = false;

        newFormData['indiaWorkingState'].error = false;
        newFormData['selectdistrict'].error = false;
        newFormData['city'].error = false;
        newFormData['locationAdd'].error = false;
        newFormData['compName'].error = false;
        newFormData['workingSince'].error = false;
        newFormData['totalExp'].error = false;
        newFormData['passNumber'].error = false;
        newFormData['indiaColleaguesName'].error = false;
        newFormData['indiaColleagueMobileNo'].error = false;

        newFormData['indiaWorkingState'].value = "";
        newFormData['selectdistrict'].value = "";
        newFormData['city'].value = "";
        newFormData['locationAdd'].value = "";
        newFormData['compName'].value = "";
        newFormData['workingSince'].value = "";
        newFormData['totalExp'].value = "";
        newFormData['passNumber'].value = "";
        newFormData['indiaColleaguesName'].value = "";
        newFormData['indiaColleagueMobileNo'].value = "";
      }
      if (name === "country") {
        newFormData['state'].options =
          stateResult?.data?.length > 0 ? stateResult?.data?.map((item: any) => ({ id: item?.id, label: item?.stateName })) : [];
      } else if(name === 'workingLocation' && value.id === 2) {
        newFormData['indiaWorkingState'].options =
        stateResult?.data?.length > 0 ? stateResult?.data?.map((item: any) => ({ id: item?.id, label: item?.stateName })) : [];
      }
    } else if (name === 'indiaWorkingState') {
      newFormData['selectdistrict'].options =
        districtResult?.data?.length > 0 ? districtResult?.data?.map((item: any) => ({ id: item?.id, label: item?.districtName })) : [];
    } else if (name === 'selectdistrict') {
      newFormData['city'].options =
        cityResult?.data?.length > 0 ? cityResult?.data?.map((item: any) => ({ id: item?.id, label: item?.cityName })) : [];
    }
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setEducationDetailsFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
    // Change to Date | null
    const newFormData = _.cloneDeep(educationDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setEducationDetailsFormData(newFormData);
  };

  const getDropdownsData = async () => {
    setIsLoading(true);
    let educationRes = await listEducation({ meta: true });
    if (educationRes.status) {
      if (educationRes.data.length > 0) {
        educationRes = educationRes.data.map((item: any) => ({ id: item.id, label: item.educationName }));
        setEducationList(educationRes);
      } else {
        setEducationList([]);
      }
    } else {
      setEducationList([]);
    }

    let universitiesRes = await listUniversitys({ meta: true });
    if (universitiesRes.status) {
      if (universitiesRes.data.length > 0) {
        universitiesRes = universitiesRes.data.map((item: any) => ({ id: item.id, label: item.univercityName }));
        setUniversityList(universitiesRes);
      } else {
        setUniversityList([]);
      }
    } else {
      setUniversityList([]);
    }

    let employedInRes = await listEmployedIn({ meta: true });
    if (employedInRes.status) {
      if (employedInRes.data.length > 0) {
        employedInRes = employedInRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setEmployedInList(employedInRes);
      } else {
        setEmployedInList([]);
      }
    } else {
      setEmployedInList([]);
    }

    let designationRes = await listDesingation({ meta: true });
    if (designationRes.status) {
      if (designationRes.data.length > 0) {
        designationRes = designationRes.data.map((item: any) => ({ id: item.id, label: item.designationName }));
        setDesignationList(designationRes);
      } else {
        setDesignationList([]);
      }
    } else {
      setDesignationList([]);
    }

    let professionRes = await listProfession({ meta: true });
    if (professionRes.status) {
      if (professionRes.data.length > 0) {
        professionRes = professionRes.data.map((item: any) => ({ id: item.id, label: item.professionName }));
        setProfessionList(professionRes);
      } else {
        setProfessionList([]);
      }
    } else {
      setProfessionList([]);
    }

    let countryRes = await listCountry({ meta: true });
    if (countryRes.status) {
      if (countryRes.data.length > 0) {
        countryRes = countryRes.data.map((item: any) => ({ id: item.id, label: item.countryName }));
        setCountryList(countryRes);
      } else {
        setCountryList([]);
      }
    } else {
      setCountryList([]);
    }

    setEducationDetailsFormData((prev: any) => ({
      ...prev,
      country: {
        ...prev.country,
        options: countryRes ? countryRes : []
      },
      education: {
        ...prev.education,
        options: educationRes ? educationRes : []
      },
      designation: {
        ...prev.designation,
        options: designationRes ? designationRes : []
      },
      profession: {
        ...prev.profession,
        options: professionRes ? professionRes : []
      },
      university: {
        ...prev.university,
        options: universitiesRes ? universitiesRes : []
      },
      employedin: {
        ...prev.employedin,
        options: employedInRes ? employedInRes : []
      }
    }));
    setIsLoading(false);
  };

  useEffect(() => {
    if (!edit) {
      getDropdownsData();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    // console.log('Form Submitted', educationDetailsFormData);
    e.preventDefault();
    const sampleObject = {
      branchName: educationDetailsFormData.branchName.value,
      phoneNumber: educationDetailsFormData.phoneNumber.value,
      email: educationDetailsFormData.email.value,
      state: educationDetailsFormData.state.value,
      address: educationDetailsFormData.address.value,
      city: educationDetailsFormData.city.value,
      status: educationDetailsFormData.status.value,
      pincode: educationDetailsFormData.pincode.value
    };
    console.log('sampleObject.........', sampleObject);
    if (validate()) {
      console.log('Form Submitted', educationDetailsFormData);
    }
  };

  console.log('Form Submitted', educationDetailsFormData?.workingLocation);
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
            <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
              Provide your Education details
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.education} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.university} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.employedin} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.designation} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.profession} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={educationDetailsFormData.workingLocation} onSelectChange={handleSelectChange} />
          </Grid>
          {educationDetailsFormData.workingLocation?.value?.label === 'Abroad' && (
            <>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={educationDetailsFormData.country} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={educationDetailsFormData.state} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={educationDetailsFormData.visaType} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.passportNumber} onChange={handleChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonDatePicker inputProps={educationDetailsFormData.validFrom} onDateChange={handleDateChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonDatePicker inputProps={educationDetailsFormData.validTill} onDateChange={handleDateChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.workingCompanyName} onChange={handleChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.companyAddress} onChange={handleChange} />
                </Animate>
              </Grid>
              {/* <Grid item xs={6}>
                  <CommonInputField inputProps={educationDetailsFormData.propertyDetails} onChange={handleChange} />
                </Grid>
                <Grid item xs={6}>
                  <CommonInputField inputProps={educationDetailsFormData.annualIncome} onChange={handleChange} />
                </Grid> */}
            </>
          )}
          {educationDetailsFormData.workingLocation?.value?.label === 'India' && (
            <>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={educationDetailsFormData.indiaWorkingState} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={educationDetailsFormData.selectdistrict} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={educationDetailsFormData.city} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.locationAdd} onChange={handleChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.compName} onChange={handleChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.workingSince} onChange={handleChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.totalExp} onChange={handleChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.passNumber} onChange={handleChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.indiaColleaguesName} onChange={handleChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={educationDetailsFormData.indiaColleagueMobileNo} onChange={handleChange} />
                </Animate>
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <CommonInputField inputProps={educationDetailsFormData.propertyDetails} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={educationDetailsFormData.annualIncome} onChange={handleChange} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EducationDetails;
