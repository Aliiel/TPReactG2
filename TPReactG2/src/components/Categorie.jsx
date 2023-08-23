import React from 'react'
import CategorieList from './FiltreCategorie';

const Categorie = ({title}) => {
  return (
    <div className='categorieCard'>

    <h2>{title}</h2>
    <boutton className='voirCategorie' onClick={()=> CategorieList({title})} >Consulter</boutton>
    </div>
  )
}

export default Categorie;
