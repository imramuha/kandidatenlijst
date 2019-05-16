import React from 'react';
import axios from 'axios';

import helpers from '../../helpers'

class PersonList extends React.Component {
  state = {
    persons: [],
    isLoading: false,
  }

  componentDidMount() {
    const token = helpers.getLocalStorage();
    let config = {
      headers: { 'Authorization': token }
    };
    axios.get(`http://127.0.0.1:8000/api/profiles`, config)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    // if (this.state.persons.length > 0) {
    return (
      <ul>
        {this.state.persons.map(person =>
          <ul>
            <li>{person.vervoer}</li>
            <li>{person.email}</li>
          </ul>)}
      </ul>
    )
    // }
    // return (
    //   <Spinner />
    // )
  }
}

export default PersonList