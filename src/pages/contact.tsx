import React from 'react';
import { PageWrapper } from '../Components';
import { Box, Container, Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';
import { graphql, useStaticQuery } from 'gatsby';

const ContactPage: React.FC = () => {
  const {
    contentfulContactPage: {
      intro,
      prelude: { prelude },
      requirements,
    },
  } = useStaticQuery(graphql`
    query Contact {
      contentfulContactPage {
        intro
        prelude {
          prelude
        }
        requirements
      }
    }
  `);
  return (
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
          <Heading size="3xl" textAlign="center" color="white" as="h1">
            Contact
          </Heading>
        </Flex>
        <Container pt={8}>
          <Text>{intro}</Text>
          <Heading my={4} size="2xl" fontWeight="bold">
            BEFORE SENDING YOUR PITCH...
          </Heading>
          <Text>{prelude}</Text>
          <UnorderedList>
            {requirements.map((r: string, i: number) => (
              <ListItem key={r + i}>{r}</ListItem>
            ))}
          </UnorderedList>
        </Container>
      </Box>
    </PageWrapper>
  );
};

export default ContactPage;
