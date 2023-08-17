import React from 'react'

const ProductCard = ({ product} ) => {
  return (
    <div className='Produit'> 
    { product.title }
    <img src={ product.image }></img> 
    { product.price}
    
    </div>
  )
}

export default ProductCard;
