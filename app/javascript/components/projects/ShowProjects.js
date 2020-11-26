import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import useRead from '../hooks/useRead'

const ShowProjects = () => {

  const [ projects, setProjects, projectsLoading, projectErrors ] = useRead('projects')

  if (projectsLoading) {
    return <div><Spinner animation="border" variant="primary" />Loading...</div>
  }

  return (
    <React.Fragment>
      <Link to='/createproject'><Button>Create Project</Button></Link>
      { projects.map((v,i) => {
        return (
          <div key={i}>
            <Link to={`/projectinfo/${v.id}`}>{v.title}</Link>
            <p>{v.description}</p>
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default ShowProjects;