import React, { useState } from 'react';
import Todo from './Todo';

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({});

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value });
  const handleText = (e) => setTodo({ [e.target.name]: e.target.value });

  const handleClick = (e) => {
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
      alert('El campo no puede estar vacio');
      return;
    }
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const modifyTodo = (index) => {
    const newEdit = [...todos];
    newEdit.splice(index, 1,todo);
    setTodos(newEdit);
  };

  return (
    <>
      <form className='form1' onSubmit={(e) => e.preventDefault()}>
        <label>Todo App</label>
        <br />
        <input type='text' name='todo' onChange={handleText}></input>
        <button onClick={handleClick}>Agregar</button>
      </form>

      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
          handleChange={handleChange}
        />
      ))}
    </>
  );
};

export default Form;