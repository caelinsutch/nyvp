import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { PersonSection } from './Components';
import { graphql, useStaticQuery } from 'gatsby';

const HomeTeam: React.FC = () => {
  const { brian, trace } = useStaticQuery(
    graphql`
      query Photos {
        brian: imageSharp(fluid: { originalName: { eq: "brian.png" } }) {
          gatsbyImageData(quality: 100)
        }
        trace: imageSharp(fluid: { originalName: { eq: "trace.png" } }) {
          gatsbyImageData(quality: 100)
        }
      }
    `,
  );

  return (
    <Box minH="100vh" py={16}>
      <Heading as="h2" size="3xl" textAlign="center">
        MEET THE TEAM
      </Heading>
      <PersonSection
        name="Brian Cohen"
        title="Founding Partner"
        bio="Brian has over 40 years experience in entrepreneurship with a focus on technology. Considered one of the
            pioneers of science and technology strategic communications, he founded Technology Solutions, Inc. with his
            wife in 1983. Currently, he is the chairman of the New York Angels. He is author of the book, “What Every
            Angel Investor Wants You to Know.”"
        image={brian.gatsbyImageData}
        color="yellow.300"
      />
      <PersonSection
        side="right"
        name="Trace Cohen"
        title="Managing Director"
        bio="Trace Cohen is currently pursuing an MBA at Columbia Business School and is a serial entrepreneur in NYC and
            founder of three companies - SPOT (app), Launch.it and Brandyourself.com. He graduated from the Martin J.
            Whitman School of Management at Syracuse University with a double major in Entrepreneurship and Marketing."
        image={trace.gatsbyImageData}
        color="orange.300"
      />
    </Box>
  );
};

export default HomeTeam;
