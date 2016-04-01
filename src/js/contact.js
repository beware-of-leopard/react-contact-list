import contacts from './contacts';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {displayContactList} from './index';

export default class Contact extends React.Component {

static protoTypes = {

	contactToDisplay: PropTypes.shape({
        name: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
		img: PropTypes.string,
		location: PropTypes.string
    }).isRequired

}

clickHandler() {
    displayContactList();
  }

  

	render() {
		    return (
		       <div class="single-contact">
		       		<div className="back-button" onClick={this.clickHandler}>RETURN</div>
		       		<img src={this.props.contactToDisplay.img} />
		       		<div>{this.props.contactToDisplay.name}</div>
		       		<div>{this.props.contactToDisplay.email}</div>
		       		<div>{this.props.contactToDisplay.phone}</div>
		       		<div>{this.props.contactToDisplay.location}</div>
		       </div>
		    );
		  }
	}