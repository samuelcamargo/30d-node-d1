import express from 'express';
import taskRoutes from './tasksRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("projeto node 30d - d1");
    });
    app.use(express.json(), taskRoutes); // Usa as rotas importadas
};

export default routes;