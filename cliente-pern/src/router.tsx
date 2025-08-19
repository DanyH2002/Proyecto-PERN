import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Registros from "./views/Registros";
import NuevoRegistro, { generarRegistro } from "./views/NuevoRegistro";
import ProductList from "./components/Products/ProductList";
import UserList from "./components/Users/UserList";
import FormProduct, { generarProducto } from "./components/Products/FormProduct";
import FormUser, { generarUsuario } from "./components/Users/FormUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Registros />
            },
            {
                path: '/registro/nuevo',
                element: <NuevoRegistro />,
                action: generarRegistro
            },
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
                element: <FormProduct />
            },
            {
                path: '/usuarios',
                element: <UserList />
            },
            {
                path: '/usuarios/nuevo',
                element: <FormUser />,
                action: generarUsuario
            }
        ]
    }
]);
