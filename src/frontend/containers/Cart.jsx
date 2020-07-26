import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeOfCart } from '../actions';
import '../styles/Cart.css';

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  const [select, setValues] = useState({
    quantity: '',
  })
  const updateIpunt = event => {
    setValues({
        ...select,
        [event.target.name]: event.target.value
    })
}
  const handleRemove = (productId) => {
    props.removeOfCart(productId);
  }
  // let result = []
  // let item = {
  //   quantity: 1,
  //   product: {},
  // }
  // for(let i=0; i < cart.length; i++) {
  //   if(result.includes(cart[i])) {
  //     let product = result.filter(e => e === item)
  //     result = result.filter(e => e !== item)
  //     product.quantity += 1;
  //     result.push(product);
  //   } else {
  //     item.product = cart[i];
  //     result.push(item)
  //   }
  // }
  // console.log(result)
  // console.log(result.length)

  return (
    <>
      <div className="Cart">
        <div className="Cart-content">
          {cart.length > 0 ? <h3>Shopping Cart</h3> : <h2>There is not products</h2>}
          {cart.map(item => (
            <div className="Cart-item">
              <img src={item.image} alt={item.name} />
              <div className="Cart-element">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                </div>
                <i className="fas fa-trash-alt" onClick={() => handleRemove(item.id)} />
                <span>
                  <p>Unit Price</p>
                  $
                  {item.price}
                </span>
                <div>
                  <p>Qty</p>
                  <select name='quantity' onInput={updateIpunt}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>
                <p>${parseInt(item.price) * parseInt(select.quantity)}</p>
              </div>
            </div>
          ))}
        </div>
        {/* {cart.length > 0 && (
          <div className="Cart-sidebar">
            <h3>Total:</h3>
            <h4>
              $
              {total}
            </h4>          
          </div>
        )} */}
        
      </div>
      <div className='Cart-cart'>
        <Link to='/'><h4>Continue Shopping</h4></Link>
        <h3>Total:</h3>   
      </div>
      
      {cart.length > 0 ? 
        <div className='Cart-button'>
          <Link to='/checkout'><button>Check Out</button></Link> 
        </div>
      : null}
    
    </>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeOfCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);