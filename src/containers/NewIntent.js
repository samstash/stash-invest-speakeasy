import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
	
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	
});

class NewIntent extends Component {
	render() {
		return (
			<div className="new-intent">
				new intent
				{this.props.children}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewIntent);
