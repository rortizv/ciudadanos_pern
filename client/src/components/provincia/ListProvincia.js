import React, { Fragment, useEffect, useState } from "react";

import EditProvincia from "./EditProvincia";
import InputProvincia from "./InputProvincia";

const ListProvincia = () => {
  const [provincia, setProvincia] = useState([]);

  //delete provincia function

  const deleteProvincia = async id => {
    try {
      const deleteProvincia = await fetch(`http://localhost:5000/provincia/${id}`, {
        method: "DELETE"
      });

      setProvincia(provincia.filter(provincia => provincia.cod_provincia !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getProvincia = async () => {
    try {
      const response = await fetch("http://localhost:5000/provincia");
      const jsonData = await response.json();

      setProvincia(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProvincia();
  }, []);

  console.log(provincia);

  return (
    <Fragment>
      {" "}
      <InputProvincia />
      {/* <h1 className="text-center mt-5">PROVINCIA</h1> */}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Nombre Provincia</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {provincia.map(provincia => (
            <tr key={provincia.cod_provincia}>
              <td>{provincia.nombre_provincia}</td>
              <td>
                <EditProvincia provincia={provincia} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProvincia(provincia.cod_provincia)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );


  
};

export default ListProvincia;