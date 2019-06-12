import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './Sidebar.css'

const Sidebar = ({ profiles, onClick, selectedProfile }) => {

  let onselectedProfileStyle = {
    color: '#1C1C1C',
    backgroundColor: '#F7F7F7',
  };

  let selectedProfileStyle = {
    backgroundColor: '#1C1C1C',
    color: '#F7F7F7'
  };

  return (
    <div className="sidenav">
      <h1 className="title-sidenav">PROFILES</h1>
      <ul>
        {profiles.map(profile => (
          <a id={`${profile.id}`} onClick={onClick} style={selectedProfile === profile.id ? onselectedProfileStyle : selectedProfileStyle}>{profile.candidate_id && <i className="fas fa-check-circle"></i>}  {profile.name}</a>
        ))}
      </ul>
    </div>
  );
};


export default Sidebar;