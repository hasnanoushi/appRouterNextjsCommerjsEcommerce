"use client"
import React, { useEffect, useState } from 'react';
import commerce from '../../lib/commerce';



export default function ProductDetail(props:any) {
    console.log('productdet',props);
    const productId=props.params.productId;
     const[datum,setdatum]:any=useState([]);
   const Products = async () => {
       const  data  = await commerce.products.retrieve(productId);
   setdatum(data);
   console.log('datas',data);
     };
     
       useEffect(()=>{if(productId){
        prodct= Products();
        console.log('datum',datum)}
       },[productId])
     console.log(Products,'prodd')
   var prodct;
  
  return (
    <><div>ProductDetail    </div>
    <div>{datum.name}</div>
    <img src={datum.image?.url} alt={datum.name}height={200}/>
    </>)
   }

  

