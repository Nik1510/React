import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/Todoitem'

function App() {
  const [todos,setTodos] = useState([])
  // todos is an array 

  const addTodo = (todo) =>{
    // if we pass setTodos(todo) all the prev values will be omited
    // therefore we use callBack 
    // we have maked todo an object so we have to create a todo 
    // therefore we cannot give a direct value "todo" to it, so we have to id  
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }


  const updatedTodo =(id, todo) =>{
    // todo is arrays , so we need to use loop ,   to find which id of todo to be updated
    // we used map to visit each id and asked a question that prevTodo.id === to user input id 
    // if true then we return the updated todo
   // else to do nothing 
    setTodos((prev)=> prev.map((prevTodo) =>(prevTodo.id=== id ? todo : prevTodo)))
  }

  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo) => todo.id !=id))
  }

  const toggleComplete = (id) => {
    // Call setTodos to update the state of todos
    setTodos((prev) => 
      // Use map to iterate over the previous todos array
      prev.map((prevTodo) => 
        // Check if the current todo's id matches the provided id
        prevTodo.id === id 
          // If it matches, create a new todo object with the completed property toggled
          ? { ...prevTodo, completed: !prevTodo.completed } 
          // If it doesn't match, return the todo as is
          : prevTodo 
      )
    );
  };
  
  // now we start to store in Local storage
  // local storage stores and return the value in string 
  useEffect (()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) =>(
                          <div key ={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
