import React, { Component } from 'react'

class RefreshButton extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="/profiles" className="refresh-button animate purple"><i class="fa fa-sync" aria-hidden="true"></i></a>
      </React.Fragment>
    )
  }
}

export default RefreshButton;
