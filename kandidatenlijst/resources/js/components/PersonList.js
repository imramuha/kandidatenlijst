import React from 'react';

import axios from 'axios';

// This works!

class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/profiles`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person =>
          <ul>
            <li>{person.Name}</li>
            <li>{person.Email}</li>
            <li></li>
          </ul>)}
      </ul>
    )
  }
}

export default PersonList