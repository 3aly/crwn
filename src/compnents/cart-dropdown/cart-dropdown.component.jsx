import React from "react";
import "./cart-dropdown.styles.scss";
import { Button } from "../button/button.component.jsx";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
