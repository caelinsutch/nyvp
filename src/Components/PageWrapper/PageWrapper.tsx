import React from 'react';
import { Box } from '@chakra-ui/react';

const PageWrapper: React.FC = ({ children }) => (
  <>
    <Box as="main">{children}</Box>
  </>
);

export default PageWrapper;
