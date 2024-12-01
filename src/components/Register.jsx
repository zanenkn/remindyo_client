import { useState } from 'react';

import { Box, Button, Fieldset, Input, Heading, Link, Container } from "@chakra-ui/react"
import axios from 'axios';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Field } from "@ui/field"
import { PasswordInput } from '@ui/password-input';
import { toaster } from '@ui/toaster';

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { email, password });
      toaster.create({
        title: "Successful registration: you can log in now!",
        type: 'success',
      })
      navigate('/login')
    } catch (error) {
      toaster.create({
        title: `Could not register: ${error.response.data.message}`,
        type: 'error',
      })
    }
  };

  return (
    <Box bg="primary.200" w='100vw' h='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={[5, 0]}>
      <Box shadow="md" p={[5, 10]} w={['100%', 'md']} bg="white">
        <Container>
          <Container mb={4}>
            <Fieldset.Root>
              <Heading textAlign={'center'}>
                Register
              </Heading>
              <Fieldset.Content>
                <Field label="Email">
                  <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>

                <Field label="Password">
                  <PasswordInput
                    name="password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Field>
              </Fieldset.Content>

              <Button type="submit" alignSelf="center" onClick={handleSubmit}>
                Register
              </Button>
            </Fieldset.Root>
          </Container>
          <Container display='flex' justifyContent='center'>
            <Link as={RouterLink} to="/login" textAlign="center">Already have an account? Click here to log in.</Link>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default Register;
