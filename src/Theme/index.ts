import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Akrobat',
    body: 'Akrobat',
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: '1400px',
      },
    },
  },
});

export default theme;
