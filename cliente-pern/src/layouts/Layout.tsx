import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const { pathname } = useLocation();

    const isHome = pathname === "/";

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-indigo-800 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold hover:text-gray-200">
                        Mi App
                    </Link>

                    <nav className="flex space-x-6">
                        <Link
                            to="/productos"
                            className="hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Productos
                        </Link>
                        <Link
                            to="/usuarios"
                            className="hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Usuarios
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow bg-gray-50">
                <Outlet />

                {isHome && (
                    <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h1 className="text-4xl font-bold text-indigo-800 mb-4">
                                Bienvenido a tu panel
                            </h1>
                            <p className="text-gray-700 text-lg mb-6">
                                Esta aplicación te permite administrar productos, usuarios y registros de forma eficiente.
                                Puedes crear, editar y eliminar entradas, visualizar información clave y mantener todo organizado desde un solo lugar.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    to="/productos"
                                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
                                >
                                    Ver productos
                                </Link>
                                <Link
                                    to="/usuarios"
                                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                                >
                                    Ver usuarios
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src="https://econsultoria.net/wp-content/uploads/2024/12/Contenido-generado-por-usuarios.jpg"
                                alt="Dashboard de gestión"
                                className="rounded shadow-md w-full max-w-md h-auto object-cover"
                            />
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
