import React from 'react'
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

export const Cart = () =>{
    return <div className="Cart">
        <div>
            <h1>Your cart is empty</h1>
        </div>;
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />;
                }
            })}
        </div>
    </div>;
};
