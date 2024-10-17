//assignment -> update reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";


// nanoid = to generate unique id 

// creating initalState as an object as their can be multiple things which can come
const initialState ={
    todos:[{ id:1 , text: "Hello world"}]
}

// reducers is a functiality 
// slice is bigger version of slice

// here createSlice is method
// there it will accept objects
// create slice has inbuilt function like name , initalState which you have to provide
export const todoSlice = createSlice({
    name:'todo',
    initialState, // initalState is declared above , depends on your choice you can declare in this function or above 
    // reducers takes property and function 

    // syntax of addTodo always have state and action functionality given  
    // state ->give access to current state of the function 
    // action -> sometimes you need to accept something as an input so you get it from action
    reducers:{
        addTodo: (state, action) =>{
            const todo ={
                id: nanoid(), // id should be unique -> so now we use "nanoid" 
                text: action.payload // payload is an object you can take id , text , etc
            }
            state.todos.push(todo) // here we added push method because the todos is an array 
        },
        removeTodo :(state, action) =>{
            state.todos= state.todos.filter((todo)=>{
                todo.id!==action.payload
            })
        },
    }
})

export const {addTodo, removeTodo}= todoSlice.actions

// moreover store also needs the awareness of the todo  reducers, so that it can maintain the and update the reducers
export default todoSlice.reducer