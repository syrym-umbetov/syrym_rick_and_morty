import React, { useState } from 'react';

const Caesar = () => {
  const [change, setChange] = useState('');
  console.log('change', change);
  return (
    <div className='Caesar'>
      <div className='post'>
        <div className='post__content'>
          <strong>1.Javascript</strong>
          <div>Javascript - programming language</div>
          <div className='post__btns'>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caesar;
