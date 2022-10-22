import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const togleCart = () => {
    console.log(isCartOpen);
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={togleCart}>
      <ShoppingIcon className="shopping-ic0n"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
