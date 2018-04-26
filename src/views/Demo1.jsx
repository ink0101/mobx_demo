import React, { Component } from 'react';
import { observable, autorun } from 'mobx';

let todoStore = observable({
  todos: [],

  // 推导值
  get completedCount() {
    return this.todos.filter(todo => todo.completed).length;
  }
})

autorun(function () {
  console.log("Completed %d of %d items",
    todoStore.completedCount,
    todoStore.todos.length
  );
});

todoStore.todos[0] = {
  title: 'action',
  completed: false,
}

todoStore.todos[0].completed = true;

class Demo1 extends Component {
  
  render() {
    return (
      <div>
        <h3>Mobx 版本：4.2.0</h3>
      </div>
    );
  }
}

export default Demo1;