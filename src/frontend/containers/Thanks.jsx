import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearState } from '../actions';
import '../styles/Thanks.css'

const Thanks = (props) => {
    const { order } = props

    const handleClear = (evet) => {
        props.clearState()
    }
    return (
        <div className='Thanks-main'>
            <img src="https://images.emojiterra.com/google/android-oreo/512px/1f389.png" alt=""/>
            <h1>Thanks for your purchase</h1>
            <p>{order[1]}, we have created your order #{order[0]}. Your items will be soon at your dor¿or.</p>
            <h3>Stay safe</h3>
            
            <button onClick={handleClear}><Link to='/'>Start Again </Link></button>
            
        </div>
    );
} 

const mapStateToProps = state => {
    return {
      order: state.order,
    };
  };

const mapDispatchToProps = {
    clearState,
};


export default connect(mapStateToProps, mapDispatchToProps)(Thanks);