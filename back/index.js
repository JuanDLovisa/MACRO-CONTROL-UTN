import express from "express";
import { sequelize } from './config/db.js';
import cors from "cors"
import "dotenv/config"
import './helpers/dbrelationships.js'; // para ejecutar las asociaciones

const app = express();

app.use(express.json());
app.use(cors());

// Middleware de JSON
app.use(express.json());

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
