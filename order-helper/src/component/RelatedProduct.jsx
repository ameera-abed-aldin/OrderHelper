import React, { useEffect, useState } from 'react';  
import axios from 'axios';  
import ProductCard from './ProductCard';
export default function RelatedProduct({category}){
    const [relatedProducts, setRelatedProducts] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  

    useEffect(() => {  
        setLoading(true);  
        // Make the request to fetch products based on a category  
        axios.get(`https://dummyjson.com/products/category/${category}`)  
            .then((response) => {  
                
                setRelatedProducts(response.data.products);
                 
            })  
            .catch((err) => {  
                setError(err.message);  
            })  
            .finally(() => {  
                setLoading(false);  
            });  
    }, [category]);  

    if (loading) {  
        return <div>Loading...</div>;  
    }  

    if (error) {  
        return <div>Error: {error}</div>;  
    }  
if(!loading){
    return ( 

        <div>  
            <h2 className='mb-4'>Related Products </h2>  
            <div className='d-flex flex-wrap justify-content-between'>  
                {relatedProducts.map((product,index) => (  
                <div className='mb-3' key={index}>
                    <ProductCard product={product}  />
                    </div>
                ))}  
            </div>  
        </div>  
    );  

}}