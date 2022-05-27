import React from 'react'
import Feedback from '../telas/Feedback'
import Links from '../telas/Links'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feedback" component={Feedback} />
      <Drawer.Screen name="Links" component={Links} />
    </Drawer.Navigator>
  );
}