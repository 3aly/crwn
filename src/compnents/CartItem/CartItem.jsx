const CartItem = ({ item }) => {
  console.log(item, "CartItem");

  return (
    <div className="CartItemContainer">
      <img src={item.imageUrl} />
      <div className="ItemDetails">
        {" "}
        <span>{item.name}</span>
        <span>
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
