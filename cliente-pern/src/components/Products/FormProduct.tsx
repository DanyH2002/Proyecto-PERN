function FormProduct() {
    return (
        <form className="max-w-2xl mx-auto px-4 py-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Registro de Productos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre del producto
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ej. Camiseta"
                        className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        aria-label="Nombre del producto"
                    />
                </div>

                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Precio
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        placeholder="Ej. 199.99"
                        className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        aria-label="Precio del producto"
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
        </form>
    );
}

export default FormProduct;
