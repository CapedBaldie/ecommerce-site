import React from 'react';
import {
  Box,
  Image,
  Badge,
  HStack,
  VStack,
  Text,
  Link,
  IconButton,
  Button,
  Flex,
  Hide,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import Product from './Product';
import { useState } from 'react';

export default function Card(props) {
  const property = {
    imageUrl: props.imageUrl,
    imageAlt: props.imageAlt,
    title: props.title,
    price: "$"+props.price,
    reviewCount: props.reviewCount,
    rating: props.rating,
    description: props.description,
    category: props.category,
  };

  const [add,setAdd] = useState(false);

  return (
    <Box p='3px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box display='flex' flexFlow='row wrap'>
        <Image
          maxW='200px'
          maxH='200px'
          src={property.imageUrl}
          alt={property.imageAlt}
        />
        <VStack align='start' mx='10px' mt='5px'>
          <Badge borderRadius='full' px='1' colorScheme='teal'>
            {property.category}
          </Badge>
          <Box fontWeight='bold' fontSize='20px' as='h4'>
            {property.title}
          </Box>
          <Hide below='md'>
            <Text maxW='1000px'>{property.description}</Text>
          </Hide>
        </VStack>
      </Box>

      <Box
        py='6'
        mx='10px'
        display='flex'
        flexFlow='row wrap'
        justifyContent='space-between'
      >
        <Box>
          <Box fontWeight='semibold' fontSize='25px'>
            {property.price}
          </Box>

          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
        <Button
          variant='ghost'
          onClick={() => {
            setAdd(true);
            return add;
          }}
        >
          add to cart with + - option
        </Button>
      </Box>
    </Box>
  );
}
