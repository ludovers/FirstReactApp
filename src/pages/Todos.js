import React, { Component } from 'react';

export default class Todos extends React.Component {
	constructor(){
		super();
		this.state = {
			todos: []
		}
	}

	updateItems = (newTodo) => {
		var allTodos = this.state.todos.concat([newTodo]);
		this.setState({todos: allTodos});
	}



	render() {
		
		return (
			<div className="blue bg">
				<h1>Todos!</h1>
				<TodoForm onFormSubmit={this.updateItems}/>
				<TodoItems todoProp={this.state.todos}/>
				<pre>{JSON.stringify(this.state.todos, null, 2)}</pre>
	        </div>
		);
	}
}

class TodoItems extends React.Component {
	render(){
		var myTodo = this.props.todoProp.map((todos, index) => {
	    	return <li key={index}>{todos}</li>
		});
		return(
			<div>
				<ul>
					{myTodo}
				</ul>
			</div>
		)
	}
}

class TodoForm extends React.Component {
	constructor(){
		super();
		this.state = {
			todo: ''
		}
	}

	changeForm = (e) => {
		this.setState({todo: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.todo);
		this.setState({todo: ''});
		this.refs.todo.focus();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
		        	<input type="text" ref='todo' onChange={this.changeForm} value={this.state.todo}/>
		        </form>
	        </div>
		)
	}
}