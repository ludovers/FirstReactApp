import React, { Component } from 'react';
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
			this.serverRequest = axios.get("http://localhost:8080/wp-json/wp/v2/posts").then(function(result) {    
	      _this.setState({
	        posts: result.data.posts
	      });
	    })
	}

	render() {
	    return (
	      <div>
	        <h1>Jobs!</h1>
	        {/* Don't have an ID to use for the key, URL work ok? */}
	        {this.state.post.map(function(post) {
	          return (
	            <div key={post.id} className="post">
	              <a href={post.link}>
	                {post.content}
	              </a>
	            </div>
	          );
	        })}
	      </div>
	    )
	}

}