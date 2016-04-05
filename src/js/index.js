// Javascript Entry Point

import contacts from './contacts';
import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import ContactList from './contact-list';
import AddContact from './add-contact';

export {displayContactList, displaySingleContact};



function displayContactList(){

	ReactDOM.render(
	  <ContactList contactsArray={contacts} onSelect={displaySingleContact} addNew={displayAddContactView}/>
	  , document.querySelector('.app')
	);

}


function displaySingleContact(contact){

	ReactDOM.render(
	  <Contact contactToDisplay={contact} onSelect={displayContactList}/>
	  , document.querySelector('.app')
	);
}

function displayAddContactView(){
	ReactDOM.render(
		<AddContact addTo={addContactAndRenderList} returnTo={displayContactList}/>,
		document.querySelector('.app')
		)
}
	
function addContactAndRenderList(contact){

	contacts.push(contact);
	displayContactList();

}

displayContactList();