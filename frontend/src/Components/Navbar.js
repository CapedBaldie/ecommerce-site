import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  IconButton,
  Image,
  useDisclosure,
  Input,
  Slide,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormControl,
  Text,
  Divider,
  Hide,
  Show,
} from '@chakra-ui/react';
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons';
import { MdShoppingCart, MdLocationOn } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    window.open(`https://www.amazon.in/s?k=${value}`, `_blank`);
    alert(
      `Search Query: ${value}\nAPI doest provide search functionality.\nRedirecting to Amazon...`
    );
  };

  return (
    <Box>
      <Box align='center' pr='15px' bg='whiteAlpha.100' py='10px'>
        <Image
          objectFit='cover'
          minW='350px'
          maxW='30vw'
          src={logo}
          alt='ENIGMA.shop'
        />
      </Box>
      <HStack bg='black'>
        <InputGroup pl='5px'>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                borderWidth='0px'
                bg='blackAlpha.200'
                size='xs'
                w='400px'
                placeholder='What are you looking for?'
                pl='5px'
                color='white'
                _placeholder={{ opacity: 1, color: 'white.600' }}
                isInvalid
                errorBorderColor='white' /*'#09EBEE'*/
                focusBorderColor='#00A8E1'
                onChange={handleChange}
              />
              <InputRightElement>
                <IconButton
                  type='submit'
                  variant='unstyled'
                  color='white'
                  bg='rgba(0, 0, 0, 0.0)'
                  size='sm'
                  pb='7px'
                  icon={<Search2Icon />}
                />
              </InputRightElement>
            </FormControl>
          </form>
        </InputGroup>

        <Hide below='820px'>
          <Link
            color='white'
            _hover={{ /*color: '#FDC20A',*/ color: '#00A8E1' }}
          >
            <Button
              leftIcon={<MdLocationOn />}
              variant='unstyled'
              bg='black'
              marginX='20px'
              _hover={{ bg: 'black' }}
              size='lg'
            >
              Location
            </Button>
          </Link>

          <Link
            color='white'
            _hover={{ /*color: '#FDC20A',*/ color: '#00A8E1' }}
          >
            <Button
              leftIcon={<BiLogIn />}
              variant='unstyled'
              bg='black'
              marginX='20px'
              _hover={{ bg: 'black' }}
              size='lg'
            >
              Sign In
            </Button>
          </Link>

          <Link
            color='white'
            _hover={{ /*color: '#FDC20A',*/ color: '#00A8E1' }}
          >
            <Button
              leftIcon={<MdShoppingCart />}
              variant='unstyled'
              bg='black'
              marginX='20px'
              _hover={{ bg: 'black' }}
              size='lg'
            >
              Cart
            </Button>
          </Link>
        </Hide>
      </HStack>
      <Show below='820px'>
        <Box bg='black' w='100%' h='10px'></Box>
      </Show>
      <Box bg='blackAlpha.500' h='1px' w='100%'></Box>
      <Box p='5px' w='100%' fontSize='16px' bg='blackAlpha.100'>
        <HStack spacing='50px' justifyContent='center'>
          <Link
            color='black'
            fontWeight='semibold'
            _hover={{ color: '#00A8E1' }}
            size='sm'
          >
            Electronics
          </Link>
          <Link
            color='black'
            fontWeight='semibold'
            _hover={{ color: '#00A8E1' }}
            size='sm'
          >
            Jewelery
          </Link>
          <Link
            color='black'
            fontWeight='semibold'
            _hover={{ color: '#00A8E1' }}
            size='sm'
          >
            Mens's Clothing
          </Link>
          <Link
            color='black'
            fontWeight='semibold'
            _hover={{ color: '#00A8E1' }}
            size='sm'
          >
            Women's Clothing
          </Link>
        </HStack>
      </Box>
      <Divider />
    </Box>
  );
}
