import contacts from './contacts';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import EditContact from './edit-contact';
import ContactName from './contact-name';
// import {displayContactList, displaySingleContact} from './index';


export default class ContactList extends React.Component {

static propTypes = {

	contactsArray: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
	addNew: PropTypes.func.isRequired

}

clickHandler(contact) {
    this.props.onSelect(contact);

}

editClickHandler(contact){
	this.props.editContact(contact);
	}


	render() {
		    return (
		    	<div className="contact-list">
		    		<h3>Contact List</h3>
		    		{this.props.contactsArray.map(
		    			contact => 
		    			<div className="contact-container">
			    			<div onClick={::this.clickHandler.bind(this, contact)} key={ contact.name }>
			    				{ <img src={contact.img} alt={contact.name} /> }<h2>{ contact.name }</h2>
			    			</div>
		    				<button className="edit-button" onClick={this.editClickHandler.bind(this, contact)}>Edit</button>
		    			</div>)}
		    			
		    		<button onClick={this.props.addNew} className="add">Add New Contact</button>
		       	</div>
		    );
	}
}


