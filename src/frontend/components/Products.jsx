import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import '../styles/Products.css';

const Products = (props) => {
  const { products } = props;
  const [select, setValues] = useState({
    order: '',
  })

  const updateIpunt = event => {
      setValues({
          ...select,
          [event.target.name]: event.target.value
      })
  }
  if(select.order === 'lowest') {
    products.sort((a, b) => a.price - b.price)
  }
  if(select.order === 'recent') {
    products.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  }
  if(select.order === 'default') {
    products.sort((a, b) => a.id - b.id)
  }

  const handleAddToCart = (product) => {
    props.addToCart(product);
  }

  return (
    <>
      <div className='Products-order'>
        <p>Sort By:</p>
        <select name='order' onInput={updateIpunt}>
          <option value='default'>Alpha Order</option>
          <option value='lowest'>Lowest Price</option>
          <option value='recent'>Most recent</option>
        </select>
      </div>
      <div className="Products">
        <div className="Products-items">
          {products.map(product => (
            <div className="Products-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="Products-item-info">
                <div className="Products-item-info_descript">
                  <h2>{product.name}</h2>
                  <h5>{product.category}</h5> 
                  <p>{product.description}</p>
                </div>
                <div className="Products-item-info_button">
                  <button type="button" onClick={() => handleAddToCart(product)}>Comprar</button>
                  <span>
                    $
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);