import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const HomeBanner: React.FC = () => {
  const {
    contentfulHomePage: { bannerTitle, bannerSubtitle },
  } = useStaticQuery(graphql`
    query Banner {
      contentfulHomePage {
        bannerTitle
        bannerSubtitle
      }
    }
  `);

  return (
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
          {bannerTitle}
        </Heading>
        <Heading as="h3" textAlign="center" size="md" mt={4}>
          {bannerSubtitle}
        </Heading>
      </Box>
    </Box>
  );
};

export default HomeBanner;
