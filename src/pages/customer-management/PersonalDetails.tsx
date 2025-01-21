import React, { useState, useEffect } from 'react';
import CommonInputField from 'pages/common-components/common-input';
import CommonSelectField from 'pages/common-components/common-select';
import { Button, Grid, Container } from '@mui/material';
import { TextField } from '@mui/material';
import _ from 'lodash';
import CommonDatePicker from 'pages/common-components/common-date';
import moment from 'moment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Formik } from 'formik';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import UploadMultiFile from 'components/third-party/dropzone/MultiFile';
import Animate from './Animate';
import {
  religionList,
  listcaste,
  branchesList,
  sourceList,
  startList,
  moonsignList,
  mothertongueList,
  musicList,
  sportsList,
  cuisineList,
  readsList,
  moviesList,
  dressstyleList,
  applicationforList,
  listHobbies,
  listInterests,
  countryList,
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
import Search from 'layout/Dashboard/Header/HeaderContent/Search';
const PersonalDetails = ({ personalDetailsFormData, setPersonalDetailsFormData }: any) => {
  // Define the structure of form data for type safety
  const [religionData, setReligionData] = useState([]);
  const [casteData, setCasteData] = useState([]);
  const [branchData, setBranchData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [starData, setStarData] = useState([]);
  const [moonsignData, setMoonsignData] = useState([]);
  const [mothertongueData, setMothertongueData] = useState([]);
  const [musicData, setMusicData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [cuisineData, setCuisineData] = useState([]);
  const [readsData, setReadsData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [dressstyleData, setDressstyleData] = useState([]);
  const [applicationforData, setApplicationforData] = useState([]);
  const [hobbiesData, setHobbiesData] = useState([]);
  const [interestsData, setInterestsData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log('personalDetailsFormData: ', personalDetailsFormData);
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

  type FormDataKeys = keyof typeof personalDetailsFormData;

  const handleChange = (name: FormDataKeys, value: any) => {
    const newFormData = _.cloneDeep(personalDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setPersonalDetailsFormData(newFormData);
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
    if (name === 'selectcountry') {
      stateResult = await getStatesListByCountryId(value.id);
    } else if (name === 'selectstate') {
      districtResult = await getDistrictsListBystateId(personalDetailsFormData.selectcountry.value.id, value.id);
      console.log('districtResult: ', districtResult);
    } else if (name === 'selectdistrict') {
      cityResult = await getCitiesListByDistrictId(
        personalDetailsFormData.selectcountry.value.id,
        personalDetailsFormData.selectstate.value.id,
        value.id
      );
    }
    const newFormData = _.cloneDeep(personalDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    if (name === 'selecthealthcodition') {
      if (value.id === 4) {
        newFormData['handicappedInfo'].mandatory = true;
      } else {
        newFormData['handicappedInfo'].mandatory = false;
      }
    } else if (name === 'selectmaritalstatus') {
      if (value.id === 2) {
        newFormData['havingChildren'].mandatory = true;
        newFormData['deathCertificate'].mandatory = true;
        newFormData['dateOfMarriage'].mandatory = true;
        newFormData['dateOfDeath'].mandatory = true;
      } else if (value.id === 3) {
        newFormData['havingChildren'].mandatory = true;
        newFormData['divorceCertificate'].mandatory = true;
        newFormData['dateOfMarriage'].mandatory = true;
        newFormData['dateOfDeath'].mandatory = true;
        newFormData['reasonForDivorce'].mandatory = true;
      } else if (value.id === 4) {
        newFormData['havingChildren'].mandatory = true;
        newFormData['uploadAcknowledgement'].mandatory = true;
      } else if (value.id === 5) {
        newFormData['havingChildren'].mandatory = true;
      } else {
        newFormData['havingChildren'].mandatory = false;
        newFormData['deathCertificate'].mandatory = false;
        newFormData['divorceCertificate'].mandatory = false;
        newFormData['uploadAcknowledgement'].mandatory = false;
        newFormData['dateOfMarriage'].mandatory = false;
        newFormData['dateOfDeath'].mandatory = false;
        newFormData['reasonForDivorce'].mandatory = false;
      }
    } else if (name === 'applicationfor') {
      if (['Son', 'Daughter', 'Brother', 'Sister', 'Relative', 'Friend'].includes(value.label)) {
        newFormData['applicationFillingPersonName'].mandatory = true;
        newFormData['applicationFillingPersonCountryCode'].mandatory = true;
        newFormData['applicationFillingPersonMobile'].mandatory = true;
      } else {
        newFormData['applicationFillingPersonName'].mandatory = false;
        newFormData['applicationFillingPersonCountryCode'].mandatory = false;
        newFormData['applicationFillingPersonMobile'].mandatory = false;
      }
    } else if (name === 'selectcountry') {
      newFormData['selectstate'].options =
        stateResult?.data?.length > 0 ? stateResult?.data?.map((item: any) => ({ id: item?.id, label: item?.stateName })) : [];
    } else if (name === 'selectstate') {
      newFormData['selectdistrict'].options =
        districtResult?.data?.length > 0 ? districtResult?.data?.map((item: any) => ({ id: item?.id, label: item?.districtName })) : [];
    } else if (name === 'selectdistrict') {
      newFormData['city'].options =
        cityResult?.data?.length > 0 ? cityResult?.data?.map((item: any) => ({ id: item?.id, label: item?.cityName })) : [];
    }

    setPersonalDetailsFormData(newFormData);
  };

  const handleDateChange = (name: string, value: Date | null) => {
    // Change to Date | null
    const newFormData = _.cloneDeep(personalDetailsFormData);
    newFormData[name].value = value;
    newFormData[name].error = false;
    newFormData[name].helperText = '';
    setPersonalDetailsFormData(newFormData);
  };

  const getDropdownsData = async () => {
    setIsLoading(true);
    let religionRes = await religionList({ meta: true });
    if (religionRes.status) {
      if (religionRes.data.length > 0) {
        religionRes = religionRes.data.map((item: any) => ({ id: item.id, label: item.religionName }));
        setReligionData(religionRes);
      } else {
        setReligionData([]);
      }
    } else {
      setReligionData([]);
    }

    let casteRes = await listcaste({ meta: true });
    if (casteRes.status) {
      if (casteRes.data.length > 0) {
        casteRes = casteRes.data.map((item: any) => ({ id: item.id, label: item.castName }));
        setCasteData(casteRes);
      } else {
        setCasteData([]);
      }
    } else {
      setCasteData([]);
    }

    let branchRes = await branchesList({ meta: true });
    if (branchRes.status) {
      if (branchRes.data.length > 0) {
        branchRes = branchRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setBranchData(branchRes);
      } else {
        setBranchData([]);
      }
    } else {
      setBranchData([]);
    }

    let sourceRes = await sourceList({ meta: true });
    if (sourceRes.status) {
      if (sourceRes.data.length > 0) {
        sourceRes = sourceRes.data.map((item: any) => ({ id: item.id, label: item.sourceName }));
        setSourceData(sourceRes);
      } else {
        setSourceData([]);
      }
    } else {
      setSourceData([]);
    }

    let starRes = await startList({ meta: true });
    if (starRes.status) {
      if (starRes.data.length > 0) {
        starRes = starRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setStarData(starRes);
      } else {
        setStarData([]);
      }
    } else {
      setStarData([]);
    }

    let moonsignres = await moonsignList({ meta: true });
    if (moonsignres.status) {
      if (moonsignres.data.length > 0) {
        moonsignres = moonsignres.data.map((item: any) => ({ id: item.id, label: item.name }));
        setMoonsignData(moonsignres);
      } else {
        setMoonsignData([]);
      }
    } else {
      setMoonsignData([]);
    }

    let mothertongueRes = await mothertongueList({ meta: true });
    if (mothertongueRes.status) {
      if (mothertongueRes.data.length > 0) {
        mothertongueRes = mothertongueRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setMothertongueData(mothertongueRes);
      } else {
        setMothertongueData([]);
      }
    } else {
      setMothertongueData([]);
    }

    let musicRes = await musicList({ meta: true });
    if (musicRes.status) {
      if (musicRes.data.length > 0) {
        musicRes = musicRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setMusicData(musicRes);
      } else {
        setMusicData([]);
      }
    } else {
      setMusicData([]);
    }

    let sportsres = await sportsList({ meta: true });
    if (sportsres.status) {
      if (sportsres.data.length > 0) {
        sportsres = sportsres.data.map((item: any) => ({ id: item.id, label: item.name }));
        setSportsData(sportsres);
      } else {
        setSportsData([]);
      }
    } else {
      setSportsData([]);
    }

    let cuisineRes = await cuisineList({ meta: true });
    if (cuisineRes.status) {
      if (cuisineRes.data.length > 0) {
        cuisineRes = cuisineRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setCuisineData(cuisineRes);
      } else {
        setCuisineData([]);
      }
    } else {
      setCuisineData([]);
    }

    let readsres = await readsList({ meta: true });
    if (readsres.status) {
      if (readsres.data.length > 0) {
        readsres = readsres.data.map((item: any) => ({ id: item.id, label: item.name }));
        setReadsData(readsres);
      } else {
        setReadsData([]);
      }
    } else {
      setReadsData([]);
    }

    let moviesRes = await moviesList({ meta: true });
    if (moviesRes.status) {
      if (moviesRes.data.length > 0) {
        moviesRes = moviesRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setMoviesData(moviesRes);
      } else {
        setMoviesData([]);
      }
    } else {
      setMoviesData([]);
    }

    let dressstyleRes = await dressstyleList({ meta: true });
    if (dressstyleRes.status) {
      if (dressstyleRes.data.length > 0) {
        dressstyleRes = dressstyleRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setDressstyleData(dressstyleRes);
      } else {
        setDressstyleData([]);
      }
    } else {
      setDressstyleData([]);
    }

    let applicationforRes = await applicationforList({ meta: true });
    if (applicationforRes.status) {
      if (applicationforRes.data.length > 0) {
        applicationforRes = applicationforRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setApplicationforData(applicationforRes);
      } else {
        setApplicationforData([]);
      }
    } else {
      setApplicationforData([]);
    }

    let hobbiesRes = await listHobbies({ meta: true });
    if (hobbiesRes.status) {
      if (hobbiesRes.data.length > 0) {
        hobbiesRes = hobbiesRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setHobbiesData(hobbiesRes);
      } else {
        setHobbiesData([]);
      }
    } else {
      setHobbiesData([]);
    }

    let interestsRes = await listInterests({ meta: true });
    if (interestsRes.status) {
      if (interestsRes.data.length > 0) {
        interestsRes = interestsRes.data.map((item: any) => ({ id: item.id, label: item.name }));
        setInterestsData(interestsRes);
      } else {
        setInterestsData([]);
      }
    } else {
      setInterestsData([]);
    }

    let countryRes = await countryList({ meta: true });
    if (countryRes.status) {
      if (countryRes.data.length > 0) {
        countryRes = countryRes.data.map((item: any) => ({ id: item.id, label: item.countryName }));
        setCountryData(countryRes);
      } else {
        setCountryData([]);
      }
    } else {
      setCountryData([]);
    }

    setPersonalDetailsFormData((prev: any) => ({
      ...prev,
      selectReligion: {
        ...prev.selectReligion,
        options: religionRes ? religionRes : []
      },
      selectCaste: {
        ...prev.selectCaste,
        options: casteRes ? casteRes : []
      },
      selectStar: {
        ...prev.selectStar,
        options: starRes ? starRes : []
      },
      selectRassi: {
        ...prev.selectRassi,
        options: moonsignres ? moonsignres : []
      },
      selectmothertounge: {
        ...prev.selectmothertounge,
        options: mothertongueRes ? mothertongueRes : []
      },
      applicationfor: {
        ...prev.applicationfor,
        options: applicationforRes ? applicationforRes : []
      },
      favouritemusic: {
        ...prev.favouritemusic,
        options: musicRes ? musicRes : []
      },
      sports: {
        ...prev.sports,
        options: sportsres ? sportsres : []
      },
      favouritecuisne: {
        ...prev.favouritecuisne,
        options: cuisineRes ? cuisineRes : []
      },
      favouritereads: {
        ...prev.favouritereads,
        options: readsres ? readsres : []
      },
      preferedmovies: {
        ...prev.preferedmovies,
        options: moviesRes ? moviesRes : []
      },
      prefereddressingstyle: {
        ...prev.prefereddressingstyle,
        options: dressstyleRes ? dressstyleRes : []
      },
      source: {
        ...prev.source,
        options: sourceRes ? sourceRes : []
      },
      intrests: {
        ...prev.intrests,
        options: interestsRes ? interestsRes : []
      },
      hobbies: {
        ...prev.hobbies,
        options: hobbiesRes ? hobbiesRes : []
      },
      selectcountry: {
        ...prev.selectcountry,
        options: countryRes ? countryRes : []
      }
    }));
    setIsLoading(false);
  };

  useEffect(() => {
    getDropdownsData();
  }, []);

  console.log('Form Submitted', personalDetailsFormData);
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
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>
              Provide your account details
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.fullName} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.surname} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.gender} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={2}>
            <CommonSelectField inputProps={personalDetailsFormData.countryCode} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={4}>
            <CommonInputField inputProps={personalDetailsFormData.mobileNumber} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.email} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.aadharNumber} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonDatePicker inputProps={personalDetailsFormData.dateOfBirth} onDateChange={handleDateChange} />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <TimePicker
                  label={personalDetailsFormData.timeOfBirth.label}
                  value={personalDetailsFormData.timeOfBirth.value}
                  slotProps={{
                    textField: {
                      error: personalDetailsFormData.timeOfBirth.error,
                      helperText: personalDetailsFormData.timeOfBirth.helperText
                    }
                  }}
                  onChange={(newValue: Date | null) => {
                    if (newValue) {
                      setPersonalDetailsFormData({
                        ...personalDetailsFormData,
                        timeOfBirth: { ...personalDetailsFormData.timeOfBirth, value: newValue, error: false, helperText: '' }
                      });
                    } else {
                      setPersonalDetailsFormData({
                        ...personalDetailsFormData,
                        timeOfBirth: { ...personalDetailsFormData.timeOfBirth, value: null }
                      });
                    }
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.birthPlace} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectReligion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectCaste} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.isConvertedCaste} onSelectChange={handleSelectChange} />
          </Grid>

          {personalDetailsFormData.selectReligion.value.label?.toLowerCase() === 'hindu' && (
            <>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={personalDetailsFormData.selectStar} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={personalDetailsFormData.selectRassi} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonSelectField inputProps={personalDetailsFormData.selectPadam} onSelectChange={handleSelectChange} />
                </Animate>
              </Grid>
              <Grid item xs={6}>
                <Animate>
                  <CommonInputField inputProps={personalDetailsFormData.gothram} onChange={handleChange} />
                </Animate>
              </Grid>
            </>
          )}

          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectkujadosham} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectheight} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectbloodgroup} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectmothertounge} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selecthealthcodition} onSelectChange={handleSelectChange} />
          </Grid>
          {personalDetailsFormData.selecthealthcodition.value.label === 'Physically Challenged' && (
            <Grid item xs={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <CommonInputField inputProps={personalDetailsFormData.handicappedInfo} onChange={handleChange} />
              </motion.div>
            </Grid>
          )}
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectcomplexion} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectmaritalstatus} onSelectChange={handleSelectChange} />
          </Grid>
          {personalDetailsFormData.selectmaritalstatus.value.label === 'Widower' && (
            <>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonSelectField inputProps={personalDetailsFormData.havingChildren} onSelectChange={handleSelectChange} />
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <MainCard title={personalDetailsFormData.deathCertificate.label}>
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
                          setPersonalDetailsFormData({
                            ...personalDetailsFormData,
                            deathCertificate: { ...personalDetailsFormData?.deathCertificate, value: values?.files }
                          });
                        }, [values]);
                        return (
                          <form onSubmit={() => {}}>
                            <Grid spacing={3}>
                              <Grid item xs={12}>
                                <Stack spacing={1.5} alignItems="center">
                                  <UploadMultiFile
                                    showList={true}
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
                </motion.div>
              </Grid>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonDatePicker inputProps={personalDetailsFormData.dateOfMarriage} onDateChange={handleDateChange} />
                </motion.div>
              </Grid>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonDatePicker inputProps={personalDetailsFormData.dateOfDeath} onDateChange={handleDateChange} />
                </motion.div>
              </Grid>
            </>
          )}
          {personalDetailsFormData.selectmaritalstatus.value.label === 'Divorced' && (
            <>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonSelectField inputProps={personalDetailsFormData.havingChildren} onSelectChange={handleSelectChange} />
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <MainCard title={personalDetailsFormData.divorceCertificate.label}>
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
                          setPersonalDetailsFormData({
                            ...personalDetailsFormData,
                            divorceCertificate: { ...personalDetailsFormData?.divorceCertificate, value: values?.files }
                          });
                        }, [values]);
                        return (
                          <form onSubmit={() => {}}>
                            <Grid spacing={3}>
                              <Grid item xs={12}>
                                <Stack spacing={1.5} alignItems="center">
                                  <UploadMultiFile
                                    showList={true}
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
                </motion.div>
              </Grid>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonDatePicker inputProps={personalDetailsFormData.dateOfMarriage} onDateChange={handleDateChange} />
                </motion.div>
              </Grid>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonDatePicker inputProps={personalDetailsFormData.dateOfDivorce} onDateChange={handleDateChange} />
                </motion.div>
              </Grid>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonInputField inputProps={personalDetailsFormData.reasonForDivorce} onChange={handleChange} />
                </motion.div>
              </Grid>
            </>
          )}
          {personalDetailsFormData.selectmaritalstatus.value.label === 'Waiting for Divorce' && (
            <>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonSelectField inputProps={personalDetailsFormData.havingChildren} onSelectChange={handleSelectChange} />
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <MainCard title={personalDetailsFormData.uploadAcknowledgement.label}>
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
                          setPersonalDetailsFormData({
                            ...personalDetailsFormData,
                            uploadAcknowledgement: { ...personalDetailsFormData?.uploadAcknowledgement, value: values?.files }
                          });
                        }, [values]);
                        return (
                          <form onSubmit={() => {}}>
                            <Grid spacing={3}>
                              <Grid item xs={12}>
                                <Stack spacing={1.5} alignItems="center">
                                  <UploadMultiFile
                                    showList={true}
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
                </motion.div>
              </Grid>
            </>
          )}
          {personalDetailsFormData.selectmaritalstatus.value.label === 'No Divorce' && (
            <>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonSelectField inputProps={personalDetailsFormData.havingChildren} onSelectChange={handleSelectChange} />
                </motion.div>
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectsmoke} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectdrink} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectfood} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.about} onChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.hobbies} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.intrests} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.favouritemusic} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.sports} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.favouritecuisne} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.favouritereads} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.preferedmovies} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.prefereddressingstyle} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.spokenlanguages} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectcountry} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectstate} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.selectdistrict} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.city} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.address} onChange={handleChange} />
          </Grid>
          <Grid item xs={2}>
            <CommonSelectField inputProps={personalDetailsFormData.altcountryCode} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={4}>
            <CommonInputField inputProps={personalDetailsFormData.altmobile} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonInputField inputProps={personalDetailsFormData.altemail} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <TimePicker
                  label={personalDetailsFormData.timeToCall.label}
                  value={personalDetailsFormData.timeToCall.value}
                  slotProps={{
                    textField: {
                      error: personalDetailsFormData.timeToCall.error,
                      helperText: personalDetailsFormData.timeToCall.helperText
                    }
                  }}
                  onChange={(newValue: Date | null) => {
                    if (newValue) {
                      setPersonalDetailsFormData({
                        ...personalDetailsFormData,
                        timeToCall: { ...personalDetailsFormData.timeToCall, value: newValue, error: false, helperText: '' }
                      });
                    } else {
                      setPersonalDetailsFormData({
                        ...personalDetailsFormData,
                        timeToCall: { ...personalDetailsFormData.timeToCall, value: null }
                      });
                    }
                  }}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.applicationfor} onSelectChange={handleSelectChange} />
          </Grid>
          {['Son', 'Daughter', 'Brother', 'Sister', 'Relative', 'Friend'].includes(personalDetailsFormData.applicationfor.value.label) && (
            <>
              <Grid item xs={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonInputField inputProps={personalDetailsFormData.applicationFillingPersonName} onChange={handleChange} />
                </motion.div>
              </Grid>
              <Grid item xs={2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonSelectField
                    inputProps={personalDetailsFormData.applicationFillingPersonCountryCode}
                    onSelectChange={handleSelectChange}
                  />
                </motion.div>
              </Grid>
              <Grid item xs={4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <CommonInputField inputProps={personalDetailsFormData.applicationFillingPersonMobile} onChange={handleChange} />
                </motion.div>
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.source} onSelectChange={handleSelectChange} />
          </Grid>
          <Grid item xs={6}>
            <CommonSelectField inputProps={personalDetailsFormData.nearestbranch} onSelectChange={handleSelectChange} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PersonalDetails;
