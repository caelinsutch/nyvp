import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './RootWrapper.css';
import theme from '../../Theme';

const RootWrapper: React.FC = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>;

export default RootWrapper;
