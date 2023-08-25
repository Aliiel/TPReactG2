import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';


const Profile = () => {


    useEffect(() => {
      
        axios.get('https://fakestoreapi.com/users')

        .then (response => {

            setUsers(response.data); 
        });

    
      
    }, [])

    return (

        <div>

            <h1>Votre Profil</h1>
            <p>Nom : </p>
            {console.log()}
        </div>
    )
}


export default Profile