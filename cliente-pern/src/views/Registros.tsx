import { Link } from 'react-router-dom'

export default function Registros() {
    return (
        <>
            <div className='flex justify-between items-center'>
                <Link to='productos' className='rounded-2xl bg-indigo-500 p-3 font-black text-white hover:bg-indigo-700'>Productos</Link>
                <h2>Todos los registros: </h2>
                <Link to="registro/nuevo" className='rounded-md bg-indigo-500 p-3 font-bold text-white shadow-sm hover:bg-indigo-700'> Agregar Registro</Link>
            </div>
        </>
    )
}
