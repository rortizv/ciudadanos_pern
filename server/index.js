const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

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

//update a todo

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

app.listen(5000, () => {
  console.log("Servidor corriendo en puerto 5000");
});
