import React from 'react';
import CategoryFilter from './FiltreCategorie';
import Women from '../assets/images/vetement-femme.jpg';
import Men from '../assets/images/vetement-homme.jpg';
import Electronique from '../assets/images/electronique.jpg';
import Jewelery from '../assets/images/jewelery.jpg';

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
  return (
    <div className='categorieCard'>
      <CategorieImage title={title} />
      <h2>{title}</h2>
      <button className='voirCategorie' onClick={() => CategoryFilter({ title })}>Consulter</button>
    </div>
  );
};

export default CategorieCard;
