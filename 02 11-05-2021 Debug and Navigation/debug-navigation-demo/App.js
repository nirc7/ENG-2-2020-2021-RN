import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './Pages/HomePage';
import SecondPage from './Pages/SecondPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage"> 
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="MaterialTabbedPageNavigator" component={MaterialTabbedPageNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
