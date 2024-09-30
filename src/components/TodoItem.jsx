import React from "react";
import { FaTrash } from "react-icons/fa";

export default function TodoItem({ todo, index, onDelete, toggleComplete }) {
    return (
        <li className="todo-item">
            <div className="todo-content">
            <h3 className={todo.completed ? "line-through" : ""}>
                {todo.text} 
            </h3>
            </div>
            <button className="complete-button" onClick={() => toggleComplete(index)}>
                {todo.completed ? "Completed" : "Mark Completed"}
            </button>
            <button className="delete-button" onClick={() => onDelete(index)}>
                <FaTrash /> 
            </button>
        </li>
    );
}

