export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => (item.id === itemToAdd.id) &&(item.size === itemToAdd.size) );

  if (existingItem) {
    return cartItems.map((item) => {
      return (item.id === itemToAdd.id) && (item.size === itemToAdd.size) ? {...item, quantity: item.quantity + itemToAdd.quantity} : item;
    });
  }

  return [...cartItems, itemToAdd];
};


export const removeItemFromCart = (cartItems, removeItem) =>{
    return cartItems.filter((item) => ((item.id !== removeItem.id) || (item.size !== removeItem.size)))
}