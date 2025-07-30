const conn = require('../db/conn');

class Task {
    constructor(name, status) {
        this.name = name
        this.status = status
    }

    save() {
        const task = conn.db().collection('taks').insertOne({
            name: this.name,
            status: this.status
        })

        return task
    }

    static getTask() {
        const tasks = conn.db().collection('tasks').find().toArray()

        return tasks;
    }
}

module.exports = Task;
