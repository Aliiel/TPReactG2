import React from 'react'
import Produit from './ProductDetail';
const ProductCard = ({ product} ) => {
  return (
    <div className='Produit'> 
   
    <img src={ product.image }></img> 
     <p> { product.title }  </p>
     <p>   { product.price} € </p>
    <boutton className='voir'>Consulter</boutton>
    
    </div>
  )
}

export default ProductCard;
