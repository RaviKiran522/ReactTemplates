import React from 'react';
import { TextField } from '@mui/material';

interface TextAreaProps {
  inputProps: {
    label: any;
    id: any;
    name: any;
    placeholder?: any | undefined;
    value: any;
    error?: boolean | undefined;
    helperText?: any | undefined;
    mandatory?: boolean | undefined;
    rows?: number;
  };
  onChange: (name: any, value: any) => void;
}

const CommonTextAreaField: React.FC<TextAreaProps> = ({ inputProps, onChange }) => {
  const { label, id, name, placeholder, value, error, helperText, mandatory, rows } = inputProps;

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <TextField
      label={label}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChanges}
      fullWidth
      required={mandatory}
      error={error}
      helperText={error ? helperText : ''}
      multiline
      rows={rows || 4}
    />
  );
};

export default CommonTextAreaField;