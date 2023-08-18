import React, { useEffect , useState } from 'react'
import ProductCard from './ProductCard'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const params = useParams();

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + params.id)
            .then(response => response.json())
        .then(data => setProduct(data))
    }, [])

    return( 
        <div>
        
        <p>Titre : {product.title}</p>
        {console.log(product.title , "Mon Titre")}
        
        
        </div>
            
        )
}
    
   




export default ProductDetail;