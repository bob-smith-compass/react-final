import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/list/List';

class App extends Component {
  handleClick() {
    alert('Clicked');
  }
  render() {
    return (
      <div>
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
        <List />
      </div>
    );
  }
}

export default App;