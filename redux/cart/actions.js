import cartActionTypes from "./types";

export const addItemTocart = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
