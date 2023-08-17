import React from 'react'

const ProductCard = ({ product} ) => {
  return (
    <div className='Produit'> 
   
    <img src={ product.image }></img> 
     <p> { product.title }  </p>
     <p>   { product.price} € </p>
    
    </div>
  )
}

export default ProductCard;
