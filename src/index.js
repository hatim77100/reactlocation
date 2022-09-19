import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Navbar from './compenents/Navbar';
import reportWebVitals from './reportWebVitals';
import App from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Header/>
    <Navbar/>
    <home/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();