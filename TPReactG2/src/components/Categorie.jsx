import React from 'react';
import Women from '../assets/images/vetement-femme.jpg';
import Men from '../assets/images/vetement-homme.jpg';
import Electronique from '../assets/images/electronique.jpg';
import Jewelery from '../assets/images/jewelery.jpg';


// import { useNavigate } from 'react-router-dom';

//Selection d'image en fonction du titre
const CategorieImage = ({ title }) => {
  switch (title) {
    case "women's clothing":
      return <img src= {Women} width= "50%" alt="Women's Clothing"></img>
     
    case "jewelery":
      return <img src={Jewelery} alt="Jewelery"></img>;
      
    case "men's clothing":
      return <img src={Men} alt="Men's Clothing"></img>;
     
    case "electronics":
      return <img src={Electronique} alt="Electronics"></img>;
     
    default:
      break; // Vous pouvez retourner quelque chose d'autre ici si nécessaire
  }
};



const CategorieCard = ({ title }) => {
//   const navigate =useNavigate();


const handleClick=(category)=>{
  window.location.href = (`/products/${category}`);
}

const TitreCat= () => {
//Faire une boucle qui ressort chez titre des catégories

}

  return (
    <div className='categorieCard'>
      <CategorieImage title={title} />
      <h2> {title} </h2>
      <button className='voirCategorie' onClick={() => handleClick(title)}>Consulter</button>
    </div>
  );
};

export default CategorieCard;
