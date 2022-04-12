import React, { useState } from 'react';
import './../styles/todolist.css';
import './../styles/Form.css';

const TodoForm = ({ onCreate }) => {
  const [text, setText] = useState('');
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onCreate(text);
      setText('');
    }
  };
  return (
    <div className='Form'>
      <input
        label='Enter Name'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='Form__input'
        onKeyPress={handleKeyPress}
      />
      <button
        className='todoitem__button'
        onClick={() => {
          onCreate(text);
          setText('');
        }}
        tabIndex='0'
      >
        Create
      </button>
    </div>
  );
};

export default TodoForm;
