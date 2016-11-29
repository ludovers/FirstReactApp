import React, { Component } from 'react';
import { Link } from 'react-router';
import Progress from "react-progress-2";

export default class Menu extends React.Component {
	constructor(){
		super()
	}

	onLoadFeedCallback() {
	    Progress.hide();
	    // render feed.
	}

	loadFeed() {
	    //Progress.show();
	    // do your ajax thing.
	}

	render() {
		return(
			<div className="menu">
				<ul className="alignright">
					<li onClick={this.loadFeed}><Link to="/">Home</Link></li>
					<li onClick={this.loadFeed}><Link to="/todos">todos</Link></li>
					<li onClick={this.loadFeed}><Link to="/archives">archives</Link></li>
					<li onClick={this.loadFeed}><Link to="/jobs">jobs</Link></li>
					<li onClick={this.loadFeed}><Link to="/tast">posts</Link></li>
				</ul>
			</div>
		);
	}
}