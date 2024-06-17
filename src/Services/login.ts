/* eslint-disable prettier/prettier */
import { BASE_URL } from '../Constants/API';
// import axios from 'axios';

export async function loginApi(username: string, password: string): Promise<any> {

  const CONSULTA = '/auth/login';
  const URL = BASE_URL + CONSULTA;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // opcional
        }),
      });
      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Error al iniciar sesión');
    }
  }
