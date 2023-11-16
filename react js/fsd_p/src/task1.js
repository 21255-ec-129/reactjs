import React, { useState } from "react";

function Task() {
  // Create color variable and setter function with useState hook
  const [color, setColor] = useState("white");

  // Write click function that changes color using setColor hook method
  const handleClick = () => {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    // Set the color state to the random color
    setColor(randomColor);
  };

  return (
    // Use inline style to set the background color of the div element
    <div style={{ backgroundColor: color ,position: "fixed",  top: 0,left: 0,width: "100%", height: "100%",}}>
      <button onClick={handleClick}>Change background color</button>
    </div>
  );
}

export default Task;