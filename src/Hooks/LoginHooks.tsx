/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, incrementAttempts, resetAttempts } from '../Redux/Slices/authSlice';
import { loginApi } from '../Services/login'

export function useLoginLogic(navigation: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [blocked, setBlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { attempts, isAuthenticated } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (attempts >= 3) {
      setBlocked(true);
      setError('Demasiados intentos. Vuelve a intentar en 60 segundos');
      setTimeout(() => {
        dispatch(resetAttempts());
        setBlocked(false);
        setError('');
      }, 60000); // 60 segs
    }
  }, [attempts, dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'ListaProductos' }],
      });
    }
  }, [isAuthenticated, navigation]);

  const handleLogin = async () => {
    if (blocked) return;
    setLoading(true);
    setError('');

    if (!username && !password) {
      setError('Ingresa el usuario y la contraseña');
      setLoading(false);
      return;
    } else if (!username) {
      setError('Por favor, ingresa tu usuario');
      setLoading(false);
      return;
    } else if (!password) {
      setError('Por favor, ingresa tu contraseña');
      setLoading(false);
      return;
    } else {
      try {
        const data = await loginApi(username, password);
        dispatch(login({ username, data }));
      } catch (error) {
        dispatch(incrementAttempts());
        setError('Datos incorrectos');
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    blocked,
    loading,
    handleLogin,
  };
}
