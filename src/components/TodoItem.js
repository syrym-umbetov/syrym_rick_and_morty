import React, { useState, useMemo } from 'react';
import './../styles/todolist.css';

const TodoItem = ({ todo, onRemove }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const created = useMemo(() => {
    return new Date(todo.created).toLocaleTimeString;
  }, [todo.created]);
  return (
    <div className='todoitem'>
      {isChecked ? (
        <div style={{ textDecorationLine: 'line-through' }}>{todo.text}</div>
      ) : (
        todo.text
      )}
      <div style={{ color: 'grey' }}>{created}</div>
      <button size='small' onClick={onRemove} className='todoitem__button'>
        Delete
      </button>
      <input
        type='checkbox'
        id='topping'
        name='topping'
        value='Paneer'
        checked={todo.done}
        onChange={handleOnChange}
      />
      <div className='result'>{isChecked ? 'Done' : ''}</div>
    </div>
  );
};

export default TodoItem;
