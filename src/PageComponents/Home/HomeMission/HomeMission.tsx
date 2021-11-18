import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

const HomeMission: React.FC = () => {
  const {
    contentfulHomePage: {
      missionTitle,
      missionText: { missionText },
    },
  } = useStaticQuery(graphql`
    query HomeMission {
      contentfulHomePage {
        missionTitle
        missionText {
          missionText
        }
      }
    }
  `);

  return (
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
          <Box maxWidth="500px">
            <Heading
              as="h2"
              size="3xl"
              paddingBottom="2px"
              textDecoration="underline orange solid"
              textUnderlineOffset="8px"
              lineHeight="130%"
            >
              {missionTitle}
            </Heading>
          </Box>
          <Text color="white" mt={16} maxW="800px" fontSize="lg">
            {missionText}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeMission;
