import React from 'react';
import ReactDOM from 'react-dom/client'
// import PrimeraApp from './PrimeraApp'; antes
import CounterApp from './CounterApp'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CounterApp  value={10}/>
);

