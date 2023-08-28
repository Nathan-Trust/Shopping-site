import React from "react";
import { PRODUCTS } from "../../products";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import {  LocalGroceryStoreOutlined,} from "@mui/icons-material";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
            <CartItem data={product} />
            )
          }else{
          return(undefined)
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal:${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1 className="emptyCart"><LocalGroceryStoreOutlined sx={{fontSize:"200px"}}/></h1>
      )}
    </div>
  );
};

export default Cart;
