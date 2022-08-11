import React from 'react'
import { motion } from 'framer-motion'
import NothingInCart from './NothingInCart'
import InCart from './InCart'

export default function OnCart({isOpen, cart}) {
    const variants = {
        open:   {opacity: 1 , x: "0" },
        closed: {opacity: 0 , x: "40vw" },
      }
return (

<motion.div className='OnCart'

    animate={isOpen ? 'open' : 'closed'}

    variants={variants}

    transition={{ bounce: 0}}

>
{cart.length>0 ? <InCart cart={cart}/>: <NothingInCart/>}

</motion.div>

)

}