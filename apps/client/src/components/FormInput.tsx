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
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
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
        ></TextField>
      </div>
    </div>
  );
};

export default FormInput;
