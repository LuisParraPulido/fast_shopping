import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions';
import Customer from '../components/Customer';
import Table from '../components/Table';
import '../styles/Checkout.css'

const Checkout = (props) => {
  const { cart, user } = props;
  let total = 0;
  
  const handleOrder = (event) => {
    event.preventDefault();
    props.createOrder([user[0].email, cart]);
  }
  return (
    <div className='Checkout-main'>
      <Customer />
      <div className='Checkout-main_table'>
        <Table data={cart}/>
        <div className='Checkout-main_button'>
          {cart.map(item => {
            total = (item.product.price * item.quantity) + total;
          })}
          <h2>Total:{total.toFixed(2)}</h2>
          
          <button onClick={handleOrder}><Link to='/thanks'>Place Order</Link></button>
          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      cart: state.cart,
      user: state.user,
    };
  };
  
  const mapDispatchToProps = {
    createOrder,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Checkout);