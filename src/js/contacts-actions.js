import dispatcher from './dispatcher';

export function addContact(contact){

	dispatcher.dispatch({type: 'ADD_CONTACT', contact,});

}

export function editContact(contact, contactToRemove){

	dispatcher.dispatch({type: 'EDIT_CONTACT', contact, contactToRemove});

}