import contacts from './contacts';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import ContactName from './contact-name';
// import {displayContactList, displaySingleContact} from './index';


export default class ContactList extends React.Component {

static propTypes = {

	contactsArray: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired

}

clickHandler(contact) {

    // displaySingleContact(contact);
    this.props.onSelect(contact);

}

	render() {
		    return (
		    	<div className="contact-list">
		    		<h3>Contact List</h3>
		    		{this.props.contactsArray.map(contact => <div onClick={::this.clickHandler.bind(this, contact)} key={ contact.name }>{ <img src={contact.img} alt={contact.name} /> }{ contact.name }</div>)}
		       	</div>
		    );
	}
}


