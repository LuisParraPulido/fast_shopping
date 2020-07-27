import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import UserCart from './UserCart';
import '../styles/Customer.css'

const NewUser = (props) => {
  const { user } = props;
  const [form, setValues] = useState({
    name: '',
    document: '',
    address: '',
    phone: '',
    email: ''
  });

const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

const handleCustomer = (event) => {
  event.preventDefault();
  props.createUser(form);
}

return (
  <>
    {user.length > 0 && user[0].email !==undefined ? <UserCart />:
    <form className='Customer-form_new' onSubmit={handleCustomer}>
      <label htmlFor="name">Full Name</label>
      <input 
        type="text"
        name='name'
        onChange={updateInput}
        required
        />
      <label htmlFor="document">ID</label>
      <input 
        type="text"
        name='document'
        onChange={updateInput}
        required
        />
      <label htmlFor="address">Address</label>
      <input 
        type="text"
        name='address'
        onChange={updateInput}
        required
        />
      <label htmlFor="phone">Phone Number</label>
      <input 
        type="text"
        name='phone'
        onChange={updateInput}
        required
        />
      <label htmlFor="email">Email</label>
      <input 
        type="email"
        name='email'
        onChange={updateInput}
        required
        />
      <button>submit</button>
    </form>}
  </>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);