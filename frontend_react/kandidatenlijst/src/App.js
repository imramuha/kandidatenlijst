import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import './App.css';
import Main from './layout/Main';
import Table from './components/table/Table';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Main />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
