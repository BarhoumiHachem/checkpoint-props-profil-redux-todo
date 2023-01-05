import React from 'react'
import Task from './Task'

const ListTask = ({listTodos}) => {
  return (
    <div>
        {
            listTodos.map((el,i)=><Task el={el} key={i}/>)
        }
    </div>
  )
}

export default ListTask