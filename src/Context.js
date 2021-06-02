import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setAllPhotos(data));
    }, []);

    function toggleFavorite(id) {
        setAllPhotos(allPhotos.map(
            photo => photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
        ));
    }

    function addToCart(newImage) { setCartItems(prevCartItems => [...prevCartItems, newImage]); }


    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };