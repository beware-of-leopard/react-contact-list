// Javascript Entry Point

import contacts from './contacts';
import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import ContactList from './contact-list';

export {displayContactList, displaySingleContact};



function displayContactList(){

	ReactDOM.render(
	  <ContactList contactsArray={contacts}/>
	  , document.querySelector('.app')
	);

}


function displaySingleContact(contact){

	ReactDOM.render(
	  <Contact contactToDisplay={contact}/>
	  , document.querySelector('.app')
	);
}
	

displayContactList();