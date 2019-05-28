import React, { Component } from 'react'
import LeftArrow from './leftarrow/LeftArrow';
import RightArrow from './rightarrow/RightArrow';

import './arrows.css';

class Arrows extends Component {
  render() {
    return (
      <div className="h-center">
        <LeftArrow />
        <RightArrow />
      </div>
    )
  }
}

export default Arrows
