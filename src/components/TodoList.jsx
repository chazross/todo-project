import React from "react";

export default function TodoList() {
    const handleSubmit = (e) => {
     e.preventDefault();
     console.log("submit");
    }
  return (
    <div>
        <h1>TodoList</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="Add todo" />
            <button type="submit">Add</button>
        </form>
        <ul>
            <li>todo-1</li>
            <li>todo-2</li>
            <li>todo-3</li>
        </ul>
    </div>
  );
}
