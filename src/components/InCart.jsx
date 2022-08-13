import React,{ useContext} from 'react'
import { AppContext } from '../context/AppContext'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/Row'
import styles from '../styles/InCart.module.css'

export default function InCart({ delArticles }) {
    
    const{ total, setTotal, cart}= useContext(AppContext)
        
    function restPrice (price){
            setTotal(total-price)
    }
        return (
            <Container fluid>
                <Row className={styles.TitleCart}>
                <h2 className='text '>Llévalo por sólo ${total}</h2>   
                </Row>                       
                {cart.map (item=> {
                    return (
                        <Row className={styles.RowCart} key={item.id} >
                                                
                            <div className={styles.DivCart}>
                                <img src={item.thumbnail} alt={item.title} className='col-5'/>
                                <ul className={styles.listCart}>
                                    <li><h3>{item.brand} </h3></li>
                                    <li><h4>{item.title}</h4></li>
                                    <li><h2>${item.price}</h2></li>
                                    <li><Button variant='dark'onClick={()=> {
                                        delArticles(item.id)
                                        restPrice(item.price)
                                    }}>Eliminar</Button></li>
                                    
                                </ul>
                            </div> 
                                
                        </Row>
                    )
                })}
                
            </Container>
        )

}