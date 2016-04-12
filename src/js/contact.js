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

clickHandler() {
    hashHistory.push('/');
  }

  

	render() {
		    return (
			       <div className="single-contact">
			       		<div className="header">
				       		<div className="back-button" onClick={::this.clickHandler}><i className="fa fa-arrow-left"></i>RETURN</div>
				       		<img src={contacts[0].img} />
			       		</div>
			       		<div><i className="fa fa-user"></i>{contacts[0].name}</div>
			       		<div><i className="fa fa-envelope"></i>{contacts[0].email}</div>
			       		<div><i className="fa fa-mobile"></i>{contacts[0].phone}</div>
			       		<div><i className="fa fa-globe"></i>{contacts[0].location}</div>
			       </div>
		    );
		  }
	}