import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProductList from "./components/Products/ProductList";
import UserList from "./components/Users/UserList";
import FormProduct, { generarProducto, actualizarProducto } from "./components/Products/FormProduct";
import FormUser, { generarUsuario, actualizarUsuario } from "./components/Users/FormUser";
import { getProductById } from "./services/ProductService";
import { getUserById } from "./services/UserService";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/productos',
                element: <ProductList />
            },
            {
                path: '/productos/nuevo',
                element: <FormProduct />,
                action: generarProducto
            },
            {
                path: '/producto/editar/:id',
                element: <FormProduct />,
                loader: async ({ params }) => {
                    if (!params.id) {
                        throw new Error("El parámetro 'id' es requerido");
                    }
                    const product = await getProductById(params.id);
                    return product;
                },
                action: actualizarProducto
            },
            {
                path: '/usuarios',
                element: <UserList />
            },
            {
                path: '/usuarios/nuevo',
                element: <FormUser />,
                action: generarUsuario
            },
            {
                path: '/usuario/editar/:id',
                element: <FormUser />,
                loader: async ({ params }) => {
                    if (!params.id) {
                        throw new Error("El parámetro 'id' es requerido");
                    }
                    const product = await getUserById(params.id);
                    return product;
                },
                action: actualizarUsuario
            }
        ]
    }
]);
