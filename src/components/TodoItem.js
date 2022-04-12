import React from 'react';
import './../styles/todolist.css';
import moment from 'moment';
const TodoItem = ({ children, onRemove, date }) => {
  return (
    <div className='todoitem'>
      {children}
      <div style={{ color: 'grey' }}>{date}</div>
      <button size='small' onClick={onRemove} className='todoitem__button'>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
