import React, { Component } from 'react';
import axios from 'axios';
// Just the state part of creating a React component

export default class Comments extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest = axios.get("http://codepen.io/jobs.json").then(function(result) {    
      _this.setState({
        jobs: result.data.jobs
      });
    })
  }

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }

  render() {
    return (
      <div className="green bg">
        <h1>Jobs!</h1>
        {/* Don't have an ID to use for the key, URL work ok? */}
        {this.state.jobs.map(function(job) {
          return (
            <div key={job.url} className="job">
              <a href={job.url}>
                {job.company_name}
                is looking for a 
                {job.term}
                {job.title}
              </a>
            </div>
          );
        })}
      </div>
    )
  }
};