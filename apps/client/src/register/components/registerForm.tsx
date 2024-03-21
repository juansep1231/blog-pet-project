import { Button } from '@mui/material';
import FormInput from '../../components/FormInput';
import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
    // Check if confirm password matches the new password
    if (confirmPassword && confirmPassword !== newPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    if (password !== newConfirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };
  return (
    <div className="flex justify-center h-screen pt-14 bg-neutral-100">
      <div className="flex flex-col items-center justify-center border bg-white rounded  w-96 h-[650px] gap-5 py-8">
        <div>
          <h1 className="text-2xl text-gray-700">Create new Account</h1>
        </div>
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <FormInput
              required={true}
              label="Name"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your name"
            />

            <FormInput
              required={true}
              label="Last Name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your name"
            />

            <FormInput
              required={true}
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <FormInput
              required={true}
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              helperText={passwordError}
              error={passwordError.length > 0}
            />
            <FormInput
              required={true}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Enter your password again"
              helperText={confirmPasswordError}
              error={confirmPasswordError.length > 0}
            />
          </div>

          <div className="flex justify-center">
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
