import React, { Fragment, useEffect, useState } from "react";

import EditProvincia from "./EditProvincia";

const ListProvincia = () => {
  const [provincias, setProvincias] = useState([]);

  //delete provincia function

  const deleteProvincia = async id => {
    try {
      const deleteProvincia = await fetch(`http://localhost:5000/provincias/${id}`, {
        method: "DELETE"
      });

      setProvincias(provincias.filter(provincia => provincia.cod_provincia !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getProvincias = async () => {
    try {
      const response = await fetch("http://localhost:5000/provincias");
      const jsonData = await response.json();

      setProvincias(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProvincias();
  }, []);

  console.log(provincias);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
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
          {provincias.map(provincia => (
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