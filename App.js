import * as React from 'react';
import {View, Text} from 'react-native';
import DrawerNavigatior from './navigation/DrawerNavigatior';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer >
      <DrawerNavigation />
    </NavigationContainer>
  );
}