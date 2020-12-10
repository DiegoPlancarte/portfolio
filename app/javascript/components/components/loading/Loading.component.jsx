import React from 'react';
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div>
      <Spinner animation="border" variant="primary" />Loading...
    </div>
  );
};

export default Loading;