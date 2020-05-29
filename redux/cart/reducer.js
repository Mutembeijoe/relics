import cartActionTypes from './types.js'
import { addItemToCart } from './utils.js'

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
        default:
            return state
    }
}

export default cartReducer;