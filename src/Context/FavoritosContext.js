import React, { createContext, useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { DatosJsonContext } from '../Context/DatosJsonContext';
export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {

    const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem('favoritos')) ? JSON.parse(localStorage.getItem('favoritos')) : []);
    
    const addFav = (project) => {
        setFavoritos([
            ...favoritos,
            project
        ])
    }

    const ResetFavoritos = () => {
        setFavoritos([]);
    }

    const existeFav = (id) => {
        const filtro =  favoritos.filter(item => item.id == id)

        let res = filtro.length > 0;
        return res;
    }

    const removeFav = (id) => {
        const nuevoFav = favoritos.filter(item => item.id !== id);
        setFavoritos(nuevoFav);
    }

    
    useEffect(() => {
        console.log(favoritos)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])

    return (
        <FavoritosContext.Provider
            value={{
                favoritos,
                addFav,
                ResetFavoritos,
                removeFav,
                existeFav
            }}
        >
            {props.children}
        </FavoritosContext.Provider>
    );
}



export default FavoritosProvider;