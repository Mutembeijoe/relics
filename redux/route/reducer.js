const INITIAL_STATE = {
    previous_route : ""
}

const routeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case "SAVE_CURRENT_ROUTE":
            return {
                ...state,
                previous_route:action.payload
            }
        case "DELETE_PREVIOUS_ROUTE":
            return {
                ...state,
                previous_route:""
            }
        default:
            return state
    }
}

export default routeReducer;