import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom'

import Demo1 from '../views/Demo1';
import Demo2 from '../views/Demo2';
import Demo3 from '../views/Demo3';

class DemoRouter extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <ul>
            <li>
              <Link to="/demo1">demo1</Link>
            </li>
            <li>
              <Link to="/demo2">demo2</Link>
            </li>
            <li>
              <Link to="/demo3">demo3</Link>
            </li>
          </ul>
        </nav>
        <Route exact={true} strict={true} path="/demo1" component={Demo1} />
        <Route exact={true} strict={true} path="/demo2" component={Demo2} />
        <Route exact={true} strict={true} path="/demo3" component={Demo3} />
        
      </Fragment>
      
    );
  }
}

export default DemoRouter;