export const saveCurrentRoute = (route) => ({
    type:"SAVE_CURRENT_ROUTE",
    payload:route
}) 

export const deletePreviousRoute = () => ({
    type:"DELETE_PREVIOUS_ROUTE",
})