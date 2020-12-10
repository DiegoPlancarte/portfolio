import React from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import './projectpreview.styles.scss'

const ProjectPreview = ({ id, title, description}) => {
  return (
    <div>
      <CustomButton to={`/projectinfo/${id}`}>{title}</CustomButton>
      <p>{description}</p>
    </div>
  );
};

export default ProjectPreview;