/*

problem statement

Make it so that clicking on the picture removes the
background--active CSS class from the outer <div>,
but adds the picture--active class to the <img>.

Clicking the background again should restore the
original CSS classes.

Visually, you should expect that clicking on the
picture removes the purple background and highlights
the picture border. Clicking outside the picture
highlights the background, but removes the picture
border highlight.

*/

import React from "react";

export default function Picture() {
  const [active, setActive] = useState(false);
  let backgroundClassName = "background";
  let pictureClassName = "picture";

  if (active) {
    pictureClassName += " picture--active";
  } else {
    backgroundClassName += " background--active";
  }
  return (
    <div
      className={backgroundClassName}
      onClick={() => {
        setActive(false);
      }}
    >
      <img
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setActive(true);
        }}
      />
    </div>
  );
}