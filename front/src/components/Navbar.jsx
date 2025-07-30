import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul className='flex justify-around text-gray-900 font-semibold'>
                <li>
                    <Link to='/'>Lista</Link>
                </li>
                <li>
                    <Link to='/newitem'>Nova Tarefa</Link>
                </li>
                <li>
                    <Link to='/edit'>Editar</Link>
                </li>
            </ul>
        </nav>
    )
}
