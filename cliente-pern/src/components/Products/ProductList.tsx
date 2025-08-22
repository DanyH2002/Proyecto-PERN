import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types/Product';
import { getProducts } from '../../services/ProductService';

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getProducts()
            .then((data) => {
                const normalized = data.map(product => ({
                    ...product,
                    price: typeof product.price === 'string' ? parseFloat(product.price) : product.price
                }));
                setProducts(normalized);
            })
            .catch(() => setError('Error al cargar productos'))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Lista de Productos</h2>
                <Link
                    to='/productos/nuevo'
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    + Agregar Producto
                </Link>
            </div>

            {loading && <p className="text-gray-500">Cargando productos...</p>}
            {error && <p className="text-red-600">{error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Precio: ${Number(product.price).toFixed(2)}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-end space-x-2">
                            <Link
                                to={`/producto/editar/${product.id}`}
                                className="text-yellow-600 hover:underline text-sm"
                            >
                                Editar
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
