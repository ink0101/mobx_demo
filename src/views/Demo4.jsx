import React, { Component } from 'react';
import { useStrict } from "mobx";
import { observer } from "mobx-react";
import TodoList from "../mobx/TodoList";
import List from "../components/List"

useStrict(true);
const newState = new TodoList();

@observer
class Demo4 extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" ref="todoInput"/>
          <button type="button" onClick={() => {newState.add(this.refs['todoInput'].value)}}>添加</button>
        </div>

        <div className="con">
          <div className="box">
            全部
            <List type={0} store={newState} />
          </div>

          <div className="box">
            未删除
            <List type={1} store={newState} />
          </div>

          <div className="box">
            已删除
            <List type={2} store={newState} />
          </div>
        </div>
      </div>
    );
  }
}

export default Demo4;