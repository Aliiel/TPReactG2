import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Cart({ cart, updateCart }) {
    
    const [isOpen, setIsOpen] = useState(true)
    const articlePrice = 0;
    const navigate = useNavigate();

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            <h2>Panier</h2>
            <h3>Total : {articlePrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
            <button onClick={() => navigate("../components/Payment.html")}>Payment</button>
            
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}


export default Cart 