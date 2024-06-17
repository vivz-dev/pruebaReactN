/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '../../../Constants/Colors';

interface Props {
  loading: boolean;
  blocked: boolean;
  onPress: () => void;
}

const BotonLogin: React.FC<Props> = ({ loading, blocked, onPress }) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      ) : (
        <TouchableOpacity
          style={[styles.btnLogin, blocked && styles.btnLoginBlocked]}
          onPress={onPress}
          disabled={blocked}
        >
          <Text style={styles.btnText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: Colors.primaryColor,
    marginBottom: 10,
    borderRadius: 30,
  },
  btnLoginBlocked: {
    backgroundColor: 'gray',
  },
  btnText: {
    color: 'white',
  },
});

export default BotonLogin;
