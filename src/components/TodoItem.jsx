import React from "react";
import { FaTrash } from "react-icons/fa";

export default function TodoItem({ todo, index, onDelete,toggleComplete }) {
    return (
        <li>
            
            <h3 className={todo.completed ? "line-through" : ""}>
                {todo.text} 
            </h3>
            
            <button className="complete-button" onClick={() => toggleComplete(index)}>
                {todo.completed ? "Done" : "Todo"}
            </button>
            
            <button className="delete-button" onClick={() => onDelete(index)}>
                <FaTrash /> 
            </button>
        </li>
    );
}
