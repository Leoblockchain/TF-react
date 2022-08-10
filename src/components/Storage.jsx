import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


export default function Storage({prod}) {

    return (
        <Col className= 'mb-3'>
            
            <Card bg={"secondary"} border= "dark" style={{ width: '18rem', height: '35rem' }} >
            
                <Card.Img variant="top" src={prod.thumbnail} alt={prod.title}/>
            
                    <Card.Body>
            
                        <Card.Title>{prod.title}</Card.Title>
            
                        <Card.Text className='text-light'>{prod.description}</Card.Text>
                    
                        <h2 className='card-text text-danger'> $ {prod.price}</h2>
                
                        <Button variant="primary" onClick={() => console.log('click!')}> BUY </Button>
            
                    </Card.Body>

            </Card>
        </Col>    
        )  
}
    
    



