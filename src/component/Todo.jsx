import React from 'react'

const Todo = ({text,todo,setTodo,todos}) => {
    const deleteItems =()=>{
        setTodo(todo.filter((el)=>el.id !== todos.id))
    }
    const completHndle = () => {
        setTodo(todo.map((item) => {
          if (item.id === todos.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }));
      };
      
  return (
    <div className='todo'>
    <li className={`todo-item ${todos.completed ? "completed" : ""}`}> {text}</li>
    <button onClick={completHndle} className='complete-btn'>
        <i className='fas fa-check'></i>
    </button>
    <button onClick={deleteItems} className='trash-btn'>
        <i className='fas fa-trash'></i>
    </button>
    </div>
  )
}

export default Todo