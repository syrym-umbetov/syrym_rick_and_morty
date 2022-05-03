import React, { useCallback } from 'react';
import TodoItem from './TodoItem';
import './../styles/todolist.css';
const TodoList = ({ todos, onRemove }) => {
  const handleRemove = useCallback(
    (index) => {
      return () => onRemove(index);
    },
    [onRemove]
  );
  return (
    <ul className='todolist'>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.created}
          todo={todo}
          onRemove={handleRemove(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
