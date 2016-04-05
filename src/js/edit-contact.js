import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import contacts from './contacts';

export default class EditContact extends Component{

	static propTypes = {

		editAndAdd: PropTypes.func.isRequired,
		returnTo: PropTypes.func.isRequired,

		contact: PropTypes.object.isRequired

	}

	constructor(props){

		super(props);
		this.state = {
			preview: this.props.contact.img
		}
	}

	handler(updatedContact){


		this.props.editAndAdd(this.props.contact, updatedContact);


	}

	dropHandler( [ file ]){

		// console.log(file);
		this.setState({

			preview: file.preview

		});
	}

	render(){

		return(
			<div className="add-contact">
				<div className="header">
					<h1>Add new contact below:</h1>
					<button onClick={this.props.returnTo}><i className="fa fa-arrow-left"></i>RETURN</button>
				</div>
				<SSF onData={::this.handler} className="form">
					<div>
						<label>Name: <input type="text" name="name" placeholder={this.props.contact.name}></input></label>
					</div>
					<div>
						<label>Email: <input type="email" name="email" placeholder={this.props.contact.email}></input></label>
					</div>
					<div>
						<label>Phone: <input type="tel" name="phone" placeholder={this.props.contact.phone}></input></label>
					</div>
					<div>
						<label>Location: <input type="text" name="location" placeholder={this.props.contact.location}></input></label>
					</div>
					<input type="hidden" name="img" value={this.state.preview}></input>
					<h3>Drag and drop image below:</h3>
					<Dropzone onDrop={::this.dropHandler}>
						<img src={this.state.preview} />
					</Dropzone>
					<button className="add">Add Contact</button>
				</SSF>
			</div>

			);

	}

}