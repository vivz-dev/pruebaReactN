/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Slices/authSlice';
import { fetchProductos } from '../Services/product';

interface ListaProductosHook {
  products: any[];
  loading: boolean;
  page: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  navigateToDetails: (productId: string) => void;
}

export function useListaProductos({ navigation }: any): ListaProductosHook {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const perPage = 10; // Productos por página

  useEffect(() => {
    fetchProducts();
  }, [page, skip]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProductos(page, perPage, skip);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
    setSkip(prevSkip => prevSkip + perPage);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
      setSkip(prevSkip => prevSkip - perPage);
    }
  };

  const navigateToDetails = (productId: string) => {
    navigation.navigate('DetallesProducto', { productId });
  };

  return {
    products,
    loading,
    page,
    handleNextPage,
    handlePrevPage,
    navigateToDetails,
  };
}

export function useLogout(navigateToLogin: () => void) {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    navigateToLogin();
  };

  return logoutUser;
}