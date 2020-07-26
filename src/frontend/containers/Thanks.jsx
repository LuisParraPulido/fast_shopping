import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Thanks.css'

const Thanks = () => {
    return (
        <div className='Thanks-main'>
            <img src="https://images.emojiterra.com/google/android-oreo/512px/1f389.png" alt=""/>
            <h1>Thanks for your purchase</h1>
            <p>NAME, we have created your order ID_ORDER. Your items will be soon at your dor¿or.</p>
            <h3>Stay safe</h3>
            <Link to='/'>
                <button>Start Again</button>
            </Link>
        </div>
    );
} 



  export default Thanks;