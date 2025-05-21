// problem statement -> Write a conditional for
// displaying different messages in a box for user
// login states.

import React from "react";


export default function Message() {
  // initial = started
  const [initial, result] = React.useState('started');
  const refs = React.useRef(null);
  switch (initial) {
    case 'success':
      refs.current.innerText = 'success';
      break;
    case 'failure':
      refs.current.innerText = 'failure';
      break;
  }
  return (
    <div className='message-box'>
      <p ref={refs}>Text</p>
      <button onClick={() => result('started')}>
        Click me
      </button>
    </div>
  )
}