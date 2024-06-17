/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { fetchProductDetails } from '../Services/detalleProducto';


export function useDetalles(route: any) {

    const { productId } = route.params;
    const [product, setProduct] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProduct();
    }, []);
    
      const fetchProduct = async () => {
        try {
          const data = await fetchProductDetails(productId);
          setProduct(data);
        } catch (error) {
          console.error('Error:', error);
          // console.error('No se pudo obtener los datos:', error);
        } finally {
          setLoading(false);
        }
      };
    
    

    return {
        product,
        loading,
    };

}