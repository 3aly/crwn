import React, { useContext } from "react";
import CheckoutItem from "../../compnents/CheckoutItems/CheckoutItem";
import { CartContext } from "../../context/cart.context";
import "./CheckOut.scss";

const CheckOut = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeTottalyFromCart,
    cartTotal,
  } = useContext(CartContext);

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
