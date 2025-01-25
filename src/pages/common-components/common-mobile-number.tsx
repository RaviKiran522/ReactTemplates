import React, { useState } from 'react';
import { FormHelperText, FormLabel } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import _ from 'lodash';
import { borderRadius } from '@mui/system';

interface PhoneNumberFieldProps {
  inputProps: {
    name: string;
    id: string;
    label: string;
    type: string;
    error: boolean;
    helperText: string;
    mandatory: boolean;
    countryCode: string;
    value: string;
    options?: any[];
  };
  onChange: (name: string, value: string, country: any) => void;
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({ inputProps, onChange }) => {
  const { name, label, error, helperText, mandatory, countryCode, value } = inputProps;

  // Mapping country code (e.g. +91) to country ISO code (e.g. 'in' for India)
  const countryMapping: Record<string, string> = {
    '+1': 'us', // United States
    '+44': 'gb', // United Kingdom
    '+91': 'in', // India
    '+61': 'au', // Australia
    '+81': 'jp', // Japan
    '+33': 'fr', // France
    '+49': 'de', // Germany
    '+39': 'it', // Italy
    '+34': 'es', // Spain
    '+55': 'br', // Brazil
    '+20': 'eg', // Egypt
    '+27': 'za', // South Africa
    '+7': 'ru', // Russia
    '+52': 'mx', // Mexico
    '+66': 'th', // Thailand
    '+82': 'kr', // South Korea
    '+32': 'be', // Belgium
    '+31': 'nl', // Netherlands
    '+90': 'tr', // Turkey
    '+92': 'pk', // Pakistan
    '+353': 'ie', // Ireland
    '+54': 'ar', // Argentina
    '+53': 'cu', // Cuba
    '+56': 'cl', // Chile
    '+48': 'pl', // Poland
    '+968': 'om', // Oman
    '+420': 'cz', // Czech Republic
    '+356': 'mt', // Malta
    '+234': 'ng', // Nigeria
    '+971': 'ae', // United Arab Emirates
    '+998': 'uz', // Uzbekistan
    '+856': 'la', // Laos
    '+212': 'ma', // Morocco
    '+855': 'kh', // Cambodia
    '+506': 'cr', // Costa Rica
    '+507': 'pa', // Panama
    '+598': 'uy', // Uruguay
    '+264': 'na', // Namibia
    '+960': 'mv', // Maldives
    '+266': 'ls', // Lesotho
    '+250': 'rw', // Rwanda
    '+233': 'gh', // Ghana
    '+370': 'lt', // Lithuania
    '+352': 'lu' // Luxembourg
  };

  // Extract the country ISO code based on the provided countryCode
  const countryIsoCode = countryMapping[countryCode] || 'us'; // Default to 'us' if not found

  return (
    <div>
      {label && <FormLabel required={mandatory}>{label}</FormLabel>}

      <PhoneInput
        country={countryIsoCode} // Use ISO code (e.g., 'in' for India)
        placeholder="Enter your phone number" // Placeholder text    value={value}  // Phone number only (without country code)
        onChange={(phone, country) => onChange(name, phone, country)}
        countryCodeEditable={false}
        enableSearch={true}
        inputProps={{
          name,
          required: mandatory,
          placeholder: "Enter phone number",
          style: {
            width: '100%', // full width of the container
            height: '48px', // increased height
            borderRadius: '5px',
            
          }
        }}
      />

      {error && <FormHelperText style={{ color: 'red' }}>{helperText}</FormHelperText>}
    </div>
  );
};

export default PhoneNumberField;
