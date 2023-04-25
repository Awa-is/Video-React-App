import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Stack,
  HStack,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'14'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe To Get Updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2px'}>
            <Input
              placeholder="Enter Email Here"
              color={'white'}
              focusBorderColor="none"
              borderColor={'black'}
            />
            <Button
              p={'0'}
              color={'grey'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20px'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none ', '1px solid white']}
          borderRight={['none ', '1px solid white']}
        >
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>ALL RIGHT RESERVED</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>Social Media</Heading>
          <Button variant={'link'} colorScheme="white">
            <a target='blank' href="https://youtube.com">YouTube</a>
          </Button>

          <Button variant={'link'} colorScheme="white">
            <a target='blank' href="https://Linkedin.com">Linkedin</a>
          </Button>

          <Button variant={'link'} colorScheme="white">
            <a target='blank' href="https://github.com">GitHub</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default footer;
