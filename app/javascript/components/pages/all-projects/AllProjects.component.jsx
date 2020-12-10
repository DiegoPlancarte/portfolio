import React from 'react';
import ProjectPreview from '../../components/project-preview/ProjectPreview.component';
import CustomButton from '../../components/custom-button/CustomButton.component';
import Loading from '../../components/loading/Loading.component';
import useRead from '../../hooks/useRead';
import './allprojects.styles.scss';

const AllProjects = () => {

    const [ projects, setProjects, projectsLoading, projectErrors ] = useRead('projects')

    if (projectsLoading) {
      return (<Loading/>)
    }
  
    return (
      <React.Fragment>
        <CustomButton to='/createproject' className='btn btn-primary'>Create Project</CustomButton>
        { projects.map(({...projectProps }) => (
          <ProjectPreview  key={projectProps.id} {...projectProps} />
        ))}
      </React.Fragment>
  );
};

export default AllProjects;