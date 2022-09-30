import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
const Cart = () => {
  const { isCartopen, setIsCartopen } = useContext(CartContext);

  const togleCart = () => setIsCartopen(!isCartopen);
  return (
    <div className="cart-icon-container" onClick={togleCart}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">10</span>
    </div>
  );
};

export default Cart;
