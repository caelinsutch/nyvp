import Navbar from '../Navbar';
import React from 'react';
import { Box } from '@chakra-ui/react';

const PageWrapper: React.FC = ({ children }) => (
  <>
    <Navbar />
    <Box as="main">{children}</Box>
  </>
);

export default PageWrapper;
