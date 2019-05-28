import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// Toevoegen aan crm, even laten voor wat het is
// We moeten dit sturen naar zoho api, laten we even zo. 
// Aan Christophe vragen
class LogoutButton extends Component {
    render() {
        return (
            <Link to={`/logout`} className="logout-button animate red">x</Link>
        )
    }
}


export default LogoutButton