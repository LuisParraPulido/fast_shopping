import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchUser } from '../actions';
import UserCart from './UserCart';
import '../styles/Customer.css'


const SearchUser = (props) => {
  const { user } = props;
  const [form, setValues] = useState({
      email: '',
    });

  const updateInput = (event) => {
      setValues({
        ...form,
        [event.target.name]: event.target.value,
      });
    };

  const handleCustomer = (event) => {
    event.preventDefault();
    props.searchUser(form);
  }

  
  return (
    <>
      <form className='Customer-form_old' onSubmit={handleCustomer}>
        <div className='Customer-form_old-e'>
          <label htmlFor=''>Email*</label>
          <input 
            type='email'
            name='email'
            onChange={updateInput}
            required
          />
        </div>
        <button>Lookup</button>
      </form>
      {user.email !==undefined ? <UserCart /> : null}
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  searchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);