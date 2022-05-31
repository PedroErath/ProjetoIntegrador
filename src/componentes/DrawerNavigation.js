import React from 'react'
import Feedback from '../telas/Feedback'
import Links from '../telas/Links'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default props => (

  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: {
        backgroundColor: '#ff0062'
      },
      drawerLabelStyle: {
        color: 'white',
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#d80053'
      },
      drawerStyle: {
        backgroundColor: '#ff0062',
        width: 240,
      },
    }}
    initialRouteName='Feedback'>
    <Drawer.Screen name="Feedback" component={Feedback} />
    <Drawer.Screen name="Links" component={Links} />
  </Drawer.Navigator>
)