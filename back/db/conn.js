const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function conectar() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB!');
        return client.db('sistemadecontroledetarefas');
    } catch (err) {
        console.error(`Erro ao conectar: ${err}`);
    }
}

module.exports = conectar();
