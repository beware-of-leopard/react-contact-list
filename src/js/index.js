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