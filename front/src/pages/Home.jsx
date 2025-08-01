import { useEffect, useState } from "react"

const ROAD = 'http://localhost:3000/tarefas';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');

    useEffect(() => {
        fetch(ROAD)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        if (!newTaskName) return;

        const newTask = { name: newTaskName, status: 'PENDENTE' };

        const res = await fetch(ROAD, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        });

        if (res.ok) {
            const savedTask = await res.json();
            setTasks([...tasks, savedTask]);
            setNewTaskName('');
        } else {
            console.error('Erro ao salvar tarefa');
        }
    }

    return (
        <section className="text-gray-900">

            <form onSubmit={handleSubmit} className="mb-8">
                <label htmlFor="" className="block my-2 text-gray-900 font-semibold text-xl">Nova Tarefa</label>
                <div className="flex gap-4">
                    <input 
                        type="text" 
                        placeholder="Insira uma nova tarefa"
                        value={newTaskName}
                        onChange={e => setNewTaskName(e.target.value)}
                        className="border border-solid border-gray-900 rounded px-2 py-1 w-full"
                    />
                    <input 
                        type="submit" 
                        value="Salvar"
                        aria-label="Nova tarefa"
                        className="bg-blue-500 text-gray-100 font-medium rounded px-4 py-1 hover:bg-blue-300 hover:cursor-pointer"
                    />
                </div>
            </form>

            <h1 className="text-center text-3xl font-bold border-b border-solid border-gray-900 pb-4">Lista de Tarefas</h1>

            <ul>
                {tasks.map(task => (
                    <li key={task._id ?? task.name}>{task.name} -- {task.status}</li>
                ))}
            </ul>
        </section>
    )
}