import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../Redux/Actions/TaskAction' 
import './AddTask.css'

const AddTask = () => {

  const dispatch = useDispatch ()

  const [input,setInput]= useState ({ description:"" })

    const AddNewTask = (e) => {
      e.preventDefault();
      if (input.description.length !== 0 )  dispatch (addTask(input))
      setInput({description:""})
  }

  return (
      <div className='addtask'>
          <input className='input' type="text" placeholder='write your new task' value={input.description} onChange={(e)=>setInput({description:e.target.value})}/>
          <Button variant="success" onClick={AddNewTask}>Add Task</Button>
      </div>
  )
}

export default AddTask