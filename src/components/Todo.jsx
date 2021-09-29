import React from 'react';

const Todo = ({ todo, index, deleteTodo, modifyTodo, toggleComplete, handleChange }) => {


  return (
    <>
       {
      <div className='list'>
       

          <input type="checkbox" onChange={()=>toggleComplete(index)}checked={index}/>
      
          <h3>{todo}</h3>


          <button className='btn-delete' onClick={() => deleteTodo(index)}>
           x
          </button>
          </div>


        }

        <form className="formulario" >Edit Todo
        <input type="text" name= 'todo' onChange={handleChange}/>
        <button className='btn-edit' onClick={() => modifyTodo    (index)}>
          Editar
        </button>


        </form>

        
        


      
    </>
  );
};

export default Todo;