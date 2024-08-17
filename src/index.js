import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Address from './Address';
import App from './App';
import RestaurentAddress from './RestaurentAddress';
import CaterForm from './CaterForm';
import FoodMenu from './FoodMenu';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >

    <App className="suma"/>
    {/* <Address/> */}
    {/* <RestaurentAddress/> */}
    {/* <CaterForm/> */}
    {/* <FoodMenu/> */}

  </React.StrictMode>
);


reportWebVitals();
