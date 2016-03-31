import contacts from './contacts';
import React from 'react';
import ReactDOM from 'react-dom';
import {displayContactList} from './index';

export default class Contact extends React.Component {

clickHandler() {
    displayContactList();
  }

	render() {
		    return (
		       <div class="single-contact">
		       		<div className="back-button" onClick={this.clickHandler}>RETURN</div>
		       		<img src={contacts[0].img} />
		       		<div>{contacts[0].name}</div>
		       		<div>{contacts[0].email}</div>
		       		<div>{contacts[0].phone}</div>
		       		<div>{contacts[0].location}</div>
		       		
		       </div>
		    );
		  }
	}