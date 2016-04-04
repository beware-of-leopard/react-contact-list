import contacts from './contacts';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import {displayContactList} from './index';

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
    this.props.onSelect();
  }

  

	render() {
		    return (
			       <div className="single-contact">
			       		<div className="header">
				       		<div className="back-button" onClick={::this.clickHandler}><i className="fa fa-arrow-left"></i>RETURN</div>
				       		<img src={this.props.contactToDisplay.img} />
			       		</div>
			       		<div><i className="fa fa-user"></i>{this.props.contactToDisplay.name}</div>
			       		<div><i className="fa fa-envelope"></i>{this.props.contactToDisplay.email}</div>
			       		<div><i className="fa fa-mobile"></i>{this.props.contactToDisplay.phone}</div>
			       		<div><i className="fa fa-globe"></i>{this.props.contactToDisplay.location}</div>
			       </div>
		    );
		  }
	}