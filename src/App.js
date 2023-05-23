import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';
import { useEffect, useState } from 'react';
function App() {
  const [inputText,setInputText] = useState("");
  const [todo ,setTodo] = useState([]);
  const [status,setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  useEffect(()=>{
    getLocalTodos();
  },[])
  useEffect(()=>{
    filterHandle();
    saveLocalTodos();
  },[todo,status])
const saveLocalTodos=()=>{
    localStorage.setItem("todo",JSON.stringify(todo));
}
const getLocalTodos=()=>{
  if(localStorage.getItem("todo") === null){
    localStorage.setItem('todo',JSON.stringify([]));
  }else{
    let todoLocl=localStorage.setItem("todo",JSON.stringify(todo));
    console.log(todoLocl)
  }
}

  const filterHandle=()=>{
    switch(status){
      case 'completed':
        setFilterTodos(todo.filter(todos => todos.completed == true))
      break;
      case 'uncompleted':
        setFilterTodos(todo.filter(todos => todos.completed == false))
      break;
      default:
        setFilterTodos(todo)
      break;

    }
  }
  return (
    <div className="App">
   <header>
    <h1>
      Abubakar's Todo List 
    </h1>
   </header>
   <Form 
   setInputText={setInputText}
   todo={todo}
   setTodo={setTodo}
   inputText={inputText}
   setStatus ={setStatus}
   />
   <TodoList 
   todo={todo}
   setTodo={setTodo}
   filterTodos={filterTodos}
   />
    </div>
  );
}

export default App;
