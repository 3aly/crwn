import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import { Button } from "../button/button.component.jsx";
import CheckoutItem from "../CheckoutItems/CheckoutItem";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems, "cartItems");
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          <CartItem item={item} />;
        })}
      </div>
      <Link to={"checkout"}>
        <Button>Go to Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
