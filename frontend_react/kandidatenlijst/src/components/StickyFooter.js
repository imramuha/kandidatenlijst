import React, { Component } from 'react'
import AddButton from './buttons/AddButton';
import HideButton from './buttons/HideButton';
import UpdateButton from './buttons/UpdateButton';
import Arrows from './arrows';

class StickyFooter extends Component {
  render() {
    return (
      <div>
        <Arrows />
        <AddButton />
        <HideButton />
        <UpdateButton />
      </div>
    )
  }
}

export default StickyFooter
