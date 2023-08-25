import React, { useState , useEffect } from 'react'; 
import ProductCard from '../components/ProductCard';
import CategorieCard from '../components/Categorie';
import AffiCategories from './Catégories';


const Products = () => {
    const [products, setProducts] = useState([])

    const [categories, setCategories] = useState([])

 

    useEffect(() => {

      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
  
      // Appel API pour récupérer les catégories
         fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => console.error("Erreur lors de la récupération des catégories :", error));
    }, [])




  return (


<div className='Acceuil'>
  

<video id='hero' src=".\src\assets\video\hero.mp4" type='video/mp4' autoPlay loop width="100%"></video>

  <h1 className='titreCatH1'>Catégories</h1>

  <div className='categories'>
        {categories.map(category => (
          <CategorieCard key={category} title={category} />
        ))}
      </div>
     
    

      <h1>Nos articles les mieux notés </h1>
      <br/>
      <div className='Produits'>

      {products.map ((product, index) => 

        <ProductCard key = {index} product = {product}/>

      )};

          

      
      

      </div>
         
</div>
    
  )
}

export default Products
