/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function ImagenLogo() {

const imgRoute = '../../../Assets/logo.jpg';

  return (
      <View style={styles.imgContainer}>
        <Image source={require(imgRoute)} style={styles.logo} />
      </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
    borderRadius: 100,
  },
});
