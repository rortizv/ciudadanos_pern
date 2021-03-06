import React, { Fragment, useState } from "react";

const InputProvincia = () => {
  const [nombre_provincia, setNombreProvincia] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { nombre_provincia };
      const response = await fetch("http://localhost:5000/provincia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/provincia";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">PROVINCIA</h1>
      <form className="d-flex mt-3" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control ml-5 mr-2"
          value={nombre_provincia}
          placeholder="Nombre PROVINCIA a agregar..."
          onChange={e => setNombreProvincia(e.target.value)}
        />
        <button className="btn btn-success ml-3 mr-5">Agregar</button>
      </form>
    </Fragment>
  );
};

export default InputProvincia;