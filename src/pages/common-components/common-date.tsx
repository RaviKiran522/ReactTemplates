// import React from 'react';
// import { TextField, FormControl, InputLabel, FormHelperText } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// interface DateInputProps {
//   inputProps: {
//     label: any;
//     id: any;
//     name: any;
//     value: any; // The value can be a Date object or a string.
//     error?: boolean;
//     helperText?: any;
//     mandatory?: boolean;
//   };
//   onDateChange: (name: any, value: any) => void;
// }

// const CommonDatePicker: React.FC<DateInputProps> = ({ inputProps, onDateChange }) => {
//   const { label, id, name, value, error, helperText, mandatory } = inputProps;

//   // Function to format the date to dd/mm/yyyy
//   const formatDate = (date: Date | string | null) => {
//     if (date instanceof Date) {
//       const day = date.getDate().toString().padStart(2, '0');
//       const month = (date.getMonth() + 1).toString().padStart(2, '0');
//       const year = date.getFullYear();
//       return `${day}/${month}/${year}`;
//     }
//     return '';
//   };

//   const handleDateChange = (newDate: Date | null) => {
//     // If no date is selected, update with null or empty string
//     onDateChange(name, newDate || ''); // Pass empty string or the selected Date
//   };

//   return (
//     <FormControl fullWidth error={error} required={mandatory}>
//       {/* <InputLabel>{label}</InputLabel> */}
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <DatePicker
//           label={label}
//           value={value instanceof Date ? value : null} // If value is empty or invalid, show null
//           onChange={handleDateChange}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               id={id}
//               name={name}
//               value={formatDate(value instanceof Date ? value : null)} // Format the value as dd/mm/yyyy
//               error={error}
//               helperText={helperText && error ? helperText : ''}
//             />
//           )}
//         />
//       </LocalizationProvider>
//     </FormControl>
//   );
// };

// export default CommonDatePicker;
