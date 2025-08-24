import { Link, Form, ActionFunctionArgs, useActionData, redirect, useParams, useLoaderData } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';
import { addProduct, updateProduct } from '../../services/ProductService';

export async function generarProducto({ request }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
    if (Object.values(data).includes('')) {
        return { error: 'Todos los campos son obligatorios' };
    }
    try {
        await addProduct(data);
        return redirect('/productos');
    } catch (error) {
        return { error: 'Error al guardar el producto. Intenta nuevamente.' };
    }
}

export async function actualizarProducto({ request, params }: ActionFunctionArgs) {
    const data = Object.fromEntries(await request.formData());
    if (Object.values(data).includes('')) {
        return { error: 'Todos los campos son obligatorios' };
    }
    try {
        await updateProduct(params.id!, data);
        return redirect('/productos');
    } catch {
        return { error: 'Error al actualizar el producto. Intenta nuevamente.' };
    }
}

function FormProduct() {
    const actionData = useActionData() as { error?: string; };
    const producto = useLoaderData() as { name: string; price: number } | undefined;
    const { id } = useParams();
    const isEdit = Boolean(id);
    return (
        <>
            {actionData?.error && <ErrorMessage>{actionData.error}</ErrorMessage>}
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex justify-center p-3">
                {isEdit ? `Actualizar Producto: ${producto?.name}` : 'Registro de Productos'}
            </h2>
            <Form className="max-w-2xl mx-auto px-4 py-8" method='POST'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Nombre del producto
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            defaultValue={producto?.name || ''}
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
                            defaultValue={producto?.price || ''}
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
            </Form>

        </>
    );
}

export default FormProduct;
