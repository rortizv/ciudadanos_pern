import React, { Fragment2, useState } from "react";

const InputPersona = () => {
  const [numero_doc, nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar,
    sexo, nivel_de_estudios, fk_persona_cod_municipio, setNumeroDoc, setNombre, setApellidos, setFechaNacimiento,
    setTipoDoc, setEdad, setEstatura, setSituacionMilitar, setSexo, setFkPersonaCodMunicipio] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { numero_doc, nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios, fk_persona_cod_municipio };
      const response = await fetch("http://localhost:5000/persona", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment2>
      <h1 className="text-center mt-5">PERSONA</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
            type="number"
            className="form-control"
            value={numero_doc}
            placeholder="Número del documento..."
            onChange={e => setNumeroDoc(e.target.value)}
            />

        <input
            type="text"
            className="form-control"
            value={nombre}
            placeholder="Nombre..."
            onChange={e => setNombre(e.target.value)}
            />

        <input
            type="text"
            className="form-control"
            value={apellidos}
            placeholder="Apellidos..."
            onChange={e => setApellidos(e.target.value)}
            />

        <input
            type="date"
            className="form-control"
            value={fecha_nacimiento}
            placeholder="Fecha nacimiento..."
            onChange={e => setFechaNacimiento(e.target.value)}
            />

        <input
            type="text"
            className="form-control"
            value={numero_doc}
            placeholder="Tipo de documento..."
            onChange={e => setTipoDoc(e.target.value)}
            />

        <input
          type="text"
          className="form-control"
          value={edad}
          placeholder="Edad..."
          onChange={e => setEdad(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          value={estatura}
          placeholder="Estatura..."
          onChange={e => setEstatura(e.target.value)}
        />
        

        <input
          type="text"
          className="form-control"
          value={situacion_militar}
          placeholder="Situación militar..."
          onChange={e => setSituacionMilitar(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          value={sexo}
          placeholder="Sexo..."
          onChange={e => setSexo(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          value={fk_persona_cod_municipio}
          placeholder="Código municipio..."
          onChange={e => setFkPersonaCodMunicipio(e.target.value)}
        />


        <button className="btn btn-success ml-3">Agregar</button>
      </form>
    </Fragment2>
  );
};

export default InputPersona;