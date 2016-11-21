import React, { Component } from 'react';
import Header from './Header';
require('./styles/style.scss');

export default class App extends React.Component {
  render() {
    return (
      <div>
      	<Header />
      	<main>
      		{this.props.children}
      	</main>
      </div>
    );
  }
}
