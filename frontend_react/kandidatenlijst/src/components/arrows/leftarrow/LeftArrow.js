import React from 'react'
import { Link } from 'react-router-dom';

// Here we go back with the id - 1
// We also have to rerender the page always
// Turn this into class component because we will need state and do some calculations

const LeftArrow = () => {
  return (
    <React.Fragment>
      <Link to="/profiles" className="arrow l-arrow-circ"></Link>
    </React.Fragment>
  )
}

export default LeftArrow
