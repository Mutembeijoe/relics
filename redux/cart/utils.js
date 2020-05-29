export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === itemToAdd.id ? {...item, quantity: item.quantity + itemToAdd.quantity} : item;
    });
  }

  return [...cartItems, itemToAdd];
};
