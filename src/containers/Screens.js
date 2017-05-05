import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getAllScreens } from '../actions/screens';

const mapStateToProps = (state, ownProps) => ({
	screens: state.screens,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getAllScreens: () => {
		return dispatch(getAllScreens());
	},
});

class Screens extends Component {
	componentDidMount() {
		const { getAllScreens } = this.props;

		getAllScreens();
	}
	render() {
		const { screens, children } = this.props;

		return (
			<div className="screens">
				{screens && screens.map(screen => (
					<Link to={`/screens/${screen.id}`} key={screen.id}>
						{screen.name}
					</Link>
				))}
				
				{children}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Screens);
