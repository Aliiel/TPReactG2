import React, { useState,useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import axios from 'axios';



const CategoryProducts = () => {
  const [category, setCategory] = useState([])

const navigate = useNavigate()
const params = useParams()
  

useEffect(() => {


axios.get('https://fakestoreapi.com/products/category/'+params.category)
.then((response) => 

{setCategory(response.data)

})



.catch((error) => {console.log(error)});

},[]);

const handleClick=(category)=>{
  navigate(`/Product/${category}`);

}


  return (
  <div className='affiche'>
      <h2 className='titre'>Catégories</h2>

   {console.log(category)}
     {category.length !== 0 && (
                       <div className="Produits"> 
                            {category.map((product, index) => (
                                <div key={index} onClick={()=>handleClick(product.id)}>
                                  <ProductCard product={product} />

                                </div>
                            ))}
                        </div>
     )}

     <div className="article">
              
     </div>
  
    </div>
  )
};
export default CategoryProducts;
