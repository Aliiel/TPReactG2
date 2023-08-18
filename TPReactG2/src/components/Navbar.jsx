import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/MODB.png'





const Navbar = () => {

    return (

        <nav>

            <Link to = "/Home"><img src = {Logo}></img></Link>
            <Link to = "/Profile">Profile</Link>
            <Link to = "/Cart">Panier</Link>
            <div>
            <Link to = "/Search">Rechercher :<input></input></Link>
            </div>
            <Link to = "/Login">Se connecter</Link>
            <Link to = "/Signup">S'inscrire</Link>

        </nav>
    )
}


export default Navbar