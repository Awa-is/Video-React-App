import { Button, Container, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form>
            <VStack alignItems={'stretch'} spacing={"8"} w={['full','96']} m={'auto'}>

                <Heading textAlign={'center'}>Welcome Back</Heading>
                <Input required placeholder='Email' type='email' focusBorderColor='purple.500'></Input>
                <Input required placeholder='Password' type='password' focusBorderColor='purple.500'></Input>
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to = {'/forget password'}>Forget Password</Link>
                </Button>
            <Button colorScheme='purple' type='submit'>Log In</Button>

            <Text textAlign={'right'} >New User? {'  '}
            <Link to = {'/signup'} colorScheme='purple'>Sign Up</Link>
</Text>
            </VStack>
        </form>
    </Container>
  )
}

export default login