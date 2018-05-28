import React, { Component } from 'react';
import { useStrict } from "mobx";
import { observer } from "mobx-react";
import State from "../mobx/State";

useStrict(true);
const newState = new State();

@observer
class Demo2 extends Component {
  render() {
    return (
      <div>
        <p>num1: {newState.num1}</p>
        <button type="button" onClick={newState.addNum1}> num1 + 1 </button>

        <p>num2: {newState.num2}</p>
        <button type="button" onClick={newState.addNum2}> num2 + 1 </button>

        <p>total: {newState.total}</p>
      </div>
    );
  }
}

export default Demo2;