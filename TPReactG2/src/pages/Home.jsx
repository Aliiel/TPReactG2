import React, { useState , useEffect } from 'react'; 
import ProductCard from '../components/ProductCard';
import Categorie  from '../components/Categorie';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Products = () => {
    const [products, setProducts] = useState([])

    const [category, setCategory] = useState('')

    const categories = [
      "women's clothing",
"jewelery",
"men's clothing",
"electronics"
    ]
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])




  return (


<div className='Acceuil'>
  

<video src=".\src\assets\video\hero.mp4" type='video/mp4' autoPlay loop width="100%"></video>

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
