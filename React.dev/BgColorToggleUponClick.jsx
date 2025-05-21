// problem statement -> Create a React component that
//  toggles the background color of a button between
//  "brown" and "white" each time it is clicked.

/*
requirements

1. Use React state to manage the background color.
2. The initial background color should be "brown".
3. Clicking the button should:
- Change the background color to "white" if it is
"brown".
- Change it back to "brown" if it is "white".
4. Display the current background color on the button
using inline styles.
5. Log a message to the console indicating whether
the background color has changed.

*/

import React from 'react';

function Button({ value, handleClick }) {
    return (
        <button style={{backgroundColor:value}}
        onClick={handleClick}>Click me</button>
    )
}

export default function Box() {
    const [backgroundColor, setBackgroundColor]
    = React.useState("brown");

    function handleClick(e) {
        if (backgroundColor) {
            setBackgroundColor("white");
            console.log("BG has changed.")
        } else {
            setBackgroundColor("brown")
        }
    }

    return (
        <>
            <Button value={backgroundColor}
            handleClick={handleClick} />
        </>
    )
}