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
  cityList,
  listSubCaste
} from '../../services/add-new-details/AddNewDetails';
import {
  listEducation,
  listUniversitys,
  listEmployedIn,
  listDesingation,
  listProfession
} from '../../services/add-new-details/AddNewDetails';
import {
  listFamilyStatus,
  listFamilyType,
  listRelation,
  religionList as listReligion,
  listHealthCondition,
  listLookingfor
} from '../../services/add-new-details/AddNewDetails';
import { bloodGroups, heights, mobileCountryCodes, visaType, ageRange } from '../../Common/utils';

import {
  createPersonalDetails,
  createCustomer,
  createPartnerDetails,
  createFamilyDetails,
  createEducationDetails,
  getCustomerDetails,
  getNearestBranchList,
  savePersonalDataUploads,
  saveCustomerProfile
} from '../../services/customer-management/CustomerManagement';

export const personalDetails: any = {
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
    label: 'Religion',
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
    label: 'Caste',
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
    label: 'Moonsign/Raasi',
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
    label: 'Padam',
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
    label: 'Kuja Dosham',
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
    label: 'Height',
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
    label: 'Blood Group',
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
    label: 'Mother Tounge',
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
    label: 'Health Condition',
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
    label: 'Complexion',
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
  selectsmoke: {
    label: 'Smoke',
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
    label: 'Drink',
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
    label: 'Food',
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
    label: 'Hobbies',
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
    label: 'Intrest',
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
    label: 'Favourite music',
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
    label: 'Sports',
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
    label: 'Favourite Cuisne',
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
    label: 'Favourite Reads',
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
    label: 'Prefered Movies',
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
    label: 'Prefered Dressing Style',
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
    label: 'Spoken Languages',
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
    label: 'Country',
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
    label: 'State',
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
    label: 'District',
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
    label: 'City',
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
    options: [],
    value: '',
    error: false,
    helperText: '',
    mandatory: true,
    isMulti: false
  }
};
export const educationDetails: any = {
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
    label: 'Country',
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
    label: 'State',
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
    label: 'District',
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
  indiaWorkingState: {
    label: 'State',
    id: 'indiaWorkingState',
    name: 'indiaWorkingState',
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
    multiline: true,
    rows: 4,
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
    multiline: true,
    rows: 4,
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
  indiaColleaguesName: {
    label: "Colleague's Name",
    id: 'indiaColleaguesName',
    name: 'indiaColleaguesName',
    type: 'text',
    value: '',
    error: false,
    helperText: '',
    mandatory: false,
    options: []
  },
  indiaColleagueMobileNo: {
    label: "Colleague's Mobile No",
    id: 'indiaColleagueMobileNo',
    name: 'indiaColleagueMobileNo',
    type: 'number',
    value: '',
    error: false,
    helperText: '',
    mandatory: false,
    options: []
  }
};
export const familyDetails: any = {
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
    label: 'Religion',
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
    label: 'Caste',
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
    label: 'Religion',
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
    label: 'Caste',
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
  referenceMobileCountryCode: {
    label: 'Country code',
    id: 'referenceMobileCountryCode',
    name: 'referenceMobileCountryCode',
    type: 'select',
    options: mobileCountryCodes,
    value: '',
    error: false,
    helperText: '',
    mandatory: true,
    isMulti: false
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
    label: 'Relation',
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
    multiline: true,
    rows: 4,
    value: '',
    error: false,
    helperText: '',
    mandatory: true,
    options: []
  }
};
export const partnerDetails: any = {
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
    label: 'Caste',
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
    label: 'Sub Caste',
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

export const getStatesListByCountryId = async (countryId: number) => {
  const result = await statesList({
    search: '',
    status: null,
    id: null,
    countryId: countryId,
    meta: true
  });
  return result;
};

export const getDistrictsListBystateId = async (countryId: number, stateId: number) => {
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

export const getCitiesListByDistrictId = async (countryId: number, stateId: number, districtId: number) => {
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

const covertStringToDateObject = (date: string) => {
  const [day, month, year] = date.split('/'); // Split the string into parts
  const dateObject = new Date(Number(year), Number(month) - 1, Number(day));
  return dateObject ? dateObject : '';
};

export const setCustomerDetailsToIndividualFormData = async (
  personalDetailsFormData: any,
  setPersonalDetailsFormData: any,
  educationDetailsFormData: any,
  setEducationDetailsFormData: any,
  familyDetailsFormData: any,
  setFamilyDetailsFormData: any,
  partnerDetailsFormData: any,
  setPartnerDetailsFormData: any,
  customerDetails: any,
  edit: any
) => {
  if (Object.keys(customerDetails).length > 0) {
    if (edit) {
      if (customerDetails.personalDetails !== null || customerDetails.personalDetails !== undefined) {
        let stateData = await getStatesListByCountryId(customerDetails.personalDetails.country);
        let districtData = await getDistrictsListBystateId(customerDetails.personalDetails.country, customerDetails.personalDetails.state);
        let cityData = await getCitiesListByDistrictId(
          customerDetails.personalDetails.country,
          customerDetails.personalDetails.state,
          customerDetails.personalDetails.district
        );
        let nearestBranchData = await getNearestBranchList({
          country_id: customerDetails.personalDetails.country,
          state_id: customerDetails.personalDetails.state,
          district_id: customerDetails.personalDetails.district,
          city_id: customerDetails.personalDetails.city
        });
        stateData = stateData?.data?.map((item: any) => ({ id: item.id, label: item.stateName })) || [];
        districtData = districtData?.data?.map((item: any) => ({ id: item.id, label: item.districtName })) || [];
        cityData = cityData?.data?.map((item: any) => ({ id: item.id, label: item.cityName })) || [];
        nearestBranchData = nearestBranchData?.data?.map((item: any) => ({ id: item.id, label: item.branchName })) || [];
        console.log('check: : ', stateData, districtData, cityData, nearestBranchData);
        setPersonalDetailsFormData({
          ...personalDetailsFormData,
          fullName: { ...personalDetailsFormData.fullName, value: customerDetails.personalDetails.fullname },
          surname: { ...personalDetailsFormData.surname, value: customerDetails.personalDetails.surname },
          gender: {
            ...personalDetailsFormData.gender,
            value: personalDetailsFormData.gender.options.find((item: any) => item.id == customerDetails.personalDetails.gender)
          },
          countryCode: {
            ...personalDetailsFormData.countryCode,
            value: personalDetailsFormData.countryCode.options.find(
              (item: any) => item.id == customerDetails.personalDetails.mobileCountryCode
            )
          },
          mobileNumber: { ...personalDetailsFormData.mobileNumber, value: customerDetails.personalDetails.mobileNumber },
          email: { ...personalDetailsFormData.email, value: customerDetails.personalDetails.email },
          aadharNumber: { ...personalDetailsFormData.aadharNumber, value: customerDetails.personalDetails.aadharNumber },
          dateOfBirth: {
            ...personalDetailsFormData.dateOfBirth,
            value: customerDetails.personalDetails.dateOfBirth ? new Date(customerDetails.personalDetails.dateOfBirth) : null
          },
          timeOfBirth: {
            ...personalDetailsFormData.timeOfBirth,
            value: customerDetails.personalDetails.timeOfBirth ? new Date(customerDetails.personalDetails.timeOfBirth) : null
          },
          birthPlace: { ...personalDetailsFormData.birthPlace, value: customerDetails.personalDetails.birthPlace },
          selectReligion: {
            ...personalDetailsFormData.selectReligion,
            value: personalDetailsFormData.selectReligion.options.find((item: any) => item.id == customerDetails.personalDetails.religion)
          },
          selectCaste: {
            ...personalDetailsFormData.selectCaste,
            value: personalDetailsFormData.selectCaste.options.find((item: any) => item.id == customerDetails.personalDetails.caste)
          },
          isConvertedCaste: {
            ...personalDetailsFormData.isConvertedCaste,
            value: personalDetailsFormData.isConvertedCaste.options.find((item: any) => customerDetails.personalDetails.convertedCaste)
          },
          selectStar: {
            ...personalDetailsFormData.selectStar,
            value: personalDetailsFormData.selectStar.options.find((item: any) => item.id == customerDetails.personalDetails.star)
          },
          selectRassi: {
            ...personalDetailsFormData.selectRassi,
            value: personalDetailsFormData.selectRassi.options.find((item: any) => item.id == customerDetails.personalDetails.moonsign)
          },
          selectPadam: {
            ...personalDetailsFormData.selectPadam,
            value: personalDetailsFormData.selectPadam.options.find((item: any) => item.id == customerDetails.personalDetails.padam)
          },
          gothram: { ...personalDetailsFormData.gothram, value: customerDetails.personalDetails.gothram },
          selectkujadosham: {
            ...personalDetailsFormData.selectkujadosham,
            value: personalDetailsFormData.selectkujadosham.options.find(
              (item: any) => item.id == customerDetails.personalDetails.khujaDhosam
            )
          },
          selectheight: {
            ...personalDetailsFormData.selectheight,
            value: personalDetailsFormData.selectheight.options.find((item: any) => item.id == customerDetails.personalDetails.height)
          },
          selectbloodgroup: {
            ...personalDetailsFormData.selectbloodgroup,
            value: personalDetailsFormData.selectbloodgroup.options.find(
              (item: any) => item.id == customerDetails.personalDetails.bloodGroup
            )
          },
          selectmothertounge: {
            ...personalDetailsFormData.selectmothertounge,
            value: personalDetailsFormData.selectmothertounge.options.find(
              (item: any) => item.id == customerDetails.personalDetails.motherTongue
            )
          },
          selecthealthcodition: {
            ...personalDetailsFormData.selecthealthcodition,
            value: personalDetailsFormData.selecthealthcodition.options.find(
              (item: any) => item.id == customerDetails.personalDetails.healthCondition
            )
          },
          handicappedInfo: { ...personalDetailsFormData.handicappedInfo, value: customerDetails.personalDetails.handicappedInfo },
          selectcomplexion: {
            ...personalDetailsFormData.selectcomplexion,
            value: personalDetailsFormData.selectcomplexion.options.find(
              (item: any) => item.id == customerDetails.personalDetails.complexion
            )
          },
          selectmaritalstatus: {
            ...personalDetailsFormData.selectmaritalstatus,
            value: personalDetailsFormData.selectmaritalstatus.options.find(
              (item: any) => item.id == customerDetails.personalDetails.maritalStatus
            )
          },
          deathCertificate: { ...personalDetailsFormData.deathCertificate, value: '' },
          dateOfMarriage: {
            ...personalDetailsFormData.dateOfMarriage,
            value: customerDetails.personalDetails.dateOfMarriage ? new Date(customerDetails.personalDetails.dateOfMarriage) : null
          },
          dateOfDeath: {
            ...personalDetailsFormData.dateOfDeath,
            value: customerDetails.personalDetails.dateOfDeath ? new Date(customerDetails.personalDetails.dateOfDeath) : null
          },
          havingChildren: {
            ...personalDetailsFormData.havingChildren,
            value: personalDetailsFormData.havingChildren.options.find(
              (item: any) => item.id == customerDetails.personalDetails.havingChildren
            )
          },
          divorceCertificate: { ...personalDetailsFormData.divorceCertificate, value: '' },
          dateOfDivorce: {
            ...personalDetailsFormData.dateOfDivorce,
            value: customerDetails.personalDetails.dateOfdivorce ? new Date(customerDetails.personalDetails.dateOfdivorce) : null
          },
          reasonForDivorce: { ...personalDetailsFormData.reasonForDivorce, value: customerDetails.personalDetails.reasonForDivorce },
          uploadAcknowledgement: { ...personalDetailsFormData.uploadAcknowledgement, value: '' },
          selectsmoke: {
            ...personalDetailsFormData.selectsmoke,
            value: personalDetailsFormData.selectsmoke.options.find((item: any) => item.id == customerDetails.personalDetails.smoke)
          },
          selectdrink: {
            ...personalDetailsFormData.selectdrink,
            value: personalDetailsFormData.selectdrink.options.find((item: any) => item.id == customerDetails.personalDetails.drink)
          },
          selectfood: {
            ...personalDetailsFormData.selectfood,
            value: personalDetailsFormData.selectfood.options.find((item: any) => item.id == customerDetails.personalDetails.food)
          },
          about: { ...personalDetailsFormData.about, value: customerDetails.personalDetails.aboutMe },
          hobbies: {
            ...personalDetailsFormData.hobbies,
            value: personalDetailsFormData.hobbies.options.filter((item: any) =>
              customerDetails.personalDetails.hobbies.some((item1: any) => item1 == item.id)
            )
          },
          intrests: {
            ...personalDetailsFormData.intrests,
            value: personalDetailsFormData.intrests.options.filter((item: any) =>
              customerDetails.personalDetails.interests.some((item1: any) => item1 == item.id)
            )
          },
          favouritemusic: {
            ...personalDetailsFormData.favouritemusic,
            value: personalDetailsFormData.favouritemusic.options.filter((item: any) =>
              customerDetails.personalDetails.favouriteMusic.some((item1: any) => item1 == item.id)
            )
          },
          sports: {
            ...personalDetailsFormData.sports,
            value: personalDetailsFormData.sports.options.filter((item: any) =>
              customerDetails.personalDetails.sports.some((item1: any) => item1 == item.id)
            )
          },
          favouritecuisne: {
            ...personalDetailsFormData.favouritecuisne,
            value: personalDetailsFormData.favouritecuisne.options.filter((item: any) =>
              customerDetails.personalDetails.favouriteCuisine.some((item1: any) => item1 == item.id)
            )
          },
          favouritereads: {
            ...personalDetailsFormData.favouritereads,
            value: personalDetailsFormData.favouritereads.options.filter((item: any) =>
              customerDetails.personalDetails.favouriteReads.some((item1: any) => item1 == item.id)
            )
          },
          preferedmovies: {
            ...personalDetailsFormData.preferedmovies,
            value: personalDetailsFormData.preferedmovies.options.filter((item: any) =>
              customerDetails.personalDetails.preferredMovies.some((item1: any) => item1 == item.id)
            )
          },
          prefereddressingstyle: {
            ...personalDetailsFormData.prefereddressingstyle,
            value: personalDetailsFormData.prefereddressingstyle.options.filter((item: any) =>
              customerDetails.personalDetails.preferredDressStyle.some((item1: any) => item1 == item.id)
            )
          },
          spokenlanguages: {
            ...personalDetailsFormData.spokenlanguages,
            value: personalDetailsFormData.spokenlanguages.options.filter((item: any) =>
              customerDetails.personalDetails.spokenLanguages.some((item1: any) => item1 == item.id)
            )
          },
          selectcountry: {
            ...personalDetailsFormData.selectcountry,
            value: personalDetailsFormData.selectcountry.options.find((item: any) => item.id == customerDetails.personalDetails.country)
          },
          selectstate: {
            ...personalDetailsFormData.selectstate,
            options: stateData,
            value: stateData.find((item: any) => item.id == customerDetails.personalDetails.state)
          },
          selectdistrict: {
            ...personalDetailsFormData.selectdistrict,
            options: districtData,
            value: districtData.find((item: any) => item.id == customerDetails.personalDetails.district)
          },
          city: {
            ...personalDetailsFormData.city,
            options: cityData,
            value: cityData.find((item: any) => item.id == customerDetails.personalDetails.city)
          },
          address: { ...personalDetailsFormData.address, value: customerDetails.personalDetails.address },
          altcountryCode: {
            ...personalDetailsFormData.altcountryCode,
            value: personalDetailsFormData.altcountryCode.options.find(
              (item: any) => item.id == customerDetails.personalDetails.alternateMobileCountryCode
            )
          },
          altmobile: { ...personalDetailsFormData.altmobile, value: customerDetails.personalDetails.alternateMobile },
          altemail: { ...personalDetailsFormData.altemail, value: customerDetails.personalDetails.alternateEmail },
          timeToCall: {
            ...personalDetailsFormData.timeToCall,
            value: customerDetails.personalDetails.timeToCall ? new Date(customerDetails.personalDetails.timeToCall) : null
          },
          applicationfor: {
            ...personalDetailsFormData.applicationfor,
            value: personalDetailsFormData.applicationfor.options.find(
              (item: any) => item.id == customerDetails.personalDetails.applicationFor
            )
          },
          applicationFillingPersonName: {
            ...personalDetailsFormData.applicationFillingPersonName,
            value: customerDetails.personalDetails.applicationFillingPersonName
          },
          applicationFillingPersonCountryCode: {
            ...personalDetailsFormData.applicationFillingPersonCountryCode,
            value: personalDetailsFormData.applicationFillingPersonCountryCode.options.find(
              (item: any) => item.id == customerDetails.personalDetails.applicationFillingPersonMobileCountryCode
            )
          },
          applicationFillingPersonMobile: {
            ...personalDetailsFormData.applicationFillingPersonMobile,
            value: customerDetails.personalDetails.applicationFillingPersonMobile
          },
          source: {
            ...personalDetailsFormData.source,
            value: personalDetailsFormData.source.options.find((item: any) => item.id == customerDetails.personalDetails.source)
          },
          nearestbranch: {
            ...personalDetailsFormData.nearestbranch,
            options: nearestBranchData,
            value: nearestBranchData.find((item: any) => item.id == customerDetails.personalDetails.nearestBranch)
          }
        });
      }
      if (customerDetails.educationDetails !== null || customerDetails.educationDetails !== undefined) {
        let cityData = [];
        let districtData = [];
        let stateData = [];
        let abroadStateData = [];
        let countryRes = await countryList({ meta: true });
        countryRes = countryRes.data.map((item: any) => ({ id: item.id, label: item.countryName }));
        if (customerDetails?.educationDetails?.workingLocation === 2) {
          const getCoutryId: any = educationDetailsFormData.country.options.find((iten: any) => iten.label.toLowerCase() === 'india');
          stateData = await getStatesListByCountryId(getCoutryId?.id);
          districtData = await getDistrictsListBystateId(getCoutryId?.id, customerDetails.educationDetails.indiaWorkingState);
          cityData = await getCitiesListByDistrictId(
            getCoutryId?.id,
            customerDetails.educationDetails.indiaWorkingState,
            customerDetails.educationDetails.indiaSelectDistrict
          );
          stateData = stateData.data.map((item: any) => ({ id: item.id, label: item.stateName }));
          districtData = districtData.data.map((item: any) => ({ id: item.id, label: item.districtName }));
          cityData = cityData.data.map((item: any) => ({ id: item.id, label: item.cityName }));
        } else {
          abroadStateData = await getStatesListByCountryId(customerDetails.educationDetails.abroadSelectCountry);
          abroadStateData = abroadStateData.data.map((item: any) => ({ id: item.id, label: item.stateName }));
        }

        setEducationDetailsFormData({
          ...educationDetailsFormData,
          education: {
            ...educationDetailsFormData.education,
            value:
              educationDetailsFormData.education.options.find((item: any) => item.id == customerDetails?.educationDetails?.education) || ''
          },
          university: {
            ...educationDetailsFormData.university,
            value:
              educationDetailsFormData.university.options.find((item: any) => item.id == customerDetails?.educationDetails?.university) ||
              ''
          },
          employedin: {
            ...educationDetailsFormData.employedin,
            value:
              educationDetailsFormData.employedin.options.find((item: any) => item.id == customerDetails?.educationDetails?.employedIn) ||
              ''
          },
          designation: {
            ...educationDetailsFormData.designation,
            value:
              educationDetailsFormData.designation.options.find((item: any) => item.id == customerDetails?.educationDetails?.designation) ||
              ''
          },
          profession: {
            ...educationDetailsFormData.profession,
            value:
              educationDetailsFormData.profession.options.find((item: any) => item.id == customerDetails?.educationDetails?.profession) ||
              ''
          },
          workingLocation: {
            ...educationDetailsFormData.workingLocation,
            value:
              educationDetailsFormData.workingLocation.options.find(
                (item: any) => item.id == customerDetails?.educationDetails?.workingLocation
              ) || ''
          },
          country: {
            ...educationDetailsFormData.country,
            options: countryRes,
            value:
              educationDetailsFormData.country.options.find(
                (item: any) => item.id == customerDetails?.educationDetails?.abroadSelectCountry
              ) || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 1 ? true : false
          },
          state: {
            ...educationDetailsFormData.state,
            options: abroadStateData,
            value: abroadStateData.find((item: any) => item.id == customerDetails?.educationDetails?.abroadSelectState) || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 1 ? true : false
          },
          selectdistrict: {
            ...educationDetailsFormData.selectdistrict,
            options: districtData,
            value: districtData.find((item: any) => item.id == customerDetails?.educationDetails?.indiaSelectDistrict) || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },
          visaType: {
            ...educationDetailsFormData.visaType,
            value:
              educationDetailsFormData.visaType.options.find((item: any) => item.id == customerDetails?.educationDetails?.abroadVisaType) ||
              '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 1 ? true : false
          },
          passportNumber: {
            ...educationDetailsFormData.passportNumber,
            value: customerDetails?.educationDetails?.abroadPassportNumber || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 1 ? true : false
          },
          validFrom: {
            ...educationDetailsFormData.validFrom,
            value: customerDetails?.educationDetails?.abroadValidFrom
              ? covertStringToDateObject(customerDetails?.educationDetails?.abroadValidFrom)
              : '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 1 ? true : false
          },
          validTill: {
            ...educationDetailsFormData.validTill,
            value: customerDetails?.educationDetails?.abroadValidTill
              ? covertStringToDateObject(customerDetails?.educationDetails?.abroadValidTill)
              : '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 1 ? true : false
          },
          workingCompanyName: {
            ...educationDetailsFormData.workingCompanyName,
            value: customerDetails?.educationDetails?.abroadWorkingCompanyName || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 1 ? true : false
          },
          companyAddress: {
            ...educationDetailsFormData.companyAddress,
            value: customerDetails?.educationDetails?.abroadCompanysPresentAddress || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 1 ? true : false
          },
          propertyDetails: {
            ...educationDetailsFormData.propertyDetails,
            value: customerDetails?.educationDetails?.propertyDetails || ''
          },
          annualIncome: {
            ...educationDetailsFormData.annualIncome,
            value: customerDetails?.educationDetails?.annualIncome || ''
          },
          indiaWorkingState: {
            ...educationDetailsFormData.indiaWorkingState,
            options: stateData,
            value: stateData.find((item: any) => item.id == customerDetails?.educationDetails?.indiaWorkingState) || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },

          city: {
            ...educationDetailsFormData.city,
            options: cityData,
            value: cityData.find((item: any) => item.id == customerDetails?.educationDetails?.indiaCity) || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },
          locationAdd: {
            ...educationDetailsFormData.locationAdd,
            value: customerDetails?.educationDetails?.indiaLocationAddress || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },
          compName: {
            ...educationDetailsFormData.compName,
            value: customerDetails?.educationDetails?.indiaCompanyName || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },
          workingSince: {
            ...educationDetailsFormData.workingSince,
            value: customerDetails?.educationDetails?.indiaWorkingSince || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },
          totalExp: {
            ...educationDetailsFormData.totalExp,
            value: customerDetails?.educationDetails?.indiaTotalExperience || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },
          passNumber: {
            ...educationDetailsFormData.passNumber,
            value: customerDetails?.educationDetails?.indiaPassportNumber || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },
          indiaColleaguesName: {
            ...educationDetailsFormData.indiaColleaguesName,
            value: customerDetails?.educationDetails?.indiaColleaguesName || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          },
          indiaColleagueMobileNo: {
            ...educationDetailsFormData.indiaColleagueMobileNo,
            value: customerDetails?.educationDetails?.indiaColleagueMobileNo || '',
            mandatory: customerDetails?.educationDetails?.workingLocation === 2 ? true : false
          }
        });
      }
      if (customerDetails.familyDetails !== null || customerDetails.familyDetails !== undefined) {
        setFamilyDetailsFormData({
          ...familyDetailsFormData,
          familyStatus: {
            ...familyDetailsFormData.familyStatus,
            value:
              familyDetailsFormData.familyStatus.options.find((item: any) => item.id == customerDetails?.familyDetails?.familyStatus) || ''
          },
          familyType: {
            ...familyDetailsFormData.familyType,
            value: familyDetailsFormData.familyType.options.find((item: any) => item.id == customerDetails?.familyDetails?.familyType) || ''
          },
          fatherName: {
            ...familyDetailsFormData.fatherName,
            value: customerDetails?.familyDetails?.fatherName || ''
          },
          freligion: {
            ...familyDetailsFormData.freligion,
            value:
              familyDetailsFormData.freligion.options.find((item: any) => item.id == customerDetails?.familyDetails?.fatherReligion) || ''
          },
          fcaste: {
            ...familyDetailsFormData.fcaste,
            value: familyDetailsFormData.fcaste.options.find((item: any) => item.id == customerDetails?.familyDetails?.fatherCaste) || ''
          },
          fIsConvertedCaste: {
            ...familyDetailsFormData.fIsConvertedCaste,
            value:
              familyDetailsFormData.fIsConvertedCaste.options.find(
                (item: any) => item.id == customerDetails?.familyDetails?.isFatherConvertedCaste
              ) || ''
          },
          fatherStatus: {
            ...familyDetailsFormData.fatherStatus,
            value:
              familyDetailsFormData.fatherStatus.options.find((item: any) => item.id == customerDetails?.familyDetails?.fatherStatus) || ''
          },
          fhealthCondition: {
            ...familyDetailsFormData.fhealthCondition,
            value:
              familyDetailsFormData.fhealthCondition.options.find(
                (item: any) => item.id == customerDetails?.familyDetails?.fatherHealthCondition
              ) || ''
          },
          workingSector: {
            ...familyDetailsFormData.workingSector,
            value: customerDetails?.familyDetails?.fatherWorkingSector || ''
          },
          fatherMobileNumberCountryCode: {
            ...familyDetailsFormData.fatherMobileNumberCountryCode,
            value:
              familyDetailsFormData.fatherMobileNumberCountryCode.options.find(
                (item: any) => item.id == customerDetails?.familyDetails?.fatherMobileNumberCountryCode
              ) || ''
          },
          fmobile: {
            ...familyDetailsFormData.fmobile,
            value: customerDetails?.familyDetails?.fatherMobileNumber || ''
          },
          fprofession: {
            ...familyDetailsFormData.fprofession,
            value:
              familyDetailsFormData.fprofession.options.find((item: any) => item.id == customerDetails?.familyDetails?.fatherProfession) ||
              ''
          },
          faddress: {
            ...familyDetailsFormData.faddress,
            value: customerDetails?.familyDetails?.fatherAddress || ''
          },
          fannualIncome: {
            ...familyDetailsFormData.fannualIncome,
            value: customerDetails?.familyDetails?.fatherAnualIncome || ''
          },
          fproperty: {
            ...familyDetailsFormData.fproperty,
            value: customerDetails?.familyDetails?.fatherPropertyDetails || ''
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
            value: customerDetails?.familyDetails?.motherMaidenName || ''
          },
          mreligion: {
            ...familyDetailsFormData.mreligion,
            value:
              familyDetailsFormData.mreligion.options.find((item: any) => item.id == customerDetails?.familyDetails?.motherReligion) || ''
          },
          mcaste: {
            ...familyDetailsFormData.mcaste,
            value: familyDetailsFormData.mcaste.options.find((item: any) => item.id == customerDetails?.familyDetails?.motherCaste) || ''
          },
          mIsConvertedCaste: {
            ...familyDetailsFormData.mIsConvertedCaste,
            value:
              familyDetailsFormData.mIsConvertedCaste.options.find(
                (item: any) => item.id == customerDetails?.familyDetails?.isMotherConvertedCaste
              ) || ''
          },
          motherStatus: {
            ...familyDetailsFormData.motherStatus,
            value:
              familyDetailsFormData.motherStatus.options.find((item: any) => item.id == customerDetails?.familyDetails?.motherStatus) || ''
          },
          mhealthCondition: {
            ...familyDetailsFormData.mhealthCondition,
            value:
              familyDetailsFormData.mhealthCondition.options.find(
                (item: any) => item.id == customerDetails?.familyDetails?.motherHealthCondition
              ) || ''
          },
          motherMobileNumberCountryCode: {
            ...familyDetailsFormData.motherMobileNumberCountryCode,
            value:
              familyDetailsFormData.motherMobileNumberCountryCode.options.find(
                (item: any) => item.id == customerDetails?.familyDetails?.motherMobileNumberCountryCode
              ) || ''
          },
          mmobile: {
            ...familyDetailsFormData.mmobile,
            value: customerDetails?.familyDetails?.motherMobileNumber || ''
          },
          mprofession: {
            ...familyDetailsFormData.mprofession,
            value:
              familyDetailsFormData.mprofession.options.find((item: any) => item.id == customerDetails?.familyDetails?.motherProfession) ||
              ''
          },
          mannualIncome: {
            ...familyDetailsFormData.mannualIncome,
            value: customerDetails?.familyDetails?.motherAnualIncome || ''
          },
          mproperty: {
            ...familyDetailsFormData.mproperty,
            value: customerDetails?.familyDetails?.motherPropertyDetails || ''
          },
          permanentAddress: {
            ...familyDetailsFormData.permanentAddress,
            value: customerDetails?.familyDetails?.familyPermanentAddress || ''
          },
          presentAddress: {
            ...familyDetailsFormData.presentAddress,
            value: customerDetails?.familyDetails?.familyPresentAddress || ''
          },
          brothers: {
            ...familyDetailsFormData.brothers,
            value: customerDetails?.familyDetails?.numberOfBrothers || ''
          },
          sisters: {
            ...familyDetailsFormData.sisters,
            value: customerDetails?.familyDetails?.numberOfsisters || ''
          },
          refName: {
            ...familyDetailsFormData.refName,
            value: customerDetails?.familyDetails?.referenceName || ''
          },
          referenceMobileCountryCode: {
            ...familyDetailsFormData.referenceMobileCountryCode,
            value:
              familyDetailsFormData.referenceMobileCountryCode.options.find(
                (item: any) => item.id == customerDetails?.familyDetails?.referenceMobileCountryCode
              ) || ''
          },
          refMobile: {
            ...familyDetailsFormData.refMobile,
            value: customerDetails?.familyDetails?.referenceMobileNmuber || ''
          },
          relation: {
            ...familyDetailsFormData.relation,
            value: familyDetailsFormData.relation.options.find((item: any) => item.id == customerDetails?.familyDetails?.relation) || ''
          },
          refAddress: {
            ...familyDetailsFormData.refAddress,
            value: customerDetails?.familyDetails?.referenceAddress || ''
          }
        });
      }
      if (customerDetails.partnerDetails !== null || customerDetails.partnerDetails !== undefined) {
        let subCasteList = await listSubCaste({ castId: customerDetails.partnerDetails.caste, meta: true });
        if (subCasteList?.data?.length > 0) {
          subCasteList = subCasteList.data.map((item: any) => ({ id: item.id, label: item.castName }));
        }
        setPartnerDetailsFormData({
          ...partnerDetailsFormData,
          lookingFor: {
            ...partnerDetailsFormData.lookingFor,
            value:
              partnerDetailsFormData.lookingFor.options.find((item: any) => item.id == customerDetails?.partnerDetails?.lookingFor) || ''
          },
          ageFrom: {
            ...partnerDetailsFormData.ageFrom,
            value: partnerDetailsFormData.ageFrom.options.find((item: any) => item.id == customerDetails?.partnerDetails?.ageFrom) || ''
          },
          ageTo: {
            ...partnerDetailsFormData.ageTo,
            value: partnerDetailsFormData.ageTo.options.find((item: any) => item.id == customerDetails?.partnerDetails?.ageTo) || ''
          },
          heightFrom: {
            ...partnerDetailsFormData.heightFrom,
            value:
              partnerDetailsFormData.heightFrom.options.find((item: any) => item.id == customerDetails?.partnerDetails?.heightFrom) || ''
          },
          heightTo: {
            ...partnerDetailsFormData.heightTo,
            value: partnerDetailsFormData.heightTo.options.find((item: any) => item.id == customerDetails?.partnerDetails?.heightTo) || ''
          },
          familyStatus: {
            ...partnerDetailsFormData.familyStatus,
            value:
              partnerDetailsFormData.familyStatus.options.find((item: any) => item.id == customerDetails?.partnerDetails?.familyStatus) ||
              ''
          },
          interCasteMarriage: {
            ...partnerDetailsFormData.interCasteMarriage,
            value:
              partnerDetailsFormData.interCasteMarriage.options.find(
                (item: any) => item.id == customerDetails?.partnerDetails?.readyForInterCasteMarriage
              ) || ''
          },
          interReligion: {
            ...partnerDetailsFormData.interReligion,
            value:
              partnerDetailsFormData.interReligion.options.find(
                (item: any) => item.id == customerDetails?.partnerDetails?.marryInterReligionParentsChild
              ) || ''
          },
          interCasteChild: {
            ...partnerDetailsFormData.interCasteChild,
            value:
              partnerDetailsFormData.interCasteChild.options.find(
                (item: any) => item.id == customerDetails?.partnerDetails?.marryInterCasteParentsChild
              ) || ''
          },
          caste: {
            ...partnerDetailsFormData.caste,
            value: partnerDetailsFormData.caste.options.find((item: any) => item.id == customerDetails?.partnerDetails?.caste) || ''
          },
          subCaste: {
            ...partnerDetailsFormData.subCaste,
            options: subCasteList,
            value: subCasteList.find((item: any) => item.id == customerDetails?.partnerDetails?.subCaste) || ''
          },
          khujaDhosam: {
            ...partnerDetailsFormData.khujaDhosam,
            value:
              partnerDetailsFormData.khujaDhosam.options.find((item: any) => item.id == customerDetails?.partnerDetails?.khujaDhosham) || ''
          },
          complexion: {
            ...partnerDetailsFormData.complexion,
            value:
              partnerDetailsFormData.complexion.options.find((item: any) => item.id == customerDetails?.partnerDetails?.complexion) || ''
          },
          smoke: {
            ...partnerDetailsFormData.smoke,
            value: partnerDetailsFormData.smoke.options.find((item: any) => item.id == customerDetails?.partnerDetails?.smoke) || ''
          },
          drink: {
            ...partnerDetailsFormData.drink,
            value: partnerDetailsFormData.drink.options.find((item: any) => item.id == customerDetails?.partnerDetails?.drink) || ''
          },
          education: {
            ...partnerDetailsFormData.education,
            value: partnerDetailsFormData.education.options.find((item: any) => item.id == customerDetails?.partnerDetails?.education) || ''
          },
          profession: {
            ...partnerDetailsFormData.profession,
            value:
              partnerDetailsFormData.profession.options.find((item: any) => item.id == customerDetails?.partnerDetails?.profession) || ''
          },
          passport: {
            ...partnerDetailsFormData.passport,
            value: partnerDetailsFormData.passport.options.find((item: any) => item.id == customerDetails?.partnerDetails?.passport) || ''
          },
          profilePicture: {
            ...partnerDetailsFormData.profilePicture,
            value: customerDetails?.partnerDetails?.profilePicture || []
          }
        });
      }
    }
  }
};

export const personalDetailsDropdowns = async (setPersonalDetailsFormData: any) => {
  let religionRes = await religionList({ meta: true });
  if (religionRes.status) {
    if (religionRes.data.length > 0) {
      religionRes = religionRes.data.map((item: any) => ({ id: item.id, label: item.religionName }));
    }
  }

  let casteRes = await listcaste({ meta: true });
  if (casteRes.status) {
    if (casteRes.data.length > 0) {
      casteRes = casteRes.data.map((item: any) => ({ id: item.id, label: item.castName }));
    }
  }

  let branchRes = await branchesList({ meta: true });
  if (branchRes.status) {
    if (branchRes.data.length > 0) {
      branchRes = branchRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let sourceRes = await sourceList({ meta: true });
  if (sourceRes.status) {
    if (sourceRes.data.length > 0) {
      sourceRes = sourceRes.data.map((item: any) => ({ id: item.id, label: item.sourceName }));
    }
  }

  let starRes = await startList({ meta: true });
  if (starRes.status) {
    if (starRes.data.length > 0) {
      starRes = starRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let moonsignres = await moonsignList({ meta: true });
  if (moonsignres.status) {
    if (moonsignres.data.length > 0) {
      moonsignres = moonsignres.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let mothertongueRes = await mothertongueList({ meta: true });
  if (mothertongueRes.status) {
    if (mothertongueRes.data.length > 0) {
      mothertongueRes = mothertongueRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let musicRes = await musicList({ meta: true });
  if (musicRes.status) {
    if (musicRes.data.length > 0) {
      musicRes = musicRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let sportsres = await sportsList({ meta: true });
  if (sportsres.status) {
    if (sportsres.data.length > 0) {
      sportsres = sportsres.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let cuisineRes = await cuisineList({ meta: true });
  if (cuisineRes.status) {
    if (cuisineRes.data.length > 0) {
      cuisineRes = cuisineRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let readsres = await readsList({ meta: true });
  if (readsres.status) {
    if (readsres.data.length > 0) {
      readsres = readsres.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let moviesRes = await moviesList({ meta: true });
  if (moviesRes.status) {
    if (moviesRes.data.length > 0) {
      moviesRes = moviesRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let dressstyleRes = await dressstyleList({ meta: true });
  if (dressstyleRes.status) {
    if (dressstyleRes.data.length > 0) {
      dressstyleRes = dressstyleRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let applicationforRes = await applicationforList({ meta: true });
  if (applicationforRes.status) {
    if (applicationforRes.data.length > 0) {
      applicationforRes = applicationforRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let hobbiesRes = await listHobbies({ meta: true });
  if (hobbiesRes.status) {
    if (hobbiesRes.data.length > 0) {
      hobbiesRes = hobbiesRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let interestsRes = await listInterests({ meta: true });
  if (interestsRes.status) {
    if (interestsRes.data.length > 0) {
      interestsRes = interestsRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let countryRes = await countryList({ meta: true });
  if (countryRes.status) {
    if (countryRes.data.length > 0) {
      countryRes = countryRes.data.map((item: any) => ({ id: item.id, label: item.countryName }));
    }
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
};

export const educationDetailsDropdowns = async (setEducationDetailsFormData: any) => {
  let educationRes = await listEducation({ meta: true });
  if (educationRes.status) {
    if (educationRes.data.length > 0) {
      educationRes = educationRes.data.map((item: any) => ({ id: item.id, label: item.educationName }));
    }
  }

  let universitiesRes = await listUniversitys({ meta: true });
  if (universitiesRes.status) {
    if (universitiesRes.data.length > 0) {
      universitiesRes = universitiesRes.data.map((item: any) => ({ id: item.id, label: item.univercityName }));
    }
  }

  let employedInRes = await listEmployedIn({ meta: true });
  if (employedInRes.status) {
    if (employedInRes.data.length > 0) {
      employedInRes = employedInRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let designationRes = await listDesingation({ meta: true });
  if (designationRes.status) {
    if (designationRes.data.length > 0) {
      designationRes = designationRes.data.map((item: any) => ({ id: item.id, label: item.designationName }));
    }
  }

  let professionRes = await listProfession({ meta: true });
  if (professionRes.status) {
    if (professionRes.data.length > 0) {
      professionRes = professionRes.data.map((item: any) => ({ id: item.id, label: item.professionName }));
    }
  }

  let countryRes = await countryList({ meta: true });
  if (countryRes.status) {
    if (countryRes.data.length > 0) {
      countryRes = countryRes.data.map((item: any) => ({ id: item.id, label: item.countryName }));
    }
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
};

export const familyDetailsDropdowns = async (setFamilyDetailsFormData: any) => {
  let familyStatusRes = await listFamilyStatus({ meta: true });
  if (familyStatusRes.status) {
    if (familyStatusRes.data.length > 0) {
      familyStatusRes = familyStatusRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let familyTypeRes = await listFamilyType({ meta: true });
  if (familyTypeRes.status) {
    if (familyTypeRes.data.length > 0) {
      familyTypeRes = familyTypeRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let relationRes = await listRelation({ meta: true });
  if (relationRes.status) {
    if (relationRes.data.length > 0) {
      relationRes = relationRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let religionRes = await listReligion({ meta: true });
  if (religionRes.status) {
    if (religionRes.data.length > 0) {
      religionRes = religionRes.data.map((item: any) => ({ id: item.id, label: item.religionName }));
    }
  }

  let casteRes = await listcaste({ meta: true });
  if (casteRes.status) {
    if (casteRes.data.length > 0) {
      casteRes = casteRes.data.map((item: any) => ({ id: item.id, label: item.castName }));
    }
  }

  let healthConditionRes = await listHealthCondition({ meta: true });
  if (healthConditionRes.status) {
    if (healthConditionRes.data.length > 0) {
      healthConditionRes = healthConditionRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let professionList = await listProfession({ meta: true });
  if (professionList.status) {
    if (professionList.data.length > 0) {
      professionList = professionList.data.map((item: any) => ({ id: item.id, label: item.professionName }));
    }
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
};

export const partnerDetailsDropdowns = async (setPartnerDetailsFormData: any) => {
  let lookingForRes = await listLookingfor({ meta: true });
  if (lookingForRes.status) {
    if (lookingForRes.data.length > 0) {
      lookingForRes = lookingForRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let familyStatusRes = await listFamilyStatus({ meta: true });
  if (familyStatusRes.status) {
    if (familyStatusRes.data.length > 0) {
      familyStatusRes = familyStatusRes.data.map((item: any) => ({ id: item.id, label: item.name }));
    }
  }

  let educationRes = await listEducation({ meta: true });
  if (educationRes.status) {
    if (educationRes.data.length > 0) {
      educationRes = educationRes.data.map((item: any) => ({ id: item.id, label: item.educationName }));
    }
  }

  let professionRes = await listProfession({ meta: true });
  if (professionRes.status) {
    if (professionRes.data.length > 0) {
      professionRes = professionRes.data.map((item: any) => ({ id: item.id, label: item.professionName }));
    }
  }

  let casteRes = await listcaste({ meta: true });
  if (casteRes.status) {
    if (casteRes.data.length > 0) {
      casteRes = casteRes.data.map((item: any) => ({ id: item.id, label: item.castName }));
    }
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
};
