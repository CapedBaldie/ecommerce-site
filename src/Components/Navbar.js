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
} from '@chakra-ui/react';
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons';
import { MdShoppingCart, MdLocationOn } from 'react-icons/md';
import { BiLogIn } from "react-icons/bi";
import { useEffect, useState } from "react";
import logo from '../assets/img/logo1.png';

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = useState('');
    const handleChange = (event) => setValue(event.target.value)
    const handleSubmit = event => {
        event.preventDefault();
        window.open(`https://www.amazon.in/s?k=${value}`, `_blank`)
        alert(`Search Query: ${value}\nAPI doest provide search functionality.\nRedirecting to Amazon...`);
      };

    return(
        <Box bg='black'>
        <Box align='center' pr='15px'>
        <Image  objectFit='cover' minW='0' src={logo} alt='ENIGMA.shop' />
        </Box>
        <HStack>
        <InputGroup pl='5px'>
            <form onSubmit={handleSubmit}>
                <FormControl>
                <Input 
                    /*borderWidth='0px'*/
                    size='xs'
                    w='400px'
                    placeholder='Search' 
                    pl='5px'
                    color='white' 
                    _placeholder={{ opacity: 1, color: 'white.600' }}
                    isInvalid
                    errorBorderColor='#FDC20A'/*'#09EBEE'*/
                    focusBorderColor='white'
                    onChange={handleChange} />                  
                <InputRightElement>
                    <IconButton
                        type="submit"
                        variant='unstyled'
                        color='#FDC20A'
                        bg='rgba(0, 0, 0, 0.0)'
                        size='sm'
                        pb='7px'
                        icon={<Search2Icon/>} />
                </InputRightElement>
                </FormControl>
            </form>
        </InputGroup>

        <Link  color='#FDC20A' _hover={{color: 'white'/*#fff200*/ }}>
        <Button 
            leftIcon={<MdLocationOn/>}
            bg='black'
            _hover={{bg: 'black' }}
            size='lg'>
            Location
        </Button> 
        </Link>

        <Link  color='#FDC20A' _hover={{color: 'white' }}>
        <Button 
            leftIcon={<BiLogIn />}
            color='#FDC20A'
            bg='black'
            _hover={{color: 'white' }}
            size='lg'>
            Sign In
        </Button>
        </Link>

        <Link  color='#FDC20A' _hover={{color: 'white' }}>
        <Button 
            leftIcon={<MdShoppingCart />}
            color='#FDC20A'
            bg='black'
            _hover={{color: 'white' }}
            size='lg'>
            Cart
        </Button>  
        </Link>

        </HStack>
        <Box  p='5px' w='100%' fontSize='16px'>
            <HStack spacing='50px' justifyContent='center'>
                <Link color='#09EBEE' bg='black' _hover={{color: '#9CFF00' }} size='sm'>Electronics</Link>
                <Link color='#09EBEE' bg='black' _hover={{color: '#9CFF00' }} size='sm'>Jewelery</Link>
                <Link color='#09EBEE' bg='black' _hover={{color: '#9CFF00' }} size='sm'>Mens's Clothing</Link>
                <Link color='#09EBEE' bg='black' _hover={{color: '#9CFF00' }} size='sm'>Women's Clothing</Link>
            </HStack>
        </Box>
        </Box>
    );
}