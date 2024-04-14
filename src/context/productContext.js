import { createContext, useState, useEffect } from "react";
import { allProducts } from "../Utils/product";

export const productContext = createContext(null);

//This loops for the number of time a product is selected by the client. The default cart[i] = 0
//The reason is because this
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < allProducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const retrievedCart = () => {
  const newItem = localStorage.getItem("cartItems");
  return newItem ? JSON.parse(newItem) : {};
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
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
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

  return (
    <productContext.Provider value={contextValue}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
