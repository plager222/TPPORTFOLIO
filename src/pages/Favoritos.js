import React from 'react'
import { useContext } from 'react';
import ProjectoFavorito from '../components/ProjectoFavorito';
import { FavoritosContext } from '../Context/FavoritosContext';

export default function Favoritos() {
    const { favoritos, ResetFavoritos, removeFav } = useContext(FavoritosContext);

    const handleRemove = (id) => {
        removeFav(id);
    }

return (
<div class="px-4 px-lg-0">

<div class="container text-white py-5 text-center">
    <h1 class="display-4">Bootstrap 4 shopping cart</h1>
    <p class="lead mb-0">Build a fully structred shopping cart page using Bootstrap 4. </p>
    <p class="lead">Snippet by <a href="https://bootstrapious.com/snippets" class="text-white font-italic">
            <u>Bootstrapious</u></a>
    </p>
</div>
{favoritos.map((projecto, i) => (
                <div key={i} className="mb-3">
                    <ProjectoFavorito projecto={projecto} />
                    <button onClick={() => handleRemove(projecto.id)} type="button" className="btn btn-danger">Eliminar</button>
                </div>
            ))}

<div class="pb-5">
    <div class="container">
            <center>
                <button onClick={()=>ResetFavoritos()} type="button" class="btn btn-danger">Borrar favoritos</button> 
            </center>
        </div>
    </div>
    </div>      
    )
}