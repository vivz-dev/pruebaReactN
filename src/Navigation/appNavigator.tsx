/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Containers/Login/Login';
import ListaProducto from '../Containers/ListaProductos/ListaProductos';
import DetallesProducto from '../Containers/DetallesProducto/DetallesProducto';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="ListaProductos" component={ListaProducto} options={{ headerShown: false }} />
      <Stack.Screen name="DetallesProducto" component={DetallesProducto} options={{title: 'Detalles'}} />
    </Stack.Navigator>
  );
}