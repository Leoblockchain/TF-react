import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Swal from 'sweetalert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default function Storage({prod, identProduct }) {
    
    const {total, setTotal, cart, setCart}= useContext(AppContext)
    
    function sumPrice(price) {
        setTotal(total+price) 
    }
    function addToCart(e) {
        const pushCart = identProduct(e.target.id)
        const duoProd= cart.find(prod => parseInt(e.target.id) === prod.id )
        if(duoProd) {
            Swal( "CUIDADO", "PRODUCTO YA AÑADIDO")
        return 
        }   
        setCart([...cart, pushCart])
        Swal( "EL ARTICULO HA SIDO AÑADIDO",  "Exitosamente")
    } 
        return (
        
        <Col className= 'mb-3'>
            
            <Card bg={"secondary"} border= "dark" style={{ width: '18rem', height: '35rem' }} >
            
                <Card.Img className='iconArticule' variant="top" src={prod.thumbnail} alt={prod.title}/>
            
                    <Card.Body>
            
                        <Card.Title>{prod.title}</Card.Title>
            
                        <Card.Text className='text-light'>{prod.description}</Card.Text>
                    
                        <h2 className='card-text text-danger'> $ {prod.price}</h2>
                
                        <Button variant="primary" onClick={(e) =>{
                            addToCart(e)
                            sumPrice(prod.price)
                        }} id={prod.id}> Añadir al Carrito  </Button>
            
                    </Card.Body>

            </Card>
        </Col>    
    )  
}
    
    



