import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from './Pages/HomePage';
import SecondPage from './Pages/SecondPage';
import MaterialTabbedPageNavigator from './Pages/MaterialTabbedPageNavigator';
import ThirdPage from './Pages/ThirdPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomePage"
      drawerPosition="left">
      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{ drawerLabel: 'Home Page' }}
      />
      <Drawer.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ drawerLabel: 'Second Page' }}
      />
       <Drawer.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ drawerLabel: 'Third Page' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="SecondPage" component={SecondPage} />
          <Stack.Screen name="ThirdPage" component={ThirdPage} />
          <Stack.Screen name="MaterialTabbedPageNavigator" component={MaterialTabbedPageNavigator} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  )
}
