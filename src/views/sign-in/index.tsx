import { Box, Button, Input } from '@mui/material';
import { useState } from 'react';
import { loginUser } from '../../hooks/use-auth/index.actions';

export interface SignInInputs {
  email: string;
  password: string;
}

const SignIn = () => {


  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = () => {
    loginUser({
      email: email,
      password: password
    });
  };

  return (
    <Box component='main' sx={{ display: 'flex', flexDirection: 'column', gap: '10', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw' }}>
      <Input type='email' name='email' onChange={(e) => setEmail(() => e.target.value)} value={email} />
      <Input type='password' name='password' onChange={(e) => setPassword(() => e.target.value)} value={password} />
      <Button onClick={handleSubmit} >Logare</Button>
    </Box >
  )
};

export default SignIn;
