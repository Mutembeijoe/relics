import { createSelector } from "reselect";


const routeSelector = (state) => state.route;


export const selectPreviousRoute = createSelector(
    routeSelector,
    (route) => route.previous_route
)