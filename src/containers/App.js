import React, { Component, Fragment } from 'react';
import './index.css';
import Header from '../containers/Header/index';
import Home from '../containers/Index/index';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import TodoListMain from '../containers/TodoList';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Router>
					<div className="main">
						<nav>
							<IsNavLink activeOnlyWhenExact={ true } to="/" label="首頁" />
							<IsNavLink to="/todoList" label="TodoList 練習" />
							<IsNavLink to="/topics" label="Topics 範例" />
							<IsNavLink to="/profile/9527" label="取 Profile ID 範例" />
						</nav>
						<hr />
						<Route exact path="/" component={ Home } />
						<Route path="/todoList" component={ TodoListMain } />
						<Route path="/topics" component={ Topics } />
						<Route path="/profile/:id" component={ ProfileId } />
					</div>
				</Router>
			</Fragment>
		);
	}
}

const IsNavLink = ({ label, to, activeOnlyWhenExact }) => (
	<Route
		path={ to }
		exact={ activeOnlyWhenExact }
		children={ ({ match }) => {
			const isSelect = match ? 'select' : '';
			const isActive = match ? 'active' : '';
			return (
				<div className={ `${isActive} ` }>
					<NavLink activeClassName={ isSelect } to={ to }>{ label }</NavLink>
				</div>
			);
		 }}
	/>
);

const Topics = ({ match }) => (
	<div className="topics_main">
		<span>Topics</span>
		<ul>
			<li>
				<Link to={ `${match.url}/rendering` }>Rendering with React</Link>
			</li>
			<li>
				<Link to={ `${match.url}/components` }>Components</Link>
			</li>
			<li>
				<Link to={ `${match.url}/props-v-state` }>Props v. State</Link>
			</li>
		</ul>
		<Route path={ `${match.url}/:topicId` } component={ Topic } />
		<Route
			exact
			path={ match.url }
			render={ () => <h3>Please select a topic.</h3> }
		/>
	</div>
);

const Topic = ({ match }) => (
	<div>
		<span>{ match.params.topicId }</span>
	</div>
);

const ProfileId = ({ match }) => (
	<div className="topics_main">
		Profile ID 是: { match.params.id }
	</div>
);

export default App;
