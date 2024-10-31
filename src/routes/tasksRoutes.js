import express from 'express';
import TaskController from '../controllers/TaskController.js';

const routes = express.Router();
routes.get('/task', TaskController.listarTask); //Retorna todas as tarefas.
routes.get('/task/:id', TaskController.listarTaskbyID); //Retorna uma tarefa específica com base no ID.
routes.post('/task', TaskController.cadastraTask); //Adiciona uma nova tarefa.
routes.put('/tasks/:id', TaskController.editarTask); // Atualiza uma tarefa com base no ID.
routes.delete('/tasks/:id', TaskController.deletarTask); // Remove uma tarefa com base no ID.

export default routes;