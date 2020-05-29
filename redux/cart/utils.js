const findItemInCart = (cartItems,itemID, size) => {
  return cartItems.find((item) => item.id === itemID && item.size === size);
};

export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = findItemInCart(cartItems, itemToAdd.id, itemToAdd.size);

  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === itemToAdd.id && item.size === itemToAdd.size
        ? { ...item, quantity: item.quantity + itemToAdd.quantity }
        : item;
    });
  }

  return [...cartItems, itemToAdd];
};

export const removeItemFromCart = (cartItems, removeItem) => {
  return cartItems.filter(
    (item) => item.id !== removeItem.id || item.size !== removeItem.size
  );
};

export const increaseItemQuantity = (cartItems, itemToIncrease) => {
  return cartItems.map((item) => {
    return item.id === itemToIncrease.id && item.size === itemToIncrease.size
      ? { ...item, quantity: item.quantity + 1 }
      : item;
  });
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const existingItem = findItemInCart(cartItems, itemToDecrease.id, itemToDecrease.size);

  if (existingItem.quantity == 1) {
    return removeItemFromCart(cartItems, itemToDecrease);
  } else {
    return cartItems.map((item) => {
      return item.id === itemToDecrease.id && item.size === itemToDecrease.size
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
  }
};
