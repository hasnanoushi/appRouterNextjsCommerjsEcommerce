
"use client";
import React from 'react';
import { useCart } from '../CartContext';
import './cart.css';


const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="prod">
     
      {cartItems.map((item:any) => (
        <div className="card" key={item.id}>
            <img
                className="img"
                src={item.image?.url}
                alt={item.name}
              />
          <p className="text">{item.name}</p>
          <p className="text">{item.price.formatted_with_symbol}</p>
         
        </div>
      ))}
    </div>
  );
};

export default CartPage;
