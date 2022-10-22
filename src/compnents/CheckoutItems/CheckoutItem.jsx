import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  useContext(CartContext);
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="checkout-item-container ">
      <div className="image-container ">
        {" "}
        <img src={imageUrl} />
      </div>
      <span className="name ">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            removeItemToCart(item);
          }}
        >
          &#10094;
        </div>
        {quantity}
        <div
          className="arrow"
          onClick={() => {
            addItemToCart(item);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price ">{price * quantity} </span>
      <div
        className="remove-button"
        onClick={() => {
          clearItemFromCart(item);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
