import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Contact from "./Contact";
import Navbar from "./Navbar";

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue, completed: false}]);
            setInputValue(""); 
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
      const newTodos = todos.map((todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodos);
  };

    return (
        <div className="audiowide-regular">
          <Navbar />
            
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Task" 
                    value={inputValue} 
                    onChange={handleChange} 
                />
                <button type="submit">Add</button>
            </form>
           
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        index={index} 
                        onDelete={handleDelete} 
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
}
