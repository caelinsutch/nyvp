import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const HomeMission: React.FC = () => (
  <Box
    backgroundColor="#24232E"
    backgroundImage={'url("/images/city-bottom.svg")'}
    backgroundPosition="top"
    minH="100vh"
    backgroundRepeat="no-repeat"
    backgroundSize="contain"
  >
    <Container maxW="1400px" px={8} height="100vh" display="flex" flexDirection="column" justifyContent="center">
      <Box pt="20vh" color="white">
        <Heading
          as="h2"
          size="3xl"
          paddingBottom="2px"
          textDecoration="underline orange solid"
          textUnderlineOffset="8px"
        >
          WE INVEST IN PEOPLE,
        </Heading>
        <Heading as="h2" size="3xl" mt={4} textDecoration="underline orange solid" textUnderlineOffset="8px">
          NOT DEALS.
        </Heading>
        <Text color="white" mt={16} maxW="800px" fontSize="lg">
          We believe in the importance of creating in-depth relationships with founders, relating an entrepreneur's real
          life to the startup, and recognizing that real success is celebrating small victories along the way.
        </Text>
      </Box>
    </Container>
  </Box>
);

export default HomeMission;
