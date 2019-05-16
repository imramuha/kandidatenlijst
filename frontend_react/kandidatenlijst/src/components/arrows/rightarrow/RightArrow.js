import React from 'react'
import { Link } from 'react-router-dom';

const RightArrow = () => {
  return (
    <React.Fragment>
      <Link to="/profiles" className="arrow r-arrow-circ"></Link>
    </React.Fragment>
  )
}

export default RightArrow
