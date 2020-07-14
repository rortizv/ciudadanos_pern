import React, { Fragment, useState } from "react";

const EditProvincia = ({ provincia }) => {
  const [nombre_provincia, setNombreProvincia] = useState(provincia.nombre_provincia);

  //edit nombre_provincia function

  const updateNombreProvincia = async e => {
    e.preventDefault();
    try {
      const body = { nombre_provincia };
      const response = await fetch(
        `http://localhost:5000/ciudadanos_pern/${provincia.cod_provincia}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${provincia.cod_provincia}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${provincia.cod_provincia}`}
        onClick={() => setNombreProvincia(provincia.nombre_provincia)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Editar Provincia</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setNombreProvincia(provincia.nombre_provincia)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={nombre_provincia}
                onChange={e => setNombreProvincia(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateNombreProvincia(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNombreProvincia(provincia.nombre_provincia)}
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

export default EditProvincia;