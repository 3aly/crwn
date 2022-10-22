import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Button } from "../button/button.component";
import "./product-card.scss";

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);

  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={"inverted"}
        onClick={() => {
          addItemToCart(product);
        }}
      >
        add to cart
      </Button>
    </div>
  );
}
