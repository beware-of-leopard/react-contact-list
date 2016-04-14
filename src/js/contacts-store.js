import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

class ContactStore extends EventEmitter {
	constructor (...args){
		super(...args)
		this.contacts = [

				{name: "namebob",
				email: "ghgh@ghg.com",
				phone: "555-555-5555",
				img: "http://fillmurray.com/200/201",
				location: "Atlanta, GA"

				},
				{name: "name2",
				email: "ghgh@ghg.com",
				phone: "555-555-5555",
				img: "http://fillmurray.com/201/200",
				location: "Atlanta, GA"

				},
				{name: "name3",
				email: "ghgh@ghg.com",
				phone: "555-555-5555",
				img: "http://fillmurray.com/202/200",
				location: "Atlanta, GA"

				},
				{name: "name4",
				email: "ghgh@ghg.com",
				phone: "555-555-5555",
				img: "http://fillmurray.com/200/202",
				location: "Atlanta, GA"
				}

			];

	}///end of constructor

	addContact(contact){

		this.contacts.push(contact);

		this.emit('change');

	}

	editContact(contact, contactToRemove){

		let removingContact = this.contacts.indexOf(this.contacts.find(user => user.name === contactToRemove));

		this.contacts.splice(removingContact, 1);

		this.contacts.push(contact);

		this.emit('change');

	}

	fetchContacts(){

		return this.contacts;

	}

	handleActions(action){

		console.log("the recieved action => ", action);
		console.log(this);

		switch(action.type){
			case 'ADD_CONTACT':{
				this.addContact(action.contact)
			}
			case 'EDIT_CONTACT':{
				this.editContact(action.contact, action.contactToRemove)
			}
		}



	}

}


const contactStore = new ContactStore;
console.log("just set new ContactStore =>", contactStore);
dispatcher.register(::contactStore.handleActions);


export default contactStore;



