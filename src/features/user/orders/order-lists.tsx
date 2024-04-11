/* PRESENTAIONAL Component
* AUTHOR: Hema Jayaprakash
* PURPOSE: Case study sample code for interview, represeting SOC of the application
* CLIENT: ABC Racing company wanting to increase the fan base by upgrading the digital platform exerience
* USAGE: Order history is a presentational component having only DOM/TEMPLATE to display the data received props
*/
import React from 'react';
import { OrderItems } from '../../../common/interfaces/interfaces';

const OrderLists = (props: any) => {

const { orderHistory } = props;

return (
    <div className='order-container'>
       {   
        orderHistory?.map((order: OrderItems, index: number) => {
                return (
                <div key={index} className='row my-3'>
                    <div className='col-12'>
                        <div className='pb-1'><strong>Order Id:</strong> {order.orderId}</div>
                        <div className='pb-1'><strong>Order Date Name:</strong> {new Date(order.orderDate).toDateString()}</div>
                        <div className='pb-1'><strong>Customer Name:</strong> {order.customerName}</div>
                        <div className='pb-1'><strong>Total Amount:</strong> {order.totalAmount}</div>
                        <div className='pb-1'><strong>Status:</strong> {order.status}</div>
                    </div>
                </div>
              )
            })
        }
    </div>
    );
}

export default OrderLists;