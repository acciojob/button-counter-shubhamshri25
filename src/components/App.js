import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={increment}>Increase</button>
    </div>
  )
}

export default App
