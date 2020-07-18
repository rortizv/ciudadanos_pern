const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Montero.84",
    host: "localhost",
    port: 5432,
    database: "conteo_ciudadano_bd"
});

module.exports = pool;
