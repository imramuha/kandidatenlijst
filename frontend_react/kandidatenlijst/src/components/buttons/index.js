import React, { Component } from 'react'
import AddButton from './AddButton'
import HideButton from './HideButton'
import UpdateButton from './UpdateButton'
import './buttons.css'

export default class Buttons extends Component {
  render() {
    return (
      <React.Fragment>
        <AddButton />
        <HideButton />
        <UpdateButton />
      </React.Fragment>
    )
  }
}
