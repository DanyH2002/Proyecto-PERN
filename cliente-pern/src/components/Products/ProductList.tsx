function ProductList() {
    const products = [
        { id: "1", name: "Camiseta", price: 199.99 },
        { id: "2", name: "Zapatos", price: 499.5 },
        { id: "3", name: "Gorra", price: 89.0 },
    ];

    return (
        <>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">Lista de Productos</h2>
                    <button
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    > + Agregar Producto
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border rounded-md">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nombre</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Precio</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-4 py-2 text-sm text-gray-900">{product.name}</td>
                                    <td className="px-4 py-2 text-sm text-gray-900">${product.price.toFixed(2)}</td>
                                    <td className="px-4 py-2 space-x-2">
                                        <button
                                            className="text-yellow-600 hover:underline text-sm"
                                        > Editar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductList