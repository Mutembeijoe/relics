import userActionTypes from "./types";

export const login = (user) => ({
    type:userActionTypes.LOGIN,
    payload:{
        ...user
    }
}) 