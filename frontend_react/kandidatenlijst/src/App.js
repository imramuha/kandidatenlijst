import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './layout/Main';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';


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
