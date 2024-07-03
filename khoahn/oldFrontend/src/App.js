import React from 'react';
import './App.css';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React App!</h1>
        <img src={`${process.env.PUBLIC_URL}/pic1.jpg`} alt="My Example" className="pic1" />
        <p>
          This is you. No, this is me
        </p>
        <Messages title="Hello, World!"/>
      </header>
    </div>
  );
}

export default App;