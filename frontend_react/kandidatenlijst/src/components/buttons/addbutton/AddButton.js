import React, { Component } from 'react'

// Toevoegen aan crm, even laten voor wat het is
// We moeten dit sturen naar zoho api, laten we even zo. 
// Aan Christophe vragen
class AddButton extends Component {
  render() {
    return (
      <a href="/profiles" className="action-button animate green">add</a>
    )
  }
}


export default AddButton
