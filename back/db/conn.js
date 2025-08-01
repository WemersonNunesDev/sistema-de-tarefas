const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function conectar() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB!');
        const db = client.db('sistemaControleTarefas');
        return db;
    } catch (err) {
        console.error(`Erro ao conectar: ${err}`);
        return null;
    }
}

conectar();

