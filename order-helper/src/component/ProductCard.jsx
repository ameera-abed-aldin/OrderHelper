import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';  
import React from 'react';
export default function ProductCard({product}){
  const [isFavorited, setIsFavorited] = React.useState(false);  

  const handleFavoriteClick = () => {  
    setIsFavorited((prev) => !prev);  
    // You can also handle other actions here, like sending a request to a server  
  };  
    return(
        <Card  className='card-width border-0 shadow hover' >
        <Button variant="link" onClick={handleFavoriteClick} className='text-end'>  
          {isFavorited ? (  
            <AiFillHeart style={{ color: '#4f47ff', fontSize: '2rem' }} />  
          ) : (  
            <AiOutlineHeart style={{ color: '#4f47ff', fontSize: '2rem' }} />  
          )}  
        </Button>  
      <Card.Img variant="top"  style={{ width: '100%', height: '170px', objectFit: 'cover' }} src={product.thumbnail}/>
      <Card.Body>
        <Card.Title className='fs-6'>{product.title}</Card.Title>
        
        <Card.Text className='font-price'>
        {product.price}$
        </Card.Text>
             
      </Card.Body>
      <div className='bg-blue text-center text-white p-1 fs-10 card-hover'>Add To Cart</div>
    </Card>
    )
}