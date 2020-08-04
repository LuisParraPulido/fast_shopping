import axios from 'axios';

export const addToCart = payload => ({
    type: 'ADD_TO_CART',
    payload,
  });
  
export const removeOfCart = payload => ({
  type: 'REMOVE_OF_CART',
  payload,
})

export const changeQuantity = payload => ({
  type: 'CHANGE_QUANTITY',
  payload,
})
export const clearState = payload => ({
  type: 'CLEAR_STATE',
  payload,
})

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: 'loading',
    });
    const URL = 'http://35.238.74.239/products';
    try {
      const res = await axios.get(URL);
      dispatch({
        type: 'GET_PRODUCTS',
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      })
    }
  }
}

export const createUser = (form) => {
  return async (dispatch) => {
    dispatch({
      type: 'loading',
    });
    const URL = 'http://35.238.74.239/users';
    try {
      const res = await axios.post(URL, form);
      dispatch({
        type: 'CREATE_USER',
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      })
    }
  }
}

export const searchUser = (form) => {
  return async (dispatch) => {
    dispatch({
      type: 'loading',
    });
    const URL = `http://35.238.74.239/users/${form.email}`;
    try {
      const res = await axios.get(URL);
      dispatch({
        type: 'SEARCH_USER',
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      })
    }
  }
}

export const createOrder = (form) => {
  return async (dispatch) => {
    dispatch({
      type: 'loading',
    });
    const URL = `http://35.238.74.239/orders`;
    const data = {
      email: form[0].email,
      cart: {...form[1]}
    }
    try {
      const res = await axios.post(URL, data);
      dispatch({
        type: 'CREATE_ORDER',
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: error.message,
      })
    }
  }
}