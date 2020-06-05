import cartActionTypes from "./types.js";
import {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./utils.js";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseItemQuantity(state.cartItems, action.payload),
      };
    case cartActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_CART:
      return{
        ...state,
        cartItems:[]
      }
    default:
      return state;
  }
};

export default cartReducer;
