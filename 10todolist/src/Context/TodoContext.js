import  {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos:[ // this is the properties 
        {
            id:1,
            todo: "Todo msg",
            completed :false
        }
    ],
    // now you add functionality in the todo
    addTodo :(todo) =>{},
    updatedTodo :(id, todo) =>{},
    deleteTodo :(id) =>{},
    toggleComplete :(id) =>{}
})

export const useTodo =() =>{
    return useContext(TodoContext) 
    // useContext always takes an argument on which you are taking  
}

export const TodoProvider = TodoContext.Provider;