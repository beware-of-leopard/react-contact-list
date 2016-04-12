import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {

	render(){

		return(

			<div>

				<nav>

					<ul>

						<Link to="/about"><li>About</li></Link>
						<li>Contact Us</li>
						<li>Sign Out</li>

					</ul>

				</nav>

				{this.props.children}


				<footer>footer footer footer footer footer footer</footer>

			</div>

			);

	}

}