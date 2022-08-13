import { createDomMotionComponent } from 'framer-motion'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styles from '../styles/Header.module.css'


export default function Header({setIsOpen, isOpen}) {

  return (
    <Navbar className={styles.navBar}bg="primary" variant="dark" >
        <Container fluid>
          <Navbar.Brand href="#home" className='card-title fs-1 lh-1'>BigStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Button variant='danger' className='mt-1 offset-12'  onClick ={() => setIsOpen(!isOpen)}> Cart </Button>
        </Container>
        
      </Navbar>
  
  )
}
