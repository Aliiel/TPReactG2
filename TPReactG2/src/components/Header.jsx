import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/MODB_blanc.png'
import LogoPanier from '../assets/images/logo-panier.png'
import LogoRecherche from '../assets/images/logo-loupe.png'
import SearchBar from './SearchBar';
import LoginForm from './LoginForm';







const Header = ({ connected, setConnected }) => {

    const navigate = useNavigate();

    const disconnected = () =>{

        alert ('Vous êtes bien déconnecté');
        setConnected(false);

        navigate("/Home");
    } 

    const toggleLogin = () => {
        if (connected) {
            return (

                <>

                <div>
                    <p style = {{color : 'white'}}>Bienvenue, {UserActivation.username}</p>
                </div>
                
                <div className='connecter authentif'>
                    <Link to="/Profile">Mon profil</Link>
                </div>

                <div className='inscrire authentif'>
                    <Link onClick={disconnected}>Déconnexion</Link>
                </div>
            </>
            )
        } else {
            return (
                <>
                    <div className='connecter authentif'>
                        <Link to="/Login">Connectez-vous</Link>
                    </div>

                    <div className='inscrire authentif'>
                        <Link to="/Signup">Inscription</Link>
                    </div>
                </>

            )
        }
    }

    return (

        <nav>

            <div className='logo'>
                <Link to="/Home"><img src={Logo} style={{ width: '100px' }}></img></Link>
            </div>

            <div className='recherche'>
                <SearchBar />
                <Link to="/Search"> <img src={LogoRecherche} style={{ width: '30px', height: '30px' }}></img></Link>
            </div>

            {toggleLogin(connected)}

            <div className='panier'>
                <Link to="/Cart"><img src={LogoPanier} style={{ width: '70px' }}></img></Link>
            </div>

        </nav>
    )
}


export default Header
