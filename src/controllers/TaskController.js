
class TaskController {
  // Armazena as tarefas
  static tasks = [
    { id: 1, title: 'Estudar Node.js', completed: false },
    { id: 2, title: 'Praticar exercícios de JavaScript', completed: true }
  ];

  static async listarTask(req, res) { // busca tudo

    res.status(200).json(TaskController.tasks);

  }

  static async listarTaskbyID(req, res) { // busca por id
    const taskId = parseInt(req.params.id);
    const task = TaskController.tasks.find(task => task.id === taskId);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  }

  static async cadastraTask(req, res) {
    const { title, completed } = req.body;
    const newId = TaskController.tasks.length > 0
      ? TaskController.tasks[TaskController.tasks.length - 1].id + 1
      : 1;

    const newTask = { id: newId, title, completed: completed || false };

    TaskController.tasks.push(newTask);
    res.status(201).json(newTask);
  }

  // Método para atualizar uma tarefa existente
  static async editarTask(req, res) {
    const taskId = parseInt(req.params.id);
    const { title, completed } = req.body;
    const task = TaskController.tasks.find(task => task.id === taskId);

    if (task) {
      task.title = title || task.title;
      task.completed = completed !== undefined ? completed : task.completed;
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  }

  // Método para deletar uma tarefa existente
  static async deletarTask(req, res) {
    const taskId = parseInt(req.params.id);
    const taskIndex = TaskController.tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
      const deletedTask = TaskController.tasks.splice(taskIndex, 1);
      res.status(200).json({ message: 'Tarefa deletada com sucesso', deletedTask });
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  }

}

export default TaskController;