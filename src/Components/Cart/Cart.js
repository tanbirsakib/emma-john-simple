import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart);
    //const total = cart.reduce((total, prd)=> total+prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total+ Math.round(product.price)*product.quantity;
           }
        let shipping =0;
           if (total>50) {
               shipping = 5.5;
                }
           else if(total>0){
               shipping = 10.5;
               
           }
        let tax = total/10;   
               
         
       
            return (
        <div>
          <h1>Order Summary</h1>
          <h4>Items orderd : {props.cart.length} </h4>
          <h5>Product Price : {total}</h5>
          <h4>Shipping and Handling :{shipping} </h4>
          <h5>Tax+Vat : {tax}</h5>
          <h2 className='order-total'>Order total : ${total+tax+shipping}</h2>
         {
             props.children
         }       
        </div>
    );
};

export default Cart;