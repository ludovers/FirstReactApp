import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './Menu';
import Progress from "react-progress-2";

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			headerClass: 'scrollTop'
		};
	}

	

	render() {
		return (
			<div>
				<header>
					<Progress.Component/>
					<div className="logo-wrap">
						<Link to="/">Logo</Link>
					</div>
				<Menu />
				</header>
			</div>
		);
	}
}