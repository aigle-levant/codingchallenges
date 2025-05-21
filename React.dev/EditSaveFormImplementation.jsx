/*

problem statement

This form switches between two modes: in the editing
mode, you see the inputs, and in the viewing mode, you
only see the result. The button label changes between
“Edit” and “Save” depending on the mode you’re in.

When you change the inputs, the welcome message at
the bottom updates in real time.

Your task is to reimplement it in React in the sandbox
below. For your convenience, the markup was already
converted to JSX, but you’ll need to make it show and
hide the inputs like the original does.

Make sure that it updates the text at the bottom, too!

*/

import { useState } from "react";

export default function EditProfile() {
  const [editing, isEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleClick() {
    if (editing) {
    }
    isEditing(!editing);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        isEditing(!editing);
      }}
    >
      <label>
        First name:{" "}
        {editing ? (
          <>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </>
        ) : (
          <>
            <b>{firstName}</b>
          </>
        )}
      </label>
      <label>
        Last name:{" "}
        {editing ? (
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button
        type="submit"
        onClick={() => {
          handleClick;
        }}
      >
        Edit Profile
      </button>
      <p>
        {editing ? (
          <i>What is your name?</i>
        ) : (
          <i>
            Hello, {firstName} {lastName}!
          </i>
        )}
      </p>
    </form>
  );
}