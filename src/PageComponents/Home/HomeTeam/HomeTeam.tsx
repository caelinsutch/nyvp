import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { PersonSection } from './Components';
import { graphql, useStaticQuery } from 'gatsby';

const HomeTeam: React.FC = () => {
  const {
    brian,
    trace,
    contentfulHomePage: { teamMembers },
  } = useStaticQuery(
    graphql`
      query HomeTeam {
        contentfulHomePage {
          teamMembers {
            name
            title
            description {
              description
            }
            photo {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
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
      {teamMembers.map(({ name, title, description: { description }, photo: { gatsbyImageData } }: any, i: number) => (
        <PersonSection
          key={name + title}
          name={name}
          title={title}
          bio={description}
          image={gatsbyImageData}
          side={i % 2 === 0 ? 'left' : 'right'}
          color={i % 2 === 0 ? 'yellow.300' : 'orange.300'}
        />
      ))}
    </Box>
  );
};

export default HomeTeam;
