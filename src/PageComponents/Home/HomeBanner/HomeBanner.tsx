import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const HomeBanner: React.FC = () => (
  <Box
    mx="auto"
    backgroundImage={'url("/images/city-top.svg")'}
    backgroundPosition="bottom"
    backgroundSize="contain"
    minH="100vh"
    backgroundRepeat="no-repeat"
  >
    <Box pt="20vh">
      <Heading as="h1" textAlign="center" size="3xl">
        Join us on a Venture
      </Heading>
      <Heading as="h3" textAlign="center" size="md" mt={4}>
        NYVP is a seed stage venture capital firm dedicated to the entrepreneur
      </Heading>
    </Box>
  </Box>
);

export default HomeBanner;
