import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DatosJsonContext = createContext();

const DatosJsonProvider = (props) => {
  const [datosPortfolio, setDatosPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get("/datos.json")
      .then((result) => {
        setDatosPortfolio(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <DatosJsonContext.Provider
      value={{
        datosPortfolio,        
      }}
    >
      {props.children}
    </DatosJsonContext.Provider>
  );
};

export default DatosJsonProvider;