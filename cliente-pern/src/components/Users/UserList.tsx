import { Link } from 'react-router-dom'

function UserList() {
    const user = [
        { id: "1", username: "Daniela", email: "daniela01@gmail.com", password: "123abc" },
        { id: "2", username: "Santiago", email: "santiago02@gmail.com", password: "abc123" },
        { id: "3", username: "Miguel", email: "miguel03@gmail.com", password: "1z2b3c" },
    ];

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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {user.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{user.username}</h3>
                            <p className="text-sm text-gray-600 mt-1">Email: {user.email}</p>
                        </div>

                        <div className="mt-4 flex justify-end space-x-2">
                            {/* <button className="text-indigo-600 hover:underline text-sm">Ver</button> */}
                            <button className="text-yellow-600 hover:underline text-sm">Editar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
