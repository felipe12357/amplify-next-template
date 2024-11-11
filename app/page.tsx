"use client";

import { useState, useEffect, useRef } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";


const client = generateClient<Schema>();

export default function App() {

  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const input_ref = useRef<HTMLInputElement>(null);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    if(input_ref.current?.value)
      client.models.Todo.create({content:input_ref.current?.value,done:false})
  }

  function deleteItem(id:string){
    client.models.Todo.delete({id})
  }


  return (
    <main>
      <h1>My todos</h1>
      <input type='text' ref={input_ref} style={{padding:'10px', borderRadius:'5px', marginBottom:'5px'}}></input>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <span style={{ marginRight:'5px', fontWeight:'bold',cursor:'pointer'}} onClick={()=>deleteItem(todo.id)}>X</span>    
          </li>     
        ))}
      </ul>
    </main>
  );
}
