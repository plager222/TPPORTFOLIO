import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DatosJsonContext } from "../Context/DatosJsonContext";
import { FavoritosContext } from "../Context/FavoritosContext";
import "./Detalle.css";

function Detalle() {
  const { id } = useParams();
  const { addFav, removeFav, existeFav } = useContext(FavoritosContext);
  const { datosPortfolio } = useContext(DatosJsonContext);

  const [project, setProject] = useState(null);

  useEffect(() => {
    const filtro = datosPortfolio.find((project) => project.id === parseInt(id, 6));
    setProject(filtro);
  }, [datosPortfolio, id]);

  return (
    <>
      <center>
        <h1 className="text-gradient d-inline">{project ? project.description : ""}</h1>
      </center>
      <div className="">
        <img className="" src={project ? project.img : ""} />
        <br />
        <p>Fecha de creacion: {project ? project.date : ""}</p>
        <p>Link proyecto: {project ? project.url : ""}</p>
        <br />
      </div>
      <center>
        {!existeFav(id) ? (
          <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" onClick={() => addFav(project)}> Añadir a favoritos</a>
        ) : (
          <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" onClick={() => removeFav(project.id)}> Quitar de favoritos</a>
        )}
      </center>
    </>
  );
}

export default Detalle;

