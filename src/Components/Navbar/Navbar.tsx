import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Link, Flex, Spacer, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

const navbarLinks = [
  {
    title: 'Mission',
    link: '/#mission',
  },
  {
    title: 'Portfolio',
    link: '/#portfolio',
  },
  {
    title: 'Team',
    link: '/#team',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

const Navbar: React.FC = () => (
  <Flex direction="row" as="header" p={4} alignItems="center" position="absolute" w="100vw">
    <Box>
      <StaticImage src="../../Images/nyvp-logo.png" alt="NYVP Logo" height={60} />
    </Box>
    <Spacer />
    <Flex direction="row" as="nav">
      {navbarLinks.map(({ title, link }) => (
        <Link to={link} px={8} key={title + link} as={GatsbyLink}>
          <Text fontSize="large" textTransform="uppercase" fontWeight="semibold">
            {title}
          </Text>
        </Link>
      ))}
    </Flex>
  </Flex>
);

export default Navbar;
