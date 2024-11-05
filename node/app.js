import express from "express";
import cors from "cors";
import db from "./database/db.js";

import blogRouter from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
// IMPORTNATE LA BARRITA ANTES DEL NOMBRE
app.use("/blogs", blogRouter);

try {
  await db.authenticate();
  console.log("conexion exitos a la db yeka");
} catch (err) {
  console.log(`El error de conexion es: ${err}`);
}

// app.get('/blogs/1', (req, res) => {
//   res.send(req.params.id)
// })

app.listen(8000, () => {
  console.log("server is running on http://localhost:8000/");
});
