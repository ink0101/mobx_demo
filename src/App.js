import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom'

import './App.css';
import DemoRouter from './route/DemoRouter.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <DemoRouter {...this.props} />
      </Router>
    );
  }
}

export default App;
