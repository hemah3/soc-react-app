import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import OrderContainer from './features/user/orders/order-container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/components/header/header';

const App = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Header/>
     <Routes>
        <Route path="/" element={ <OrderContainer/> } />
      </Routes>
    </div>
  );
}

export default App;
