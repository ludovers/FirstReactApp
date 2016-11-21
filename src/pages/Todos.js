import React, { Component } from 'react';

export default class Todos extends React.Component {
	constructor(){
		super();
		this.state = {
			test: 'ewa'
		}
	}

	tist(){
		alert(this.state.test);
	}

	render() {
		return (
			<div className="blue bg">
				<h1>
		        	Todos {this.state.test}!
		        </h1>
	        </div>
		);
	}
}