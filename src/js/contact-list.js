import contacts from './contacts';
import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import ContactName from './contact-name';

export default class ContactList extends React.Component {

clickHandler() {
    displaySingleContact();
  }

	render() {
		    return (
		    	<div className="contact-list">
		    		<h3>Contact List</h3>
		    		{contacts.map(contact => <ContactName name={contact.name}/>)}
		       	</div>
		       	
		    );
	}
}


