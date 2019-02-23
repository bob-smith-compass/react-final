import React, { Component } from 'react';

export default class Button extends Component {
    /**
     * how to pass data our of a Class componebt using a function 
     */
    // constructor({passDataOut}) {
        // super({passDataOut});
    constructor() {
        super();
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({clicks: this.state.clicks + 1});
        // this.passDataOut();
    }
  render() {
    return (
      <div>
          <button className="btn btn-danger" onClick={this.handleClick}>{this.state.clicks}</button>
      </div>
    )
  }
}
