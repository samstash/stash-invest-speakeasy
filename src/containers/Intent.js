import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiAiRequest } from '../actions/apiai'

const mapStateToProps = (state, ownProps) => ({
	intent: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getIntent: () => {
		return dispatch(apiAiRequest('GET', `/intents/${ownProps.routeParams.intentId}?v=20170217`))
	}
});

class Intent extends Component {
	componentDidMount() {
		console.log('mount');
		this.props.getIntent();
	}
	render() {
		return (
			<div className="intent">
				Intent:
				{this.props.children}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Intent);
