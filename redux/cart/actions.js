import cartActionTypes from "./types";

export const addItemToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = (itemID,size) => ({
  type:cartActionTypes.REMOVE_ITEM,
  payload:{
    id:itemID,
    size
  }
})

export const increaseItemQuantity = (itemID,size) => ({
  type:cartActionTypes.INCREASE_QUANTITY,
  payload:{
    id:itemID,
    size
  }
})

export const decreaseItemQuantity = (itemID,size) => ({
  type:cartActionTypes.DECREASE_QUANTITY,
  payload:{
    id:itemID,
    size
  }
})