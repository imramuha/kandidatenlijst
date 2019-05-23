import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

const BottomArrow = () => {
  return (
    <React.Fragment>
      <a className="arrow r-arrow-circ" onClick={() => scroll.scrollToBottom()}></a>
    </React.Fragment >
  )
}

export default BottomArrow
