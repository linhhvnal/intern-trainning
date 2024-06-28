import "./App.css";

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
        <p>{count}</p>
        <div className="btn">

            <button onClick={() => {setCount(count - 1)}}> - </button>
            <button onClick={() => {setCount(0)}}> Reset </button>
            <button onClick={() => {setCount(count + 1)}}> + </button>
        </div>
    
    </div>
 
  );
};

export default App;
