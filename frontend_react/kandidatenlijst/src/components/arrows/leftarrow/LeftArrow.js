import React from 'react'
import { Link } from 'react-router-dom';

const LeftArrow = () => {
  return (
    <React.Fragment>
      <Link to="/" className="arrow l-arrow-circ"></Link>
    </React.Fragment>
  )
}

export default LeftArrow
