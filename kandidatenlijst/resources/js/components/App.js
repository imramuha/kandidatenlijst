import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PersonList from './PersonList'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <PersonList />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))