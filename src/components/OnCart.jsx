import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import NothingInCart from './NothingInCart'
import InCart from './InCart'
import Button from 'react-bootstrap/Button'
import styles from '../styles/OnCart.module.css'
import Swal from 'sweetalert'
export default function OnCart({isOpen, delArticles}) {
    const { cart,setCart, setTotal }=useContext(AppContext)
    const variants = {
        open:   {opacity: 1 , x: "0" },
        closed: {opacity: 0 , x: "40vw" },
      }
    function deleteCart () {
        setCart([])
        setTotal(0)
    } 
    function endBuy () {
        setCart([])
        setTotal(0)
        Swal('FELICIDADES!!!', 'SU COMPRA SE REALIZO CON EXTITO')
    } 
    return (

        <motion.div className='OnCart'

    animate={isOpen ? 'open' : 'closed'}

    variants={variants}

    transition={{ bounce: 0}}
    >
{cart.length>0 ? <InCart delArticles={delArticles}/>: <NothingInCart/>}

<Button variant='danger' onClick={()=>{deleteCart()}} className='col-12' size='lg'>Vaciar Carrito</Button>
<Button variant='primary' onClick={()=>{endBuy()}} className='col-12' size='lg'>Comprar</Button>

</motion.div>

)

}