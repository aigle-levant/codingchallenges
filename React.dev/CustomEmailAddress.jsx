// problem statement -> Make a component that lets you
// create your own email address from input.

import React from 'react';

export default function Form() {
// object created here with predefined values
  const [email, setEmail] = React.useState({
    username: "anon",
    mailserver: "yandex"
  });

  function handleInput(e) {
// we use the state function to change values
// to keep all changing functions in one place, we use
// e.target.name: e.target.value after object spread syntax
    setEmail({
      ...email,
      [e.target.name]: [e.target.value]
  })}

  return (
// value is set accordingly
// onChange modifies email.[value] at <p> when input is
// entered
    <>
      <form className='form'>
        <label for="username">Username:</label>
        <input
            className='input'
            type="text"
            name="username" value={email.username}
            onChange={handleInput}
        />
        <label for="mailserver">
            Which mail server do you use?
        </label>
        <input
            className='input'
            type="text"
            name="mailserver"
            value={email.mailserver}
            onChange={handleInput}
        />
      </form>
      <p>
        Here's your email address :
        {email.username}@{email.mailserver}.com
      </p>
    </>
  )
}