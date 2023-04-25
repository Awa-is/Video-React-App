import React from 'react';
import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import { transform } from 'framer-motion';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={2}
          w={'fit-content'}
          borderBottom={'2px'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={''} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4' , '16']} textAlign={'center'} >
            {' '}
            These services can include online gaming platforms such as Steam,
            Twitch, or PlayStation Network, which enable users to play games
            with friends or strangers around the world. Gaming services also
            offer a variety of features that enhance the gaming experience, such
            as multiplayer matchmaking, in-game chat and messaging, live
            streaming, and social media integration. Additionally, gaming
            services may provide access to gaming communities, forums, and
            user-generated content that allow gamers to connect with like-minded
            individuals, share tips and strategies, and showcase their gaming
            skills. As the gaming industry continues to grow, gaming services
            are becoming increasingly popular and essential for many gamers,
            offering them an exciting and dynamic way to interact with others
            and enjoy their favorite games.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={'1000'}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
        {' '}
        Watch the Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
        {' '}
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'black'} {...headingOption}>
        {' '}
        Game to Earn Money
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOption}>
        {' '}
        Night Life is Dump
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
