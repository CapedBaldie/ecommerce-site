import React from 'react';
import {
  ChakraProvider,
  Box,
  Divider,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Map from './Components/Map';
import Homepg from './Components/Home';
import Product from './Components/Product';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        /*textAlign="center"*/ fontSize='xl'
        bg='white'
        height='100vh' /*pt='5px'*/
      >
        <Navbar />
        <Homepg />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
