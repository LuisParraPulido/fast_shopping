const reducer = (state, action) => {
  
    switch (action.type) {
      case 'GET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        }
      case 'ADD_TO_CART':
        let item = state.cart.findIndex((element) => element.product.id === action.payload.product.id);
        if(item !== -1) {
          state.cart[item].quantity += 1
        } else {
          return {
            ...state,
            cart: [...state.cart, action.payload]
          }
        }
      case 'REMOVE_OF_CART':
        return {
          ...state,
          cart: state.cart.filter((products) => products.product.id !== action.payload),
        }
      case 'CHANGE_QUANTITY':
        let quantity = state.cart.findIndex((element) => element.product.id === action.payload[1]);
        if(quantity !== -1) {
          state.cart[quantity].quantity = parseInt(action.payload[0])
        } else {
          return {
            ...state,
          }
        }
      case 'CREATE_USER':
        return {
          ...state,
          user: action.payload
        }
      case 'SEARCH_USER':
        if(action.payload.length > 0) {
          return {
            ...state,
            user: action.payload[0]
          }
        } else {
          return {
            ...state,
            user: []
          }

        }
      case 'CREATE_ORDER':
        return {
          ...state,
          order: action.payload
        }
      case 'CLEAR_STATE':
        return {
          ...state,
          order: [],
          cart: [],
          user: [],
        }
      default:
        return state;
    }
  }
  
  export default reducer;