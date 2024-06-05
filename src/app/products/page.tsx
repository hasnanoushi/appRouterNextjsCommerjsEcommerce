"use client";
import React from "react";
import { useState, useEffect } from "react";
import commerce from "../lib/commerce";
import "./product.css";
import Link from "next/link";
import Image from "next/image";
import { useCart } from '../CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useCart();


  useEffect(() => {
    const fetchProducts = async () => {
     
      const { data } = await commerce.products.list();
      setProducts(data);
    };  

    fetchProducts();
  }, []);
  const handleAddToCart = (product:any) => {
    addToCart(product);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="prod">
        {products.map((product:any) => (

          <div className="card">
            <div key={product.id}>
            
              <img
                className="img"
                src={product.image?.url}
                alt={product.name}
              />
<Link href={'/products/' + product.id}>
              <p className="text">{product.name}</p></Link>
              <p className="text">{product.price.formatted_with_symbol}</p>
              <button className="bton"onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
