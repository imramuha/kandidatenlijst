import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import './sidebar.css'

const Sidebar = ({ profiles, onClick }) => {
  return (
    <div className="sidenav">
      <h1 className="title-sidenav">PROFILES</h1>
      <ul>
        {profiles.map(profile => ( // href={`/profiles/${profile.id}`}
          <a id={`${profile.id}`} onClick={onClick}>{profile.name}</a>
        ))}
      </ul>
    </div>
  );
};


export default Sidebar;