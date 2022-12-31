import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import History from './userscreen/History';
import Home from './userscreen/Home';
import Order from './userscreen/Orderscreen';
import Profile from './userscreen/Profile';

const Drawer = createDrawerNavigator();

function UserDrawer() {
  return (
    <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor:'#560CCE',drawerActiveTintColor:'#fff'}}>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Orderscreen" component={Order}/>
      <Drawer.Screen name="History" component={History}/>
      <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
  );
}

export default UserDrawer;