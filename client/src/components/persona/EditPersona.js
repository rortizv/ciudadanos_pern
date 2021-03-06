import React, { Fragment, useState } from "react";

const EditPersona = ({ persona }) => {
  const [nombre, setNombrePersona] = useState(persona.nombre);
  const [apellidos, setApellidosPersona] = useState(persona.apellidos);
  const [fecha_nacimiento, setFechaNacimientoPersona] = useState(persona.fecha_nacimiento);
  const [tipo_doc, setTipoDocPersona] = useState(persona.tipo_doc);
  const [edad, setEdadPersona] = useState(persona.edad);
  const [estatura, setEstaturaPersona] = useState(persona.estatura);
  const [situacion_militar, setSituacionMilitarPersona] = useState(persona.situacion_militar);
  const [sexo, setSexoPersona] = useState(persona.sexo);
  const [nivel_de_estudios, setNivelEstudiosPersona] = useState(persona.nivel_de_estudios);
  const [fk_persona_cod_municipio, setFkPersonaCodMunicipio] = useState(persona.fk_persona_cod_municipio);

  //edit nombre_persona function

  const updateNombrePersona = async e => {
    e.preventDefault();
    try {
      const body = { nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios, fk_persona_cod_municipio };
      const response = await fetch(
        `http://localhost:5000/persona/${persona.numero_doc}`,
        `http://localhost:5000/persona/${persona.nombre}`,
        `http://localhost:5000/persona/${persona.apellidos}`,
        `http://localhost:5000/persona/${persona.fecha_nacimiento}`,
        `http://localhost:5000/persona/${persona.tipo_doc}`,
        `http://localhost:5000/persona/${persona.edad}`,
        `http://localhost:5000/persona/${persona.estatura}`,
        `http://localhost:5000/persona/${persona.sexo}`,
        `http://localhost:5000/persona/${persona.nivel_de_estudios}`,
        `http://localhost:5000/persona/${persona.fk_persona_cod_municipio}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/persona";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${persona.numero_doc}`}
      >
        Edit
      </button>
      <div
        className="modal"
        id={`id${persona.numero_doc}`}
        onClick={() => setNombrePersona(persona.nombre)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Persona</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setNombrePersona(persona.nombre)}
              />
                <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setApellidosPersona(persona.apellidos)}
              />
                <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setFechaNacimientoPersona(persona.fecha_nacimiento)}
              />
                <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setTipoDocPersona(persona.tipo_doc)}
              />
                <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setEdadPersona(persona.edad)}
              />
                <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setEstaturaPersona(persona.estatura)}
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setSituacionMilitarPersona(persona.situacion_militar)}
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setSexoPersona(persona.sexo)}
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setNivelEstudiosPersona(persona.nivel_de_estudios)}
              />
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setFkPersonaCodMunicipio(persona.fk_persona_cod_municipio)}
              />
                &times;
            </div>

            <div className="modal-body">
              Nombre:
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={e => setNombrePersona(e.target.value)}
              />
              Apellidos:
              <input
                type="text"
                className="form-control"
                value={apellidos}
                onChange={e => setApellidosPersona(e.target.value)}
              />
              Fecha Nacimiento:
              <input
                type="text"
                className="form-control"
                value={fecha_nacimiento}
                onChange={e => setFechaNacimientoPersona(e.target.value)}
              />
              Tipo documento:
              <input
                type="text"
                className="form-control"
                value={tipo_doc}
                onChange={e => setTipoDocPersona(e.target.value)}
              />
              Edad:
              <input
                type="text"
                className="form-control"
                value={edad}
                onChange={e => setEdadPersona(e.target.value)}
              />
              Estatura:
              <input
                type="text"
                className="form-control"
                value={estatura}
                onChange={e => setEstaturaPersona(e.target.value)}
              />
              Situacion militar:
              <input
                type="text"
                className="form-control"
                value={situacion_militar}
                onChange={e => setSituacionMilitarPersona(e.target.value)}
              />
              Sexo:
              <input
                type="text"
                className="form-control"
                value={sexo}
                onChange={e => setSexoPersona(e.target.value)}
              />
              Nivel de estudios:
              <input
                type="text"
                className="form-control"
                value={nivel_de_estudios}
                onChange={e => setNivelEstudiosPersona(e.target.value)}
              />
              Municipio:
              <input
                type="text"
                className="form-control"
                value={fk_persona_cod_municipio}
                onChange={e => setFkPersonaCodMunicipio(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateNombrePersona(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNombrePersona(persona.numero_doc)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditPersona;