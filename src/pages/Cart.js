import React, { useContext } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

export default function Cart() {
    const { cartItems } = useContext(Context);
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItems.map(item => <CartItem key={item.id} item={item} />)}

            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    );
}
