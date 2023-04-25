import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
        >
          <Heading textAlign={'center'}>Video Hub </Heading>

          <Avatar  alignSelf={'center'}/>

          <Input
            required
            placeholder="Name"
            type="Name"
            focusBorderColor="purple.500"
          ></Input>
          <Input
            required
            placeholder="Email"
            type="email"
            focusBorderColor="purple.500"
          ></Input>
          <Input
            required
            placeholder="Password"
            type="password"
            focusBorderColor="purple.500"
          ></Input>

          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Sign Up? {'  '}
            <Link to={'/login'} colorScheme="purple">
              Log In
            </Link>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default signup;
