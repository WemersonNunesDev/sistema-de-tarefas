import './App.css'
import Navbar from './components/Navbar'
import AppRoutes from './components/routes.jsx'

function App() {

  return (
    <div className='px-2 2xl:w-[1024px] w-[880px] m-auto'>
      <header className='py-4 mt-2'>
        <h1 className='text-center text-gray-900 text-3xl font-bold pb-6'>Sistema de Controle de Tarefas</h1>
        <Navbar/>
      </header>

      <main>
        <AppRoutes/>
      </main>
    </div>
  )
}

export default App
