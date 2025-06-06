import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import mercadoPagoRoutes from './routes/mercadoPago.js';
import pingRoutes from './routes/ping.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', pingRoutes);
app.use('/api/mercadopago', mercadoPagoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

