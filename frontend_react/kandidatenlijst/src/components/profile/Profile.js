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
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    };
    axios.get(`http://localhost:81/profiles/profiles`)
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
          <ul key={person.id}>
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