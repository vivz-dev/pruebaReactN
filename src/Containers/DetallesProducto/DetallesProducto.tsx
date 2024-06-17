/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Detalle from './Components/Detalle';
import { useDetalles } from '../../Hooks/DetallesProducto';
import { Colors } from '../../Constants/Colors';

export default function DetallesProducto({ route }: any) {
  
  const {
    product,
    loading,
  } = useDetalles(route);


  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>No se encontraron detalles del producto.</Text>
      </View>
    );
  }

  return (
    <Detalle product={product}/>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});
