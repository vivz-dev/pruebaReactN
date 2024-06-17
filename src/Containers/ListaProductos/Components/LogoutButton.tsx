/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { Colors } from '../../../Constants/Colors';


interface LogoutButtonProps {
  logoutUser: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ logoutUser }) => {
  return (
  <Button style={styles.icon} mode="contained" onPress={logoutUser}>
    Cerrar Sesión
  </Button>
  );
};

const styles = StyleSheet.create({
  icon:{
    backgroundColor: Colors.primaryColor,
    marginBottom: 10,
  },
})

export default LogoutButton;