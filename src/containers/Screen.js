import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { apiAiRequest } from '../actions/apiai';

const mapStateToProps = (state, ownProps) => ({
	intents: getIntents(state, ownProps.routeParams.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getIntents: () => {
		return dispatch(apiAiRequest('GET', '/intents?v=20170217'))
	}
});

function getIntents(state, screen) {
	if (!state.apiai || !state.apiai.intents) {
		return [];
	}
	return state.apiai.intents.filter(intent => (
		intent.contextIn && intent.contextIn[0] === screen
	));
}

class Screen extends Component {
	componentDidMount() {
		this.props.getIntents();
	}
	render() {
		const { intents, routeParams: { id }} = this.props;
		return (
			<div className="screen">
				Intents:
				{intents && intents.length && intents.map(intent => (
					<Link to={`/screens/${id}/intents/${intent.id}`} key={intent.id}>
						{intent.name}
					</Link>
				))}
				{this.props.children}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
