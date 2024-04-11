/* FUNCTIONAL / CONTAINER Component
* AUTHOR: Hema Jayaprakash
* PURPOSE: Case study sample code for interview, represeting SOC of the application
* CLIENT: ABC Racing company wanting to increase the fan base by upgrading the digital platform exerience
* USAGE: Order container is a functional component having logic to handle data and pass data to its presentational component 'OrderHistory'
*/

import React, { useState, useEffect } from 'react';
import OrderLists from './order-lists';

const OrderContainer = () => {
  const [orderHistory, setOrderHistory] = useState(null);

  useEffect(() => {
    // Simulate fetching user data from an API
    fetch('http://localhost:9000/orderHistory')
      .then((response) => response.json())
      .then((data) => {
        setOrderHistory(data);
      });
  }, []);

  return (
    <div>
      {orderHistory ? (
        <OrderLists  orderHistory={orderHistory}/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OrderContainer;