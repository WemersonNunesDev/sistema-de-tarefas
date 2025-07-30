export default function NewItem() {
    return (
        <section className="text-gray-900">
            <h1 className="text-center text-3xl font-bold border-b border-solid border-gray-900 pb-4">Nova Tarefa</h1>

            <form className="text-gray-900">
                <div className="flex flex-col gap-2 py-2">
                    <label>Nome da tarefa</label>
                    <input
                        type="text"
                        placeholder="Digite o nome da tarefa"
                        className="border border-solid border-gray-900 rounded px-2 py-1"
                    />
                </div>
                <div className="flex flex-col gap-2 py-2">
                    <label for='status'>Condições</label>
                    <input 
                        list="progress" 
                        name="status"
                        placeholder="Insira as condições atuais"
                        className="border borde-solid border-gray-900 rounded px-2 py-1"
                    />
                    <datalist id="progress">
                        <option value="Em andamento"/>
                        <option value="Concluído"/>
                        <option value="Cancelado"/>
                    </datalist>
                </div>

                <input 
                    type="submit" 
                    value="Salvar"
                    className="bg-blue-500 rounded px-4 py-1 text-gray-100 font-medium mt-4 hover:cursor-pointer"
                />
            </form>
        </section>
    )
}