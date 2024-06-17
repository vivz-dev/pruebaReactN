/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useLoginLogic } from '../../Hooks/LoginHooks';
import ImagenLogo from './Components/Imagen';
import BotonLogin from './Components/BotonLogin';
import MensajeError from './Components/MensajeError';
import { Colors } from '../../Constants/Colors';

export default function Login({ navigation }: any) {

  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    blocked,
    loading,
    handleLogin,
  } = useLoginLogic(navigation);

  return (
    <View style={styles.container}>
      <ImagenLogo />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <MensajeError error={error} />
      <BotonLogin loading={loading} blocked={blocked} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.backgroundColor,
  },
  input: {
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    backgroundColor: Colors.inputColor,
    marginTop: 10,
    paddingStart: 25,
  },
});
