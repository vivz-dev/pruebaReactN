/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Button, TouchableOpacity } from 'react-native';
import { useListaProductos, useLogout } from '../../Hooks/ListaProductosHooks';
import { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';
import { Colors } from '../../Constants/Colors';
import ItemLista from './Components/ItemLista';
import UserName from './Components/Username';
import LogoutButton from './Components/LogoutButton';
import ListPagination from './Components/ListPagination';

export default function ListaProductos({ navigation }: any) {

  const user = useSelector((state: RootState) => state.auth.user);
  
  const {
    products,
    loading,
    page,
    handleNextPage,
    handlePrevPage,
    navigateToDetails,
  } = useListaProductos({navigation});

  const navigateToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const logoutUser = useLogout(navigateToLogin);

  const renderItem = ({ item }: { item: any }) => (
    <ItemLista product={item} navigateToDetails={navigateToDetails} />
  );

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <UserName />
      <LogoutButton logoutUser={logoutUser}/>
      <FlatList
        style={styles.list}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <ListPagination
        page={page}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.backgroundColor,
  },
  list: {
    backgroundColor: Colors.backgroundColor,
    padding: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
