const mysql = require("mysql2");
require("dotenv").config(); // 👈 ESTO VA ARRIBA

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
});

db.connect(err => {
    if (err) {
        console.log("Error al conectar:", err.message);
    } else {
        console.log("Conectado a la BD");
    }
});

module.exports = db;