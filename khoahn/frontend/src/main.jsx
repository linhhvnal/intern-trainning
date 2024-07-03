import React from 'react';
import ReactDOM from 'react-dom';
import "./Style.css";
import App from './components/UpdateUser/App';
import DeleteModal from './components/DeleteModal/Modal';


ReactDOM.render(
  <React.StrictMode>
    <DeleteModal/>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
