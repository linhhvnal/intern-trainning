import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter a word"
        />
        <p>Entered: {inputText}</p>
      </header>
    </div>
  );
}

export default App;
