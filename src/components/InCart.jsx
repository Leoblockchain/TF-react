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
                                <h3>{item.brand}</h3>
                                <h2>${item.price}</h2>
                                <Button variant='danger'onClick={()=> {
                                    delArticles(item.id)
                                    restPrice(item.price)
                                }}>Eliminar</Button>
                        
                            </div> 
                                
                        </Row>
                    )
                })}
                
            </Container>
        )

}