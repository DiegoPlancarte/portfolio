import React from 'react';
import useRead from '../../hooks/useRead';
import useDelete from '../../hooks/useDelete'
import Loading from '../../components/loading/Loading.component';

const ProjectInfo = () => {

  const [ project, setProject, projectLoading, projectErrors ] = useRead(`projects/${props.match.params.id}`)
  const [ deleteProject ] = useDelete(`projects/${props.match.params.id}`, props, 'allprojects')

  if (projectLoading) {
    return (<Loading/>)
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectInfo;