/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RootState } from '../../../Redux/store';
import { useSelector } from 'react-redux';

const UserName = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <Text style={styles.username}>Cargando usuario...</Text>;
  }

  return (
    <Text style={styles.username}>
      {user.gender === 'female' ? 'Bienvenida' : 'Bienvenido'}, {user.firstName}!
    </Text>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
});

export default UserName;
