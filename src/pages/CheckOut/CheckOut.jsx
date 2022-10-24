import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../compnents/CheckoutItems/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./CheckOut.scss";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          {" "}
          <span>Products</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Descritpion</span>
        </div>
        <div className="header-block">
          {" "}
          <span>quantity</span>
        </div>
        <div className="header-block">
          {" "}
          <span>price</span>
        </div>
        <div className="header-block">
          {" "}
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
