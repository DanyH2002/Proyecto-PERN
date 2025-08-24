import axios from 'axios';
import { object, string, minLength, pipe, safeParse } from 'valibot';
import type { User } from '../types/User';

export const DraftUsertSchema = object({
    username: pipe(string(), minLength(1, 'El nombre es obligatorio')),
    email: pipe(string(), minLength(1, 'El email es obligatorio')),
    password: pipe(string(), minLength(6, 'La contraseñ es obligatoria')),
    role: pipe(string(), minLength(4, 'El rol es obligatorio'))
});

export const UpdateUserSchema = object({
    username: pipe(string(), minLength(1, 'El nombre es obligatorio')),
    email: pipe(string(), minLength(1, 'El email es obligatorio')),
    role: pipe(string(), minLength(4, 'El rol es obligatorio'))
});

type UserData = {
    [key: string]: FormDataEntryValue
};

const BASE_URL = import.meta.env.VITE_API_URL;

export async function addUser(data: UserData) {
    try {
        const parsed = safeParse(DraftUsertSchema, {
            username: String(data.username),
            email: String(data.email),
            password: String(data.password),
            role: String(data.role)
        });

        if (!parsed.success) {
            const messages = parsed.issues.map(issue => issue.message).join(', ');
            throw new Error(messages);
        }

        const url = `${BASE_URL}/users`;

        const response = await axios.post(url, {
            username: parsed.output.username,
            email: parsed.output.email,
            password: parsed.output.password,
            role: parsed.output.role

        });

        return response.data;
    } catch (error) {
        console.log('Error al agregar usuario:', error);
        throw error;
    }
}

export async function getUsers(): Promise<User[]> {
    try {
        const url = `${BASE_URL}/users`;
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.log("Error al obtener la lista de usuarios: ", error);
        throw error;
    }
}

export async function getUserById(id: string): Promise<User> {
    try {
        const url = `${BASE_URL}/users/${id}`;
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.log("Error al cargar datos del usuario: ", error);
        throw error;
    }

}

export async function deleteUser(id: string): Promise<void> {
    try {
        const url = `${BASE_URL}/users/${id}`;
        await axios.delete(url);
    } catch (error) {
        console.log('Error al eliminar el usuario:', error);
        throw error;
    }
}

export async function updateUser(id: string, data: UserData): Promise<User> {
    try {
        const parsed = safeParse(UpdateUserSchema, {
            username: String(data.username),
            email: String(data.email),
            role: String(data.role)
        });

        if (!parsed.success) {
            const messages = parsed.issues.map(issue => issue.message).join(', ');
            throw new Error(messages);
        }

        const url = `${BASE_URL}/users/${id}`;
        const response = await axios.put(url, {
            username: parsed.output.username,
            email: parsed.output.email,
            role: parsed.output.role
        });
        return response.data;
    } catch (error) {
        console.log("Error al actualizar el usuario: ", error);
        throw error;
    }
}