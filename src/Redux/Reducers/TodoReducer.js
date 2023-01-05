import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK , DEL_TASK ,TOGGLE_TASK , EDIT_TASK , TOGGLE_FILTER} from '../Actions/Types';


const initState = {
    filter : 'All',
    todos : [
        {
            description:"learn CSS",
            id: uuidv4(),
            isDone: false},
        {
            description:"learn HTML",
            id: uuidv4(),
            isDone: false},
    ]
}

const TodoReducer = (state=initState, {type,payload})=>{

    switch (type) {
        case ADD_TASK:
            return{
                ...state , 
                todos: [...state.todos, payload]
            }

        case DEL_TASK:
            return{
                ...state , 
                todos: state.todos.filter(elm => elm.id!==payload)
            }
        
            case TOGGLE_TASK:
            return {
                ... state ,
                todos : state.todos.map(elm=> elm.id === payload ? {...elm , isDone : !elm.isDone} : elm)
            }

            case EDIT_TASK :
                return {
                    ...state ,
                    todos : state.todos.map(elm=>elm.id === payload.id ? payload : elm)
                }

            case TOGGLE_FILTER : 
                return {
                    ...state,
                    filter : payload
                }

        default:
            return state
        }
} 

export default TodoReducer