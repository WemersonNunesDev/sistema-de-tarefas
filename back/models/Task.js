const dbPromise = require('../db/conn');

class Task {
    constructor(name, status) {
        this.name = name
        this.status = status
    }

    async save() {
        const db = await dbPromise;
        return await db.collection('tasks').insertOne({
            name: this.name,
            status: this.status
        });
    }

    static async getTask() {
        const db = await dbPromise;
        return await db.collection('tasks').find().toArray();
    }
}

module.exports = Task;
