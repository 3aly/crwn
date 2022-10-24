import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import { Button } from "../button/button.component.jsx";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </div>
      <Link to={"checkout"}>
        <Button>Go to Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
