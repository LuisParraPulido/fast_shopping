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

export const createUser = payload => ({
  type: 'CREATE_USER',
  payload,
})

export const searchUser = payload => ({
  type: 'SEARCH_USER',
  payload,
})

export const createOrder = payload => ({
  type: 'CREATE_ORDER',
  payload,
})
export const clearState = payload => ({
  type: 'CLEAR_STATE',
  payload,
})


  
  
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      dispatch({
        type: GET_PRODUCTS,
        payload: response,
      })
    } catch (error) {
      console.error(error)
    }
  }
}
