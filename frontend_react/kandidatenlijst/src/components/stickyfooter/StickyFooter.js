import React, { Component } from 'react'
import Buttons from './../buttons/Buttons';
import Arrows from './../arrows/Arrows';

class StickyFooter extends Component {
  render() {
    return (
      <div>
        <Arrows />
        <Buttons />
      </div>
    )
  }
}

export default StickyFooter
