import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => { 

    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isNavigate, setIsNavigate] = useState(false);
    const navigate = useNavigate();

    useEffect (() => {
        fetch("https://fakestoreapi.com/products/")
            .then(response => response.json())
            .then( (json) => setDatas(json))
    }, []);

   
    const handleSearchTerm = (e) => {
        setIsNavigate(false);
        let value = e.target.value;
        console.log(e.target)
        setSearchTerm(value);
    };

    const goToProduct = (id) => {

        navigate("/Product/" + id)
        setSearchTerm(null);
        setIsNavigate(true);
    } 


  return (
    <>
        <div className='recherche'>
            <input 
            type = "texte"
            name = "searchBar"
            id = "searchBar"
            placeholder = "Rechercher un produit"
            onChange = {handleSearchTerm}
            value = {(isNavigate) ? "" : searchTerm}
            />
        </div>
        <div className='search_results'>
        {searchTerm ? datas
        
        .filter((val) => {

            return val.title.toLowerCase().includes(searchTerm.toLowerCase());

        })
        
        .map((val) => {
            return (
                <div className='search_result' key = {val.id} onClick={ () => goToProduct(val.id)}>
        
                    <h1>- {val.title}</h1>
        
                       
        
                </div>
             
            );
        

        }): null} 
        </div>
    </>
  );
}

   

export default SearchBar
