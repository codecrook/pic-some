import React, { useState, useContext } from 'react';
import { Context } from '../Context';

export default function CartItem({ item }) {
    const { removeFromCart } = useContext(Context);
    const [hovered, setHovered] = useState(false);
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    return (
        <div className="cart-item" onClick={() => removeFromCart(item.id)}>
            <i
                className={iconClassName}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            </i>
            <img src={item.url} width="130px" alt="" />
            <p>₹5.99</p>
        </div>
    );
}
