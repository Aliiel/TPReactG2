import React from 'react';
import { Link} from 'react-router-dom';



const Navbar = () => {

    return (

        <nav>

            <Link to = "/Profile">Profile</Link>
            <Link to = "/Cart">Panier</Link>
            <div>
            <Link to = "/Search">Rechercher :<input></input></Link>
            </div>
            <Link to = "/Login">Se connecter</Link>
            <Link to = "/SignUp">S'inscrire</Link>

        </nav>
    )
}


export default Navbar