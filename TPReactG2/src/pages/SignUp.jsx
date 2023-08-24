import React, { useState} from 'react';


async function loginUser(credentials) {

    return fetch ('https://fakestoreapi.com/users', {
        method : 'POST'})
        .then (data => data.json());
};

export default function SignIn () {

    const [username, setUsername] = useState ();
    const [password, setPassword] = useState ();

    const handleSubmit = async e => {

        e.preventDefault();

        const response = await loginUser ({
            username,
            password
        });

        if ('accessToken' in response) {
            swal ("Succes", response.message, "Succes", {
                buttons : false,
                timer : 2000,
            })
        
        .then ((value) => {
            localStorage.setItem ('accessToken', response ['accessToken']);
            localStorage.setItem ('user', JSON.stringify(response ['user']));
            window.location.href = "/";
        });

        } else {

            swal ("Failed", response.message, "error");
        }
        
    }


    return (

        <div>
        <h1 className='titre-inscription'>Saisissez vos informations</h1>

        <form className='form-inscription' noValidate onSubmit = {handleSubmit}>
            <label>Nom :</label>
                <input></input>
            <label>Prénom :</label>
                <input></input>
                <label>Nom d'utiisateau :</label>
                <input></input>
                <label>Adresse :</label>
                <input></input>
                <label>Code postal :</label>
                <input></input>
                <label>Ville :</label>
                <input></input>
                <button>Submit</button>
        </form>
    </div>

    )



}


