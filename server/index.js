const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({extended: false}));






//****** ROUTES *******//





//***PROVINCIA***

//create a provincia

app.post("/provincia", async (req, res) => {
  try {
    const { nombre_provincia } = req.body;
    const newProvincia = await pool.query(
      "INSERT INTO provincia (nombre_provincia) VALUES($1) RETURNING *",
      [nombre_provincia]
    );

    res.json(newProvincia.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all provincia

app.get("/provincia", async (req, res) => {
  try {
    const allProvincia = await pool.query("SELECT * FROM provincia");
    res.json(allProvincia.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a provincia

app.get("/provincia/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const provincia = await pool.query("SELECT * FROM provincia WHERE cod_provincia = $1", [
      id
    ]);

    res.json(provincia.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a provincia

app.put("/provincia/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_provincia } = req.body;
    const updateProvincia = await pool.query(
      "UPDATE provincia SET nombre_provincia = $1 WHERE cod_provincia = $2",
      [nombre_provincia, id]
    );

    res.json("Provincia actualizada!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a provincia

app.delete("/provincia/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProvincia = await pool.query("DELETE FROM provincia WHERE cod_provincia = $1", [
      id
    ]);
    res.json("Provincia eliminada!");
  } catch (err) {
    console.log(err.message);
  }
});









//***PERSONA***


//create a persona

app.post("/persona", async (req, res) => {
  try {
    const { numero_doc, nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios, fk_persona_cod_municipio } = req.body;
    const newPersona = await pool.query(
      "INSERT INTO persona (numero_doc, nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios, fk_persona_cod_municipio) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [numero_doc, nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios, fk_persona_cod_municipio]
    );

    res.json(newPersona.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//get all persona

app.get("/persona", async (req, res) => {
  try {
    const allPersona = await pool.query("SELECT * FROM persona");
    res.json(allPersona.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a persona

app.get("/persona/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const persona = await pool.query("SELECT * FROM persona WHERE numero_doc = $1", [
      id
    ]);

    res.json(persona.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//update a persona

app.put("/persona/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios } = req.body;
    const updatePersona = await pool.query(
      'UPDATE persona SET nombre=$1, apellidos=$2, fecha_nacimiento=$3, tipo_doc=$4, edad=$5, estatura=$6, situacion_militar=$7, sexo=$8, nivel_de_estudios=$9 WHERE numero_doc = $10',
      [nombre, apellidos, fecha_nacimiento, tipo_doc, edad, estatura, situacion_militar, sexo, nivel_de_estudios, id]
    );

    res.json("Persona actualizada!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete a persona

app.delete("/persona/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePersona = await pool.query("DELETE FROM persona WHERE numero_doc = $1", [id]);
    res.json("Persona eliminada!");
  } catch (err) {
    console.log(err.message);
  }
});






//***MUNICIPIO***


//create a municipio

app.post("/municipio", async (req, res) => {
  try {
    const { cod_municipio, nombre_municipio, fk_cod_provincia } = req.body;
    const newMunicipio = await pool.query(
      "INSERT INTO municipio (cod_municipio, nombre_municipio, fk_cod_provincia) VALUES($1, $2, $3) RETURNING *",
      [cod_municipio, nombre_municipio, fk_cod_provincia]
    );

    res.json(newMunicipio.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//get all municipio

app.get("/municipio", async (req, res) => {
  try {
    const allMunicipio = await pool.query("SELECT * FROM municipio");
    res.json(allMunicipio.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a municipio

app.get("/municipio/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const municipio = await pool.query("SELECT * FROM municipio WHERE cod_municipio = $1", [
      id
    ]);

    res.json(municipio.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//update a municipio

app.put("/municipio/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_municipio, fk_cod_provincia } = req.body; //
    const updateMunicipio = await pool.query(
      'UPDATE municipio SET nombre_municipio=$1, fk_cod_provincia=$2 WHERE cod_municipio = $3',
      [nombre_municipio,fk_cod_provincia, id]
    );

    res.json("Municipio actualizado!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete a municipio

app.delete("/municipio/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMunicipio = await pool.query("DELETE FROM municipio WHERE cod_municipio = $1", [id]);
    res.json("Municipio eliminado!");
  } catch (err) {
    console.log(err.message);
  }
});





//***CENSO DERECHO***


//create a censo_derecho

app.post("/censo_derecho", async (req, res) => {
  try {
    const { id_censo_derecho, fecha_registro, direccion } = req.body;
    const newCensoDerecho = await pool.query(
      "INSERT INTO censo_derecho (id_censo_derecho, fecha_registro, direccion) VALUES($1, $2, $3) RETURNING *",
      [id_censo_derecho, fecha_registro, direccion]
    );

    res.json(newCensoDerecho.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//get all censo_derecho

app.get("/censo_derecho", async (req, res) => {
  try {
    const allCensoDerecho = await pool.query("SELECT * FROM censo_derecho");
    res.json(allCensoDerecho.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a censo_derecho

app.get("/censo_derecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const censo_derecho = await pool.query("SELECT * FROM censo_derecho WHERE id_censo_derecho = $1", [
      id
    ]);

    res.json(censo_derecho.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//update a censo_derecho

app.put("/censo_derecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha_registro, direccion } = req.body; //
    const updateCensoDerecho = await pool.query(
      'UPDATE censo_derecho SET fecha_registro=$1, direccion=$2 WHERE id_censo_derecho = $3',
      [fecha_registro,direccion, id]
    );

    res.json("Censo Derecho actualizado!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete a censo_derecho

app.delete("/censo_derecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCensoDerecho = await pool.query("DELETE FROM censo_derecho WHERE id_censo_derecho = $1", [id]);
    res.json("Censo Derecho eliminado!");
  } catch (err) {
    console.log(err.message);
  }
});





//***CENSO HECHO***


//create a censo_hecho

app.post("/censo_hecho", async (req, res) => {
  try {
    const { id_censo_hecho, fecha_inicio_residencia, direccion, pais_residencia } = req.body;
    const newCensoHecho = await pool.query(
      "INSERT INTO censo_hecho (id_censo_hecho, fecha_inicio_residencia, direccion, pais_residencia) VALUES($1, $2, $3, $4) RETURNING *",
      [id_censo_hecho, fecha_inicio_residencia, direccion, pais_residencia]
    );

    res.json(newCensoHecho.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//get all censo_hecho

app.get("/censo_hecho", async (req, res) => {
  try {
    const allCensoHecho = await pool.query("SELECT * FROM censo_hecho");
    res.json(allCensoHecho.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a censo_hecho

app.get("/censo_hecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const censo_hecho = await pool.query("SELECT * FROM censo_hecho WHERE id_censo_hecho = $1", [
      id
    ]);

    res.json(censo_hecho.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//update a censo_hecho

app.put("/censo_hecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha_inicio_residencia, direccion, pais_residencia } = req.body; //
    const updateCensoHecho = await pool.query(
      'UPDATE censo_hecho SET fecha_inicio_residencia=$1, direccion=$2, pais_residencia=$3 WHERE id_censo_hecho = $4',
      [fecha_inicio_residencia, direccion, pais_residencia, id]
    );

    res.json("Censo Hecho actualizado!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete a censo_hecho

app.delete("/censo_hecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCensoHecho = await pool.query("DELETE FROM censo_hecho WHERE id_censo_hecho = $1", [id]);
    res.json("Censo Hecho eliminado!");
  } catch (err) {
    console.log(err.message);
  }
});





//***DISTRITO***


//create a distrito

app.post("/distrito", async (req, res) => {
  try {
    const { cod_distrito, nombre_distrito, fk_cod_municipio, fk_cod_provincia } = req.body;
    const newDistrito = await pool.query(
      "INSERT INTO distrito (cod_distrito, nombre_distrito, fk_cod_municipio, fk_cod_provincia) VALUES($1, $2, $3, $4) RETURNING *",
      [cod_distrito, nombre_distrito, fk_cod_municipio, fk_cod_provincia]
    );

    res.json(newDistrito.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//get all distrito

app.get("/distrito", async (req, res) => {
  try {
    const allDistrito = await pool.query("SELECT * FROM distrito");
    res.json(allDistrito.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a distrito

app.get("/distrito/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const distrito = await pool.query("SELECT * FROM distrito WHERE cod_distrito = $1", [
      id
    ]);

    res.json(distrito.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//update a distrito

app.put("/distrito/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_distrito, fk_cod_municipio, fk_cod_provincia } = req.body; //
    const updateDistrito = await pool.query(
      'UPDATE distrito SET nombre_distrito=$1, fk_cod_municipio=$2, fk_cod_provincia=$3 WHERE cod_distrito = $4',
      [nombre_distrito,fk_cod_municipio,fk_cod_provincia, id]
    );

    res.json("Distrito actualizado!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete a distrito

app.delete("/distrito/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDistrito = await pool.query("DELETE FROM distrito WHERE cod_distrito = $1", [id]);
    res.json("Distrito eliminado!");
  } catch (err) {
    console.log(err.message);
  }
});




//***CENSO DISTRITAL DERECHO***


//create a censo_distrital_derecho

app.post("/censo_distrital_derecho", async (req, res) => {
  try {
    const { id_censo_derecho_dis, id_fecha_registro, fk_id_censo_derecho } = req.body;
    const newCensoDistritalDerecho = await pool.query(
      "INSERT INTO censo_distrital_derecho (id_censo_derecho_dis, id_fecha_registro, fk_id_censo_derecho) VALUES($1, $2, $3) RETURNING *",
      [id_censo_derecho_dis, id_fecha_registro, fk_id_censo_derecho]
    );

    res.json(newCensoDistritalDerecho.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//get all censo_distrital_derecho

app.get("/censo_distrital_derecho", async (req, res) => {
  try {
    const allCensoDistritalDerecho = await pool.query("SELECT * FROM censo_distrital_derecho");
    res.json(allCensoDistritalDerecho.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a censo_distrital_derecho

app.get("/censo_distrital_derecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const censo_distrital_derecho = await pool.query("SELECT * FROM censo_distrital_derecho WHERE id_censo_derecho_dis = $1", [
      id
    ]);

    res.json(censo_distrital_derecho.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//update a censo_distrital_derecho

app.put("/censo_distrital_derecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { id_fecha_registro, fk_id_censo_derecho } = req.body; //
    const updateCensoDistritalDerechoo = await pool.query(
      'UPDATE censo_distrital_derecho SET id_fecha_registro=$1, fk_id_censo_derecho=$2 WHERE id_censo_derecho_dis = $3',
      [fecha_registro, fk_id_censo_derecho, id]
    );

    res.json("Censo Distrital Derecho actualizado!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete a censo_distrital_derecho

app.delete("/censo_distrital_derecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCensoDistritalDerecho = await pool.query("DELETE FROM censo_distrital_derecho WHERE id_censo_derecho_dis = $1", [id]);
    res.json("Censo Distrital Derecho eliminado!");
  } catch (err) {
    console.log(err.message);
  }
});





//***CENSO DISTRITAL HECHO***


//create a censo_distrital_hecho

app.post("/censo_distrital_hecho", async (req, res) => {
  try {
    const { id_censo_hecho_dis, id_fecha_registro_hecho, fk_id_censo_hecho } = req.body;
    const newCensoDistritalHecho = await pool.query(
      "INSERT INTO censo_distrital_hecho (id_censo_hecho_dis, id_fecha_registro_hecho, fk_id_censo_hecho) VALUES($1, $2, $3) RETURNING *",
      [id_censo_hecho_dis, id_fecha_registro_hecho, fk_id_censo_hecho]
    );

    res.json(newCensoDistritalHecho.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//get all censo_distrital_hecho

app.get("/censo_distrital_hecho", async (req, res) => {
  try {
    const allCensoDistritalHecho = await pool.query("SELECT * FROM censo_distrital_hecho");
    res.json(allCensoDistritalHecho.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//get a censo_distrital_hecho

app.get("/censo_distrital_hecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const censo_distrital_hecho = await pool.query("SELECT * FROM censo_distrital_hecho WHERE id_censo_hecho_dis = $1", [
      id
    ]);

    res.json(censo_distrital_hecho.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//update a censo_distrital_hecho

app.put("/censo_distrital_hecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { id_censo_hecho_dis, id_fecha_registro_hecho, fk_id_censo_hecho } = req.body; //
    const updateCensoDistritalHechoo = await pool.query(
      'UPDATE censo_distrital_hecho SET id_fecha_registro_hecho=$1, fk_id_censo_hecho=$2 WHERE id_censo_hecho_dis = $3',
      [id_fecha_registro_hecho, fk_id_censo_hecho, id]
    );

    res.json("Censo Distrital Hecho actualizado!");
  } catch (err) {
    console.error(err.message);
  }
});


//delete a censo_distrital_hecho

app.delete("/censo_distrital_hecho/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCensoDistritalHecho = await pool.query("DELETE FROM censo_distrital_hecho WHERE id_censo_hecho_dis = $1", [id]);
    res.json("Censo Distrital Hecho eliminado!");
  } catch (err) {
    console.log(err.message);
  }
});






// Server running

app.listen(5000, () => {
  console.log("Servidor corriendo en puerto 5000");
});