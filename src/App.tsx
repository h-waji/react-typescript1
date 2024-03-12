import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      // console.log(res);
      setTodos(res.data);
    });
  };

  return (
    <div>
      <Text color='gray' fontSize='66px' />
      <button onClick={onClickFetchData}>FetchData</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}
