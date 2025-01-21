import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

// material-ui
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
// project-imports

import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import FamilyDetails from './FamilyDetails';
import PartnerDetails from './PartnerDetails';
import Confirm from './Confirm';
import { bloodGroups, heights, mobileCountryCodes, visaType, ageRange } from '../../Common/utils';
import {
  createPersonalDetails,
  createCustomer,
  createPartnerDetails,
  createFamilyDetails,
  createEducationDetails,
  getCustomerDetails
} from '../../services/customer-management/CustomerManagement';
// step options
const steps = ['Personal Details', 'Education Details', 'Family Details', 'Partner Details', 'Confirm'];

// ==============================|| FORMS WIZARD - BASIC ||============================== //

export default function CreateCustomer({ edit }: any) {
  const [customerId, setCustomerId] = useState(0);
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
        { id: 1, label: 'Male' },
        { id: 2, label: 'Female' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    countryCode: {
      label: 'Country Code',
      id: 'countryCode',
      name: 'countryCode',
      type: 'select',
      options: mobileCountryCodes,
      value: '',
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
      mandatory: true,
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
      type: 'time',
      value: null,
      error: false,
      helperText: '',
      mandatory: true
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
      options: [],
      value: '',
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    isConvertedCaste: {
      label: 'Are you converted your Caste',
      id: 'isConvertedCaste',
      name: 'isConvertedCaste',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: '',
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    selectRassi: {
      label: 'Select Moonsign/Raasi',
      id: 'selecselectRassitMoonsign',
      name: 'selectRassi',
      type: 'select',
      options: [],
      value: '',
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
        { id: 3, label: '3' },
        { id: 4, label: '4' }
      ],
      value: '',
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
      value: '',
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
      options: heights,
      value: '',
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
      options: bloodGroups,
      value: '',
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
      options: [],
      value: '',
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
        { id: 1, label: 'Good' },
        { id: 2, label: 'Better' },
        { id: 2, label: 'Healthy' },
        { id: 4, label: 'Physically Challenged' },
        { id: 5, label: 'Mentally Challenged' },
        { id: 6, label: 'Average' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    handicappedInfo: {
      label: 'Handicapped Info',
      id: 'handicappedInfo',
      name: 'handicappedInfo',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      options: []
    },
    selectcomplexion: {
      label: 'Select complexion',
      id: 'selectcomplexion',
      name: 'selectcomplexion',
      type: 'select',
      options: [
        { id: 1, label: 'Very Fair' },
        { id: 2, label: 'Fair' },
        { id: 3, label: 'Medium' },
        { id: 4, label: 'Dark' }
      ],
      value: '',
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
      value: '',
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
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
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
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    divorceCertificate: {
      label: 'Upload Divorce Certificate',
      id: 'divorceCertificate',
      name: 'divorceCertificate',
      type: 'file',
      value: [],
      error: false,
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
      options: []
    },
    uploadAcknowledgement: {
      label: 'Upload Acknowledgement',
      id: 'uploadAcknowledgement',
      name: 'uploadAcknowledgement',
      type: 'file',
      value: [],
      error: false,
      mandatory: false,
      options: []
    },
    selectsmoke: {
      label: 'Select smoke',
      id: 'selectsmoke',
      name: 'selectsmoke',
      type: 'select',
      options: [
        { id: 1, label: 'No' },
        { id: 2, label: 'Occasional' },
        { id: 3, label: 'Regular' }
      ],
      value: '',
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
        { id: 3, label: 'Occasional' },
        { id: 2, label: 'Regular' }
      ],
      value: '',
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
        { id: 3, label: 'Eggetarian' },
        { id: 4, label: 'Not Particular' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    about: {
      label: 'About me',
      id: 'about',
      name: 'about',
      type: 'text',
      multiline: true,
      rows: 4,
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
      options: [],
      value: [],
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
      options: [],
      value: [],
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
      options: [],
      value: [],
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
      options: [],
      value: [],
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
      options: [],
      value: [],
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
      options: [],
      value: [],
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
      value: [],
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
      value: [],
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
      value: [],
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
      options: [],
      value: '',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    city: {
      label: 'Select City',
      id: 'city',
      name: 'city',
      type: 'select',
      options: [],
      value: '',
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
      multiline: true,
      rows: 4,
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    altcountryCode: {
      label: 'Country Code',
      id: 'altcountryCode',
      name: 'altcountryCode',
      type: 'select',
      options: mobileCountryCodes,
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
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
      type: 'email',
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    timeToCall: {
      label: 'Time to call',
      value: null,
      type: 'time',
      error: false,
      helperText: '',
      mandatory: true
    },
    applicationfor: {
      label: 'Application for',
      id: 'applicationfor',
      name: 'applicationfor',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    applicationFillingPersonName: {
      label: 'Application filling Person Name',
      id: 'applicationFillingPersonName',
      name: 'applicationFillingPersonName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      options: []
    },
    applicationFillingPersonCountryCode: {
      label: 'Country Code',
      id: 'applicationFillingPersonCountryCode',
      name: 'applicationFillingPersonCountryCode',
      type: 'select',
      options: mobileCountryCodes,
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    applicationFillingPersonMobile: {
      label: 'Application filling Person Mobile No',
      id: 'applicationFillingPersonMobile',
      name: 'applicationFillingPersonMobile',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      options: []
    },
    source: {
      label: 'Source',
      id: 'source',
      name: 'source',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    nearestbranch: {
      label: 'Nearest Branch',
      id: 'nearestbranch',
      name: 'nearestbranch',
      type: 'select',
      options: [
        { id: 1, label: 'Vijayawada' },
        { id: 2, label: 'srikakulam' },
        { id: 3, label: 'TS' }
      ],
      value: '',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
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
        { id: 1, label: 'Abroad' },
        { id: 2, label: 'India' }
      ],
      value: '',
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    state: {
      label: 'Select State',
      id: 'state',
      name: 'state',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    selectdistrict: {
      label: 'Select District',
      id: 'selectdistrict',
      name: 'selectdistrict',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    visaType: {
      label: 'Visa Type',
      id: 'visaType',
      name: 'visaType',
      type: 'select',
      options: visaType,
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
      options: []
    },
    companyAddress: {
      label: "Company's Present Address",
      id: 'companyAddress',
      name: 'companyAddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    city: {
      label: 'City ',
      id: 'city',
      name: 'city',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
      options: []
    },
    collegueName: {
      label: "Colleague's Name & Mobile No",
      id: 'collegueName',
      name: 'collegueName',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      options: []
    }
  };
  const familyDetails: any = {
    familyStatus: {
      label: 'Family Status',
      id: 'familyStatus',
      name: 'familyStatus',
      type: 'select',
      options: [],
      value: '',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    fIsConvertedCaste: {
      label: 'Is convertd Caste',
      id: 'fIsConvertedCaste',
      name: 'fIsConvertedCaste',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    fatherStatus: {
      label: 'Father Status',
      id: 'fatherStatus',
      name: 'fatherStatus',
      type: 'select',
      options: [
        { id: 1, label: 'Late' },
        { id: 2, label: 'Alive' }
      ],
      value: '',
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
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
      mandatory: false,
      options: []
    },
    fatherMobileNumberCountryCode: {
      label: 'Country code',
      id: 'fatherMobileNumberCountryCode',
      name: 'fatherMobileNumberCountryCode',
      type: 'select',
      options: mobileCountryCodes,
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    fmobile: {
      label: 'Mobile Number',
      id: 'fmobile',
      name: 'fmobile',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      options: []
    },
    fprofession: {
      label: 'Profession',
      id: 'fprofession',
      name: 'fprofession',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    faddress: {
      label: 'Address',
      id: 'faddress',
      name: 'faddress',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
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
      mandatory: false,
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
      mandatory: false,
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
      label: "Mother's Maiden Name",
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
      options: [],
      value: '',
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    mIsConvertedCaste: {
      label: 'Is convertd Caste',
      id: 'mIsConvertedCaste',
      name: 'mIsConvertedCaste',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    motherStatus: {
      label: 'Mother Status',
      id: 'motherStatus',
      name: 'motherStatus',
      type: 'select',
      options: [
        { id: 1, label: 'Late' },
        { id: 2, label: 'Alive' }
      ],
      value: '',
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
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    motherMobileNumberCountryCode: {
      label: 'Country code',
      id: 'motherMobileNumberCountryCode',
      name: 'motherMobileNumberCountryCode',
      type: 'select',
      options: mobileCountryCodes,
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    mmobile: {
      label: 'Mobile Number',
      id: 'mmobile',
      name: 'mmobile',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      options: []
    },
    mprofession: {
      label: 'Profession',
      id: 'mprofession',
      name: 'mprofession',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    mannualIncome: {
      label: 'Annual Income',
      id: 'mannualIncome',
      name: 'mannualIncome',
      type: 'text',
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
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
      mandatory: false,
      options: []
    },
    permanentAddress: {
      label: "Family's Permanent Address",
      id: 'permanentAddress',
      name: 'permanentAddress',
      type: 'text',
      multiline: true,
      rows: 4,
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      options: []
    },
    isAddressSame: {
      label: 'Check this box if Permanent Address and Present Address are the same.',
      value: false
    },
    presentAddress: {
      label: "Family's Present Address",
      id: 'presentAddress',
      name: 'presentAddress',
      type: 'text',
      multiline: true,
      rows: 4,
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
      type: 'text',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
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
      options: ageRange,
      value: '',
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
      options: ageRange,
      value: '',
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
      options: heights,
      value: '',
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
      options: heights,
      value: '',
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
      options: [],
      value: '',
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
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: true,
      isMulti: false
    },
    interReligion: {
      label: "Whether interested to marry inter-religion parent's child",
      id: 'interReligion',
      name: 'interReligion',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    interCasteChild: {
      label: "Whether interested to marry inter-caste parent's child",
      id: 'interCasteChild',
      name: 'interCasteChild',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 1, label: 'No' }
      ],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    caste: {
      label: 'Select Caste',
      id: 'caste',
      name: 'caste',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    subCaste: {
      label: 'Select Sub Caste',
      id: 'subCaste',
      name: 'subCaste',
      type: 'select',
      options: [],
      value: '',
      error: false,
      helperText: '',
      mandatory: false,
      isMulti: false
    },
    khujaDhosam: {
      label: 'Khuja Dhosham',
      id: 'khujaDhosam',
      name: 'khujaDhosam',
      type: 'select',
      options: [
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' },
        { id: 3, label: 'Any' }
      ],
      value: '',
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
        { id: 1, label: 'Fair' },
        { id: 2, label: 'Very Fair' },
        { id: 3, label: 'Medium' },
        { id: 4, label: 'Dark' },
        { id: 5, label: 'Any' }
      ],
      value: '',
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
        { id: 1, label: 'No' },
        { id: 2, label: 'Occasional' },
        { id: 3, label: 'Regular' },
        { id: 4, label: 'Any' }
      ],
      value: '',
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
        { id: 1, label: 'No' },
        { id: 2, label: 'Occasional' },
        { id: 3, label: 'Regular' },
        { id: 4, label: 'Any' }
      ],
      value: '',
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
      options: [],
      value: '',
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
      options: [],
      value: '',
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
        { id: 1, label: 'Yes' },
        { id: 2, label: 'No' },
        { id: 3, label: 'Any' }
      ],
      value: '',
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
    }
  };
  const [personalDetailsFormData, setPersonalDetailsFormData] = useState<any>(personalDetails);
  const [educationDetailsFormData, setEducationDetailsFormData] = useState<any>(educationDetails);
  const [familyDetailsFormData, setFamilyDetailsFormData] = useState<any>(familyDetails);
  const [partnerDetailsFormData, setPartnerDetailsFormData] = useState<any>(partnerDetails);
  const [customerDetails, setCustomerDetails] = useState<any>({});
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();
  console.log('personalDetailsFormData: ', personalDetailsFormData);
  let locationState = sessionStorage.getItem('customer');
  locationState = locationState ? JSON.parse(locationState) : null;
  console.log('locationState: ', locationState);
  const handleNext = async () => {
    if (activeStep === 0) {
      //if (validate(personalDetailsFormData, setPersonalDetailsFormData)) {
      const personalDetailsrequestBody = {
        fullname: personalDetailsFormData.fullName.value ? personalDetailsFormData.fullName.value : '',
        surname: personalDetailsFormData.surname.value ? personalDetailsFormData.surname.value : '',
        gender: personalDetailsFormData.gender.value.id ? personalDetailsFormData.gender.value.id : '',
        mobileCountryCode: personalDetailsFormData.countryCode.value.id ? personalDetailsFormData.countryCode.value.id : '',
        mobileNumber: personalDetailsFormData.mobileNumber.value ? personalDetailsFormData.mobileNumber.value : '',
        email: personalDetailsFormData.email.value ? personalDetailsFormData.email.value : '',
        aadharNumber: personalDetailsFormData.aadharNumber.value ? personalDetailsFormData.aadharNumber.value : '',
        dateOfBirth: personalDetailsFormData.dateOfBirth.value ? personalDetailsFormData.dateOfBirth.value : '',
        timeOfBirth: personalDetailsFormData.timeOfBirth.value ? personalDetailsFormData.timeOfBirth.value : '',
        birthPlace: personalDetailsFormData.birthPlace.value ? personalDetailsFormData.birthPlace.value : '',
        religion: personalDetailsFormData.selectReligion.value.id ? personalDetailsFormData.selectReligion.value.id : '',
        caste: personalDetailsFormData.selectCaste.value.id ? personalDetailsFormData.selectCaste.value.id : '',
        convertedCaste: personalDetailsFormData.isConvertedCaste.value.id ? personalDetailsFormData.isConvertedCaste.value.id : '',
        star: personalDetailsFormData.selectStar.value.id ? personalDetailsFormData.selectStar.value.id : '',
        moonsign: personalDetailsFormData.selectRassi.value.id ? personalDetailsFormData.selectRassi.value.id : '',
        padam: personalDetailsFormData.selectPadam.value.id ? personalDetailsFormData.selectPadam.value.id : '',
        gothram: personalDetailsFormData.gothram.value ? personalDetailsFormData.gothram.value : '',
        khujaDhosam: personalDetailsFormData.selectkujadosham.value.id ? personalDetailsFormData.selectkujadosham.value.id : '',
        height: personalDetailsFormData.selectheight.value.id ? Number(personalDetailsFormData.selectheight.value.id) : '',
        bloodGroup: personalDetailsFormData.selectbloodgroup.value.id ? personalDetailsFormData.selectbloodgroup.value.id : '',
        motherTongue: personalDetailsFormData.selectmothertounge.value.id ? personalDetailsFormData.selectmothertounge.value.id : '',
        healthCondition: personalDetailsFormData.selecthealthcodition.value.id ? personalDetailsFormData.selecthealthcodition.value.id : '',
        handicappedInfo: personalDetailsFormData.handicappedInfo.value ? personalDetailsFormData.handicappedInfo.value : '',
        complexion: personalDetailsFormData.selectcomplexion.value.id ? personalDetailsFormData.selectcomplexion.value.id : '',
        maritalStatus: personalDetailsFormData.selectmaritalstatus.value.id ? personalDetailsFormData.selectmaritalstatus.value.id : '',
        havingChildren: personalDetailsFormData.havingChildren.value.id ? personalDetailsFormData.havingChildren.value.id : 0,
        deathCertificate: personalDetailsFormData.deathCertificate.value ? personalDetailsFormData.deathCertificate.value.id : '',
        dateOfMarriage: personalDetailsFormData.dateOfMarriage.value ? personalDetailsFormData.dateOfMarriage.value : '',
        dateOfDeath: personalDetailsFormData.dateOfDeath.value ? personalDetailsFormData.dateOfDeath.value : '',
        divorceCertificate: personalDetailsFormData.divorceCertificate.value ? personalDetailsFormData.divorceCertificate.value : [],
        dateOfdivorce: personalDetailsFormData.dateOfDivorce.value ? personalDetailsFormData.dateOfDivorce.value : '',
        reasonForDivorce: personalDetailsFormData.reasonForDivorce.value ? personalDetailsFormData.reasonForDivorce.value : '',
        divorceAcknowledgeCertificate: personalDetailsFormData.uploadAcknowledgement.value
          ? personalDetailsFormData.uploadAcknowledgement.value
          : [],
        smoke: personalDetailsFormData.selectsmoke.value.id ? personalDetailsFormData.selectsmoke.value.id : '',
        drink: personalDetailsFormData.selectdrink.value.id ? personalDetailsFormData.selectdrink.value.id : '',
        food: personalDetailsFormData.selectfood.value.id ? personalDetailsFormData.selectfood.value.id : '',
        aboutMe: personalDetailsFormData.about.value ? personalDetailsFormData.about.value : '',
        hobbies: personalDetailsFormData.hobbies.value ? personalDetailsFormData.hobbies.value.map((item: any) => item.id) : [],
        interests: personalDetailsFormData.intrests.value ? personalDetailsFormData.intrests.value.map((item: any) => item.id) : [],
        favouriteMusic: personalDetailsFormData.favouritemusic.value
          ? personalDetailsFormData.favouritemusic.value.map((item: any) => item.id)
          : [],
        sports: personalDetailsFormData.sports.value ? personalDetailsFormData.sports.value.map((item: any) => item.id) : [],
        favouriteCuisine: personalDetailsFormData.favouritecuisne.value
          ? personalDetailsFormData.favouritecuisne.value.map((item: any) => item.id)
          : [],
        favouriteReads: personalDetailsFormData.favouritereads.value
          ? personalDetailsFormData.favouritereads.value.map((item: any) => item.id)
          : [],
        preferredMovies: personalDetailsFormData.preferedmovies.value
          ? personalDetailsFormData.preferedmovies.value.map((item: any) => item.id)
          : [],
        preferredDressStyle: personalDetailsFormData.prefereddressingstyle.value
          ? personalDetailsFormData.prefereddressingstyle.value.map((item: any) => item.id)
          : [],
        spokenLanguages: personalDetailsFormData.spokenlanguages.value
          ? personalDetailsFormData.spokenlanguages.value.map((item: any) => item.id)
          : [],
        country: personalDetailsFormData.selectcountry.value.id ? personalDetailsFormData.selectcountry.value.id : '',
        state: personalDetailsFormData.selectstate.value.id ? personalDetailsFormData.selectstate.value.id : '',
        district: personalDetailsFormData.selectdistrict.value.id ? personalDetailsFormData.selectdistrict.value.id : '',
        city: personalDetailsFormData.city.value.id ? personalDetailsFormData.city.value.id : '',
        address: personalDetailsFormData.address.value ? personalDetailsFormData.address.value : '',
        alternateMobileCountryCode: personalDetailsFormData.altcountryCode.value.id ? personalDetailsFormData.altcountryCode.value.id : '',
        alternateMobile: personalDetailsFormData.altmobile.value ? personalDetailsFormData.altmobile.value : '',
        alternateEmail: personalDetailsFormData.altemail.value ? personalDetailsFormData.altemail.value : '',
        timeToCall: personalDetailsFormData.timeToCall.value ? personalDetailsFormData.timeToCall.value : '',
        applicationFor: personalDetailsFormData.applicationfor.value.id ? personalDetailsFormData.applicationfor.value.id : '',
        applicationFillingPersonName: personalDetailsFormData.applicationFillingPersonName.value
          ? personalDetailsFormData.applicationFillingPersonName.value
          : '',
        applicationFillingPersonMobileCountryCode: personalDetailsFormData.applicationFillingPersonCountryCode.value.id
          ? personalDetailsFormData.applicationFillingPersonCountryCode.value.id
          : '',
        applicationFillingPersonMobile: personalDetailsFormData.applicationFillingPersonMobile.value
          ? personalDetailsFormData.applicationFillingPersonMobile.value
          : '',
        source: personalDetailsFormData.source.value.id ? personalDetailsFormData.source.value.id : '',
        nearestBranch: personalDetailsFormData.nearestbranch.value.id ? personalDetailsFormData.nearestbranch.value.id : ''
      };
      const createCustomerRequestBody = {
        mobileNumber: personalDetailsFormData.mobileNumber.value
      };
      // const createCustomerRes = await createCustomer(createCustomerRequestBody);
      // console.log('res: ', createCustomerRes);
      // if (createCustomerRes.status) {
      //   setCustomerId(createCustomerRes.id);
      //   console.log('personalDetailsrequestBody: ', personalDetailsrequestBody);
      //   const response = await createPersonalDetails(personalDetailsrequestBody, createCustomerRes.id);
      //   console.log('response: ', response);
      //   setActiveStep(activeStep + 1);
      // }
      setActiveStep(activeStep + 1);
      //}
      setActiveStep(activeStep + 1);
    } else if (activeStep === 1) {
      if (validate(educationDetailsFormData, setEducationDetailsFormData)) {
        const educationRequestBody = {
          education: educationDetailsFormData.education.value.id ? educationDetailsFormData.education.value.id : '',
          university: educationDetailsFormData.university.value.id ? educationDetailsFormData.university.value.id : '',
          employedIn: educationDetailsFormData.employedin.value.id ? educationDetailsFormData.employedin.value.id : '',
          designation: educationDetailsFormData.designation.value.id ? educationDetailsFormData.designation.value.id : '',
          profession: educationDetailsFormData.profession.value.id ? educationDetailsFormData.profession.value.id : '',
          workingLocation: educationDetailsFormData.workingLocation.value.id ? educationDetailsFormData.workingLocation.value.id : '',
          abroadSelectCountry: educationDetailsFormData.country.value.id ? educationDetailsFormData.country.value.id : '',
          abroadSelectState: educationDetailsFormData.state.value.id ? educationDetailsFormData.state.value.id : '',
          abroadVisaType: educationDetailsFormData.visaType.value.id ? educationDetailsFormData.visaType.value.id : '',
          abroadPassportNumber: educationDetailsFormData.passportNumber.value ? educationDetailsFormData.passportNumber.value : '',
          abroadValidFrom: educationDetailsFormData.validFrom.value ? educationDetailsFormData.validFrom.value : '',
          abroadValidTill: educationDetailsFormData.validTill.value ? educationDetailsFormData.validTill.value : '',
          abroadWorkingCompanyName: educationDetailsFormData.workingCompanyName.value
            ? educationDetailsFormData.workingCompanyName.value
            : '',
          abroadCompanysPresentAddress: educationDetailsFormData.companyAddress.value ? educationDetailsFormData.companyAddress.value : '',
          indiaWorkingState: educationDetailsFormData.state.value.id ? educationDetailsFormData.state.value.id : '',
          indiaCity: educationDetailsFormData.city.value.id ? educationDetailsFormData.city.value.id : '',
          indiaLocationAddress: educationDetailsFormData.locationAdd.value ? educationDetailsFormData.locationAdd.value : '',
          indiaCompanyName: educationDetailsFormData.compName.value ? educationDetailsFormData.compName.value : '',
          indiaWorkingSince: educationDetailsFormData.workingSince.value ? educationDetailsFormData.workingSince.value : '',
          indiaTotalExperience: educationDetailsFormData.totalExp.value ? educationDetailsFormData.totalExp.value : '',
          indiaPassportNumber: educationDetailsFormData.passNumber.value ? educationDetailsFormData.passNumber.value : '',
          indiaColleaguesNameAndMobileNo: educationDetailsFormData.collegueName.value ? educationDetailsFormData.collegueName.value : '',
          propertyDetails: educationDetailsFormData.propertyDetails.value ? educationDetailsFormData.propertyDetails.value : '',
          annualIncome: educationDetailsFormData.annualIncome.value ? educationDetailsFormData.annualIncome.value : ''
        };
        const createEducationRes = await createEducationDetails(educationRequestBody, customerId);
      }
      setActiveStep(activeStep + 1);
    } else if (activeStep === 2) {
      if (validate(familyDetailsFormData, setFamilyDetailsFormData)) {
        const familyDetailsRequestBody = {
          familyStatus: familyDetailsFormData.familyStatus.value.id ? familyDetailsFormData.familyStatus.value.id : '',
          familyType: familyDetailsFormData.familyType.value.id ? familyDetailsFormData.familyType.value.id : '',
          fatherName: familyDetailsFormData.fatherName.value ? familyDetailsFormData.fatherName.value : '',
          fatherReligion: familyDetailsFormData.freligion.value.id ? familyDetailsFormData.freligion.value.id : '',
          fatherCaste: familyDetailsFormData.fcaste.value.id ? familyDetailsFormData.fcaste.value.id : '',
          isFatherConvertedCaste: familyDetailsFormData.fIsConvertedCaste.value.id ? familyDetailsFormData.fIsConvertedCaste.value.id : '',
          fatherStatus: familyDetailsFormData.fatherStatus.value.id ? familyDetailsFormData.fatherStatus.value.id : '',
          fatherHealthCondition: familyDetailsFormData.fhealthCondition.value.id ? familyDetailsFormData.fhealthCondition.value.id : '',
          fatherWorkingSector: familyDetailsFormData.workingSector.value ? familyDetailsFormData.workingSector.value : '',
          fatherMobileNumberCountryCode: familyDetailsFormData.fatherMobileNumberCountryCode.value.id
            ? familyDetailsFormData.fatherMobileNumberCountryCode.value.id
            : '',
          fatherMobileNumber: familyDetailsFormData.fmobile.value ? familyDetailsFormData.fmobile.value : '',
          fatherProfession: familyDetailsFormData.fprofession.value.id ? Number(familyDetailsFormData.fprofession.value.id) : '',
          fatherAddress: familyDetailsFormData.faddress.value ? familyDetailsFormData.faddress.value : '',
          fatherAnualIncome: familyDetailsFormData.fannualIncome.value ? familyDetailsFormData.fannualIncome.value : '',
          fatherPropertyDetails: familyDetailsFormData.fproperty.value ? familyDetailsFormData.fproperty.value : '',
          pension: familyDetailsFormData.pension.value ? familyDetailsFormData.pension.value : '',
          motherName: familyDetailsFormData.motherName.value ? familyDetailsFormData.motherName.value : '',
          motherMaidenName: familyDetailsFormData.mmaidenName.value ? familyDetailsFormData.mmaidenName.value : '',
          motherReligion: familyDetailsFormData.mreligion.value.id ? familyDetailsFormData.mreligion.value.id : '',
          motherCaste: familyDetailsFormData.mcaste.value.id ? familyDetailsFormData.mcaste.value.id : '',
          isMotherConvertedCaste: familyDetailsFormData.mIsConvertedCaste.value.id ? familyDetailsFormData.mIsConvertedCaste.value.id : '',
          motherHealthcondition: familyDetailsFormData.mhealthCondition.value.id ? familyDetailsFormData.mhealthCondition.value.id : '',
          motherMobileNumberCountryCode: familyDetailsFormData.motherMobileNumberCountryCode.value.id
            ? familyDetailsFormData.motherMobileNumberCountryCode.value.id
            : '',
          motherMobileNumber: familyDetailsFormData.mmobile.value ? familyDetailsFormData.mmobile.value : '',
          motherProfession: familyDetailsFormData.mprofession.value.id ? Number(familyDetailsFormData.mprofession.value.id) : '',
          motherAnualIncome: familyDetailsFormData.mannualIncome.value ? familyDetailsFormData.mannualIncome.value : '',
          motherPropertyDetails: familyDetailsFormData.mproperty.value ? familyDetailsFormData.mproperty.value : '',
          familtyPermanentAddress: familyDetailsFormData.permanentAddress.value ? familyDetailsFormData.permanentAddress.value : '',
          familyPresentAddress: familyDetailsFormData.presentAddress.value ? familyDetailsFormData.presentAddress.value : '',
          numberOfBrothers: familyDetailsFormData.brothers.value ? Number(familyDetailsFormData.brothers.value) : '',
          numberOfsisters: familyDetailsFormData.sisters.value ? Number(familyDetailsFormData.sisters.value) : '',
          referenceName: familyDetailsFormData.refName.value ? familyDetailsFormData.refName.value : '',
          referenceMobileNmuber: familyDetailsFormData.refMobile.value ? familyDetailsFormData.refMobile.value : '',
          relation: familyDetailsFormData.relation.value.id ? familyDetailsFormData.relation.value.id : '',
          referenceAddress: familyDetailsFormData.refAddress.value ? familyDetailsFormData.refAddress.value : ''
        };
        const createFamilyRes = await createFamilyDetails(familyDetailsRequestBody, 2);
      }
      setActiveStep(activeStep + 1);
    } else if (activeStep === 3) {
      //if (validate(partnerDetailsFormData, setPartnerDetailsFormData)) {
      const partnerDetailsRequestBody = {
        lookingFor: partnerDetailsFormData.lookingFor.value.id ? partnerDetailsFormData.lookingFor.value.id : '',
        ageFrom: partnerDetailsFormData.ageFrom.value.id ? partnerDetailsFormData.ageFrom.value.id : '',
        ageTo: partnerDetailsFormData.ageTo.value.id ? partnerDetailsFormData.ageTo.value.id : '',
        heightFrom: partnerDetailsFormData.heightFrom.value.id ? partnerDetailsFormData.heightFrom.value.id : '',
        heightTo: partnerDetailsFormData.heightTo.value.id ? partnerDetailsFormData.heightTo.value.id : '',
        familyStatus: partnerDetailsFormData.familyStatus.value.id ? partnerDetailsFormData.familyStatus.value.id : '',
        readyForInterCasteMarriage: partnerDetailsFormData.interCasteMarriage.value.id
          ? partnerDetailsFormData.interCasteMarriage.value.id
          : '',
        marryInterReligionParentsChild: partnerDetailsFormData.interReligion.value.id ? partnerDetailsFormData.interReligion.value.id : '',
        marryInterCasteParentsChild: partnerDetailsFormData.interCasteChild.value.id ? partnerDetailsFormData.interCasteChild.value.id : '',
        caste: partnerDetailsFormData.caste.value.id ? partnerDetailsFormData.caste.value.id : '',
        subCaste: partnerDetailsFormData.subCaste.value.id ? partnerDetailsFormData.subCaste.value.id : '',
        khujaDhosham: partnerDetailsFormData.khujaDhosam.value.id ? partnerDetailsFormData.khujaDhosam.value.id : '',
        complexion: partnerDetailsFormData.complexion.value.id ? partnerDetailsFormData.complexion.value.id : '',
        smoke: partnerDetailsFormData.smoke.value.id ? partnerDetailsFormData.smoke.value.id : '',
        drink: partnerDetailsFormData.drink.value.id ? partnerDetailsFormData.drink.value.id : '',
        education: partnerDetailsFormData.education.value.id ? partnerDetailsFormData.education.value.id : '',
        profession: partnerDetailsFormData.profession.value.id ? partnerDetailsFormData.profession.value.id : '',
        Passport: partnerDetailsFormData.passport.value.id ? partnerDetailsFormData.passport.value.id : ''
      };
      const createPartnerRes = await createPartnerDetails(partnerDetailsRequestBody, 2);
      //}
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getCustomerDetailsList = async () => {
    const result = await getCustomerDetails({ id: 2 });
    console.log('result: ', result);
    if (result.data.length > 0) {
      setCustomerDetails(result.data[0]);
    }
  };

  useEffect(() => {
    if (Object.keys(customerDetails).length > 0) {
      if (edit) {
        if (customerDetails.personalDetails !== null || customerDetails.personalDetails !== undefined) {
          setPersonalDetailsFormData({
            ...personalDetailsFormData,
            fullName: { ...personalDetailsFormData.fullName, value: customerDetails.personalDetails.fullname },
            surname: { ...personalDetailsFormData.surname, value: customerDetails.personalDetails.surname },
            gender: { ...personalDetailsFormData.gender, value: customerDetails.personalDetails.gender },
            countryCode: { ...personalDetailsFormData.countryCode, value: customerDetails.personalDetails.mobileCountryCode },
            mobileNumber: { ...personalDetailsFormData.mobileNumber, value: customerDetails.personalDetails.mobileNumber },
            email: { ...personalDetailsFormData.email, value: customerDetails.personalDetails.email },
            aadharNumber: { ...personalDetailsFormData.aadharNumber, value: customerDetails.personalDetails.aadharNumber },
            dateOfBirth: { ...personalDetailsFormData.dateOfBirth, value: customerDetails.personalDetails.dateOfBirth },
            timeOfBirth: { ...personalDetailsFormData.timeOfBirth, value: customerDetails.personalDetails.timeOfBirth },
            birthPlace: { ...personalDetailsFormData.birthPlace, value: customerDetails.personalDetails.birthPlace },
            selectReligion: { ...personalDetailsFormData.selectReligion, value: customerDetails.personalDetails.religion },
            selectCaste: { ...personalDetailsFormData.selectCaste, value: customerDetails.personalDetails.caste },
            isConvertedCaste: { ...personalDetailsFormData.isConvertedCaste, value: customerDetails.personalDetails.convertedCaste },
            selectStar: { ...personalDetailsFormData.selectStar, value: customerDetails.personalDetails.star },
            selectRassi: { ...personalDetailsFormData.selectRassi, value: customerDetails.personalDetails.moonsign },
            selectPadam: { ...personalDetailsFormData.selectPadam, value: customerDetails.personalDetails.padam },
            gothram: { ...personalDetailsFormData.gothram, value: customerDetails.personalDetails.gothram },
            selectkujadosham: { ...personalDetailsFormData.selectkujadosham, value: customerDetails.personalDetails.khujaDhosam },
            selectheight: { ...personalDetailsFormData.selectheight, value: customerDetails.personalDetails.height },
            selectbloodgroup: { ...personalDetailsFormData.selectbloodgroup, value: customerDetails.personalDetails.bloodGroup },
            selectmothertounge: { ...personalDetailsFormData.selectmothertounge, value: customerDetails.personalDetails.motherTongue },
            selecthealthcodition: {
              ...personalDetailsFormData.selecthealthcodition,
              value: customerDetails.personalDetails.healthCondition
            },
            handicappedInfo: { ...personalDetailsFormData.handicappedInfo, value: customerDetails.personalDetails.handicappedInfo },
            selectcomplexion: { ...personalDetailsFormData.selectcomplexion, value: customerDetails.personalDetails.complexion },
            selectmaritalstatus: { ...personalDetailsFormData.selectmaritalstatus, value: customerDetails.personalDetails.maritalStatus },
            deathCertificate: { ...personalDetailsFormData.deathCertificate, value: '' },
            dateOfMarriage: { ...personalDetailsFormData.dateOfMarriage, value: customerDetails.personalDetails.dateOfMarriage },
            dateOfDeath: { ...personalDetailsFormData.dateOfDeath, value: customerDetails.personalDetails.dateOfDeath },
            havingChildren: { ...personalDetailsFormData.havingChildren, value: customerDetails.personalDetails.havingChildren },
            divorceCertificate: { ...personalDetailsFormData.divorceCertificate, value: '' },
            dateOfDivorce: { ...personalDetailsFormData.dateOfDivorce, value: customerDetails.personalDetails.dateOfdivorce },
            reasonForDivorce: { ...personalDetailsFormData.reasonForDivorce, value: customerDetails.personalDetails.reasonForDivorce },
            uploadAcknowledgement: { ...personalDetailsFormData.uploadAcknowledgement, value: '' },
            selectsmoke: { ...personalDetailsFormData.selectsmoke, value: customerDetails.personalDetails.smoke },
            selectdrink: { ...personalDetailsFormData.selectdrink, value: customerDetails.personalDetails.drink },
            selectfood: { ...personalDetailsFormData.selectfood, value: customerDetails.personalDetails.food },
            about: { ...personalDetailsFormData.about, value: customerDetails.personalDetails.aboutMe },
            hobbies: { ...personalDetailsFormData.hobbies, value: customerDetails.personalDetails.hobbies },
            intrests: { ...personalDetailsFormData.intrests, value: customerDetails.personalDetails.interests },
            favouritemusic: { ...personalDetailsFormData.favouritemusic, value: customerDetails.personalDetails.favouriteMusic },
            sports: { ...personalDetailsFormData.sports, value: customerDetails.personalDetails.sports },
            favouritecuisne: { ...personalDetailsFormData.favouritecuisne, value: customerDetails.personalDetails.favouriteCuisine },
            favouritereads: { ...personalDetailsFormData.favouritereads, value: customerDetails.personalDetails.favouriteReads },
            preferedmovies: { ...personalDetailsFormData.preferedmovies, value: customerDetails.personalDetails.preferredMovies },
            prefereddressingstyle: {
              ...personalDetailsFormData.prefereddressingstyle,
              value: customerDetails.personalDetails.preferredDressStyle
            },
            spokenlanguages: { ...personalDetailsFormData.spokenlanguages, value: customerDetails.personalDetails.spokenLanguages },
            selectcountry: { ...personalDetailsFormData.selectcountry, value: customerDetails.personalDetails.country },
            selectstate: { ...personalDetailsFormData.selectstate, value: customerDetails.personalDetails.state },
            selectdistrict: { ...personalDetailsFormData.selectdistrict, value: customerDetails.personalDetails.district },
            city: { ...personalDetailsFormData.city, value: customerDetails.personalDetails.city },
            address: { ...personalDetailsFormData.address, value: customerDetails.personalDetails.address },
            altcountryCode: {
              ...personalDetailsFormData.altcountryCode,
              value: customerDetails.personalDetails.alternateMobileCountryCode
            },
            altmobile: { ...personalDetailsFormData.altmobile, value: customerDetails.personalDetails.alternateMobile },
            altemail: { ...personalDetailsFormData.altemail, value: customerDetails.personalDetails.alternateEmail },
            timeToCall: { ...personalDetailsFormData.timeToCall, value: customerDetails.personalDetails.timeToCall },
            applicationfor: { ...personalDetailsFormData.applicationfor, value: customerDetails.personalDetails.applicationFor },
            applicationFillingPersonName: {
              ...personalDetailsFormData.applicationFillingPersonName,
              value: customerDetails.personalDetails.applicationFillingPersonName
            },
            applicationFillingPersonCountryCode: {
              ...personalDetailsFormData.applicationFillingPersonCountryCode,
              value: customerDetails.personalDetails.applicationFillingPersonMobileCountryCode
            },
            applicationFillingPersonMobile: {
              ...personalDetailsFormData.applicationFillingPersonMobile,
              value: customerDetails.personalDetails.applicationFillingPersonMobile
            },
            source: { ...personalDetailsFormData.source, value: customerDetails.personalDetails.source },
            nearestbranch: { ...personalDetailsFormData.nearestbranch, value: customerDetails.personalDetails.nearestBranch }
          });
        }
        if (customerDetails.educationDetails !== null || customerDetails.educationDetails !== undefined) {
          setEducationDetailsFormData({
            ...educationDetailsFormData,
            education: {
              ...educationDetailsFormData.education,
              value: customerDetails?.educationDetails?.education || ''
            },
            university: {
              ...educationDetailsFormData.university,
              value: customerDetails?.educationDetails?.university || ''
            },
            employedin: {
              ...educationDetailsFormData.employedin,
              value: customerDetails?.educationDetails?.employedin || ''
            },
            designation: {
              ...educationDetailsFormData.designation,
              value: customerDetails?.educationDetails?.designation || ''
            },
            profession: {
              ...educationDetailsFormData.profession,
              value: customerDetails?.educationDetails?.profession || ''
            },
            workingLocation: {
              ...educationDetailsFormData.workingLocation,
              value: customerDetails?.educationDetails?.workingLocation || ''
            },
            country: {
              ...educationDetailsFormData.country,
              value: customerDetails?.educationDetails?.country || ''
            },
            state: {
              ...educationDetailsFormData.state,
              value: customerDetails?.educationDetails?.state || ''
            },
            selectdistrict: {
              ...educationDetailsFormData.selectdistrict,
              value: customerDetails?.educationDetails?.selectdistrict || ''
            },
            visaType: {
              ...educationDetailsFormData.visaType,
              value: customerDetails?.educationDetails?.visaType || ''
            },
            passportNumber: {
              ...educationDetailsFormData.passportNumber,
              value: customerDetails?.educationDetails?.passportNumber || ''
            },
            validFrom: {
              ...educationDetailsFormData.validFrom,
              value: customerDetails?.educationDetails?.validFrom || ''
            },
            validTill: {
              ...educationDetailsFormData.validTill,
              value: customerDetails?.educationDetails?.validTill || ''
            },
            workingCompanyName: {
              ...educationDetailsFormData.workingCompanyName,
              value: customerDetails?.educationDetails?.workingCompanyName || ''
            },
            companyAddress: {
              ...educationDetailsFormData.companyAddress,
              value: customerDetails?.educationDetails?.companyAddress || ''
            },
            propertyDetails: {
              ...educationDetailsFormData.propertyDetails,
              value: customerDetails?.educationDetails?.propertyDetails || ''
            },
            annualIncome: {
              ...educationDetailsFormData.annualIncome,
              value: customerDetails?.educationDetails?.annualIncome || ''
            },
            workingState: {
              ...educationDetailsFormData.workingState,
              value: customerDetails?.educationDetails?.workingState || ''
            },
            city: {
              ...educationDetailsFormData.city,
              value: customerDetails?.educationDetails?.city || ''
            },
            locationAdd: {
              ...educationDetailsFormData.locationAdd,
              value: customerDetails?.educationDetails?.locationAdd || ''
            },
            compName: {
              ...educationDetailsFormData.compName,
              value: customerDetails?.educationDetails?.compName || ''
            },
            workingSince: {
              ...educationDetailsFormData.workingSince,
              value: customerDetails?.educationDetails?.workingSince || ''
            },
            totalExp: {
              ...educationDetailsFormData.totalExp,
              value: customerDetails?.educationDetails?.totalExp || ''
            },
            passNumber: {
              ...educationDetailsFormData.passNumber,
              value: customerDetails?.educationDetails?.passNumber || ''
            },
            collegueName: {
              ...educationDetailsFormData.collegueName,
              value: customerDetails?.educationDetails?.collegueName || ''
            }
          });          
        }
        if (customerDetails.familyDetails !== null || customerDetails.familyDetails !== undefined) {
          setFamilyDetailsFormData({
            ...familyDetailsFormData,
            familyStatus: {
              ...familyDetailsFormData.familyStatus,
              value: customerDetails?.familyDetails?.familyStatus || ''
            },
            familyType: {
              ...familyDetailsFormData.familyType,
              value: customerDetails?.familyDetails?.familyType || ''
            },
            fatherName: {
              ...familyDetailsFormData.fatherName,
              value: customerDetails?.familyDetails?.fatherName || ''
            },
            freligion: {
              ...familyDetailsFormData.freligion,
              value: customerDetails?.familyDetails?.freligion || ''
            },
            fcaste: {
              ...familyDetailsFormData.fcaste,
              value: customerDetails?.familyDetails?.fcaste || ''
            },
            fIsConvertedCaste: {
              ...familyDetailsFormData.fIsConvertedCaste,
              value: customerDetails?.familyDetails?.fIsConvertedCaste || ''
            },
            fatherStatus: {
              ...familyDetailsFormData.fatherStatus,
              value: customerDetails?.familyDetails?.fatherStatus || ''
            },
            fhealthCondition: {
              ...familyDetailsFormData.fhealthCondition,
              value: customerDetails?.familyDetails?.fhealthCondition || ''
            },
            workingSector: {
              ...familyDetailsFormData.workingSector,
              value: customerDetails?.familyDetails?.workingSector || ''
            },
            fatherMobileNumberCountryCode: {
              ...familyDetailsFormData.fatherMobileNumberCountryCode,
              value: customerDetails?.familyDetails?.fatherMobileNumberCountryCode || ''
            },
            fmobile: {
              ...familyDetailsFormData.fmobile,
              value: customerDetails?.familyDetails?.fmobile || ''
            },
            fprofession: {
              ...familyDetailsFormData.fprofession,
              value: customerDetails?.familyDetails?.fprofession || ''
            },
            faddress: {
              ...familyDetailsFormData.faddress,
              value: customerDetails?.familyDetails?.faddress || ''
            },
            fannualIncome: {
              ...familyDetailsFormData.fannualIncome,
              value: customerDetails?.familyDetails?.fannualIncome || ''
            },
            fproperty: {
              ...familyDetailsFormData.fproperty,
              value: customerDetails?.familyDetails?.fproperty || ''
            },
            pension: {
              ...familyDetailsFormData.pension,
              value: customerDetails?.familyDetails?.pension || ''
            },
            motherName: {
              ...familyDetailsFormData.motherName,
              value: customerDetails?.familyDetails?.motherName || ''
            },
            mmaidenName: {
              ...familyDetailsFormData.mmaidenName,
              value: customerDetails?.familyDetails?.mmaidenName || ''
            },
            mreligion: {
              ...familyDetailsFormData.mreligion,
              value: customerDetails?.familyDetails?.mreligion || ''
            },
            mcaste: {
              ...familyDetailsFormData.mcaste,
              value: customerDetails?.familyDetails?.mcaste || ''
            },
            mIsConvertedCaste: {
              ...familyDetailsFormData.mIsConvertedCaste,
              value: customerDetails?.familyDetails?.mIsConvertedCaste || ''
            },
            motherStatus: {
              ...familyDetailsFormData.motherStatus,
              value: customerDetails?.familyDetails?.motherStatus || ''
            },
            mhealthCondition: {
              ...familyDetailsFormData.mhealthCondition,
              value: customerDetails?.familyDetails?.mhealthCondition || ''
            },
            motherMobileNumberCountryCode: {
              ...familyDetailsFormData.motherMobileNumberCountryCode,
              value: customerDetails?.familyDetails?.motherMobileNumberCountryCode || ''
            },
            mmobile: {
              ...familyDetailsFormData.mmobile,
              value: customerDetails?.familyDetails?.mmobile || ''
            },
            mprofession: {
              ...familyDetailsFormData.mprofession,
              value: customerDetails?.familyDetails?.mprofession || ''
            },
            mannualIncome: {
              ...familyDetailsFormData.mannualIncome,
              value: customerDetails?.familyDetails?.mannualIncome || ''
            },
            mproperty: {
              ...familyDetailsFormData.mproperty,
              value: customerDetails?.familyDetails?.mproperty || ''
            },
            permanentAddress: {
              ...familyDetailsFormData.permanentAddress,
              value: customerDetails?.familyDetails?.permanentAddress || ''
            },
            isAddressSame: {
              ...familyDetailsFormData.isAddressSame,
              value: customerDetails?.familyDetails?.isAddressSame || false
            },
            presentAddress: {
              ...familyDetailsFormData.presentAddress,
              value: customerDetails?.familyDetails?.presentAddress || ''
            },
            brothers: {
              ...familyDetailsFormData.brothers,
              value: customerDetails?.familyDetails?.brothers || ''
            },
            sisters: {
              ...familyDetailsFormData.sisters,
              value: customerDetails?.familyDetails?.sisters || ''
            },
            refName: {
              ...familyDetailsFormData.refName,
              value: customerDetails?.familyDetails?.refName || ''
            },
            refMobile: {
              ...familyDetailsFormData.refMobile,
              value: customerDetails?.familyDetails?.refMobile || ''
            },
            relation: {
              ...familyDetailsFormData.relation,
              value: customerDetails?.familyDetails?.relation || ''
            },
            refAddress: {
              ...familyDetailsFormData.refAddress,
              value: customerDetails?.familyDetails?.refAddress || ''
            }
          });          
        }
        if (customerDetails.partnerDetails !== null || customerDetails.partnerDetails !== undefined) {
          setPartnerDetailsFormData({
            ...partnerDetailsFormData,
            lookingFor: {
              ...partnerDetailsFormData.lookingFor,
              value: customerDetails?.partnerDetails?.lookingFor || ''
            },
            ageFrom: {
              ...partnerDetailsFormData.ageFrom,
              value: customerDetails?.partnerDetails?.ageFrom || ''
            },
            ageTo: {
              ...partnerDetailsFormData.ageTo,
              value: customerDetails?.partnerDetails?.ageTo || ''
            },
            heightFrom: {
              ...partnerDetailsFormData.heightFrom,
              value: customerDetails?.partnerDetails?.heightFrom || ''
            },
            heightTo: {
              ...partnerDetailsFormData.heightTo,
              value: customerDetails?.partnerDetails?.heightTo || ''
            },
            familyStatus: {
              ...partnerDetailsFormData.familyStatus,
              value: customerDetails?.partnerDetails?.familyStatus || ''
            },
            interCasteMarriage: {
              ...partnerDetailsFormData.interCasteMarriage,
              value: customerDetails?.partnerDetails?.interCasteMarriage || ''
            },
            interReligion: {
              ...partnerDetailsFormData.interReligion,
              value: customerDetails?.partnerDetails?.interReligion || ''
            },
            interCasteChild: {
              ...partnerDetailsFormData.interCasteChild,
              value: customerDetails?.partnerDetails?.interCasteChild || ''
            },
            caste: {
              ...partnerDetailsFormData.caste,
              value: customerDetails?.partnerDetails?.caste || ''
            },
            subCaste: {
              ...partnerDetailsFormData.subCaste,
              value: customerDetails?.partnerDetails?.subCaste || ''
            },
            khujaDhosam: {
              ...partnerDetailsFormData.khujaDhosam,
              value: customerDetails?.partnerDetails?.khujaDhosam || ''
            },
            complexion: {
              ...partnerDetailsFormData.complexion,
              value: customerDetails?.partnerDetails?.complexion || ''
            },
            smoke: {
              ...partnerDetailsFormData.smoke,
              value: customerDetails?.partnerDetails?.smoke || ''
            },
            drink: {
              ...partnerDetailsFormData.drink,
              value: customerDetails?.partnerDetails?.drink || ''
            },
            education: {
              ...partnerDetailsFormData.education,
              value: customerDetails?.partnerDetails?.education || ''
            },
            profession: {
              ...partnerDetailsFormData.profession,
              value: customerDetails?.partnerDetails?.profession || ''
            },
            passport: {
              ...partnerDetailsFormData.passport,
              value: customerDetails?.partnerDetails?.passport || ''
            },
            profilePicture: {
              ...partnerDetailsFormData.profilePicture,
              value: customerDetails?.partnerDetails?.profilePicture || []
            }
          });          
        }
      }
    }
  }, [customerDetails]);

  useEffect(() => {
    if (edit) {
      setTimeout(() => {
        getCustomerDetailsList();
      }, 3000);
    }
  }, []);

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <PersonalDetails personalDetailsFormData={personalDetailsFormData} setPersonalDetailsFormData={setPersonalDetailsFormData} />
        );
      case 1:
        return (
          <EducationDetails educationDetailsFormData={educationDetailsFormData} setEducationDetailsFormData={setEducationDetailsFormData} />
        );
      case 2:
        return <FamilyDetails familyDetailsFormData={familyDetailsFormData} setFamilyDetailsFormData={setFamilyDetailsFormData} />;
      case 3:
        return <PartnerDetails partnerDetailsFormData={partnerDetailsFormData} setPartnerDetailsFormData={setPartnerDetailsFormData} />;
      case 4:
        return (
          <Confirm
            personalDetailsFormData={personalDetailsFormData}
            educationDetailsFormData={educationDetailsFormData}
            familyDetailsFormData={familyDetailsFormData}
            partnerDetailsFormData={partnerDetailsFormData}
          />
        );
      default:
        throw new Error('Unknown step');
    }
  }

  const validate = (formData: any, setFormData: any): boolean => {
    let newFormData = _.cloneDeep(formData);
    let isValid = true;

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const field = formData[key];

        // Check for mandatory fields
        if (field.mandatory) {
          // Check for empty text, number, or email fields
          if (field.type !== 'select' && field.type !== 'date' && (!field.value || field.value === '')) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} is required`;
            isValid = false;
          } else if (field.type === 'select' && field.isMulti && field.value.length === 0) {
            console.log('multi select: ', field.name, field.value);
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} must be selected`;
            isValid = false;
          }
          // Check for empty select fields
          else if (field.type === 'select' && !field.isMulti && (!field.value || !field.value.id || field.value.id === null)) {
            newFormData[key].error = true;
            newFormData[key].helperText = `${field.label} must be selected`;
            isValid = false;
          }
          // Check for empty date fields
          else if (field.type === 'date' && !field.value) {
            newFormData[key].error = true;
            newFormData[key].helperText = 'Date is required';
            isValid = false;
          } else if (field.type === 'time' && !field.value) {
            newFormData[key].error = true;
            newFormData[key].helperText = 'Date is required';
            isValid = false;
          }
          // Email validation
          else if (key === 'email' && field.value && !/\S+@\S+\.\S+/.test(field.value)) {
            newFormData[key].error = true;
            newFormData[key].helperText = 'Invalid email address';
            isValid = false;
          }
        }

        // No errors
        else {
          newFormData[key].error = false;
          newFormData[key].helperText = '';
        }
      }
    }

    setFormData(newFormData);
    return isValid;
  };

  return (
    <MainCard title={edit ? 'Edit Customer' : 'Create Customer'}>
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
                <AnimateButton>
                  <Button variant="contained" onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                    Back
                  </Button>
                </AnimateButton>
              )}
              <AnimateButton>
                <Button variant="contained" onClick={handleNext} sx={{ my: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Create Customer' : 'Next'}
                </Button>
              </AnimateButton>
            </Stack>
          </>
        )}
      </>
    </MainCard>
  );
}
