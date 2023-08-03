import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/index';
//import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import TodoApp from './components/TodoApp';
import Todoitem from './components/Todoitem';
import Page1 from './components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page1/>
  
  </React.StrictMode>
);

//</React.StrictMode> If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();