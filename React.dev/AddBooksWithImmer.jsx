// problem statement -> using Immer, create a component
// that lets you add a book to a list

import React from "react";
import { useImmer } from "use-immer";

export default function ReadingList() {
  // initial state
  const [books, addBooks] = useImmer({
    user : {
      name: "Anon",
      books: ["Crime and Punishment",
        "Posthumous Memories of Bras Cubas"]
    }
  })

  // add books
  function handleClick() {
    addBooks(draft => {
      draft.user.books.push("Wuthering Heights");
    })
  }

  return (
    // use state for current state
    <div>
      <h2>{books.user.name}'s books:</h2>
      <ul>
        {books.user.books.map((bookName, index) => (
          <li key={index}>{bookName}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add a book</button>
    </div>
  )
}