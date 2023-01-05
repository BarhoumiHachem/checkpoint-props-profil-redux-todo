import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import ListTask from './Todocomponents/ListTask'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Todocomponents/AddTask';
import { Button } from 'react-bootstrap'
import { filterTask } from './Redux/Actions/TaskAction';


const AppRedux = () => {
  const listTodos= useSelector(state=>state.TodoReducer.todos)
  const taskFiltred = useSelector(state=> state.TodoReducer.filter)

  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div className='App-header'>
        <AddTask />
        <div className='filter'>
          <Button className='btnfilter' variant="secondary" onClick={()=>dispatch(filterTask('All'))}>All Task</Button>
          <Button className='btnfilter' variant="warning" onClick={()=>dispatch(filterTask(true))}>Done Task</Button>
          <Button className='btnfilter' variant="info" onClick={()=>dispatch(filterTask(false))}>Not Done Task</Button>
        </div>
        <ListTask
        listTodos={ taskFiltred ===  'All' ? listTodos : listTodos.filter(el => el.isDone === taskFiltred )}/>

      </div>
    </div>    
  )
}

export default AppRedux;