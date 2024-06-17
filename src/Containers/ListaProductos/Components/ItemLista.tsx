/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { Colors } from '../../../Constants/Colors';

interface productProps {
  product: {
    id: string;
    title: string;
    brand?: string;
    thumbnail: string;
  };
  navigateToDetails: (id: any) => void;
}

const productLista: React.FC<productProps> = ({ product, navigateToDetails }) => {
  return (
    <TouchableOpacity
      style={styles.product}
      onPress={() => navigateToDetails(product.id)}>
      <Image source={{ uri: product.thumbnail}} style={styles.thumbnail} />
      <View style={styles.container}>
        <Text style={styles.smallText}>{product.id}</Text>
        <Text style={styles.titleText}>{product.title}</Text>
        <Text style={styles.brandText}>
          {product.brand ? product.brand : 'No disponible'}
        </Text>
      </View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.inputColor,
    marginBottom: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  container:{
    marginLeft: 10,
    width: '80%',
  },
  brandText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: Colors.primaryColor,
  },
  titleText: {
    fontSize: 20,
  },
  smallText: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 5,
    alignSelf: 'flex-end',
    color: Colors.primaryColor,
  },
  thumbnail: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginVertical: 10,
    borderRadius: 100,
  },
});

export default productLista;
