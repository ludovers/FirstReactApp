import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './Menu';

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<header>
					<div className="logo-wrap">
						<Link to="/">Logo</Link>
					</div>
				<Menu />
				</header>
			</div>
		);
	}
}