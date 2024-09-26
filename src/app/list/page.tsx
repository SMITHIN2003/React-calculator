import React from 'react'

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

async function fetchTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    if(!res.ok){
        throw new Error('Failed to fetch data');
    }
  return res.json();
}

const TodoList = async () => {
    const todos: Todo[] = await fetchTodos();
    
     return(
        <div>
            <h1>Todo LIst</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'completed' : 'pending'}    
                    </li>
                ))}
            </ul>
        </div>
     );
};

export default TodoList;