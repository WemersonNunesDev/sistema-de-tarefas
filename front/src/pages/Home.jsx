import { useEffect, useState } from "react"

export default function Home() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tarefas')
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <section className="text-gray-900">
            <h1 className="text-center text-3xl font-bold border-b border-solid border-gray-900 pb-4">Lista de Tarefas</h1>

            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>{task.name}{task.status}</li>
                ))}
            </ul>
        </section>
    )
}