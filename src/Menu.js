import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
	// constructor(){
	// 	super()
	// 	this.state = {
	// 		collapsed: true,
	// 	}
	// }

	// toggleCollapse() {
	//     const collapsed = !this.state.collapsed;
	//     this.setState({collapsed});
	//   }
	  
	render() {
		return(
			<div className="menu">
				<ul className="alignright">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/todos">todos</Link></li>
					<li><Link to="/archives">archives</Link></li>
					<li><Link to="/jobs">jobs</Link></li>
					<li><Link to="/tast">posts</Link></li>
				</ul>
			</div>
		);
	}
}