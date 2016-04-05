// Javascript Entry Point

import contacts from './contacts';
import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import ContactList from './contact-list';
import AddContact from './add-contact';
import EditContact from './edit-contact';

export {displayContactList, displaySingleContact};



function displayContactList(){

	ReactDOM.render(
	  <ContactList contactsArray={contacts} onSelect={displaySingleContact} addNew={displayAddContactView} editContact={displayEditContactView}/>
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

function displayEditContactView(contact){
	ReactDOM.render(
		<EditContact contact={contact} editAndAdd={editContactAndRenderList} returnTo={displayContactList}/>,
		document.querySelector('.app')
		)
}
	
function addContactAndRenderList(contact){

	contacts.push(contact);
	displayContactList();

}

function editContactAndRenderList(contact){

	contacts.push(contact);
	displayContactList();

}


displayContactList();