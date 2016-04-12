import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import contacts from './contacts';
import { Link, hashHistory } from 'react-router';

export default class EditContact extends Component{

	// static propTypes = {

	// 	editAndAdd: PropTypes.func.isRequired,
	// 	returnTo: PropTypes.func.isRequired,

	// 	contact: PropTypes.object.isRequired

	// }

	constructor(props){

		super(props);
		this.state = {
			// preview: this.props.contact.img
			preview: ""
		}
	}

	handler(updatedContact){

		hashHistory.push('/');
		// this.props.editAndAdd(this.props.contact, updatedContact);



	}

	dropHandler( [ file ]){
		this.setState({

			preview: file.preview

		});
	}

	render(){

		return(
			<div className="add-contact">
				<div className="header">
					<h1>Edit contact below:</h1>
					<Link to="/"><button onClick={this.props.returnTo}><i className="fa fa-arrow-left"></i>RETURN</button></Link>
				</div>
				<SSF onData={::this.handler} className="form">
					<div>
						<label>Name: <input type="text" name="name" placeholder={contacts[0].name}></input></label>
					</div>
					<div>
						<label>Email: <input type="email" name="email" placeholder={contacts[0].email}></input></label>
					</div>
					<div>
						<label>Phone: <input type="tel" name="phone" placeholder={contacts[0].phone}></input></label>
					</div>
					<div>
						<label>Location: <input type="text" name="location" placeholder={contacts[0].location}></input></label>
					</div>
					<input type="hidden" name="img" value={this.state.preview}></input>
					<h3>Drag and drop new image below:</h3>
					<Dropzone onDrop={::this.dropHandler}>
						<img src={this.state.preview} height="50" width="50"/>
					</Dropzone>
					<button className="add">Update Contact</button>
				</SSF>
			</div>

			);

	}

}