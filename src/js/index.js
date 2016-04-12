// Javascript Entry Point

import contacts from './contacts';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Contact from './contact';
import ContactList from './contact-list';
import AddContact from './add-contact';
import EditContact from './edit-contact';
import Main from './main';
import About from './about';

// export {displayContactList, displaySingleContact};


render((

	<Router history={hashHistory}>
		<Route component={Main} path="/">
			<IndexRoute component={ContactList}></IndexRoute>
			<Route component={Contact} path="/contact/:name"></Route>
			<Route component={AddContact} path="/add-contact"></Route>
			<Route component={EditContact} path="/edit-contact/:name"></Route>
		</Route>
		<Route component={About} path="/about"></Route>

	</Router>

	), document.querySelector('.app'));


// function displayContactList(){

// 	ReactDOM.render(
// 	  <ContactList contactsArray={contacts} onSelect={displaySingleContact} addNew={displayAddContactView} editContact={displayEditContactView}/>
// 	  , document.querySelector('.app')
// 	);

// }


// function displaySingleContact(contact){

// 	ReactDOM.render(
// 	  <Contact contactToDisplay={contact} onSelect={displayContactList}/>
// 	  , document.querySelector('.app')
// 	);
// }

// function displayAddContactView(){
// 	ReactDOM.render(
// 		<AddContact addTo={addContactAndRenderList} returnTo={displayContactList}/>,
// 		document.querySelector('.app')
// 		)
// }

// function displayEditContactView(contact){
// 	ReactDOM.render(
// 		<EditContact contact={contact} editAndAdd={editContactAndRenderList} returnTo={displayContactList}/>,
// 		document.querySelector('.app')
// 		)
// }
	
// function addContactAndRenderList(contact){

// 	contacts.push(contact);
// 	displayContactList();

// }

// function editContactAndRenderList(contact, updatedContact){

// 	/////
// 	var indexOfOriginalContact = contacts.indexOf(contact);

// 	contacts.splice(indexOfOriginalContact, 1);

// 	contacts.splice(indexOfOriginalContact, 0, updatedContact);

// 	displayContactList();

// }


// displayContactList();