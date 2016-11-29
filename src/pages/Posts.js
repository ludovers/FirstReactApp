import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Posts extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount(){
		var _this = this;
			this.serverRequest = axios.get("http://360.and-a.nl/wp-json/wp/v2/posts").then(function(result) {    
	      _this.setState({
	        posts: result.data
	      });
	      console.log(result.data);
	    })
	}

	render() {
	    return (
	      <div className="yellow bg">
	        <h1>Posts!</h1>
	        {/* Don't have an ID to use for the key, URL work ok? */}
	        {this.state.posts.map(function(post) {
	          return (
	            <div key={post.id} className="post">
	            	<b>{post.title.rendered}</b> - <Link to={post.acf.event_link}>Facebook</Link>
	            </div>
	          );
	        })}
	      </div>
	    )
	}

}