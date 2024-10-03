import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'


function TodoForm() {
    
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo() // here we use use the useTodo hook to access the addTodo function from your context.

    const add =(e)=>{
        e.preventDefault()

        if(!todo) return
        addTodo({ todo, completed :false})
        setTodo("")
    }
    /*
    add is a function that handles the form submission.
e.preventDefault() prevents the default form submission behavior.
The function checks if todo is empty. If it is, the function returns early and does nothing.
If todo is not empty, it calls addTodo with a new todo object containing the current todo value and completed: false.
Finally, it resets the todo state to an empty string.*/

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

