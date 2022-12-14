import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const Cart = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);

  const isCartOpen = useSelector(selectIsCartOpen);
  const togleCart = () => {
    console.log(isCartOpen);
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <div className="cart-icon-container" onClick={togleCart}>
      <ShoppingIcon className="shopping-ic0n"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
