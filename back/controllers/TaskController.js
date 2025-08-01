const Task = require('../models/Task')

module.exports = class TaskController {
    static async showTask(req, res) {
        try {
            const task = await Task.getTask()
            res.status(200).json(task)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Erro ao buscar tarefas' })
        }
    }
}
