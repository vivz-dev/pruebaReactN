/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../../Constants/Colors';

interface DetallePromps {
    product: {
      id: string;
      title: string;
      brand?: string;
      sku: string;
      price: string;
      thumbnail: string;
    };
  }

const Detalle: React.FC<DetallePromps> = ({product}) => {
    return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.sku}>{product.sku}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.text}>{product.brand}</Text>
      </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'column',
        backgroundColor: Colors.backgroundColor,
      },
      textContainer:{
        height: '40%',
        width: '100%',
        backgroundColor: Colors.secondaryColor,
        borderRadius: 20,
        padding: 20,
      },
      imgContainer:{
        height: '50%'
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
      },
    text: {
        fontSize: 20,
        marginBottom: 5,
    },
    price:{
      fontSize: 22,
      marginBottom: 5,
      color: Colors.primaryColor,
      fontWeight: 'bold',
    },
    sku:{
      fontSize: 14,
      marginBottom: 5,
      fontStyle: 'italic',
      alignSelf: 'flex-end',
    },
      thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginVertical: 10,
    },
  });
  
  export default Detalle;
