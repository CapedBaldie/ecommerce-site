import React from 'react';
import {Link as RouteLink} from "react-router-dom";
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
  Button,
  HStack,
  Stack,
  Flex,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  keyframes,
  SimpleGrid,
  Heading,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Collapse,
  Hide,
  Image,
  AspectRatio,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import hp from '../assets/img/hp8.jpg';
import jw from '../assets/img/j8.jpg';
import fsh from '../assets/img/f2.jpg';
import sp from '../assets/img/s4.jpg';
import cas from '../assets/img/cas1.jpg';
import ad1 from '../assets/img/homead.png';
import ad2 from '../assets/img/homead2.png';
import ad3 from '../assets/img/homead3.png';
import shoe from '../assets/shoe1.mp4';
import AirbnbCard from './Card';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Product from './Product';
import { useState } from 'react';


export default function Homepg() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenR,
    onOpen: onOpenR,
    onClose: onCloseR,
  } = useDisclosure();

  const [category,setCategory] = useState('');
  const [home,setHome] = useState(true);

  return (
    <Box>
    <Product
     category={category}/>
    {home && (
    <Box bg='blackAlpha.100' mb='20px'>
      <Carousel
        showArrows={true}
        autoPlay
        centerMode
        centerSlidePercentage='100'
        infiniteLoop
        interval='4000'
      >
        <Box>
          <Image objectFit='cover' minW='0px' maxW='90vw' src={ad2} alt='ad2' />
          <Box>
            <Button
              w='8vw'
              variant='ghost'
              fontWeight='semibold'
              bg='#00000000'
              borderRadius='0'
              rightIcon={<ArrowRightIcon />}
              transition='all 0.5s ease'
              _hover={{ bg: 'black', color: 'white' }}
              position='relative'
              bottom='50px'
              onClick={() => {setCategory("electronics")
                              setHome(false)}}
            >
              Show more
            </Button>
          </Box>
        </Box>
        <Box>
          <Image objectFit='cover' minW='0px' maxW='90vw' src={ad3} alt='ad3' />
          <Box>
            <Button
              w='8vw'
              variant='ghost'
              fontWeight='semibold'
              bg='#00000000'
              borderRadius='0'
              rightIcon={<ArrowRightIcon />}
              transition='all 0.5s ease'
              _hover={{ bg: 'black', color: 'white' }}
              position='relative'
              bottom='50px'
              onClick={() => {setCategory("women's clothing")
                              setHome(false)}}
            >
              Show more
            </Button>
          </Box>
        </Box>
        <Box>
          <Image objectFit='cover' minW='0px' maxW='90vw' src={ad1} alt='ad1' />
          <Box>
            <Button
              w='8vw'
              variant='ghost'
              fontWeight='semibold'
              bg='#00000000'
              borderRadius='0'
              rightIcon={<ArrowRightIcon />}
              transition='all 0.5s ease'
              _hover={{ bg: 'black', color: 'white' }}
              position='relative'
              bottom='50px'
              onClick={() => {setCategory("electronics")
                              setHome(false)}}
            >
              Show more
            </Button>
          </Box>
        </Box>
      </Carousel>

      <Divider />

      <Box>
        <Box display='flex' flexFlow='row wrap' justifyContent='space-evenly'>
          <Box
            onMouseOver={onOpen}
            onMouseLeave={onClose}
            bgImage={hp}
            bgSize='cover'
            minW='400px'
            w='49%'
            h='200px'
            overflow='auto'
          >
            <Collapse in={isOpen} animateOpacity>
              <Box
                _hover={{ backdropFilter: 'auto', backdropBlur: '8px' }}
                bg='transparent'
                pt='30px'
                px='2rem'
                w='100%'
                overflow='auto'
              >
                <Text fontWeight='bold' fontSize='30px' color='black' mb='20px'>
                  Electronics
                </Text>
                <Text color='blackAlpha.800'>
                  Browse through a range of high-quality electronic items
                  cherry-picked from some of the most popular and prestigious
                  names in the industry.
                </Text>
                <Button
                  maxW='200px'
                  my='25px'
                  variant='ghost'
                  size='md'
                  fontWeight='semibold'
                  borderRadius='0'
                  bg='#00000000'
                  rightIcon={<ArrowRightIcon />}
                  transition='all 0.5s ease'
                  _hover={{
                    /*bg: '#01FFFF',*/ boxShadow: '-7px 7px #00A8E1',
                    transform: 'scale(1.05)',
                    
                  }}
                  onClick={() => {setCategory("electronics")
                              setHome(false)}}
                >
                  Show more
                  
                </Button>
              </Box>
            </Collapse>
          </Box>
          <Box
            onMouseOver={onOpenR}
            onMouseLeave={onCloseR}
            bgImage={jw}
            bgSize='cover'
            bgRepeat='no-repeat'
            minW='400px'
            w='49%'
            h='200px'
            overflow='auto'
          >
            <Collapse in={isOpenR} animateOpacity>
              <Box
                _hover={{ backdropFilter: 'auto', backdropBlur: '8px' }}
                bg='transparent'
                pt='30px'
                px='2rem'
                w='100%'
                overflow='auto'
              >
                <Text fontWeight='bold' fontSize='30px' color='white' mb='20px'>
                  Jewellery
                </Text>
                <Text color='whiteAlpha.800'>
                  We offer the best gold & diamond jewellery designs online.
                  Check out our latest collection of rings, earrings, bangles,
                  bracelets, necklaces at best prices.
                </Text>
                <Button
                  maxW='200px'
                  my='25px'
                  variant='ghost'
                  size='md'
                  fontWeight='semibold'
                  borderRadius='0'
                  bg='#00000000'
                  color='white'
                  rightIcon={<ArrowRightIcon />}
                  transition='all 0.5s ease'
                  _hover={{
                    /*bg: '#01FFFF',*/ boxShadow: '-7px 7px white',
                    transform: 'scale(1.05)',
                  }}
                  onClick={() => {setCategory("jewelery")
                              setHome(false)}}
                >
                  Show more
                </Button>
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Box>
      <Box
        mt='20px'
        display='flex'
        flexFlow='row wrap'
        alignItems='center'
        justifyContent='space-evenly'
      >
        <Box maxW='52rem' ml='12px' display='flex' flexFlow='row wrap'>
          <Box
            m='5px'
            bg='#42e0d1'
            h='25rem'
            w='25rem'
            alignItems='center'
            display='flex'
            flexFlow='row wrap'
            justifyContent='center'
          >
            <Box align='center'>
              <Text color='black' fontSize='50px' fontWeight='bold'>
                40% OFF
              </Text>
              <Text color='white' fontStyle='oblique' fontWeight='semibold'>
                on Men's and Women's Clothing
              </Text>
            </Box>
            <Button
              ml='20px'
              maxW='200px'
              variant='ghost'
              size='md'
              fontWeight='semibold'
              borderRadius='0'
              bg='#9CFF00'
              rightIcon={<ArrowRightIcon />}
              transition='all 0.5s ease'
              _hover={{ /*bg: '#01FFFF',*/ boxShadow: '-7px 7px #007A00' }}
              onClick={() => {setCategory("men's clothing")
                              setHome(false)}}
            >
              Browse Products
            </Button>
          </Box>
          <Box m='5px' bgImage={sp} bgSize='cover' h='25rem' w='25rem'>
            <Box w='100%' h='100%' _hover={{ bg: 'blackAlpha.500' }}>
              <Link href='https://www.amazon.in/sports' _hover={{}} isExternal>
                <Button
                  maxW='200px'
                  my='25px'
                  variant='ghost'
                  size='md'
                  fontSize='20px'
                  bg='#00000000'
                  borderRadius='0'
                  transition='all 0.5s ease'
                  rightIcon={<ArrowRightIcon />}
                  _hover={{ bg: 'transparent', color: 'black' }}
                >
                  Sports
                </Button>
              </Link>
            </Box>
          </Box>
          <Box m='5px' bgImage={cas} bgSize='cover' h='25rem' w='25rem'>
            <Box w='100%' h='100%' _hover={{ bg: 'blackAlpha.500' }}>
              <Link
                href='https://www.amazon.in/Casual-Dresses/s?k=Casual+Dresses'
                _hover={{}}
                isExternal
              >
                <Button
                  maxW='200px'
                  my='25px'
                  variant='ghost'
                  size='md'
                  fontSize='20px'
                  bg='#00000000'
                  borderRadius='0'
                  transition='all 0.5s ease'
                  rightIcon={<ArrowRightIcon />}
                  _hover={{ bg: 'transparent', color: 'black' }}
                >
                  Casuals
                </Button>
              </Link>
            </Box>
          </Box>
          <Box m='5px' bgImage={fsh} bgSize='cover' h='25rem' w='25rem'>
            <Box w='100%' h='100%' _hover={{ bg: 'blackAlpha.500' }}>
              <Link href='https://www.amazon.in/fashion' _hover={{}} isExternal>
                <Button
                  maxW='200px'
                  my='25px'
                  variant='ghost'
                  size='md'
                  fontSize='20px'
                  bg='#00000000'
                  borderRadius='0'
                  transition='all 0.5s ease'
                  rightIcon={<ArrowRightIcon />}
                  _hover={{ bg: 'transparent', color: 'black' }}
                >
                  Fashion
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box maxH='800px' flexGrow={1} mr='12px' alignItems='center'>
          <AspectRatio>
            <video id='shoe' loop autoPlay>
              <source src={shoe} type='video/mp4' />
            </video>
          </AspectRatio>
          <Button
            w='8vw'
            my='25px'
            variant='ghost'
            size='md'
            fontWeight='semibold'
            bg='#00000000'
            borderRadius='0'
            rightIcon={<ArrowRightIcon />}
            transition='all 0.5s ease'
            _hover={{ bg: 'black', color: 'white' }}
            position='relative'
            left='47%'
            bottom='70px'
            onClick={() => {setCategory("men's clothing")
                              setHome(false)}}
          >
            Show more
          </Button>
        </Box>
      </Box>
    </Box>
    )}
    </Box>
  );
}
