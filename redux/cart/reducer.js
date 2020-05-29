import cartActionTypes from './types.js'
import { addItemToCart, removeItemFromCart } from './utils.js'

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case cartActionTypes.ADD_ITEM :
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;