import { useState, useContext } from 'react'
import OnCart from './components/OnCart'
import { AppContext } from './context/AppContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Storage from './components/Storage'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Storage'
import './App.css'

  
  
function App() {
  
  const {products} = useContext(AppContext)  
  const [ isOpen, setIsOpen ] = useState(false)
  const [ cart, setCart  ] = useState([])   
  
  
  
  function identProduct(id) {
    const findProduct =products.find(prod => prod.id === parseInt(id))
    return (findProduct)
  }
  
  
 
return (

  <Container fluid>
     
    <Header setIsOpen={setIsOpen} isOpen={isOpen}/> 
  
    <Col>
 
      <Row>
 
        {products.map(prod => <Storage prod={prod} key={prod.id} cart={cart} setCart= {setCart} identProduct={identProduct}/>)}

      </Row>

    </Col>

<OnCart isOpen={isOpen} cart={cart}/>

</Container>

)}

export default App