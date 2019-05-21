import React, { Component } from 'react'
import AddButton from './addbutton/AddButton'
import HideButton from './hidebutton/HideButton'
import UpdateButton from './updatebutton/UpdateButton'


import './buttons.css'

export default class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <AddButton />
        <HideButton />
        <UpdateButton />
      </div>
    )
  }
}
