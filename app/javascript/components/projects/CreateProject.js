import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import useCreate from '../hooks/useCreate'
import useForm from '../hooks/useForm'

const CreateProject = (props) => {

  const [ createProject ] = useCreate('projects', props, 'allprojects')
  const [ projects, setProject ] = useState({})
  // const [ projects, handleInputChange, handleSubmit ] = useForm()

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    createProject(projects)
  }
  
  const handleInputChange = (event) => {
    event.persist();
    setProject(projects => ({...projects, [event.target.name]: event.target.value}));
  }

  return (
    <React.Fragment>
      <Container>
        <Row className="mb-4">
          <Col>
            <Form>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  name="title" 
                  value={ projects.title || '' } 
                  onChange={ handleInputChange } 
                  placeholder="Enter title" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  name="description" 
                  value={ projects.description || '' } 
                  onChange={ handleInputChange } 
                  placeholder="Enter description" />
              </Form.Group>
              <Button variant="primary" onClick={ handleSubmit } type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default CreateProject;