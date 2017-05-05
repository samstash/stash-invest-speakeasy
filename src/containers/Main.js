import React, { Component } from 'react';

class Main extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {

	}
	render() {
		return (
			<div className="main">
				<header>
					Speakeasy
				</header>
				{this.props.children}
			</div>
		);
	}
}

export default Main;
