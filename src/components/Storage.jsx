import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Swal from 'sweetalert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import styles from '../styles/Storage.module.css'

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
        sumPrice(prod.price)
        Swal( "EL ARTICULO HA SIDO AÑADIDO",  "Exitosamente")
    } 
        return (
        
        <Col className= 'mt-4'>
            
            <Card bg={"primary"} border= "dark" style={{ width: '18rem', height: '35rem' }} >
            
                <Card.Img className={styles.iconArticule} variant="top" src={prod.thumbnail} alt={prod.title}/>
            
                    <Card.Body>
            
                        <Card.Title>{prod.title}</Card.Title>
            
                        <Card.Text className='text-light'>{prod.description}</Card.Text>
                    
                        <h2 className='card-text text-danger'> $ {prod.price}</h2>
                        <h1></h1>

                        <Button variant="outline-dark" className='text-dark' onClick={(e) =>{addToCart(e)}} id={prod.id}> Añadir al Carrito  </Button>                         
                        
            
                    </Card.Body>

            </Card>
        </Col>    
    )  
}
    
    



