import React from 'react';
import { TextField, Grid } from '@mui/material';

interface InputProps {
  inputProps: {
    label: any;
    id: any;
    name: any;
    type?: any;
    placeholder?: any | undefined;
    value: any;
    error?: boolean | undefined;
    helperText?: any | undefined;
    mandatory?: boolean | undefined;
    multiline?: boolean | undefined;
    rows?: number | undefined;
  };
  onChange: (name: any, value: any) => void;
}

const CommonInputField: React.FC<InputProps> = ({ inputProps, onChange }) => {
  const { label, id, name, type, placeholder, value, error, helperText, mandatory, multiline, rows } = inputProps;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    
      <TextField
        label={label}
        multiline={ multiline ? true : false }
        rows={multiline ? rows : 1}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        sx={{ maxWidth: 'auto' }}
        fullWidth
        required={mandatory}
        error={error}
        helperText={error ? helperText : ''}
      />
    
  );
};

export default CommonInputField;
