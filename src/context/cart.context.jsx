import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json";

export const CartContext = createContext({
  isCartopen: false,
  setIsCartopen: () => {
    this.isCartopen = !this.isCartopen;
  },
});

export const CartProvider = ({ children }) => {
  const [isCartopen, setIsCartopen] = useState(false);
  const value = { isCartopen, setIsCartopen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
