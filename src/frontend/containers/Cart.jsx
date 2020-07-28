import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeOfCart, changeQuantity } from '../actions';
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
  let changeQ = select.quantity.split(',')
  const handleQuantity = (quantity) => {
    props.changeQuantity(quantity)
  }
  
  const handleRemove = (productId) => {
    props.removeOfCart(productId);
  }
  


  return (
    <>
      <div className='Cart'>
        <div className='Cart-content'>
          {cart.length > 0 ? <h3>Shopping Cart</h3> : <h2>There is not products</h2>}
          {cart.map(item => (
            <div className='Cart-item'>
              <img src={item.product.image} alt={item.product.name} />
              <div className='Cart-element'>
                <div className='Cart-element_title'>
                  <h4>{item.product.name}</h4>
                  <p>{item.product.category}</p>
                </div>
                <i className='fas fa-trash-alt' onClick={() => handleRemove(item.product.id)} />
                <span>
                  <p>Unit Price</p>
                  $
                  {item.product.price}
                </span>
                <div className='Cart-element_quantity'>
                  <p>Qty</p>
                  <select name='quantity' defaultValue={[item.quantity, item.product.id]} onChange={updateIpunt} onInput={handleQuantity(changeQ)}>
                    <option value={[1,item.product.id]}>1</option>
                    <option value={[2,item.product.id]}>2</option>
                    <option value={[3,item.product.id]}>3</option>
                    <option value={[4,item.product.id]}>4</option>
                  </select>
                </div>
                <p >${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className='Cart-cart'>
        <Link to='/'><h4>Continue Shopping</h4></Link>
        {cart.length > 0 ? 
          <div className='Cart-button'>
            {cart.map(item => {
              total = (item.product.price * item.quantity) + total;
          })}
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to='/checkout'><button>Check Out</button></Link> 
        </div>
      : null}
      </div>
    
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
  changeQuantity,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);