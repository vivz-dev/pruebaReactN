/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../../Constants/Colors';

interface Props {
  error: string | null;
}

const MensajeError: React.FC<Props> = ({ error }) => {
  return (
    <>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: Colors.errorColor,
    marginBottom: 10,
    marginStart: 10,
  },
});

export default MensajeError;
