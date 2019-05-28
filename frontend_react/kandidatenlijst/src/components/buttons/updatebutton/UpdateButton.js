import React, { Component } from 'react'

// http://127.0.0.1:8000/api/profiles/2/update
// Update db alle data
// 
class UpdateButton extends Component {
  render() {
    return (
      <a href="/profiles" class="action-button animate yellow">update</a>
    )
  }
}

export default UpdateButton
