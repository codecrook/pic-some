import React from 'react';

export default function Image({ className, img }) {
    return (
        <div className={`image-container ${className}`}>
            <img src={img.url} className="image-grid" alt="display images" />
        </div>
    );
}
