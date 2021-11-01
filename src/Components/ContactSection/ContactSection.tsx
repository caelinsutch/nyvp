import React from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';

const ContactSection: React.FC = () => (
  <Box
    backgroundImage={'url("/images/contactBackground.svg")'}
    backgroundPosition="top"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    display="flex"
    width="100%"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    height={400}
  >
    <Heading size="3xl" color="white" textAlign="center">
      Get in Touch
    </Heading>
    <Box mt={2} borderRadius={2} backgroundColor="orange.400" height={2} width={300} />
    <Button colorScheme="orange" mt={6} backgroundColor="orange.400">
      Contact Us!
    </Button>
  </Box>
);

export default ContactSection;
