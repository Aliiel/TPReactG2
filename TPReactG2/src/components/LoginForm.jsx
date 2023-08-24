import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ setConnected }) => {


    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
      
        axios.get('https://fakestoreapi.com/users')

        .then (response => {

            setUsers(response.data); 
        });

    
      
    }, [])
    

    const handleSubmit = (e) => {

        users.map (user => {

            if (username == user.username && password == user.password){
                setConnected(true)
                navigate ("/Home");
            } 
        }) 
        
        console.log("fin de la boucle")
    };


    return (

        <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>

    );
};


export default LoginForm;