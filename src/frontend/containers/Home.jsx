import React from 'react';
import Products from '../components/Products';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import regeneratorRuntime from 'regenerator-runtime'

const Home = (props) => {
    props.getProducts()
    return (
        <Products />
    );
} 
const mapDispatchToProps = {
    getProducts,
  };
  
export default connect(null, mapDispatchToProps)(Home);