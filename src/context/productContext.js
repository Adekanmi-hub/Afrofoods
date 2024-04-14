import { createContext, useState, useEffect } from "react";
import { allProducts } from "../Utils/product";

export const productContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < allProducts.length + 1; i++) {
    //----------> push the all products to the cart
    cart[i] = allProducts[i];
  }
  return cart;
};

const retrievedCart = () => {
  let newItem = localStorage.getItem("cartItems");
  if (!newItem) {
    //----------> if no item in the cart
    newItem = getDefaultCart();
    return newItem;
  }
  return JSON.parse(newItem);
};
export const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(retrievedCart);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.Price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return <productContext.Provider value={contextValue}>{props.children}</productContext.Provider>;
};

export default ProductContextProvider;
