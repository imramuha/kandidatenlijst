import React, { Component } from 'react'

// IsNew naar 0
// Kan via http://127.0.0.1:8000/api/profiles/2/hide
// 2 vervangen door id
class HideButton extends Component {
  render() {
    return (
      <a href="/profiles" className="action-button animate pink">do nothing</a>
    )
  }
}

export default HideButton