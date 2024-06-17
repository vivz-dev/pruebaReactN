/* eslint-disable prettier/prettier */
import { BASE_URL } from '../Constants/API';

export async function fetchProductos(page: number, perPage: number, skip: number) {
    
    const CONSULTA = `/products?limit=${perPage}&skip=${skip}&select=title,brand,thumbnail`;
    const URL = BASE_URL + CONSULTA;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
        throw new Error('Error en la conexión.');
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}