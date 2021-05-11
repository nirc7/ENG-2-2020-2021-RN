import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import OneTabbedPage from './OneTabbedPage';
import TwoTabbedPage from './TwoTabbedPage';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialTabbedPageNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="OneTabbedPage"
      activeColor="#55ff00"
      inactiveColor='black'
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="OneTabbedPage"
        component={OneTabbedPage}
        options={{
          tabBarLabel: 'One',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TwoTabbedPage"
        component={TwoTabbedPage}
        options={{
          tabBarLabel: 'Two',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="basketball" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
