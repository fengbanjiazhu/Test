import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increaseCount = setTimeout(() => setCount(count + 1), 2000);

    return () => clearTimeout(increaseCount);
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Reckon Screen Testing</h1>
      <h3>Count: {count}</h3>
      <div className="card">
        <button onClick={() => handleIncrease()}>Increase</button>
      </div>
    </>
  );
}

export default App;
