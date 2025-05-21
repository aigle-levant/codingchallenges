// problem statement -> Write a component for a
// navigation bar.

import React from "react";

function NavBar() {
  return (
    <nav>
      <div className='nav-logo'>
        <p>Logos</p>
      </div>
      <div className='nav-links'>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact Us</a></li>
      </div>
    </nav>
  )
}

export default function App() {
  return (<NavBar/>)
}