import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';
import DemoRouter from './route/DemoRouter.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/demo1">demo1</Link>
                </li>
                <li>
                  <Link to="/demo2">demo2</Link>
                </li>
              </ul>
            </nav>
            <div>
              <Route exact={true} strict={true} path="/home" component={Home} />
              <Route exact={true} strict={true} path="/demo1" component={Demo1} />
              <DemoRouter {...this.props} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Demo1 = () => (
  <div>
    <h2>Demo1</h2>
  </div>
)

export default App;
