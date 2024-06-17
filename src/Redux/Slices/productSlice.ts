/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [
    { id: '1', name: 'Product 1', description: 'Description 1', price: 100 },
    { id: '2', name: 'Product 2', description: 'Description 2', price: 200 },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
