import React, { Fragment, useEffect, useState } from "react";

import EditPersona from "./EditPersona";
import InputPersona from "./InputPersona";

const ListPersona = () => {
  const [persona, setPersona] = useState([]);

  //delete persona function

  const deletePersona = async id => {
    try {
      const deletePersona = await fetch(`http://localhost:5000/persona/${id}`, {
        method: "DELETE"
      });

      setPersona(persona.filter(persona => persona.numero_doc !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPersona = async () => {
    try {
      const response = await fetch("http://localhost:5000/persona");
      const jsonData = await response.json();

      setPersona(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPersona();
  }, []);

  console.log(persona);

  return (
    <Fragment>
      {" "}
      <InputPersona />
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Numero doc</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Fecha nacim</th>
            <th>Tipo doc</th>
            <th>Edad</th>
            <th>Estatura</th>
            <th>Situacion milit</th>
            <th>Sexo</th>
            <th>Nivel estudios</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {persona.map(persona => (
            <tr key={persona.numero_doc}>
              <td>{persona.numero_doc}</td>
              <td>{persona.nombre}</td>
              <td>{persona.apellidos}</td>
              <td>{persona.fecha_nacimiento}</td>
              <td>{persona.tipo_doc}</td>
              <td>{persona.edad}</td>
              <td>{persona.estatura}</td>
              <td>{persona.situacion_militar}</td>
              <td>{persona.sexo}</td>
              <td>{persona.nivel_de_estudios}</td>
              <td>
                <EditPersona persona={persona} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePersona(persona.numero_doc)}
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

export default ListPersona;