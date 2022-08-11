import React, { useState, useEffect } from "react"
export const AppContext = React.createContext ()

export default function AppProvider({children}) {
   
    const [products, setProducts] = useState([])
    
     

    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const responseJson = await response.json()
        const arrayProducts = responseJson.products
        setProducts(arrayProducts)
        
      }
        
        useEffect(() => { 
         
          getProducts()
        
        },[])   

    return (
        <AppContext.Provider value={{products}}>
            {children}
        </AppContext.Provider>
    )

}