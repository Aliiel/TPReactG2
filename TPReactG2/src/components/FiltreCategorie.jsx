import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const CategoryProducts = () => {
  const [catégory, setCatégory] = useState([])

const navigate = useNavigate(CategoryProducts)

  

useEffect(() => {

axios.get('https://fakestoreapi.com/products/categories')
.then((response) => 

{setCatégory(response.data)

})



.catch((error) => {console.log(error)});

},[]);

const handleClick=(category)=>{
  navigate("/category/${category}");

}


  return (
  <div className='affiche'>
      <h2 className='titre'>Catégories</h2>

   
     {catégory.length !== 0 && (
                       <ul className="poster"> 
                            {catégory.map((cat) => (
                                <li key={cat} onClick={()=>handleClick(cat)}>{cat}</li>
                            ))}
                        </ul>
     )}

     <div className="article">
                              <Article/>
     </div>
  
    </div>
  )
};
export default CategoryProducts;
