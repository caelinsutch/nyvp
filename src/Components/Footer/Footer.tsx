import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer: React.FC = () => (
  <Box backgroundColor="gray.900" width="100%" p={8}>
    <Flex direction="row">
      <StaticImage src="../../Images/logo-white.png" alt="NYVP Logo" height={80} />
      <Box ml={20}>
        <Heading size="md" color="white">
          Contact
        </Heading>
        <Text mt={4} color="white">
          t@nyvp.com
        </Text>
      </Box>
    </Flex>
    <Text mt={14} color="white" fontSize="xs">
      New Yor, Venture Partners, LLC 2018
    </Text>
  </Box>
);

export default Footer;
