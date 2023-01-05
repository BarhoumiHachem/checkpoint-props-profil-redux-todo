import React, { useState } from 'react'
import './Task.css'
import { Button , Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { delTask , toggleTask , editTask} from '../Redux/Actions/TaskAction'

//* modale *//
import Modal from 'react-bootstrap/Modal';

const Task = ({el}) => {

  const [taskUpd , setTaskUpd] = useState(el)


  const dispatch = useDispatch()

  // delete task //
  const removeTask = () =>{
    dispatch (delTask (el.id))
  }

  // toggle task //
  const handleToggle  = () =>{
    dispatch (toggleTask (el.id))
  }

  // edit task //
  const handleEdit = () => {
    dispatch (editTask(taskUpd))
    handleClose()
}
/* modale update */
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div className='task'>
      <Form.Check type="switch" id="custom-switch" onClick={handleToggle}/>
      <div className='description'>
          <h3 className='tasknew' style={{color : el.isDone ? "green" : "black"}}>{el.description}</h3>
      </div>
      <Button className='btn-del' variant="danger" onClick={removeTask} >Delete</Button>
      {el.isDone? null : 
              <Button variant="primary" onClick={handleShow}> Update </Button>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                value={taskUpd.description}
                onChange={(e)=>setTaskUpd({...taskUpd , description : e.target.value}) }
                
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    )
}

export default Task