import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/list/List';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.names.map((e) => {
          return <div>{e}</div>
        })}
        <List />
      </div>
    );
  }
}

export default App;



        // {/* {this.props.names.map((e) => {
        //   return (

        //     <div>
        //       <div className="card" style="width: 18rem;">
        //         {/* <img className="card-img-top" src=".../100px180/" alt="Card image cap" /> */}
        //         <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" className="btn btn-primary">Go somewhere</a>
        //       </div>
        // </div>
        //   </div> )} */}