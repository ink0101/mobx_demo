import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class List extends Component {
  render() {
    const { store: { list, edit }, type} = this.props;

    return (
      <div>
        {list.map(item => {
          if (type === 0) {
            return (
              <LiCont data={item} edit={edit} key={item.id}/>
            )
          } else if (type === 1 && item.status === 1) {
            return (
              <LiCont data={item} edit={edit} key={item.id} />
            )
          } else if (type === 2 && item.status === 0) {
            return (
              <LiCont data={item} edit={edit} key={item.id} />
            )
          } else {
            return null;
          }
          
        })}
      </div>
    );
  }
}

export default List;

const LiCont = observer(props => {
  const { data, edit } = props;
  return <li key={data.id}>
    {data.title}
    <button onClick={() => {edit({
      id: data.id,
      status: data.status === 1 ? 0 : 1,
    })}}
    className={data.status === 1 ? "del" : "recover"}
    >
      {data.status === 1 ? "删除" : "恢复"}
    </button>
  </li>
});