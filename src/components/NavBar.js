import React, { useContext } from 'react';
import { FavoritosContext } from '../Context/FavoritosContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container px-5">
          <a className="navbar-brand" href="/">
            <span className="fw-bolder text-primary">Gonzalo Plager</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
              <li className="nav-item">
              <Link to="/" className="nav-link active">
                  Home
                  </Link>
              </li>
              <li className="nav-item">
              <Link to="/projects" className="nav-link active">
                  Projects
                  </Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link active">
                  About
                  </Link>
              </li>
              <Link to="/favoritos" className="nav-link active">
                {' '}
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1">Favoritos</i>
                  <span className="badge bg-dark text-white ms-1 rounded-pill fav-badge">
                    <p>{favoritos.length}</p>
                  </span>
                </button>
              </Link>
        
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
