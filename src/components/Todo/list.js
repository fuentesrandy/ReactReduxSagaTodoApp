import "./list.css"
import React from "react"
import { CheckCircle, CheckCircleOutline, Undo , Delete } from '@material-ui/icons'




const TodoList = ({ title, data, onMarkComplete, onMarkUnDone, onDelete }) => {

    return <div className="todolist">
        <h1>{title}</h1>
        <ul className="list-unstyled">
            {data.map((todo, index) => (
                // all elements in a list must have a key, its react ray of tracking the elemnt 
                <li key={index}>
                    {todo.isCompleted === true &&
                        <span className="text-success" > <CheckCircle /> </span>
                    }
                    {todo.isCompleted === false &&
                        <span className="pointer text-warning" onClick={(e) => onMarkComplete(todo)} > <CheckCircleOutline /> </span>
                    }
                    {todo.taskDescription}
                    {todo.isCompleted === true &&
                        <span className="pointer float-right text-danger" onClick={(e) => onMarkUnDone(todo)} > <Undo /> </span>
                    }
                    <span className="pointer float-right " onClick={(e) => onDelete(todo)} > <Delete /> </span>
                </li>
            ))}
        </ul>
    </div>
}

export default TodoList;

