import { useState, useEffect } from 'react'
import OnCart from './components/OnCart'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Storage from './components/Storage'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Storage'
import './App.css'

function App() {
  
  const [products, setProducts] = useState([])

  const getProducts = async () => {
      const response = await fetch('https://dummyjson.com/products')
      const responseJson = await response.json()
      const arrayProducts = responseJson.products
      setProducts(arrayProducts)
    
    }
    
    useEffect(() => { 
     
      getProducts();
    
    },[])   
  
  
const [isOpen, setIsOpen] = useState(false)

return (

<Container fluid>
     
     <Header setIsOpen={setIsOpen} isOpen={isOpen} /> 
  
<Col>
 
  <Row>
 
        {products.map(prod => <Storage prod={prod} key={prod.id}/>)}

  </Row>

</Col>

<OnCart isOpen={isOpen}/>

</Container>

)}

export default App