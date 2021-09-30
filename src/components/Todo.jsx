import React from 'react';

const Todo = ({ todo, index, deleteTodo, modifyTodo, toggleComplete, handleChange }) => {


  return (
    <>
       
      <div className='list'>
       

          <input className = 'check' type="checkbox" onChange={()=>toggleComplete(index)}checked={index}/>
      
          <h3>{todo}</h3>


          <button className='btn-delete' onClick={() => deleteTodo(index)}>
           x
          </button>
          


       
        <input type="text" className= 'editar' name= 'todo' onChange={handleChange}/>
        <button className='btn-edit' onClick={() => modifyTodo    (index)}>
          Editar
        </button>

         
        </div>
        
        


      
    </>
  );
};

export default Todo;
