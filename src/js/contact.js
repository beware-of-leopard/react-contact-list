import contacts from './contacts';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
// import {displayContactList} from './index';

export default class Contact extends React.Component {

// static protoTypes = {

// 	contactToDisplay: PropTypes.shape({
//         name: PropTypes.string,
// 		email: PropTypes.string,
// 		phone: PropTypes.string,
// 		img: PropTypes.string,
// 		location: PropTypes.string
//     }).isRequired

// }


///this.props.params.name === value set in link



////find the contact in the contacts array whose name value matches the one in params


clickHandler() {
    hashHistory.push('/');
  }



	render() {

			let contact = contacts.find(user => user.name === this.props.params.name);

		    return (
			       <div className="single-contact">
			       		<div className="header">
				       		<div className="back-button" onClick={::this.clickHandler}><i className="fa fa-arrow-left"></i>RETURN</div>
				       		<img src={contact.img} />
			       		</div>
			       		<div><i className="fa fa-user"></i>{contact.name}</div>
			       		<div><i className="fa fa-envelope"></i>{contact.email}</div>
			       		<div><i className="fa fa-mobile"></i>{contact.phone}</div>
			       		<div><i className="fa fa-globe"></i>{contact.location}</div>
			       </div>
		    );
		  }
	}