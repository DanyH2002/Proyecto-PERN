import { Link, Form, ActionFunctionArgs, useActionData } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage';

export async function generarUsuario({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
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

function FormUser() {
    const error = useActionData() as String
    return (
        <>
            {error && <ErrorMessage> {error}</ErrorMessage>}
            <h2 className="flex justify-center text-xl font-semibold text-gray-900 mb-6 p-3">Registro de Usuarios</h2>
            <Form className="max-w-2xl mx-auto px-4 py-8" method='POST'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nombre del usuario
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Ej. Marcos Suarez"
                            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            aria-label="Nombre del usuario"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Correo Electronico
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Ej. example@gmail.com"
                            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            aria-label="Email del usuario"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Ej. ********"
                            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            aria-label="Contraseña del usuario"
                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Guardar
                    </button>
                </div>
            </Form>
        </>

    );
}

export default FormUser;
