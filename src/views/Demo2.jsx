import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

@inject('state')
@observer
class Demo2 extends Component {
  render() {
    const { state: newState } = this.props
    return (
      <div>
        <p>num1: {newState.num1}</p>
        <button type="button" onClick={newState.addNum1}> num1 + 1 </button>

        <p>num2: {newState.num2}</p>
        <button type="button" onClick={newState.addNum2}> num2 + 1 </button>

        <p>total: {newState.total}</p>
        test
      </div>
    );
  }
}

// const Demo2 = inject('state')(
//   observer((props) => {
//     console.log(props);
//     const { state: newState } = props
//     console.log(newState);
    
//     return (
//       <div>
//         <p>num1: {newState.num1}</p>
//         <button type="button" onClick={newState.addNum1}> num1 + 1 </button>
  
//         <p>num2: {newState.num2}</p>
//         <button type="button" onClick={newState.addNum2}> num2 + 1 </button>
  
//         <p>total: {newState.total}</p>
//         test
//       </div>
//     );
//   })
// )

export default Demo2;