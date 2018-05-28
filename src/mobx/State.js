import { observable, action } from "mobx";

class State {
  @observable num = 0;
  @action addNum = () => {
    return this.num ++;
  }
}

export default State;