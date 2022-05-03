import React, { useState, useEffect, useCallback } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './../styles/Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleCreate = useCallback((text) => {
    setTodos((prevtodo) => [...prevtodo, text]);
  }, []);

  const handleRemove = useCallback((index) => {
    setTodos((prev) => {
      const newTodos = [...prev];
      newTodos.splice(index, 1);
      return newTodos;
    });
  }, []);
  const handleToDoChanged = useCallback((index, value) => {
    return (value) => {
      setTodos((prev) => {
        const newTodos = [...prev];
        newTodos[index].done = value;
        return newTodos;
      });
    };
  }, []);

  return (
    <div className='toDoWrapper'>
      <TodoForm onCreate={handleCreate} />
      <TodoList
        todos={todos}
        onRemove={handleRemove}
        onTodoChange={handleToDoChanged}
      />
    </div>
  );
};

export default Todo;
