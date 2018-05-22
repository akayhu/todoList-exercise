import React, { Component } from 'react';
import './index.css';
import { Route, Link } from "react-router-dom";

const navData = [
	{
		label: '首頁',
		to: '/',
		activeOnlyWhenExact: true
	},
	{
		label: 'TodoList 練習',
		to: '/todoList',
		activeOnlyWhenExact: false
	},
	{
		label: 'Topics 範例',
		to: '/topics',
		activeOnlyWhenExact: false
	},
	{
		label: '取 Profile ID 範例',
		to: '/profile/9527',
		activeOnlyWhenExact: false
	},
	{
		label: 'Redux Form練習',
		to: '/reduxForm',
		activeOnlyWhenExact: false
	}
];

class NavLink extends Component {
	render() {
		const { to, activeOnlyWhenExact, label } = this.props.data;
		return (
			<Route
				path={ to }
				exact={ activeOnlyWhenExact }
				children={ ({ match }) => {
					const isSelect = match ? 'select' : '';
					const isActive = match ? 'active' : '';
					return (
						<div className={ `${isActive} ` }>
							<Link activeclassname={ isSelect } to={ to }>{ label }</Link>
						</div>
					);
				} }
			/>
		);
	}
}

class Nav extends Component {
	render() {
		return (
			<nav className="nav">
				{
					navData.map((items, index) => <NavLink data={ items } key={ index } /> )
				}
			</nav>
		)
	}
}

export default Nav;
