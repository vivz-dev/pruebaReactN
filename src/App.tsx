/* eslint-disable prettier/prettier */
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './Redux/store';
import AppNavigator from './Navigation/appNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar
        hidden={true}
      />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
