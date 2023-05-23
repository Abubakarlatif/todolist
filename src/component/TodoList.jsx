import React from 'react'
import Todo from './Todo'
const TodoList = ({todo , setTodo,filterTodos}) => {

  return (
    
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodos.map((todos)=>(
            <Todo 
            text={todos.text} 
            key={todos.id}
            todo={todo}
            todos={todos}
            setTodo={setTodo}/>
        ))}
     
      </ul>
    </div>
  )
}

export default TodoList