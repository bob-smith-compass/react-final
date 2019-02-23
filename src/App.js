import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/list/List';
import Time from './components/time/Time';
import Button from './components/button/Button';
import PropTypes from 'prop-types';


class App extends Component {
  constructor() {
    super()
    let names = ["Sara", "Natasha", "Christina"];
    this.propTypes = {
      names: PropTypes.array.isRequired
    }

  }
  handleClick() {
    alert('Clicked');
  }
  
  render() {
    return (
      <div className="container">
      <Time now={new Date().toISOString()}/>
      <Button /><br/>
      <Button /><br/>
        {this.props.names.map((e, i) => {
          return <div key={i}>
            <div className="card" style={{width: "18rem"}}>
              {/* <img className="card-img-top" src=".../100px180/" alt="Card image cap" /> */}
              <div className="card-body">
                <h5 className="card-title">{e}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" onClick={this.handleClick} className="btn btn-primary">See {i}. {e} </a>
              </div>
            </div>
          </div>
        })}
        {/* <List names={this.names}/> */}
        <List names={["Sara", "Natasha", "Christina"]}/>
      </div>
    );
  }
}

export default App;