import contacts from './contacts';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import EditContact from './edit-contact';
import ContactName from './contact-name';
import { hashHistory } from 'react-router'
// import {displayContactList, displaySingleContact} from './index';


export default class ContactList extends React.Component {

// static propTypes = {

// 	contactsArray: PropTypes.array.isRequired,
// 	onSelect: PropTypes.func.isRequired,
// 	addNew: PropTypes.func.isRequired

// }

clickHandler(currentContact) {
    let contact = currentContact;
    // return contact;

    hashHistory.push(`/contact/${currentContact.name}`);

}

editClickHandler(currentContact){
	// this.props.editContact(contact);


	hashHistory.push(`/edit-contact/${currentContact.name}`);

}

addNewHandler(){

	hashHistory.push('/add-contact');

}


/////////////TEMPORARY SOLUTION: Math.random() is key in array.... CHANGE TOMORROW ////////////////////

	render() {
		    return (
		    	<div className="contact-list">
		    		<h3>Contact List</h3>
		    		{contacts.map(
		    			contact => 
		    			<div className="contact-container" key={ contact.name }>
			    			<div onClick={::this.clickHandler.bind(this, contact)}>
			    				{ <img src={contact.img} alt={contact.name} /> }<h2>{ contact.name }</h2>
			    			</div>
		    				<button className="edit-button" onClick={this.editClickHandler.bind(this, contact)}>Edit</button>
		    			</div>)}
		    			
		    		<button onClick={this.addNewHandler} className="add">Add New Contact</button>
		       	</div>
		    );
	}
}


