import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import useCreate from '../hooks/useCreate'
import useForm from '../hooks/useForm'

const ContactForm = (props) => {

  const [ createContact ] = useCreate('contacts', props, 'refresh')
  const [ contact, setContact ] = useState({})
  // const [ contact, handleInputChange, handleSubmit ] = useForm()

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    createContact(contact)
  }
  
  const handleInputChange = (event) => {
    event.persist();
    setContact(contact=>({...contact, status: 'Unread' }))
    setContact(contact => ({...contact, [event.target.name]: event.target.value}));
  }

  console.log(props.csrf_token)

  return(
    <React.Fragment>
      <Container sm={6} id="form">
        <h1 className="text-primary" id="header">Add New Contact!</h1>
        <hr/>
      <Form>
        <Row xs="1" lg="2">
          <Col xs="12" lg="9">
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={ contact.name || '' } 
                onChange={ handleInputChange } 
                placeholder="Enter name" />
            </Form.Group>
          </Col>
          <Col xs="12" lg="3">
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                name="email"
                onChange={ handleInputChange }
                value={ contact.email || ''}
                placeholder="Enter Email Address"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row xs="2" lg="4">
            <Col xs="8" lg="5">
              <Form.Group controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={ handleInputChange }
                  value={ contact.phone || ''}
                  placeholder="Enter Phone Number"
                />
              </Form.Group>
            </Col>
            <Col xs="4" lg="3">
              <Form.Group controlId="title">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={ handleInputChange }
                  value={ contact.title || ''}
                  placeholder="Subject"
                />
              </Form.Group>
            </Col>
            <Col xs="6" lg="2">
              <Form.Group controlId="body">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    type="text"
                    name="body"
                    onChange={ handleInputChange }
                    value={ contact.body || ''}
                    placeholder="Message"
                  />
                </Form.Group>
            </Col>
          </Row>
      </Form>
          <Button className="btn btn-primary text-white" onClick={ handleSubmit }>
            Submit
          </Button>
        </Container>
    </React.Fragment>
    )
  }


export default ContactForm;