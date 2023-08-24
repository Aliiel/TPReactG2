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
    }, [params.id])

    

    return( 
    <div className='Article'>
        
        <h1>{product.title}</h1>
        {console.log(product.title , "Mon Titre")}
        <div className='affichageArticle'>
            <img className='photoProduit' src={product.image}></img>

            <div className='description'>
                <h2>Catégorie : {product.category}</h2>
                <p>{product.description}</p>
                <p className='prix'>prix : {product.price}€</p>
                <button className='ajouterPanier'>Ajouter au panier</button>
            </div>
        
        </div>
        
    </div>
            
        )
}
    
   




export default ProductDetail;