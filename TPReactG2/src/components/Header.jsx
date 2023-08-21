import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/MODB.png'
import LogoPanier from '../assets/images/logo-panier.png'
import LogoRecherche from '../assets/images/logo-loupe.png'





const Header = () => {

    return (

        <nav>

            <div className = 'logo'>
            <Link to = "/Home"><img src = {Logo} style = {{width : '100px'}}></img></Link>
            </div>
            
            <div className = 'recherche'> 
            <input style = {{width : '400px', height : '25px'}} placeholder='Rechercher'></input>
            </div>

            <div className = 'connecter'>
            <Link to = "/Login">Connectez-vous</Link>
            </div>

            <div className = 'inscrire'>
            <Link to = "/Signup">Inscrivez-vous</Link>
            </div>

            <div className = 'panier'>
                <Link to = "/Cart"><img src = {LogoPanier} style = {{width : '70px'}}></img></Link>
            </div>
            
        </nav>
    )
}


export default Header