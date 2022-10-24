import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();

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
            dispatch(removeItemFromCart(cartItems, item));
          }}
        >
          &#10094;
        </div>
        {quantity}
        <div
          className="arrow"
          onClick={() => {
            dispatch(addItemToCart(cartItems, item));
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price ">{price * quantity} </span>
      <div
        className="remove-button"
        onClick={() => {
          dispatch(clearItemFromCart(cartItems, item));
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
