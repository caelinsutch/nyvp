import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';

type PersonSectionProps = {
  side?: 'left' | 'right';
  name: string;
  title: string;
  bio: string;
  image: any;
  color: string;
};

const PersonSection: React.FC<PersonSectionProps> = ({ color, side = 'left', name, title, bio, image }) => (
  <Box position="relative" mt={16} display="flex" flexDirection={side === 'left' ? 'row' : 'row-reverse'}>
    <Box
      position="absolute"
      top={10}
      backgroundColor={color}
      right={side === 'left' ? undefined : 0}
      width="45vw"
      height="120px"
      borderLeftRadius={side === 'right' ? 30 : undefined}
      borderRightRadius={side === 'left' ? 30 : undefined}
    />
    <Box
      paddingLeft={side === 'left' ? { md: 24 } : undefined}
      paddingRight={side === 'right' ? { md: 24 } : undefined}
    >
      <GatsbyImage image={image} alt="Team photo" style={{ borderRadius: '30px' }} />
    </Box>
    <Box
      position="absolute"
      bottom={-2}
      backgroundColor="#24232E"
      borderRadius={30}
      left={side === 'left' ? '35vw' : undefined}
      right={side === 'right' ? '35vw' : undefined}
      p={8}
    >
      <Heading textTransform="uppercase" size="2xl" as="h3" color="white">
        {name}
      </Heading>
      <Text fontSize="xl" color="white" mt={2}>
        {title}
      </Text>
      <Text color="white" maxWidth="550px" mt={4}>
        {bio}
      </Text>
    </Box>
  </Box>
);

export default PersonSection;
