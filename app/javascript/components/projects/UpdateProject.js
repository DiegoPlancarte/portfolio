import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import useRead from '../hooks/useRead'
import useUpdate from '../hooks/useUpdate'

const EditProject = (props) => {

  const [ project, setProject, projectLoading, projectErrors ] = useRead(`projects/${props.match.params.id}`)
  const [ updateProject ] = useUpdate(`projects/${props.match.params.id}`, props, `projectinfo/${props.match.params.id}`)

  const handleSubmit = (event) => {
    if(event) {
      event.preventDefault();
    }
    updateProject(project)
  }

  const handleInputChange = (event) => {
    event.persist();
    setProject(project => ({...project, [event.target.name]: event.target.value}));
  }

  if (projectLoading) {
    return <div>Loading...</div>
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
                  value={ project.title || '' } 
                  onChange={ handleInputChange } 
                  placeholder="Enter title" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  name="description" 
                  value={ project.description || '' } 
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

export default EditProject;