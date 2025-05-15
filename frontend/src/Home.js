import React, { useState } from "react";
import CreateNote from "./createNote";

export default function Home(){
  const [todos, setTodos] = useState([]);
  return(
    <div>
      <h1>Donezo</h1>
      <CreateNote />
      {
        todos.length === 0 
        ? 
        <div><h2>No Records</h2></div>
        :
        todos.map(todo =>{
          <div>
            {todo}
          </div>
        })
      }
    </div>
  )
}