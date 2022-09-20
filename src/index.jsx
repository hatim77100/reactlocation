import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import App from './pages/home';
import Input from './components/Input.jsx'
import index from "./pages/home/index.css"
import data from "./data.json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {data.title}
    <br/>
    {data.desc}
    <br/>
    {data.cars[0].colors}
    <br/>
    {data.cars[2].colors}
    <br/>
    {data.cars.map((car) => {
      return (<div className=' flex flex-col items-center'>
       key={car._id}
        {car.mark}
        {car.desc}
        {car.color}
        <span> marque : {car.mark[2]}</span>
        <br />
        <span> marque : {car.mark}</span>
        <br />
        <span> marque : {car.mark}</span>
        <br />
        <div> 
          {data.cars[2].price}
        </div>
      </div>
     )
    })}
    <App />
    <Header/>
    <Navbar/>
    <home/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
