import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NewItem from '../pages/NewItem'
import Edit from '../pages/Edit'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='newitem' element={<NewItem/>} />
            <Route path='edit' element={<Edit/>} />
        </Routes>
    )
}
