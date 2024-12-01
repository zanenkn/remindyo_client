import { useState, useContext } from 'react';

import { Box, Button, Fieldset, Input, AbsoluteCenter, Heading, Link, Container } from "@chakra-ui/react"
import { useNavigate, Link as RouterLink } from 'react-router-dom';

import { AuthContext } from '@context/AuthContext';
import { Field } from "@ui/field"

const Login = () => {
  const navigate = useNavigate()

  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/')
    } catch {
      // TODO: add toast
    }
  };

  return (
    <Box bg="primary.600" w='100vw' h='100vh'>
      <AbsoluteCenter>
        <Box shadow="md" w="md" p="10" bg="white">
          <Container>
            <Container mb={4}>
              <Fieldset.Root size="md" maxW="md">
                <Heading textAlign={'center'}>
                  Login
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
                    <Input
                      name="password"
                      value={password}
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Field>
                </Fieldset.Content>

                <Button type="submit" alignSelf="center" onClick={handleSubmit}>
                  Login
                </Button>
              </Fieldset.Root>
            </Container>
            <Container display='flex' justifyContent='center'>
              <Link as={RouterLink} to="/register" textAlign="center">No account? Click here to register!</Link>
            </Container>
          </Container>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
};

export default Login;
