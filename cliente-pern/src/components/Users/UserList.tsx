import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import AlertMessage from '../AlertMessage';
import { getUsers, deleteUser } from '../../services/UserService';
import type { User } from '../../types/User';

function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [confirmId, setConfirmId] = useState<string | null>(null);

    useEffect(() => {
        getUsers()
            .then((data) => setUsers(data))
            .catch(() => setError('Error al cargar usuarios'))
            .finally(() => setLoading(false));
    }, []);

    const confirmDelete = async () => {
        if (!confirmId) return;
        try {
            await deleteUser(confirmId);
            setUsers(prev => prev.filter(user => String(user.id) !== confirmId));
        } catch {
            setError('Error al eliminar el usuario');
        } finally {
            setConfirmId(null);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Lista de Usuarios</h2>
                <Link to='/usuarios/nuevo'
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    + Agregar Usuario
                </Link>
            </div>

            {loading && <p className="text-gray-500">Cargando usuarios...</p>}
            {error && <p className="text-red-600">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{user.username}</h3>
                            <p className="text-gray-700 mt-1">Email: {user.email}</p>
                            <p className="text-sm text-gray-600 mt-1">
                                Rol: {user.role === 'admin' ? 'Administrador' : user.role === 'user' ? 'Usuario' : user.role}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-end space-x-2">
                            <Link
                                to={`/usuario/editar/${user.id}`}
                                className="text-yellow-600 hover:underline text-sm"
                            >
                                Editar
                            </Link>
                            <button
                                onClick={() => setConfirmId(String(user.id))}
                                className="text-red-600 hover:underline text-sm"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {confirmId && (
                <AlertMessage
                    message="¿Estás segura de que quieres eliminar este usuario?"
                    onConfirm={confirmDelete}
                    onCancel={() => setConfirmId(null)}
                />
            )}
        </div>
    );
}

export default UserList;
