import React from 'react';
import Main from '../containers/Main';
import Screens from '../containers/Screens';
import Screen from '../containers/Screen';
import Intent from '../containers/Intent';
import NewIntent from '../containers/NewIntent'

import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="screens" component={Screens}>
				<Route path=":id" component={Screen}>
					<Route path="intents">
						<Route path="new" component={NewIntent} />
						<Route path=":intentId" component={Intent} />
					</Route>
				</Route>
			</Route>
		</Route>
	</Router>
);