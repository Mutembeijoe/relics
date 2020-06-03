import userActionTypes from "./types";

export const login = (user) => ({
    type:userActionTypes.LOGIN,
    payload:{
        ...user
    }
}) 

export const logout = () => ({
    type:userActionTypes.LOGOUT
})