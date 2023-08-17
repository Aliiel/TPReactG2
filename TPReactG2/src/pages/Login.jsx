import React from 'react';

const Login = () => {

    return (

        <div className='Connexion'>
        <form method='post'>
        <label>Identifiant :</label>
            <input type='texte' required placeholder='Saisir votre identifiant'></input>
        <label>Mot de passe :</label>
            <input type='password' placeholder='**********'></input>

        </form>
        </div>
    )
}

export default Login