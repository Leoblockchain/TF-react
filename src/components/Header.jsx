import React from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


export default function Header({setIsOpen, isOpen}) {
 return (
   <Row className='bg-success'>
        <Col>
            <h1 className='text-light'> BigStore</h1>
        </Col>
        <Col>
            <Button variant='danger' className='mt-2' onClick ={() => setIsOpen(!isOpen)}> Cart </Button>
        </Col>
   </Row>
  )
}
