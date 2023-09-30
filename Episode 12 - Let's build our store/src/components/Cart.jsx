import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SWIGGY_RESTURANT_MENU_FOOD_IMG_URL } from "../utils/constants";
import { clearItems } from "../utils/cartSlice";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearItems());
  };

  return cartItems.length ? (
    <div>
      <h1 className="text-center font-semibold text-2xl mt-2">Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item.card.info.id}
          className="menu-item-container mx-8 my-5 px-5 flex justify-between items-center py-4 border-b-[1px] border-gray-300"
        >
          <div className="menu-item w-fit pr-5">
            <h4 className="font-semibold py-1">{item.card.info.name}</h4>
            <p className="font-medium text-orange-400 py-1">
              ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>
          </div>
          <div className="menu-item-img flex flex-col">
            <img
              className="menu-food-img w-24 rounded-xl"
              src={SWIGGY_RESTURANT_MENU_FOOD_IMG_URL + item.card.info.imageId}
              alt="food-img"
            ></img>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button
          className="bg-black p-2 text-white rounded-xl"
          onClick={clearCartItems}
        >
          Clear cart
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <RemoveShoppingCartIcon fontSize="large" />
      Cart is empty!
    </div>
  );
};

export default Cart;
