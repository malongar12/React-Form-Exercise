import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [newTodo, setnewTodo] = useState([]);

  const handleClick = (e) => {
    setTodo(e.target.value);
  };

  const handleTodo = () => {
    setnewTodo([...newTodo, todo]);
  };

  const handleDelete = (id) => {
    setnewTodo(
      newTodo.filter((todos) => {
        return todos !== id;
      })
    );
  };

  return (
    <>
      <div>
        <h2>TodoList</h2>
        <input
          type="text"
          placeholder="Enter a task"
          value={todo}
          onChange={handleClick}
        ></input>
        <button onClick={handleTodo}>Add</button>
        <div className="todoContainer">
          {newTodo.map((items, id) => (
            <div>
              <ul>
                <li key={id}>
                  {items}

                  <button onClick={() => handleDelete(items)}>X</button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
