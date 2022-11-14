import React from 'react';
import{
    Box,
    HStack,
    VStack,
    Text,
    Link,
    IconButton,
    Button,
    Flex,
} from '@chakra-ui/react';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { LinkIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';


const Footer = () => {
    return (      
        <footer>
        <Box bg='black' color='whiteAlpha.700' pr='40px' pl='40px' pt='20px' align='center'>
        <Flex justifyContent='space-between'>
        <Box  pb='80px' fontSize='15px'>
            <HStack align='top' /*justifyContent='space-evenly'*/ spacing='80px'>
                <VStack align='start'>
                    <Link _hover={{color: 'white' }}>Sign up</Link>
                    <Link _hover={{color: 'white' }}>Feedback</Link>
                    <Link _hover={{color: 'white' }}>Discount</Link>
                    <Link _hover={{color: 'white' }}>Get Help</Link>
                </VStack>
                <VStack align='start'>
                    <Link _hover={{color: 'white' }}>Order Status</Link>
                    <Link _hover={{color: 'white' }}>Delivery</Link>
                    <Link _hover={{color: 'white' }}>Returns</Link>
                    <Link _hover={{color: 'white' }}>Payment Options</Link>
                    <Link _hover={{color: 'white' }}>Contact Us</Link>
                </VStack>
            </HStack>       
        </Box>
        <Box justifyContent='flex-end'>
            <HStack spacing='3.5'>
                <Link href='https://twitter.com/' isExternal><IconButton 
                        bg='whiteAlpha.700'
                        color='black'
                        variant='ghost'
                        size='sm'
                        fontSize='20px'
                        isRound='True'
                        icon={<FaTwitter />} />
                </Link>
                <Link href='https://facebook.com/' isExternal><IconButton 
                        bg='whiteAlpha.700'
                        color='black'
                        variant='ghost'
                        size='sm'
                        fontSize='20px'
                        isRound='True'
                        icon={<FaFacebookF />} />
                </Link>
                <Link href='https://youtube.com/' isExternal><IconButton 
                        bg='whiteAlpha.700'
                        color='black'
                        variant='ghost'
                        size='sm'
                        fontSize='20px'
                        isRound='True'
                        icon={<FaYoutube />} />
                </Link>
                <Link href='https://instagram.com/' isExternal><IconButton 
                        bg='whiteAlpha.700'
                        color='black'
                        variant='ghost'
                        size='sm'
                        fontSize='20px'
                        isRound='True'
                        icon={<FaInstagram />} />
                </Link>
            </HStack> 
        </Box>
        </Flex>
        Made with ❤️ by <Link href='https://github.com/CapedBaldie'>CapedBaldie</Link>
        <ColorModeSwitcher />
        </Box>
        </footer>
    );
}

export default Footer;
