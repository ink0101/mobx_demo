import { observable, action, computed } from "mobx";

class State {
  @observable num1 = 0;
  @action addNum1 = () => {
    return this.num1 ++;
  }

  @observable num2 = 0;
  @action addNum2 = () => {
    return this.num2 ++;
  }

  @computed
  get total () {
    return this.num1 + this.num2;
  }
}

export default new State();