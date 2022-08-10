import React from 'react'
import { motion } from 'framer-motion'

export default function OnCart({isOpen}) {
    const variants = {
        open:   {opacity: 1 , x: "0" },
        closed: {opacity: 0 , x: "40vw" },
      }
return (

<motion.div className='OnCart'

animate={isOpen ? 'open' : 'closed'}

variants={variants}

transitions={{ bounce: 0}}

>

</motion.div>

)
}