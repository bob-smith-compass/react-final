import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0}
    }
    handleClick() {
        this.setState({clicks: this.state.clicks + 1})
    }
  render() {
    return (
      <div>
          <button onClick={this.handleClick}>{this.state.clicks}</button>
      </div>
    )
  }
}
