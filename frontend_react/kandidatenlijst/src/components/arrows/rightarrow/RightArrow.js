import React from 'react'
import { Link } from 'react-router-dom';

// Here we add a +1 to the integer id
// We also have to rerender the page always
// Turn this into class component because we will need state and do some calculations

const RightArrow = () => {
  return (
    <React.Fragment>
      {/* <Link to={`/profiles/${7}`} className="arrow r-arrow-circ"></Link> */}
      <Link to={`/profiles`} className="arrow r-arrow-circ"></Link>
    </React.Fragment>
  )
}

export default RightArrow
