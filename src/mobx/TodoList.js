import { observable, action } from "mobx";

class TodoList {
  @observable list = [];
  @action add = (title) => {
    if (title) {
      this.list.push({
        id: this.list.length + 1,
        title: title,
      });
    } else {
      alert('不能为空');
    }
  }
}

export default TodoList;