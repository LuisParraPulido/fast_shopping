import React, { useState } from 'react';
import { connect } from 'react-redux';
import UserCart from './UserCart';
import NewUser from './NewUser';
import SearchUser from './SearchUser';
import '../styles/Customer.css'


const Customer = (props) => {
  const { user } = props;
  const [form, setValues] = useState({
      customer: '',
    });

  const updateInput = (event) => {
      setValues({
        ...form,
        [event.target.name]: event.target.value,
      });
    };
    return (
        <div className='Customer-main'>
            <h2>Customer Information</h2>
            <form action='' className='Customer-form' >
              <div className='Customer-form_header'>
                <label htmlFor='customer'>Are you?</label>
                <input type='radio' name='customer' value='new' onInput={updateInput} /> New Customer
                <input type='radio' name='customer' value='existing' onInput={updateInput}/> Existing Customer
              </div>
              {form.customer === 'new' ? <NewUser /> : <SearchUser />}
            </form>
        </div>
    );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
  
  
export default connect(mapStateToProps, null)(Customer);