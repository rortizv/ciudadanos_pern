import React, { Fragment, useState } from "react";

const EditProvincia = ({ provincia }) => {
  const [nombre_provincia, setNombreProvincia] = useState(provincia.nombre_provincia);

  //edit nombre_provincia function

  const updateNombreProvincia = async e => {
    e.preventDefault();
    try {
      const body = { nombre_provincia };
      const response = await fetch(
        `http://localhost:5000/provincia/${provincia.cod_provincia}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/provincia";
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
        data-target={`#id${provincia.cod_provincia}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        className="modal"
        id={`id${provincia.cod_provincia}`}
        onClick={() => setNombreProvincia(provincia.nombre_provincia)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Provincia</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setNombreProvincia(provincia.nombre_provincia)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={nombre_provincia}
                onChange={e => setNombreProvincia(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateNombreProvincia(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
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