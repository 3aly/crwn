import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { Button } from "../button/button.component";
import "./product-card.scss";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { name, imageUrl, price } = product;

  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={addProductToCart}>
        add to cart
      </Button>
    </div>
  );
}
