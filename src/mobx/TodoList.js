import { observable, action } from "mobx";

class TodoList {
  @observable list = [];
  @action add = (title) => {
    if (title) {
      this.list.push({
        id: this.list.length + 1,
        title: title,
        status: 1,
      });
    } else {
      alert('不能为空');
    }
  }
  @action edit = (data) => {
    let { id, status } = data
    this.list.find(item => item.id === id).status = status;
  }
}

export default TodoList;