import React, { useEffect, useState } from 'react'
import CardProject from '../components/CardProject';
import axios from 'axios';


const Projects = () => {
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
        <main className="">

            <section className="">
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Mis proyectos</span></h1>
                    </div>
                        <div className="row card-container">	
                        
                                                        {data.map((project, index) => (
                                                        <div className="col-6" key={index}>
                                                            <CardProject project={project} />
                                                        </div>
                                                    ))}
		

					</div>	
                    </div>
                
            </section>
        </main>

    </>
  )
}

export default Projects;