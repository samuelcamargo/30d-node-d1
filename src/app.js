import express from 'express';
import routes from "./routes/index.js";

const app = express();

routes(app); // instancia das rotas

export default app;