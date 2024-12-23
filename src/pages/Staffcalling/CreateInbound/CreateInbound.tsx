
import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports

import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import PersonalInfo from './PesonalIinfo';
import EducationInfo from './EducationInfo';
import FamilyInfo from './FamilyInfo';
import PartnerInfo from './PartenerInfo';
import ConfirmInfo from './ConfirmInfo';
import { useLocation } from 'react-router';
// import EducationDetails from 'pages/customer-management/EducationDetails';
// import PersonalDetails from 'pages/customer-management/PersonalDetails';
// import PartnerDetails from 'pages/customer-management/PartnerDetails';
// import FamilyDetails from 'pages/customer-management/FamilyDetails';
// import Confirm from 'pages/customer-management/Confirm';

// step options
const steps = ['Personal Details', 'Education Details', 'Family Details', 'Partner Details', 'Confirm'];

// ==============================|| FORMS WIZARD - BASIC ||============================== //

export default function CreateInBound({edit}: any) {
  const personalDetails: any = {
    fullName: {
      label: 'Full Name',
      id: 'fullName',
      name: 'fullName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    surname: {
      label: 'Surname',
      id: 'surname',
      name: 'surname',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    gender: {
      label: 'Gender',
      id: 'gender',
      name: 'gender',
      type: 'select',
      options: [
        { id: 0, label: 'Please Select' },
        { id: 1, label: 'Male' },
        { id: 2, label: 'Female' }
      ],
      value: { id: 0, label: 'Please Select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    mobileNumber: {
      label: 'Mobile Number',
      id: 'mobileNumber',
      name: 'mobileNumber',
      type: 'number',
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
      mandatory: false,
      options: []
    },
    aadharNumber: {
      label: 'Aadhar Number',
      id: 'aadharNumber',
      name: 'aadharNumber',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    dateOfBirth: {
      label: 'Date of Birth',
      id: 'dateOfBirth',
      name: 'dateOfBirth',
      type: 'date',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    timeOfBirth: {
      label: 'Time of Birth',
      value: null
    },
    birthPlace: {
      label: 'Birth Place',
      id: 'birthPlace',
      name: 'birthPlace',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    selectReligion: {
      label: 'Select Religion',
      id: 'selectReligion',
      name: 'selectReligion',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectCaste: {
      label: 'Select Caste',
      id: 'selectCaste',
      name: 'selectCaste',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectStar: {
      label: 'Star',
      id: 'selectStar',
      name: 'selectStar',
      type: 'select',
      options: [
        { id: 1, label: 'Moola' },
        { id: 2, label: 'Aswini' },
        { id: 3, label: 'Bharani' },
        { id: 4, label: 'Rohini' },
        { id: 5, label: 'Krittika' },
        { id: 6, label: 'pushyami' }
      ],
      value: { id: null, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectRassi: {
      label: 'Select Moonsign/Raasi',
      id: 'selectRassi',
      name: 'selectRassi',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: 'mesha' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectPadam: {
      label: 'Select Padam',
      id: 'selectPadam',
      name: 'selectPadam',
      type: 'select',
      options: [
        { id: 1, label: '1' },
        { id: 2, label: '2' },
        { id: 3, label: '3' }
      ],
      value: { id: 1, label: '1' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    gothram: {
      label: 'Gothram',
      id: 'gothram',
      name: 'gothram',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    selectkujadosham: {
      label: 'Select Kuja Dosham',
      id: 'selectkujadosham',
      name: 'selectkujadosham',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' },
        { id: 3, label: "Don't know" }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectheight: {
      label: 'Select Height',
      id: 'selectheight',
      name: 'selectheight',
      type: 'select',
      options: [
        { id: 1, label: '4.0' },
        { id: 2, label: '5.5' },
        { id: 3, label: '6' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectbloodgroup: {
      label: 'Select Blood Group',
      id: 'selectbloodgroup',
      name: 'selectbloodgroup',
      type: 'select',
      options: [
        { id: 1, label: 'A' },
        { id: 2, label: 'B+' },
        { id: 3, label: 'AB+' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectmothertounge: {
      label: 'Select Mother Tounge',
      id: 'selectmothertounge',
      name: 'selectmothertounge',
      type: 'select',
      options: [
        { id: 1, label: 'Telugu' },
        { id: 2, label: 'Hindi' },
        { id: 3, label: 'English' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selecthealthcodition: {
      label: 'Select Health Condition',
      id: 'selecthealthcodition',
      name: 'selecthealthcodition',
      type: 'select',
      options: [
        { id: 1, label: 'Better' },
        { id: 2, label: 'Healthy' },
        { id: 3, label: 'Average' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectcomplexion: {
      label: 'Select complexion',
      id: 'selectcomplexion',
      name: 'selectcomplexion',
      type: 'select',
      options: [
        { id: 1, label: 'Fair' },
        { id: 2, label: 'Medium' },
        { id: 3, label: 'Dark' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectmaritalstatus: {
      label: 'Marital Status',
      id: 'selectmaritalstatus',
      name: 'selectmaritalstatus',
      type: 'select',
      options: [
        { id: 1, label: 'Unmarried' },
        { id: 2, label: 'Widower' },
        { id: 3, label: 'Divorced' },
        { id: 4, label: 'Waiting for Divorce' },
        { id: 5, label: 'No Divorce' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    deathCertificate: {
      label: 'Upload Death Certificate',
      id: 'deathCertificate',
      name: 'deathCertificate',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    dateOfMarriage: {
      label: 'Date of Marraige',
      id: 'dateOfMarriage',
      name: 'dateOfMarriage',
      type: 'date',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    dateOfDeath: {
      label: 'Date of Death',
      id: 'dateOfDeath',
      name: 'dateOfDeath',
      type: 'date',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    havingChildren: {
      label: 'Having Children',
      id: 'havingChildren',
      name: 'havingChildren',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    divorceCertificate: {
      label: 'Upload Divorce Certificate',
      id: 'divorceCertificate',
      name: 'divorceCertificate',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    dateOfDivorce: {
      label: 'Date of Divorce',
      id: 'dateOfDivorce',
      name: 'dateOfDivorce',
      type: 'date',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    reasonForDivorce: {
      label: 'Reason for Divorce',
      id: 'reasonForDivorce',
      name: 'reasonForDivorce',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    uploadAcknowledgement: {
      label: 'Upload Acknowledgement',
      id: 'uploadAcknowledgement',
      name: 'uploadAcknowledgement',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
    selectsmoke: {
      label: 'Select smoke',
      id: 'selectsmoke',
      name: 'selectsmoke',
      type: 'select',
      options: [
        { id: 1, label: 'No' },
        { id: 2, label: 'Regular' },
        { id: 3, label: 'Occasional' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectdrink: {
      label: 'Select Drink',
      id: 'selectdrink',
      name: 'selectdrink',
      type: 'select',
      options: [
        { id: 1, label: 'No' },
        { id: 2, label: 'Regular' },
        { id: 3, label: 'Occasional' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectfood: {
      label: 'Select Food',
      id: 'selectfood',
      name: 'selectfood',
      type: 'select',
      options: [
        { id: 1, label: 'Vegtarian' },
        { id: 2, label: 'Non-vegtarian' },
        { id: 3, label: 'Not Particular' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    about: {
      label: 'About',
      id: 'about',
      name: 'about',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    hobbies: {
      label: 'Select Hobbies',
      id: 'hobbies',
      name: 'hobbies',
      type: 'select',
      options: [
        { id: 1, label: 'playing cricket' },
        { id: 2, label: 'Playing chess' },
        { id: 3, label: 'Playing carroms' },
        { id: 4, label: 'Playing kabbadi' },
        { id: 5, label: 'Reading books ' },
        { id: 6, label: 'Reading news' },
        { id: 7, label: 'sketching' },
        { id: 8, label: 'singing' },
        { id: 9, label: 'Dancing' },
        { id: 10, label: 'cooking' },
        { id: 11, label: 'Collecting coins' },
        { id: 12, label: 'Collecting Art work' },
        { id: 13, label: 'Drawing' },
        { id: 14, label: 'Painting' },
        { id: 15, label: 'pets' },
        { id: 16, label: 'Gardening' },
        { id: 17, label: 'puzzles' },
        { id: 18, label: 'Handicraft' },
        { id: 19, label: 'playing Games' },
        { id: 20, label: 'Volley ball' }
      ],
      value: [{ id: 1, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    intrests: {
      label: 'Select Intrest',
      id: 'intrests',
      name: 'intrests',
      type: 'select',
      options: [
        { id: 1, label: 'Learning new Languages' },
        { id: 2, label: 'Sports' },
        { id: 3, label: 'Movies' },
        { id: 4, label: 'Music' },
        { id: 5, label: 'Social service' },
        { id: 6, label: 'Internet' },
        { id: 7, label: 'Travel' },
        { id: 8, label: 'Reading' },
        { id: 9, label: 'Watching tv' },
        { id: 10, label: 'Listening Music' },
        { id: 11, label: 'Passion of changing phones' },
        { id: 12, label: 'Elploring new things' },
        { id: 13, label: 'Poems' },
        { id: 14, label: 'Vexing games' },
        { id: 15, label: 'Meditation' },
        { id: 16, label: 'Swimming' }
      ],
      value: [{ id: 1, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    favouritemusic: {
      label: 'Select Favourite music',
      id: 'favouritemusic',
      name: 'favouritemusic',
      type: 'select',
      options: [
        { id: 1, label: 'Film songs' },
        { id: 2, label: 'western' },
        { id: 3, label: 'Clasical' }
      ],
      value: [{ id: 1, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    sports: {
      label: 'Select Sports',
      id: 'sports',
      name: 'sports',
      type: 'select',
      options: [
        { id: 1, label: 'Badmintion' },
        { id: 2, label: 'Volleyball' },
        { id: 3, label: 'Chess' },
        { id: 4, label: 'Cricket' },
        { id: 5, label: 'Kabbadi' },
        { id: 6, label: 'Fighting' },
        { id: 7, label: 'Photo design' }
      ],
      value: [{ id: 1, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    favouritecuisne: {
      label: 'Select Favourite Cuisne',
      id: 'favouritecuisne',
      name: 'favouritecuisne',
      type: 'select',
      options: [{ id: 1, label: 'South India' }],
      value: [{ id: 2, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    favouritereads: {
      label: 'Select Favourite Reads',
      id: 'favouritereads',
      name: 'favouritereads',
      type: 'select',
      options: [
        { id: 1, label: 'Comics' },
        { id: 2, label: 'Thriller' },
        { id: 3, label: 'Fantasy' },
        { id: 4, label: 'Biographies' },
        { id: 5, label: 'History' },
        { id: 6, label: 'Self-help' },
        { id: 7, label: 'writing lyrics' },
        { id: 8, label: 'Doing Religious Activities' },
        { id: 9, label: 'Preparation for groups' },
        { id: 10, label: 'photgraphy' },
        { id: 11, label: 'nature lover' }
      ],
      value: [{ id: 1, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    preferedmovies: {
      label: 'Select Prefered Movies',
      id: 'preferedmovies',
      name: 'preferedmovies',
      type: 'select',
      options: [
        { id: 1, label: 'Action / suspense' },
        { id: 2, label: 'Comedy ' },
        { id: 3, label: 'Sci-Fi & fantasy' },
        { id: 4, label: 'think different' },
        { id: 5, label: 'PASSIONS ' },
        { id: 6, label: 'Visiting new places ' },
        { id: 7, label: 'respects to parents' }
      ],
      value: [{ id: 1, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    prefereddressingstyle: {
      label: 'Select Prefered Dressing Style',
      id: 'prefereddressingstyle',
      name: 'prefereddressingstyle',
      type: 'select',
      options: [
        { id: 1, label: 'Casual wear' },
        { id: 2, label: 'Designer wear ' },
        { id: 3, label: 'Indian / Ethnic wear' }
      ],
      value: [{ id: 1, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },
    spokenlanguages: {
      label: 'Select Spoken Languages',
      id: 'spokenlanguages',
      name: 'spokenlanguages',
      type: 'select',
      options: [
        { id: 1, label: 'English' },
        { id: 2, label: 'Telugu ' },
        { id: 3, label: 'hindi ' },
        { id: 4, label: 'Kannada ' },
        { id: 5, label: 'Tamil' }
      ],
      value: [{ id: 1, label: 'Please select' }],
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: true
    },

    selectcountry: {
      label: 'Select Country',
      id: 'selectcountry',
      name: 'selectcountry',
      type: 'select',
      options: [
        { id: 1, label: 'India' },
        { id: 2, label: 'America' },
        { id: 3, label: 'UK' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectstate: {
      label: 'Select State',
      id: 'selectstate',
      name: 'selectstate',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TGS' },
        { id: 3, label: 'Kerela' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectdistrict: {
      label: 'Select District',
      id: 'selectdistrict',
      name: 'selectdistrict',
      type: 'select',
      options: [
        { id: 1, label: 'Srikakulam' },
        { id: 2, label: 'Vijayawada' },
        { id: 3, label: 'Bobili' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    city: {
      label: 'Select City',
      id: 'address',
      name: 'address',
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ],
      value: { id: 1, label: 'hyderabad' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    status: {
      label: 'Status',
      id: 'status',
      name: 'status',
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ],
      value: { id: 1, label: 'Select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    address: {
      label: 'Address',
      id: 'address',
      name: 'address',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: [
        { id: 1, label: 'hyderabad' },
        { id: 2, label: 'vizag' },
        { id: 3, label: 'chennai' }
      ]
    },
    altmobile: {
      label: 'Alt.mobile',
      id: 'altmobile',
      name: 'altmobile',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    altemail: {
      label: 'Alt.Email',
      id: 'altemail',
      name: 'altemail',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    timeToCall: {
      label: 'Time to call',
      value: null
    },
    pincode: {
      label: 'Pincode',
      id: 'pincode',
      name: 'pincode',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    date: {
      label: 'Date',
      id: 'date',
      name: 'date',
      value: '',
      error: false,
      helperText: 'Please select date',
      mandatory: true,
      options: []
    },
    applicationfor: {
      label: 'Application for',
      id: 'applicationfor',
      name: 'applicationfor',
      options: [
        { id: 1, label: 'Myself' },
        { id: 2, label: 'son' },
        { id: 3, label: 'daughter' }
      ],
      value: { id: 1, label: 'Select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    source: {
      label: 'Source',
      id: 'source',
      name: 'source',
      options: [
        { id: 1, label: 'Friend' },
        { id: 2, label: 'News Paper' },
        { id: 3, label: 'Self' }
      ],
      value: { id: 1, label: 'Select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    nearestbranch: {
      label: 'Nearest Branch',
      id: 'nearestbranch',
      name: 'nearestbranch',
      options: [
        { id: 1, label: 'Vijayawada' },
        { id: 2, label: 'srikakulam' },
        { id: 3, label: 'TS' }
      ],
      value: { id: 1, label: 'Select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    }
  };
  const educationDetails: any = {
    education: {
      label: 'Education',
      id: 'education',
      name: 'education',
      type: 'select',
      options: [
        { id: 1, label: 'Please Select' },
        { id: 2, label: 'Male' },
        { id: 3, label: 'Female' }
      ],
      value: { id: 1, label: 'Please Select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    university: {
      label: 'University',
      id: 'university',
      name: 'university',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    employedin: {
      label: 'Employed in',
      id: 'employedin',
      name: 'employedin',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    designation: {
      label: 'Designation',
      id: 'designation',
      name: 'designation',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Aswini' },
        { id: 3, label: 'Bharani' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    profession: {
      label: 'Profession',
      id: 'profession',
      name: 'profession',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    workingLocation: {
      label: 'Working Location',
      id: 'workingLocation',
      name: 'workingLocation',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Abroad' },
        { id: 3, label: 'India' }
      ],
      value: {id: 2, label: 'Abroad'},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    country: {
      label: 'Select Country',
      id: 'country',
      name: 'country',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' },
        { id: 3, label: "Don't know" }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    state: {
      label: 'Select State',
      id: 'state',
      name: 'state',
      type: 'select',
      options: [
        { id: 1, label: '4.0' },
        { id: 2, label: '5.5' },
        { id: 3, label: '6' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    visaType: {
      label: 'Visa Type',
      id: 'visaType',
      name: 'visaType',
      type: 'select',
      options: [
        { id: 1, label: 'A' },
        { id: 2, label: 'B+' },
        { id: 3, label: 'AB+' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    passportNumber: {
      label: 'Passport Number',
      id: 'passportNumber',
      name: 'passportNumber',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    validFrom: {
      label: 'Valid From',
      id: 'validFrom',
      name: 'validFrom',
      type: 'date',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    validTill: {
      label: 'Valid Till',
      id: 'validTill',
      name: 'validTill',
      type: 'date',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    workingCompanyName: {
      label: 'Working Company Name',
      id: 'workingCompanyName',
      name: 'workingCompanyName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    companyAddress: {
      label: 'Company\'s Present Address',
      id: 'companyAddress',
      name: 'companyAddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    propertyDetails: {
      label: 'Property Details',
      id: 'propertyDetails',
      name: 'propertyDetails',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    annualIncome: {
      label: 'Annual Income',
      id: 'annualIncome',
      name: 'annualIncome',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    workingState: {
      label: 'Working State',
      id: 'workingState',
      name: 'workingState',
      type: 'select',
      options: [
        { id: 1, label: 'A' },
        { id: 2, label: 'B+' },
        { id: 3, label: 'AB+' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    city: {
      label: 'City ',
      id: 'city',
      name: 'city',
      type: 'select',
      options: [
        { id: 1, label: 'A' },
        { id: 2, label: 'B+' },
        { id: 3, label: 'AB+' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    locationAdd: {
      label: 'Location Address',
      id: 'locationAdd',
      name: 'locationAdd',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    compName: {
      label: 'Company Name',
      id: 'compName',
      name: 'compName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    workingSince: {
      label: 'Working Since',
      id: 'workingSince',
      name: 'workingSince',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    totalExp: {
      label: 'Total Experience',
      id: 'totalExp',
      name: 'totalExp',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    passNumber: {
      label: 'Passport Number',
      id: 'passNumber',
      name: 'passNumber',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    collegueName: {
      label: 'Colleague\'s Name & Mobile No',
      id: 'collegueName',
      name: 'collegueName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
  };
  const familyDetails: any = {
    familyStatus: {
      label: 'Family Status',
      id: 'familyStatus',
      name: 'familyStatus',
      type: 'select',
      options: [
        { id: 1, label: 'Please Select' },
        { id: 2, label: 'Male' },
        { id: 3, label: 'Female' }
      ],
      value: { id: 1, label: 'Please Select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    familyType: {
      label: 'Family Type',
      id: 'familyType',
      name: 'familyType',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    fatherName: {
      label: 'Father Name',
      id: 'fatherName',
      name: 'fatherName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    freligion: {
      label: 'Select Religion',
      id: 'freligion',
      name: 'freligion',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    fcaste: {
      label: 'Select Caste',
      id: 'fcaste',
      name: 'fcaste',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Aswini' },
        { id: 3, label: 'Bharani' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    fatherConvertedCaste: {
      label: "Is converted Caste",
      value: false
    },
    fatherStatus: {
      label: 'Father Status',
      id: 'fatherStatus',
      name: 'fatherStatus',
      type: 'select',
      options: [
        { id: 1, label: 'select status' },
        { id: 2, label: 'Late' },
        { id: 3, label: 'Alive' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    fhealthCondition: {
      label: 'Health Condition',
      id: 'fhealthCondition',
      name: 'fhealthCondition',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    workingSector: {
      label: 'Working Sector',
      id: 'workingSector',
      name: 'workingSector',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fmobile: {
      label: 'Mobile Number',
      id: 'fmobile',
      name: 'fmobile',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fprofession: {
      label: 'Profession',
      id: 'fprofession',
      name: 'fprofession',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    faddress: {
      label: 'Address',
      id: 'faddress',
      name: 'faddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fannualIncome: {
      label: 'Annual Income',
      id: 'fannualIncome',
      name: 'fannualIncome',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    fproperty: {
      label: 'Property Details',
      id: 'fproperty',
      name: 'fproperty',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    pension: {
      label: 'Pension',
      id: 'pension',
      name: 'pension',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    motherName: {
      label: 'Mother Name',
      id: 'motherName',
      name: 'motherName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mmaidenName: {
      label: 'Mother\'s Maiden Name',
      id: 'mmaidenName',
      name: 'mmaidenName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mreligion: {
      label: 'Select Religion',
      id: 'mreligion',
      name: 'mreligion',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    mcaste: {
      label: 'Select Caste',
      id: 'mcaste',
      name: 'mcaste',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Aswini' },
        { id: 3, label: 'Bharani' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    motherConvertedCaste: {
      label: "Is converted Caste",
      value: false
    },
    motherStatus: {
      label: 'Mother Status',
      id: 'motherStatus',
      name: 'motherStatus',
      type: 'select',
      options: [
        { id: 1, label: 'select status' },
        { id: 2, label: 'Late' },
        { id: 3, label: 'Alive' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    mhealthCondition: {
      label: 'Health Condition',
      id: 'mhealthCondition',
      name: 'mhealthCondition',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    mmobile: {
      label: 'Mobile Number',
      id: 'mmobile',
      name: 'mmobile',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mprofession: {
      label: 'Profession',
      id: 'mprofession',
      name: 'mprofession',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mannualIncome: {
      label: 'Annual Income',
      id: 'mannualIncome',
      name: 'mannualIncome',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    mproperty: {
      label: 'Property Details',
      id: 'mproperty',
      name: 'mproperty',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    permanentAddress: {
      label: 'Family\'s Permanent Address',
      id: 'permanentAddress',
      name: 'permanentAddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    isAddressSame: {
      label: "Check this box if Permanent Address and Present Address are the same.",
      value: false
    },
    presentAddress: {
      label: 'Family\'s Present Address',
      id: 'presentAddress',
      name: 'presentAddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    brothers: {
      label: 'No. of Brothers',
      id: 'brothers',
      name: 'brothers',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    sisters: {
      label: 'No. of Sisters',
      id: 'sisters',
      name: 'sisters',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    refName: {
      label: 'Reference Name',
      id: 'refName',
      name: 'refName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    refMobile: {
      label: 'Reference Mobile No',
      id: 'refMobile',
      name: 'refMobile',
      type: 'number',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    relation: {
      label: 'Select Relation',
      id: 'relation',
      name: 'relation',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Abroad' },
        { id: 3, label: 'India' }
      ],
      value: {id: 2, label: 'Abroad'},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    refAddress: {
      label: 'Reference Address',
      id: 'refAddress',
      name: 'refAddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    }
  };
  const partnerDetails: any = {
    lookingFor: {
      label: 'Looking For',
      id: 'lookingFor',
      name: 'lookingFor',
      type: 'select',
      options: [
        { id: 1, label: 'Please Select' },
        { id: 2, label: 'Male' },
        { id: 3, label: 'Female' }
      ],
      value: { id: 1, label: 'Please Select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    ageFrom: {
      label: 'Age From',
      id: 'ageFrom',
      name: 'ageFrom',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    ageTo: {
      label: 'Age To',
      id: 'ageTo',
      name: 'ageTo',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    heightFrom: {
      label: 'Height From',
      id: 'heightFrom',
      name: 'heightFrom',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Aswini' },
        { id: 3, label: 'Bharani' }
      ],
      value: { id: 1, label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    heightTo: {
      label: 'Height To',
      id: 'heightTo',
      name: 'heightTo',
      type: 'select',
      options: [
        { id: 1, label: 'select status' },
        { id: 2, label: 'Late' },
        { id: 3, label: 'Alive' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    familyStatus: {
      label: 'Family Status',
      id: 'familyStatus',
      name: 'familyStatus',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    interCasteMarriage: {
      label: 'Ready for Inter-caste marriage',
      id: 'interCasteMarriage',
      name: 'interCasteMarriage',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Yes' },
        { id: 3, label: 'No' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    interReligion: {
      label: 'Whether interested to marry inter-religion parent\'s child',
      id: 'interReligion',
      name: 'interReligion',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    interCasteChild: {
      label: 'Whether interested to marry inter-caste parent\'s child',
      id: 'interCasteChild',
      name: 'interCasteChild',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    caste: {
      label: 'Select Caste',
      id: 'caste',
      name: 'caste',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    subCaste: {
      label: 'Sub-caste',
      id: 'subCaste',
      name: 'subCaste',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    khujaDhosam: {
      label: 'Khuja Dhosham',
      id: 'khujaDhosam',
      name: 'khujaDhosam',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    complexion: {
      label: 'Complexion',
      id: 'complexion',
      name: 'complexion',
      type: 'select',
      options: [
        { id: 1, label: 'AP' },
        { id: 2, label: 'TS' },
        { id: 3, label: 'UP' }
      ],
      value: { id: 1, label: 'AP' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    smoke: {
      label: 'Smoke',
      id: 'smoke',
      name: 'smoke',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Aswini' },
        { id: 3, label: 'Bharani' }
      ],
      value: { id:1 , label: 'Please select' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    drink: {
      label: 'Drink',
      id: 'drink',
      name: 'drink',
      type: 'select',
      options: [
        { id: 1, label: 'select status' },
        { id: 2, label: 'Late' },
        { id: 3, label: 'Alive' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    education: {
      label: 'Education',
      id: 'education',
      name: 'education',
      type: 'select',
      options: [
        { id: 1, label: 'mesha' },
        { id: 2, label: 'Tula' },
        { id: 3, label: 'Gemini' }
      ],
      value: { id: 1, label: '' },
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    profession: {
      label: 'Profession',
      id: 'profession',
      name: 'profession',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Abroad' },
        { id: 3, label: 'India' }
      ],
      value: {id: 2, label: 'Abroad'},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    passport: {
      label: 'Passport',
      id: 'passport',
      name: 'passport',
      type: 'select',
      options: [
        { id: 1, label: 'Please select' },
        { id: 2, label: 'Abroad' },
        { id: 3, label: 'India' }
      ],
      value: {id: 2, label: 'Abroad'},
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    profilePicture: {
      label: 'Upload Profile Picture',
      id: 'profilePicture',
      name: 'profilePicture',
      type: 'file',
      value: [],
      error: false,
      mandatory: true,
      options: []
    },
  };
  const [personalDetailsFormData, setPersonalDetailsFormData] = useState<any>(personalDetails);
  const [educationDetailsFormData, setEducationDetailsFormData] = useState<any>(educationDetails);
  const [familyDetailsFormData, setFamilyDetailsFormData] = useState<any>(familyDetails);
  const [partnerDetailsFormData, setPartnerDetailsFormData] = useState<any>(partnerDetails);

  const [activeStep, setActiveStep] = useState(0);
const location = useLocation();
  let locationState = sessionStorage.getItem("customer");
  locationState = locationState ? JSON.parse(locationState) : null;
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <PersonalInfo personalDetailsFormData={personalDetailsFormData} setPersonalDetailsFormData={setPersonalDetailsFormData} />
        );
      case 1:
        return (<EducationInfo educationDetailsFormData={educationDetailsFormData} setEducationDetailsFormData={setEducationDetailsFormData} />);
      case 2:
        return (<FamilyInfo familyDetailsFormData={familyDetailsFormData} setFamilyDetailsFormData={setFamilyDetailsFormData} />);
      case 3:
        return (<PartnerInfo partnerDetailsFormData={partnerDetailsFormData} setPartnerDetailsFormData={setPartnerDetailsFormData} />);
      case 4:
        return (<ConfirmInfo />);
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <MainCard title={ edit ? "EDIT INBOUND" : "ADD INBOUND"}>
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has
              shipped.
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" color="error" onClick={() => setActiveStep(0)} sx={{ my: 3, ml: 1 }}>
                  Reset
                </Button>
              </AnimateButton>
            </Stack>
          </>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
              {activeStep !== 0 && (
                <Button variant="contained" onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <AnimateButton>
                <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'ADD INBOUND' : 'Next'}
                </Button>
              </AnimateButton>
            </Stack>
          </>
        )}
      </>
    </MainCard>
  );
}
