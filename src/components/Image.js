import React, { useState, useContext } from 'react';
import { Context } from '../Context';

export default function Image({ className, img }) {
    const [hovered, setHovered] = useState(false);
    const { toggleFavorite } = useContext(Context);

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

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;


    return (
        <div
            className={`image-container ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" alt="display images" />

            <HeartIcon hovered={hovered} isFavorite={img.isFavorite} />
            {cartIcon}
        </div>
    );
}
