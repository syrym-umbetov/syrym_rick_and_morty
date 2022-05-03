import React, { useState, useCallback, useMemo } from 'react';
import './../styles/todolist.css';
import './../styles/Form.css';

const TodoForm = ({ onCreate }) => {
  const [text, setText] = useState('');
  const handleCreate = useCallback(
    (e) => {
      e.preventDefault();
      onCreate({
        text,
        created: new Date(),
        done: false,
      });
      setText('');
    },
    [onCreate, text]
  );
  const isDisabled = useMemo(() => {
    return text.trim().length === 0;
  }, [text]);
  return (
    <form onSubmit={handleCreate} className='Form'>
      <input
        label='Enter Name'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='Form__input'
      />
      <button disabled={isDisabled} className='todoitem__button' type='submit'>
        Create
      </button>
    </form>
  );
};

export default TodoForm;
