import React, {Component, PropTypes} from 'react';
import SSF from 'react-simple-serial-form';

export default class AddContact extends Component{

	static propTypes = {

		addTo: PropTypes.func.isRequired,
		returnTo: PropTypes.func.isRequired

	}

	handler(contact){

		this.props.addTo(contact);

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
						<label>Image URL: <input type="url" name="img"></input></label>
					</div>
					<div>
						<label>Location: <input type="text" name="location"></input></label>
					</div>
					<button>Add Contact</button>
				</SSF>
			</div>

			);

	}

}