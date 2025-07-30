const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const conn = require('./db/conn');

app.use(cors());
app.use(express.json())

const taskRoutes = require('./routes/taskRoutes');
app.use('/tarefas', taskRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
