import { Button, TextField, Typography, Box, Container } from '@mui/material';
import { z } from 'zod';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { postRegisterNewUser } from '../../services/registerService';
interface RegisterFormProps {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

const initialFormValues: RegisterFormProps = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
};

const registerFormSchema = z
  .object({
    email: z.string().email().max(255),
    password: z.string().min(6),
    confirmPassword: z.string(),
    firstName: z.string().max(30),
    lastName: z.string().max(30),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const RegisterForm: React.FC = () => {
  const [formValues, setFormValues] =
    useState<RegisterFormProps>(initialFormValues);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { confirmPassword, ...validatedData } =
        registerFormSchema.parse(formValues);
      await postRegisterNewUser(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationErrors = error.errors.map((err) => err.message);
        setErrors(validationErrors);
      } else {
        setErrors(['Error registering new user']);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Create new Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="First Name"
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Last Name"
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {errors.map((error, index) => (
            <Alert severity="error" key={index}>
              {error}
            </Alert>
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
