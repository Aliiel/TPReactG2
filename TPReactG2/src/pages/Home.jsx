import React, { useState , useEffect } from 'react'; 
import ProductCard from '../components/ProductCard';
import Categorie from '../components/Categorie.jsx'

const Products = () => {
    const [products, setProducts] = useState([])

 

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])




  return (


<div className='Acceuil'>
  

<video id='hero' src=".\src\assets\video\hero.mp4" type='video/mp4' autoPlay loop width="100%"></video>

  <h1>Catégories</h1>

    <div className='categories'>  
        <Categorie title="women's clothing" />
        <Categorie title="jewelery" />
        <Categorie title="men's clothing" />
        <Categorie title="electronics" />
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
