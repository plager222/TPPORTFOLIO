import React from 'react'
import { Link } from 'react-router-dom'
import Detalle from '../pages/Detalle'
import { useContext } from 'react'
import { FavoritosContext } from '../Context/FavoritosContext'

function CardProject({project}) {

    const { addFav, existeFav, removeFav } = useContext(FavoritosContext);
return (
<>
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
    <div className="card-body p-0">
        <div className="d-flex align-items-center">
            <div className="p-3">
            <h2 className="fw-bolder">{project.titulo}</h2>
            <p>{project.date}</p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <Link to = {"/detalle/"+project.id}><a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder colorLetra" >  <p style={{color: "white"}}>Mas detalles </p></a> </Link> 
                {!existeFav(project.id) ? (
                    <button className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" onClick={() => addFav(project)}> Añadir a favoritos</button>
                ):(
                    <button className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" onClick={() => removeFav(project.id)}> Quitar de favoritos</button>
                )}
                
                
                </div>
            </div>
    </div>
    </div>
    </div>
</>
)
}

export default CardProject