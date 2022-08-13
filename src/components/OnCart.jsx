import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import NothingInCart from './NothingInCart'
import InCart from './InCart'
import { Button } from 'bootstrap'

export default function OnCart({isOpen, delArticles}) {
    const {cart, setCart}=useContext(AppContext)
    const variants = {
        open:   {opacity: 1 , x: "0" },
        closed: {opacity: 0 , x: "40vw" },
      }
    function deleteCart () {
        setCart([])
    }  
    return (

    <motion.div className='OnCart'

    animate={isOpen ? 'open' : 'closed'}

    variants={variants}

    transition={{ bounce: 0}}
    >
{cart.length>0 ? <InCart delArticles={delArticles}/>: <NothingInCart/>}

    {/* <Button Variant='danger'DeleteCart={deleteCart()}></Button> */}

</motion.div>

)

}