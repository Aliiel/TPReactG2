import React from 'react';


const SignUp = () => {

    return (

    <div>
        <h1 className='titre-inscription'>Saisissez vos informations</h1>

        <form className='form-inscription'>
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

export default SignUp