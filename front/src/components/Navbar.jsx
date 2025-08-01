import { Link } from 'react-router-dom'

export default function Navbar() {
    const styleHover = 'hover:text-blue-500';
    return (
        <nav>
            <ul className='flex justify-evenly text-xl text-gray-900 font-semibold'>
                <li className={`${styleHover}`}>
                    <Link to='/'>Tarefas</Link>
                </li>
                <li className={`${styleHover}`}>
                    <Link to='/edit'>Editar</Link>
                </li>
            </ul>
        </nav>
    )
}
