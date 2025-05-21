// problem statement -> Write a component that
// executes the following action for a set of students.

/*

Conditions

- If the student's grades are above 40, mark them with
green.
- If the student's grades are 40 and below, mark them
with red.

*/

import React from "react";

function StudentDetails({ name, marks }) {
  return (
    <div
    style={{ backgroundColor: marks>=40 ? 'green' : 'red'}}>
      <p>Name: {name}</p>
      <p>Grade: {marks}</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <StudentDetails name="Niharika Amarnath" marks={45}/>
      <StudentDetails name="Silvio Fernandes" marks={67}/>
      <StudentDetails name="Manikandan Das" marks={24}/>
    </>
  );
}