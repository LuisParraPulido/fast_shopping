import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../styles/Customer.css'


const Customer = (props) => {
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
            <form action="" className='Customer-form'>
              <div className='Customer-form_header'>
                <label htmlFor="customer">Are you?</label>
                <input type="radio" name='customer' value='new' onChange={updateInput} checked/> New Customer
                <input type="radio" name='customer' value='existing' onChange={updateInput}/> Existing Customer
              </div>

                {form.customer === 'existing' ? 
                    <div className='Customer-form_new'>
                        <label htmlFor="">Full Name</label>
                        <input type="text"/>
                        <label htmlFor="">ID</label>
                        <input type="text"/>
                        <label htmlFor="">Address</label>
                        <input type="text"/>
                        <label htmlFor="">Phone Number</label>
                        <input type="text"/>
                        <label htmlFor="">Email</label>
                        <input type="text"/>
                    </div> :
                    <div className='Customer-form_old'>
                      <div className='Customer-form_old-e'>
                        <label htmlFor="">Email*</label>
                        <input type="text"/>
                      </div>
                      <button>Lookup</button>
                    </div>
                }
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
      products: state.products,
    };
  };
  
  const mapDispatchToProps = {
    // searchEmail,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Customer);