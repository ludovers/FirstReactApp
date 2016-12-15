import React from 'react';
import { Router, Route, Link, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router';
import ReactDOM, { render } from 'react-dom';
import { useTransitions, withTransition } from 'react-router-transitions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import App from './App';
import Home from './pages/Home';
import Archives from './pages/Archives';
import Todos from './pages/Todos';
import Jobs from './pages/Jobs';
import Posts from './pages/Posts';
import Nothing from './pages/Nothing';

ReactDOM.render(
	<Router history={browserHistory}
		render={applyRouterMiddleware(useTransitions({
		    TransitionGroup: ReactCSSTransitionGroup,
		    defaultTransition: {
		        transitionName: 'page',
		        transitionEnterTimeout: 500,
		        transitionLeaveTimeout: 300
		    }
	    }))}
	>
	    <Route path="/" component={withTransition(App)}>
	    	<IndexRoute component={Home} />
	    	<Route path="archives" component={Archives} />
	        <Route path="todos" component={Todos} />
	        <Route path="jobs" component={Jobs} />
	        <Route path="posts" component={Posts} />
	        <Route path="*" component={Nothing}/>
	    </Route>
	</Router>
	, document.getElementById('root'));
