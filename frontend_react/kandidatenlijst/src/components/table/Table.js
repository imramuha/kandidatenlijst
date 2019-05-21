import React, { Component } from 'react'
import ReactTable from "react-table";
import "react-table/react-table.css";

import axios from 'axios'

import './table.css'

class Table extends Component {

  constructor() {
    super();
    this.state = {
      //data: '',
      persons: [],
      data: null,
      columns: null,
    };
  }

  // getData() {
  //   axios.get(`http://127.0.0.1:8000/api/profiles`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })



  // }



  // populateData(data) {
  //   this.setState({ person: data })
  // }



  render() {
    // const onRowClick = (state, rowInfo, column, instance) => {
    //   return {
    //     onClick: e => {
    //       console.log('A Td Element was clicked!')
    //       console.log('it produced this event:', e)
    //       console.log('It was in this column:', column)
    //       console.log('It was in this row:', rowInfo)
    //       console.log('It was in this table instance:', instance)
    //     }
    //   }
    // }
    // axios.get(`http://127.0.0.1:8000/api/profiles`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   }).catch(err => { return (<div>Woops: {err}</div>) })

    // // const { data } = this.state;
    // this.state.persons.map(person => {
    //   const data = [{
    //     name: person.Name,
    //     age: 26,
    //     // friend: {
    //     //   name: 'Jason Maurer',
    //     //   age: 23,
    //     // }
    //   }]
    //   this.setState({ data })

    //   const columns = [{
    //     Header: 'Name',
    //     accessor: 'name' // String-based value accessors!
    //   }, {
    //     Header: 'Age',
    //     accessor: 'age',
    //     // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    //     // Cell: v => console.log(v.value)
    //   },
    //     // {
    //     //   id: 'friendName', // Required because our accessor is not a string
    //     //   Header: 'Friend Name',
    //     //   accessor: d => d.friend.name // Custom value accessors!
    //     // }, {
    //     //   Header: props => <span>Friend Age</span>, // Custom header components!
    //     //   accessor: 'friend.age'
    //     // }
    //   ]
    //   // const columns = [{

    //   // }];
    //   this.setState({ columns })
    // })





    // return (
    //   <div>


    //     <ReactTable
    //       data={this.state.data}
    //       columns={this.state.columns}
    //           /* getTdProps={onRowClick} */ />
    //   </div>
    // )
    return (
      <div></div>
    )
  }
}

export default Table
