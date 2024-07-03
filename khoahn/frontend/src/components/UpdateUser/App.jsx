import React from 'react';
import './App.css';


function App() {
  return (
    <div className='container'>
      <div className='title'>Edit profile</div>
      <div className='avatar'>
        <img src='./avatar.png' alt='avatar' />
      </div>
      <form action='#'>
        <div className='user-details'>
          <div className='input-box'>
            <label className='label'>Status </label>
            <input type='text' placeholder='Write something'></input>
          </div>
          <div className='input-box'>
            <label className='label'>Email </label>
            <input type='email' placeholder='Enter your new email'></input>
          </div>
          <div className='input-box'>
            <label className='label'>Address </label>
            <input type='text' placeholder='Enter your new address'></input>
          </div>
          <div className='input-box'>
            <label className='label'>Password </label>
            <input type='password' placeholder='Enter your new password'></input>
          </div>
          <div className='submit-button'>
            <input type='submit' value='Submit'></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App
