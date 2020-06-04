import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import userReducer from "./user/reducer";
import routeReducer from "./route/reducer";



const rootReducer = combineReducers({
    cart:cartReducer,
    user:userReducer,
    route:routeReducer,
})


export default rootReducer;