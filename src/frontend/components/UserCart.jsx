import React from 'react';
import { connect } from 'react-redux';
import '../styles/UserCart.css';

const UserCart = (props) => {
  const { user } = props;
  return (
    <div className='User-main'>
      <h3>Welcome back, {user.name}</h3>

      <p>ID: {user.document}</p>
      <p>Address: {user.address}</p>
      <p>Phone Number: {user.phone_number}</p>
      <p>Email: {user.email}</p>

      <h6>Not {user.name}? Lookup again</h6>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
  
  
export default connect(mapStateToProps, null)(UserCart);