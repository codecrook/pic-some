import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartItems, emptyCart } = useContext(Context);
    const totalCost = 5.99 * cartItems.length;
    const [buttonText, setButtonText] = useState('Place Order');

    function placeOrder() {
        setButtonText('Ordering...');
        setTimeout(() => {
            setButtonText('Place Order');
            emptyCart();
        }, 3000);
    }
    return (
        <main className="cart-page">
            {
                cartItems.length > 0 ?
                    <>
                        <h1>Check out</h1>
                        {cartItems.map(item => <CartItem key={item.id} item={item} />)}

                        <p className="total-cost">
                            Total: {totalCost.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                        </p>
                        <div className="order-button">
                            <button onClick={placeOrder}>{buttonText}</button>
                        </div>
                    </> :
                    <>
                        <h1>It's empty here! </h1>
                        <h3 style={{ textAlign: 'center' }}>
                            <Link to="/" style={{ color: 'grey' }}>
                                <i class="ri-arrow-left-line"></i>
                                Add Some Items
                            </Link>
                        </h3>
                    </>
            }
        </main>
    );
}
