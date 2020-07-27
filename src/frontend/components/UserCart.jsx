import React from 'react';
import { connect } from 'react-redux';

const UserCart = (props) => {
  const { user } = props;
  return (
    <div>
      <h4>Welcome back, {user[0].name}</h4>

      <p>ID: {user[0].document}</p>
      <p>Address: {user[0].address}</p>
      <p>Phone Number: {user[0].phone}</p>
      <p>Email: {user[0].email}</p>

      <h6>Not {user[0].name}? Lookup again</h6>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
  
  
export default connect(mapStateToProps, null)(UserCart);