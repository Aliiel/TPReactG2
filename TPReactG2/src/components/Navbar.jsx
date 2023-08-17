import React from 'react';
import { Link} from 'react-router-dom';



const Navbar = () => {

    return (

        <nav>

            <Link to = "/Profile">Profile</Link>
            <Link to = "/Cart">Panier</Link>
            <Link to = "/Login">Se connecter</Link>
            <Link to = "/Signup">S'inscrire</Link>

        </nav>
    )
}


export default Navbar