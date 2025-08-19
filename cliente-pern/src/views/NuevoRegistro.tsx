import { Link, Form, ActionFunctionArgs, useActionData } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage';

export async function generarRegistro({ request }: ActionFunctionArgs) {
    //console.log(await request.formData());
    const data = Object.fromEntries(await request.formData());
    //console.log(data);
    //console.log("llegue");
    let error = '';
    if (Object.values(data).includes('')) {
        error = 'Todos los campos son obligatorios';
    }
    if (error.length) {
        console.log(error);
        return error;
    }
    return {};
}


export default function NuevoRegistro() {
    const error = useActionData() as String
    return (
        <>
            {error && <ErrorMessage> {error}</ErrorMessage>}
            <h2 className='text-4xl font-black text-slate-500 p-3 flex justify-center'>Registrar</h2>
            {/* <Link to="/" className='rounded-md bg-indigo-500 p-3 font-bold text-white shadow-sm hover:bg-indigo-700 items-end'>Volver</Link> */}
            <Form className='mt-10 space-y-4' method='POST'>
                <div className='mb-4'>
                    <label htmlFor="name" className='text-gray-800'>
                        Nombre Registro
                    </label>
                    <input id='name' type="text" className='mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del registro' name='name' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="number" className='text-gray-800'>
                        Numero registro
                    </label>
                    <input id='number' type='number' className='mt-2 block w-full p-3 bg-gray-50' placeholder='Ej. 7, 50, 300' name='number' />
                </div>
                <input type="submit" className='mt-5 w-full bg-indigo-500 text-white font-bold text-lg cursor-pointer rounded' value="Generar Registro" />
            </Form>

        </>
    )
}
