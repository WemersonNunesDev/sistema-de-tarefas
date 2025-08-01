import { useEffect, useState } from "react"

const ROAD = 'http://localhost:3000/tarefas';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('pendente');

    useEffect(() => {
        fetch(ROAD)
            .then(res => {
                if (!res.ok) throw new Error('Erro ao buscar tarefas');
                return res.json();
            })
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, []);

    const salvarTarefa = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch('http://localhost:3000/tarefas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, status })
        });

        if (!response.ok) throw new Error('Erro ao salvar tarefa');

        const novaTarefa = await response.json();

        // Atualiza lista local sem recarregar
        setTasks(prev => [...prev, { name, status, _id: novaTarefa.insertedId }]);
        setName(''); // limpa input
        } catch (err) {
        console.error('Erro ao salvar tarefa:', err);
        alert('Não foi possível salvar a tarefa.');
        }
    };

    const concluirTarefa = async (taskId) => {
        try {
            await fetch(`${ROAD}/${taskId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: 'concluído' }),
            })

            setTasks(prev => 
                prev.map(t => t._id === taskId ? { ...t, status: 'concluído' } : t)
            );
        } catch (err) {
            console.error('Erro ao atualizar tarefa:', err);
            alert('Não foi possível concluir a tarefa.');
        }
    };

    const deletarTarefa = async taskId => {
        try {
            const response = await fetch(`${ROAD}/${taskId}`, { method: 'DELETE' });

            if (!response.ok) throw new Error('Erro ao excluir tarefa');

            setTasks(prev => prev.filter(t => t._id !== taskId));
        } catch (err) {
            console.error('Erro ao excluir tarefa:', err);
            alert('Não foi possível excluir a tarefa.');
        }
    }

    return (
        <section className="text-gray-900">

            <form onSubmit={salvarTarefa} className="mb-8">
                <label htmlFor="" className="block my-2 text-gray-900 font-semibold text-xl">Nova Tarefa</label>
                <div className="flex gap-4">
                    <input 
                        type="text" 
                        placeholder="Insira uma nova tarefa"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="border border-solid border-gray-900 rounded px-2 py-1 w-full"
                    />
                    <input 
                        type="submit" 
                        value="Salvar"
                        aria-label="Nova tarefa"
                        className="bg-blue-500 text-gray-100 font-medium rounded px-4 py-1 focus:bg-blue-300 hover:cursor-pointer"
                    />
                </div>
            </form>

            <h1 className="text-center text-3xl font-bold border-b border-solid border-gray-900 pb-4">Lista de Tarefas</h1>

            <ul className="px-2">
                {tasks.map(task => (
                    <li 
                        key={task._id}
                        className="grid grid-cols-3 text-gray-900 border-b border-solid border-gray-900 py-3"
                    >
                        <p className="capitalize">
                            {task.name}
                        </p>
                        <strong className='uppercase text-center'>
                            {task.status}
                        </strong>
                        <div className="flex gap-4 text-sm justify-end">
                            <button
                                onClick={async () => concluirTarefa(task._id)}
                                className="bg-green-500 px-2 py-1 rounded text-gray-50 font-medium border-2 border-solid border-transparent hover:cursor-pointer hover:bg-transparent hover:border-green-500 hover:text-green-600 transition duration-300 ease-out"
                            >
                                Concluir
                            </button>
                            <button
                                onClick={() => deletarTarefa(task._id)}
                                className="bg-red-500 px-2 py-1 rounded text-gray-50 font-medium border-2 border-solid border-transparent hover:cursor-pointer hover:bg-transparent hover:border-red-500 hover:text-red-600 transition duration-300 ease-out"
                            >
                                Cancelar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}