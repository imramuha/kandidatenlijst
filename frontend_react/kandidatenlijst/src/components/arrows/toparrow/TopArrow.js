import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

const TopArrow = () => {
  return (
    <React.Fragment>
      <a className="arrow r-arrow-circ" onClick={() => scroll.scrollToTop()}></a>
    </React.Fragment >
  )
}

export default TopArrow
