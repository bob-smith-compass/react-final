import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/list/List';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <List />
      </div>

    );
  }
}

export default App;
