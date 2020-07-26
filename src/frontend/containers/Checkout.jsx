import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Customer from '../components/Customer';
import Table from '../components/Table';
import '../styles/Checkout.css'

const Checkout = (props) => {
  let cart = [ {
    id: 1,
    image: "http://dummyimage.com/214x108.png/dddddd/000000",
    name: "Ramon",
    price: "0.35",
    category: "n/a",
    description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
  },
  {
    id: 2,
    image: "http://dummyimage.com/224x148.jpg/ff4444/ffffff",
    name: "Tommy",
    price: "4.38",
    category: "Technology",
    description: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
  }];
  return (
    <div className='Checkout-main'>
      <Customer />
      <div className='Checkout-main_table'>
        <Table data={cart}/>
        <div className='Checkout-main_button'>
          <h2>Total:</h2>
          <Link to='/thanks'>
            <button >Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
      cart: state.cart,
    };
  };
  
  const mapDispatchToProps = {
    // searchEmail,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Checkout);