import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from './Menu';

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			headerClass: 'scrollTop'
		};
	}

	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
	    let scrollTop = event.srcElement.body.scrollTop;

	    if(scrollTop >= 100){
	    	this.setState({
		      headerClass: 'scrolled'
		    });
	    }else{
	    	this.setState({
		      headerClass: 'scrollTop'
		    });
	    }
	    
	}

	render() {
		return (
			<div>
				<header className={this.state.headerClass}>
					<div className="logo-wrap">
						<Link to="/">Logo</Link>
					</div>
				<Menu />
				</header>
			</div>
		);
	}
}