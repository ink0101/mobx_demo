import React from 'react';
import { observer } from "mobx-react";

const List = observer(props => {
  return <div className="list">
    {props.store.list.length > 0 && props.store.list.map(data => [
      props.type === 0 ?
        <LiCont data={data} key={data.id} edit={props.store.edit} />
        :
        props.type === 1 && data.status === 1 ?
          <LiCont data={data} key={data.id} edit={props.store.edit} />
          :
          props.type === 2 && data.status === 0 ?
            <LiCont data={data} key={data.id} edit={props.store.edit} />
            :
            null
    ])}
  </div>
})

const LiCont = observer(props =>{
  const { data, edit } = props;
  return <li>
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
})

export default List;
