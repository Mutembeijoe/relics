import cartActionTypes from './types.js'

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case cartActionTypes.ADD_ITEM :
            return{
                ...state,
                cartItems:[...state.cartItems, action.payload]
            }
        default:
            return state
    }
}

export default cartReducer;