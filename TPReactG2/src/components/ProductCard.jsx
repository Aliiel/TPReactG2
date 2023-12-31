import React from 'react'
import ProductDetail from './ProductDetail';
import AffiCategories from '../pages/Catégories';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ product} ) => {

  const navigate = useNavigate()

    const goToDescription = (code) => {
        // alert(code);
        navigate("/Product/" + code);
        
    }


  return (
    <div className='Produit' onClick={()=>goToDescription(product?.id)}> 
   
    <img src={ product?.image }></img> 
     <p> { product?.title }  </p>
     <p>   { product?.price} € </p>
    <button className='voir'>Consulter</button>
    
    </div>
  )
}

export default ProductCard;
