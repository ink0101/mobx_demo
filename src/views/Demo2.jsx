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
        <p>{newState.num}</p>
        <button type="button" onClick={newState.addNum}> + 1 </button>
      </div>
    );
  }
}

export default Demo2;