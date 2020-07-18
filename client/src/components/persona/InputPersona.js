import React, { Fragment, useState } from "react";

const InputPersona = () => {
  const [nombre_provincia, setNombreProvincia] = useState("");
  const [nombre, setNombrePersona] = useState("");
  const [apellidos, setApellidosPersona] = useState("");
  const [fecha_nacimiento, setFechaNacimientoPersona] = useState("");
  const [tipo_doc, setTipoDocPersona] = useState("");
  const [edad, setEdadPersona] = useState("");
  const [estatura, setEstaturaPersona] = useState("");
  const [situacion_militar, setSituacionMilitarPersona] = useState("");
  const [sexo, setSexoPersona] = useState("");
  const [nivel_de_estudios, setNivelEstudiosPersona] = useState("");
  const [fk_persona_cod_municipio, setFkPersonaCodMunicipio] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios, fk_persona_cod_municipio };
      const response = await fetch("http://localhost:5000/persona", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/persona";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">PERSONA</h1>
      <form className="dmt-3 form-group" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control m-2"
          value={nombre}
          placeholder="Nombre..."
          onChange={e => setNombrePersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={apellidos}
          placeholder="Apellidos..."
          onChange={e => setApellidosPersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={fecha_nacimiento}
          placeholder="Fecha de nacimiento..."
          onChange={e => setFechaNacimientoPersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={tipo_doc}
          placeholder="Tipo de documento..."
          onChange={e => setTipoDocPersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={edad}
          placeholder="Edad..."
          onChange={e => setEdadPersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={estatura}
          placeholder="Estatura..."
          onChange={e => setEstaturaPersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={situacion_militar}
          placeholder="Situación militar..."
          onChange={e => setSituacionMilitarPersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={sexo}
          placeholder="Sexo..."
          onChange={e => setSexoPersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={nivel_de_estudios}
          placeholder="Nivel de estudios..."
          onChange={e => setNivelEstudiosPersona(e.target.value)}
        />
        <input
          type="text"
          className="form-control m-2"
          value={fk_persona_cod_municipio}
          placeholder="Municipio..."
          onChange={e => setFkPersonaCodMunicipio(e.target.value)}
        />
        <button className="btn btn-success ml-3 mr-5">Agregar</button>
      </form>
    </Fragment>
  );
};

export default InputPersona;