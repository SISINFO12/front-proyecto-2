const express = require("express");
const cors = require("cors");
const db = require("./db"); // 👈 IMPORTANTE

const app = express();
app.use(cors());
app.use(express.json());

// INSERTAR AUTO
app.post("/autos", (req, res) => {
    const { nombre, precio } = req.body;

    const petas = precio / 7;

    db.query(
        "INSERT INTO autos (Autos, Precio, EquivalenciaPeta) VALUES (?, ?, ?)",
        [nombre, precio, petas],
        (err) => {
            if (err) return res.send(err);
            res.send("Auto agregado");
        }
    );
});

// OBTENER AUTOS
app.get("/autos", (req, res) => {
    db.query("SELECT * FROM autos", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
app.delete("/autos/:id", (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM autos WHERE idAutos = ?", [id], (err) => {
        if (err) return res.send(err);
        res.send("Eliminado");
    });
});