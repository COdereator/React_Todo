import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, settodoList] = useState([])

  const submit = (event)=>{
    event.preventDefault();
    
    let name = event.target.name.value
    
    if(!todoList.includes(name)){
      let finalTodo = [...todoList,name];
      settodoList(finalTodo);
      event.target.name.focus();
    }
    else{
      alert("Item added already..")
    }

  }

 const deleteTodo = (index)=>{
  
  let finalTodo = todoList.filter((v,i)=> i!=index ) 
  settodoList(finalTodo);

 }

  return (
    <>
      <div className="cont">

        <h1>TodoApp</h1>

        <form onSubmit={submit}>
          <input type="text" name="name"/>
          <button>Add</button>
        </form>

        <ul>
          {
            todoList.map((value,index)=>
              <>
            <li key={value}>
              {value}
              <span onClick={()=>deleteTodo(index)}>&times;</span>
            </li>
            </>
            )
          }
        </ul>

      </div>
    </>
  )
}

export default App
