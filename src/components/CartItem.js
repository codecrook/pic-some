import React, { useContext } from 'react';
import { Context } from '../Context';

export default function CartItem({ item }) {
    const { removeFromCart } = useContext(Context);
    return (
        <div className="cart-item" onClick={() => removeFromCart(item.id)}>
            <i className="ri-delete-bin-line"></i>
            <img src={item.url} width="130px" alt="" />
            <p>₹5.99</p>
        </div>
    );
}
