import React from 'react';
import { PageWrapper } from '../Components';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';

const ContactPage: React.FC = () => (
  <PageWrapper>
    <Navbar />
    <Box as="section">
      <Flex
        bgColor="orange.400"
        maxH="50vh"
        height="400px"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size="3xl" textAlign="center" color="white">
          Contact
        </Heading>
      </Flex>
      <Container pt={8}>
        <Text>We are always looking for potential investments across all industries!</Text>
      </Container>
    </Box>
  </PageWrapper>
);

export default ContactPage;
