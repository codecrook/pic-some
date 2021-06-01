import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([]);

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

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };