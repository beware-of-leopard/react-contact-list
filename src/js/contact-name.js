import contacts from './contacts';
import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './contact';
import {displayContactList, displaySingleContact} from './index';

export default class ContactName extends React.Component {

clickHandler() {
    displaySingleContact();
  }

	render() {
		    return (
		    	<div onClick={::this.clickHandler}>
		    		{this.props.name}
		       	</div>
		    );
	}
}