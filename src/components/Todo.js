import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './../styles/Todo.css';
import moment from 'moment';

const Todo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleCreate(text) {
    //delete todoitem
    setTodos([...todos, text]);
  }
  function handleRemove(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log('remove', newTodos);
  }
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');

  return (
    <div className='toDoWrapper'>
      <TodoForm onCreate={handleCreate} />
      <TodoList todos={todos} onRemove={handleRemove} date={date} />
    </div>
  );
};

export default Todo;
