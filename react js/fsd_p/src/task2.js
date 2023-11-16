import React, { useState } from 'react';

function IncrementDecrementButton() {
  // Initialize the number state with a default value of 1
  const [number, setNumber] = useState(1);

  // Function to handle incrementing the number
  const handleIncrement = () => {
    if (number < 10) {
      setNumber(number + 1);
    }
  };

  // Function to handle decrementing the number
  const handleDecrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="App">
      <h1>Number: {number}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default IncrementDecrementButton ;