import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
	constructor(){
		super()
	}

	render() {
		return(
			<div className="menu">
				<ul className="alignright">
					<li onClick={this.loadFeed}><Link to="/">Home</Link></li>
					<li onClick={this.loadFeed}><Link to="/todos">todos</Link></li>
					<li onClick={this.loadFeed}><Link to="/archives">archives</Link></li>
					<li onClick={this.loadFeed}><Link to="/jobs">jobs</Link></li>
					<li onClick={this.loadFeed}><Link to="/posts">posts</Link></li>
				</ul>
			</div>
		);
	}
}