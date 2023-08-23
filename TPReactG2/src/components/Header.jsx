import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/MODB_blanc.png'
import LogoPanier from '../assets/images/logo-panier.png'
import LogoRecherche from '../assets/images/logo-loupe.png'
import SearchBar from './SearchBar';







const Header = () => {

    return (

        <nav>

            <div className = 'logo'>
            <Link to = "/Home"><img src = {Logo} style = {{width : '100px'}}></img></Link>
            </div>
            
            <div className='recherche'>
             <Link to = "/Search"> <img src = {LogoRecherche} style = {{width : '30px', height : '30px'}}></img></Link>
             <SearchBar/>
            </div>
           
            <div className = 'connecter'>
            <Link to = "/Login">Connectez-vous</Link>
            </div>

            <div className = 'inscrire'>
            <Link to = "/Signup">Inscription</Link>
            </div>

            <div className = 'panier'>
                <Link to = "/Cart"><img src = {LogoPanier} style = {{width : '70px'}}></img></Link>
            </div>
            
        </nav>
    )
}


export default Header




// <div className = 'recherche'> 
// <input id="searchbar" type="text" name="search" placeholder="Rechercher un produit" style = {{width : '400px', height : '25px'}}></input></Link>
// <img src = {LogoRecherche} style = {{width : '30px', height : '30px'}}></img>
// </div>