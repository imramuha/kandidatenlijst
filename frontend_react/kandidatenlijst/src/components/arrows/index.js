import React, { Component } from 'react'
import './arrows.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

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
