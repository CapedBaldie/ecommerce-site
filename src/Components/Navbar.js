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
        <Box align='center'>
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
                    focusBorderColor='#FDC20A'
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
     
        <Button 
            leftIcon={<MdLocationOn />}
            color='#FDC20A'
            variant='ghost'
            size='lg'>
            Location
        </Button> 
       
        <Button 
            leftIcon={<BiLogIn />}
            color='#FDC20A'
            variant='ghost'
            size='lg'>
            Sign In
        </Button>

        <Button 
            leftIcon={<MdShoppingCart />}
            color='#FDC20A'
            variant='ghost'
            size='lg'>
            Cart
        </Button>  
        </HStack>
        <Box  p='5px' w='100%'>
            <HStack spacing='50px' justifyContent='center'>
                <Button color='#09EBEE' variant='link' size='sm'>Electronics</Button>
                <Button color='#09EBEE' variant='link' size='sm'>Jewelery</Button>
                <Button color='#09EBEE' variant='link' size='sm'>Mens's Clothing</Button>
                <Button color='#09EBEE' variant='link' size='sm'>Women's Clothing</Button>
            </HStack>
        </Box>
        </Box>
    );
}