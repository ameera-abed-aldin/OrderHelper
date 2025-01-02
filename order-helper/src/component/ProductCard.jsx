import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function ProductCard({product}){
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail}/>
      <Card.Body>
        <Card.Title className='fs-10'>{product.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}