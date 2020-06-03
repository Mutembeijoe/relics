import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import userReducer from "./user/reducer";



const rootReducer = combineReducers({
    cart:cartReducer,
    user:userReducer,
})


export default rootReducer;