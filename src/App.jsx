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
import styles from './styles/App.module.css'


  
function App() {
  
  const {products, cart, setCart} = useContext(AppContext)  
  const [ isOpen, setIsOpen ] = useState(false)
   
  function identProduct(id) {
    const findProduct = products.find(prod => prod.id === parseInt(id))
    return (findProduct)
  }
  function delArticles(id) {
    const artsFuera = cart.filter(item => item.id !==(id))
    setCart(artsFuera)
    
    }
 
return (

  <Container className={styles.AppDivMain}>
     
    <Header setIsOpen={setIsOpen} isOpen={isOpen}/> 
  
    <Col>
 
      <Row className={styles.AppCol}>
 
        {products.map(prod => <Storage prod={prod} key={prod.id} identProduct={identProduct} delArticles={delArticles}/>)}

      </Row>

    </Col>

<OnCart isOpen={isOpen} delArticles={delArticles}/>

</Container>

)}

export default App