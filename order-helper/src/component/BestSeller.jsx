import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';  
import axios from 'axios';  

export default function BestSeller(){
    const [products, setProducts] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  

    useEffect(() => {  
       
            axios.get('https://dummyjson.com/products') // Replace with your API endpoint  
                .then(response => {  
                    setProducts(response.data.products);
                   // Update state with received data  
                })  
                .catch(err => {  
                    setError(err.message); // Set the error message  
                    console.error('Error fetching products:', err);  
                })  
                .finally(() => {  
                    setLoading(false); // Always runs, even if there's an error  
                });  
      
    }, []);  

    if (loading) {  
        return <div>Loading...</div>; // Show loading indicator  
    }  

    if (error) {  
        return <div>Error: {error}</div>; // Display error message  
    }  

    return (  
        <section>
             <h2 className="text-center  text-decoration-underline">Best Seller</h2> 
             
        <div className="product-list">  
            {products.map(product => (  
                <ProductCard key={product.id} product={product} />  
            ))}  
        </div>  
        </section>
    );
    
}