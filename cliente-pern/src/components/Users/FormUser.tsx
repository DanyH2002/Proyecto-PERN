import { Form, ActionFunctionArgs, useActionData, redirect, useParams, useLoaderData } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';
import { addUser, updateUser } from '../../services/UserService';

export async function generarUsuario({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
    if (Object.values(data).includes('')) {
        return { error: 'Todos los campos son obligatorios' };
    }
    try {
        await addUser(data);
        return redirect('/usuarios');
    } catch (error) {
        return { error: 'Error al guardar el usuario. Intenta nuevamente.' };
    }
}

export async function actualizarUsuario({ request, params }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
    console.log("Datos nuevos a enviar: ", data);
    if (Object.values(data).includes('')) {
        return { error: 'Todos los campos son obligatorios' };
    }
    try {
        await updateUser(params.id!, data);
        return redirect('/usuarios');
    } catch {
        return { error: 'Error al actualizar el usuario. Intenta nuevamente.' };
    }
}

function FormUser() {
    const actionData = useActionData() as { error?: string; };
    const user = useLoaderData() as { username: string; email: string; password: string; role: string } | undefined;
    const { id } = useParams();
    const isEdit = Boolean(id);
    return (
        <>
            {actionData?.error && <ErrorMessage>{actionData.error}</ErrorMessage>}
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex justify-center p-3">
                {isEdit ? `Actualizar Usuario: ${user?.username}` : 'Registro de Usuarios'}
            </h2>
            <Form className="max-w-2xl mx-auto px-4 py-8" method='POST'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Nombre del usuario
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            defaultValue={user?.username || ''}
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
                            defaultValue={user?.email || ''}
                            placeholder="Ej. example@gmail.com"
                            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            aria-label="Email del usuario"
                        />
                    </div>

                    {!isEdit && (
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
                    )}

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Rol
                        </label>
                        <select
                            id="role"
                            name="role"
                            defaultValue={user?.role || ''}
                            className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            aria-label="Rol del usuario"
                        >
                            <option value="user">Usuario</option>
                            <option value="admin">Administrador</option>
                        </select>
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
