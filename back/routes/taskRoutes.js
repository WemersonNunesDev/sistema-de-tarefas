const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const dbPromise = require('../db/conn');
const Task = require('../models/Task');

router.get('/', TaskController.showTask);

router.post('/', async(req, res) => {
    try {
        const { name, status } = req.body;
        const Task = require('../models/Task');
        const newTask = new Task(name, status);
        const result = await newTask.save();
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao salvar tarefas' })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const { id } = req.params;
        const db = await dbPromise;

        await db.collection('tasks').updateOne(
            { _id: new ObjectId(id) },
            { $set: { status } }
        );

        res.status(200).json({ message: 'Tarefa atualizada com sucesso' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const db = await dbPromise;

        await db.collection('tasks').deleteOne({ _id: new ObjectId(id) });

        res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir tarefa' });
    }
});

module.exports = router;