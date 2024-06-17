/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

interface PaginationListProps {
  page: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

const ListPagination: React.FC<PaginationListProps> = ({ page, handlePrevPage, handleNextPage }) => {
  return (
    <View style={styles.pagination}>
      <Button style={styles.pagBtn} title="<" onPress={handlePrevPage} disabled={page === 1} />
      <Text>Página {page}</Text>
      <Button style={styles.pagBtn} title=">" onPress={handleNextPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  pagBtn: {
    width: 50,
    height: 50,
  },
});

export default ListPagination;
