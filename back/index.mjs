import express from "express";
import "dotenv/config";

import { sequelize } from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import dietRoutes from "./routes/dietRoutes.js";


const app = express();
app.use(express.json());

// Rutas
app.use("/users", userRoutes);
app.use("/food", foodRoutes);
app.use("/diet", dietRoutes);

try {
  await sequelize.authenticate();
  console.log("DB connected successfully");
  await sequelize.sync(); // opcional: { alter: true }
} catch (err) {
  console.error("DB error:", err);
}

// Sincronizar modelos con la base de datos antes de correr el servidor (el fede corre primero el servidor)
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Base de datos sincronizada');
    
    app.listen(3000, () => {// Iniciar el servidor
      console.log('🚀 Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error('Error al sincronizar base de datos:', err);
  });
