import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/InCart.module.css'

export default function InCart({cart}) {
    return (
        <Container fluid>
             <Row className={styles.TitleCart}>
             <h2 >TU COMPRA</h2>   
             </Row>
            
            
            {cart.map (item=> {
               
                return (
                    <Row className={styles.RowCart} key={item.title}>
                        
                        
                       
                        <div className={styles.DivCart}>
                            <h3>{item.brand}</h3>
                            <img src={item.thumbnail} alt={item.title} className='col-5'/>
                            <h2>${item.price}</h2>
                            <Button variant='danger'>Eliminar</Button>
                        </div> 
                            
                    </Row>
                )
            })}
            
        </Container>
    )

}