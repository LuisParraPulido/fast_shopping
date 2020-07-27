const reducer = (state, action) => {
  
    switch (action.type) {
      case 'GET_PRODUCTS':
        return {
          ...state,
          products: [...state.products, action.payload]
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
        let quantity = state.cart.findIndex((element) => element.product.id === parseInt(action.payload[1]));
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
          user: [action.payload]
        }
      case 'SEARCH_USER':
        let user = state.user.find((user) => user.email === action.payload.email)
        console.log(user)
        if (user === undefined) {
          return {
            ...state,
            user: []
          }
        } else {
          return {
            ...state,
            user: user
          }
        }
      case 'CREATE_ORDER':
        return {
          ...state,
          order: [1,action.payload[0],action.payload[1]]
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