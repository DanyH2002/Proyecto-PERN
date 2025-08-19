import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <header className="bg-indigo-800 text-white shadow-md">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                        <Link to="/" className="text-2xl font-bold hover:text-gray-200">
                            Mi App
                        </Link>

                        <nav className="flex space-x-6">
                            <Link
                                to="/registro/nuevo"
                                className="hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Registros
                            </Link>
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

                <main className="">
                    <Outlet />
                </main>
            </div>
        </>
    )
}
