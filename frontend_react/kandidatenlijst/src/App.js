import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom'
import './App.css';
import Main from './layout/Main';

import { Provider } from 'react-redux';
import store from './store';

import { sendTokenWithHeader } from './helpers';

// if (localStorage.token) {
//   sendTokenWithHeader(localStorage.token);
// }

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Main />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
