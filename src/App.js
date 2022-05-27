import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './componentes/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
        <DrawerNavigation />
    </NavigationContainer>
  );
}