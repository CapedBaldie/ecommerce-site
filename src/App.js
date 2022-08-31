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
import { Logo } from './Logo';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Map from './Components/Map';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bg='white' height='100vh' /*pt='5px'*/>
        <Box h='10px' w='100%' bg='black'></Box>
        <Navbar />
        <Box h='5px' w='100%' bg='white'></Box>
        <Map />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
