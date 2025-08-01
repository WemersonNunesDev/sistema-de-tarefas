const conn = require('../db/conn');

class Task {
    constructor(name, status) {
        this.name = name
        this.status = status
    }

    async save() {
        const task = await conn.db().collection('tasks').insertOne({
            name: this.name,
            status: this.status
        })

        return task;
    }

    static async getTask() {
        const tasks = await conn.db().collection('tasks').find().toArray()

        return tasks;
    }
}

module.exports = Task;
