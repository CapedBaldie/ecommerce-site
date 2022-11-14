import { React, useState, useEffect } from 'react';
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
import Card from './Card';

export default function Product(props) {

    const [data, setData] = useState([]);
    const [add,setAdd] = useState(false);
    const products = [];
    const cart = [];

    

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      useEffect(() => {
        
        fetch("https://fakestoreapi.com/products", requestOptions)
          .then(response => response.json())
          .then(result => {setData(result)})
          .catch(error => console.log('error', error));
      }, []);

      //console.log(props.category)
        data.forEach(function(doc) {
            if(doc.category == props.category)
                products.push(doc);
        });
        console.log(products);

        const Matrix = ({products}) => (
            <>
                {products.map(product => (
                    <Box mx='100px' my='10px' maxH='400px' bg='blackAlpha.200'>
                    <Card 
                        title = {product.title}
                        price = {product.price}
                        imageUrl = {product.image}
                        imageAlt = {product.title}
                        rating = {product.rating.rate}
                        reviewCount = {product.rating.count}
                        description = {product.description}
                        category = {product.category}
                        
                    />
                    </Box>
                ))}
            </>
        )


    return(
        <Box bg='white'>
           <Matrix products={products} />
        </Box>
        
    );
};

