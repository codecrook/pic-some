import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from '../Context';
import useHover from '../hooks/useHover';

function Image({ className, img }) {
    const [hovered, ref] = useHover();
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context);
    const isAlreadyInCart = cartItems.some(i => i.id === img.id);

    function HeartIcon({ hovered, isFavorite }) {
        return (
            <>
                {
                    isFavorite ? <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i> :
                        hovered ? <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i> :
                            null
                }
            </>
        );
    }

    function CartIcon({ isAlreadyInCart }) {
        return (
            <>
                {

                    isAlreadyInCart ? <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i> :
                        hovered ? <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i> :
                            null
                }
            </>
        );
    }

    return (
        <div
            className={`image-container ${className}`}
            ref={ref}
        >
            <img src={img.url} className="image-grid" alt="display images" />

            <HeartIcon hovered={hovered} isFavorite={img.isFavorite} />
            <CartIcon isAlreadyInCart={isAlreadyInCart} />
        </div>
    );
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};

export default Image;
