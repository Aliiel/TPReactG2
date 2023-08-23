import React from 'react'
import CategoryFilter from './FiltreCategorie';

const Categorie = ({title}) => {
  return (
    <div className='categorieCard'>

    <h2>{title}</h2>
    <button className='voirCategorie' onClick={()=> CategoryFilter({title})} > Consulter </button>
    </div>
  )
}

export default Categorie;
