import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class AddContact extends Component{

	static propTypes = {

		addTo: PropTypes.func.isRequired,
		returnTo: PropTypes.func.isRequired

	}

	constructor(){

		super();
		this.state = {
			preview: 'http://fillmurray.com/50/50'
		}
	}

	handler(contact){
		console.log(this);
		this.props.addTo(contact);

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
						<label>Name: <input type="text" name="name"></input></label>
					</div>
					<div>
						<label>Email: <input type="email" name="email"></input></label>
					</div>
					<div>
						<label>Phone: <input type="tel" name="phone"></input></label>
					</div>
					<div>
						<label>Location: <input type="text" name="location"></input></label>
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