import { ADD_TASK , DEL_TASK , TOGGLE_TASK , EDIT_TASK , TOGGLE_FILTER} from "./Types";
import { v4 as uuidv4 } from 'uuid';



export const addTask = (newTask) => {
    return {
        type: ADD_TASK,
        payload: {... newTask , id:uuidv4() , isDone:false}
    }
}

export const delTask = (id) => {
    return {
        type: DEL_TASK,
        payload: id
    }
}

export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

export const editTask = (el) => {
    return {
        type: EDIT_TASK,
        payload: el
    }
}

export const filterTask = (filter) => {
    return {
        type : TOGGLE_FILTER ,
        payload : filter
    }
}
