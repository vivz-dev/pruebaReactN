/* eslint-disable prettier/prettier */

import { BASE_URL } from '../Constants/API';

export async function fetchProductDetails(productId: string) {

    const CONSULTA = `/products/${productId}`;
    const URL = BASE_URL + CONSULTA;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
        throw new Error('Error en la conexión');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
}
