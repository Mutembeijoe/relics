import { createSelector } from "reselect"


const cartSelector = state => state.cart

export const cartItemsSelector = createSelector(
    cartSelector,
    (cart) => cart.cartItems
)

export const cartItemsCount = createSelector(
    cartItemsSelector,
    (cartItems) =>  cartItems.reduce((acc, cv)=> acc + cv.quantity , 0)
)