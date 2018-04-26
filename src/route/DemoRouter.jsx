import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom'

import Demo2 from '../views/Demo2';

class DemoRouter extends Component {
  render() {
    return (
      <Router>
        <Route exact={true} strict={true} path="/demo2" component={Demo2} />
      </Router>
    );
  }
}

export default DemoRouter;