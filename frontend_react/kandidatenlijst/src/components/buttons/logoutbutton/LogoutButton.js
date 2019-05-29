import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions'
class LogoutButton extends Component {

	logout = () => {
		this.props.logoutUser(); // We do with redux, redirect is inside here
	}

	render() {
		return (
			<Link to="/login" onClick={this.logout} className="logout-button animate red"><i className="fa fa-times"></i></Link>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(LogoutButton)