import axios from 'axios';
import { object, string, number, minLength, minValue, pipe, safeParse } from 'valibot';

export const DraftProductSchema = object({
    name: pipe(string(), minLength(1, 'El nombre es obligatorio')),
    price: pipe(number(), minValue(0, 'El precio debe ser positivo'))
});

type ProductData = {
    [key: string]: FormDataEntryValue;
};

const BASE_URL = import.meta.env.VITE_API_URL;

export async function addProduct(data: ProductData) {
    try {
        const parsed = safeParse(DraftProductSchema, {
            name: String(data.name),
            price: Number(data.price)
        });

        if (!parsed.success) {
            const messages = parsed.issues.map(issue => issue.message).join(', ');
            throw new Error(messages);
        }

        const url = `${BASE_URL}/products`;

        const response = await axios.post(url, {
            name: parsed.output.name,
            price: parsed.output.price
        });

        return response.data;
    } catch (error) {
        console.error('Error al agregar producto:', error);
        throw error;
    }
}
