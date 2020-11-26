import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import useRead from '../hooks/useRead'
import useCreate from '../hooks/useCreate'
import useDelete from '../hooks/useDelete'

const ProjectInfo = (props) => {

  const [ project, setProject, projectLoading, projectErrors ] = useRead(`projects/${props.match.params.id}`)
  const [ deleteProject ] = useDelete(`projects/${props.match.params.id}`, props, 'allprojects')

  if (projectLoading) {
    return <div>Loading...</div>
  }

  const creator = () => {
    return props.current_user.id === project.user_id
  }
  
  return (
    <React.Fragment>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Link to={`/editproject/${project.id}`}><Button>Edit Project</Button></Link>
      <Button onClick={ deleteProject } className="btn btn-danger" >Delete Project</Button>
    </React.Fragment>
  );
};

export default ProjectInfo;