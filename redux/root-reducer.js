import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import routeReducer from "./route/reducer";


const rootReducer = combineReducers({
    cart:cartReducer,
    route:routeReducer,
})


export default rootReducer;