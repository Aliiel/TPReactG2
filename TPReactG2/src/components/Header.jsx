import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/MODB.png'





const Header = () => {

    return (

        <nav>

            <Link to = "/Home"><img src = {Logo}></img></Link>
            <Link to = "/Profile">Profile</Link>
            <Link to = "/Cart">Panier</Link>
            <div>
            Rechercher :<input></input>
            </div>
            <Link to = "/Login">Se connecter</Link>
            <Link to = "/Signup">S'inscrire</Link>
            
        </nav>
    )
}


export default Header