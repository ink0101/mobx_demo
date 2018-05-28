import React, { Component } from 'react';
import { useStrict } from "mobx";
import { observer } from "mobx-react";
import TodoList from "../mobx/TodoList";

useStrict(true);
const newState = new TodoList();

@observer
class Demo3 extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" ref="todoInput"/>
          <button type="button" onClick={() => {newState.add(this.refs['todoInput'].value)}}>添加</button>
        </div>
        <ul>
          {newState.list.map(item => 
            <li key={item.id}>
              {item.title}
              <button className={item.status === 1 ? "del" : "recover"} onClick={() => {newState.edit({id: item.id, status: item.status === 1 ? 0 : 1})}}>
                {item.status === 1 ? "删除" : "恢复"}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Demo3;