import axios from 'axios';

export const postRegisterNewUser = async (data: any) => {
  const response = await axios.post(
    'http://localhost:3000/api/v1/register',
    data
  );

  if (response.status !== 200) {
    throw new Error('Error registering new user');
  }
};
