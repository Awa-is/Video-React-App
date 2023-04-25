import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {

    const videoArr = [
    ' https://vimeo.com/staff?embedded=true&source=owner_portrait&owner=152184',
    'https://vimeo.com/391097717?embedded=false&source=video_title&owner=152184',
    'https://www.youtube.com/embed/ly36kn0ug4k',
    'https://www.youtube.com/embed/ly36kn0ug4k',
    'https://www.youtube.com/embed/ly36kn0ug4k',
    'https://www.youtube.com/embed/ly36kn0ug4k',
    'https://www.youtube.com/embed/ly36kn0ug4k',
    ]

const [videoSrc, setvideoSrc] = useState(videoArr[0]);

  return (
   <Stack direction={['column' , 'row']} h={'100vh'}>
    <VStack w={'full'}>
        <video controls controlsList='nodownload' src={videoSrc} style={{width : '100%',}}></video>

        <VStack>
            <Heading>Sample Video</Heading>
            <Text>This is a sample video for texting and demo</Text>
        </VStack>
    </VStack>

    <VStack w={["full" , 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
        {videoArr.map((item,index) => (
        <Button variant={'ghost'} colorScheme='purple'> Lecture {index + 1}</Button>

        ))}
    </VStack>
   </Stack>
  )
}

export default Videos;