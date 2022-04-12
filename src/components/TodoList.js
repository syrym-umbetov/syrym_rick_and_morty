import React from 'react';
import TodoItem from './TodoItem';
import './../styles/todolist.css';
const TodoList = ({ todos, onRemove, date }) => {
  return (
    <ul className='todolist'>
      <TodoItem>Make your to-do list!</TodoItem>
      {todos.map((todo) => (
        <div>
          <TodoItem date={date} onRemove={(index) => onRemove(index)}>
            {todo}
          </TodoItem>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
