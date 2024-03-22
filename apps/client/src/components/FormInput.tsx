import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  helperText,
  error = false,
}) => {
  return (
    <div className="">
      <div>
        <TextField
          required={required}
          label={label}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          helperText={helperText}
          error={error}
        ></TextField>
      </div>
    </div>
  );
};

export default FormInput;
