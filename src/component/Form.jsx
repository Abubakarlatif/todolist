import React from 'react'

const Form = ({setInputText, inputText, todo, setTodo, setStatus }) => {
  const  inputTextHandler =(e)=>{
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  const sumbitTodo = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: inputText, completed: false, id: Math.random() * 1000 } 
    ]);
    setInputText("");
  };
  const statusHandle = (e) => {
    setStatus(e.target.value);
  };
  return (
<form>
    <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input'/>
    <button onClick={sumbitTodo} className='todo-button' type = " Submit">
        <i class = "fas fa-plus-square"></i>
    </button>
    <div className='select'>
        <select onChange={statusHandle} name='todos' className='filter-todo'>
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
        </select>
    </div>
    
</form>
  )
}

export default Form