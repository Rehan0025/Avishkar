import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Company from './pages/Company';
import Dashboard from './pages/Dashboard';
import Issue from './pages/Issue';
import Lowstock from './pages/Lowstock';
import Product from './pages/Product';
import Purchase from './pages/Purchase';
import Replacement from './pages/Replacement';
import Supplier from './pages/Supplier';
import Reports from './pages/Reports';
import User from './pages/User';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor:'#560CCE',drawerActiveTintColor:'#fff'}}>
      <Drawer.Screen name="Dashboard" component={Dashboard}/>  
      <Drawer.Screen name="Company" component={Company}/>
      <Drawer.Screen name="Issue" component={Issue}/>
      <Drawer.Screen name="Lowstock" component={Lowstock}/>
      <Drawer.Screen name="Product" component={Product}/>
      <Drawer.Screen name="Purchase" component={Purchase}/>
      <Drawer.Screen name="Replacement" component={Replacement}/>
      <Drawer.Screen name="Supplier" component={Supplier}/>
      <Drawer.Screen name="Reports" component={Reports}/>
      <Drawer.Screen name="User" component={User}/>
    </Drawer.Navigator>
  );
}

export default MyDrawer;
