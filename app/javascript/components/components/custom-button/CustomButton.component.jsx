import React from 'react';
import { Link } from 'react-router-dom'
// import './custombutton.styles.scss'

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <Link className='custom-button' {...otherProps}>
      {children}
    </Link>
  );
};

export default CustomButton;