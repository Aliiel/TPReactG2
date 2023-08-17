import React, { useState , useEffect } from 'react'; 
import ProductCard from '../components/ProductCard';
const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])


  return (


      <div className='Produits'>

          {products.map ((product, index) => 

            <ProductCard key = {index} product = {product}/>

          )};

      </div>
  )
}

export default Products