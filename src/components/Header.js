import React, { useContext, useEffect, useState } from 'react'
import CardProject from '../components/CardProject';
import axios from 'axios';

function Home() { 
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("datos.json")
            .then((result)=>{
                setData(result.data);
            })
            .catch((error)=>{
                console.log(error)
            });

    }, []); 
  return (
    <>  
        <header className="py-5">
                <div className="container px-5 pb-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xxl-5">
                        
                            <div className="text-center text-xxl-start">
                                <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Programador &middot; Bilingue &middot; Marketing</div></div>
                                <div className="fs-3 fw-light text-muted">Bienvenidos a mi pagina</div>
                                <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Espero que te guste</span></h1>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                    <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="About">About me</a>
                                    <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects">Projects</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                        
                            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                <div className="profile bg-gradient-primary-to-secondary">
                                
                                    <img className="profile-img" src="assets/foto.png" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="">
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">6 proyectos destacados</span></h1>
                    </div>
                        <div className="row card-container">	
                        
                                                        {data.slice(0,6).map((project, index) => (
                                                        <div className="col-6" key={index}>
                                                            <CardProject project={project} />
                                                        </div>
                                                    ))}
		

					</div>	
                    </div>
                
            </section>
    </>
)
}

export default Home