// src/final-project/store/cartStore.js


const initialState = {
  cart: []
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(p => p.id !== action.payload.id) };
    default:
      return state;
  }
}

export const cartStore = createStore(cartReducer);
