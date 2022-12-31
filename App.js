import * as React from "react";
import { View, Text } from "react-native";
import {auth} from './assets/firebase/firebase.config';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Firstpage from './assets/src/firstpage';
import Login from './assets/src/login';
import MyDrawer from "./assets/src/admindrawer";
import Addcompany from "./assets/src/add/Addcompany";
import Addissue from './assets/src/add/Addissue';
import Addproduct from './assets/src/add/Addproduct';
import Addpurchase from './assets/src/add/Addpurchase';
import Addreplacement from './assets/src/add/Addreplacement';
import Addsupplier from './assets/src/add/Addsupplier';
import Adduser from './assets/src/add/Adduser';
import UserDrawer from "./assets/src/Userdrawer";
import Order from './assets/src/userscreen/Orderscreen';
import History from './assets/src/userscreen/History';
import Profile from './assets/src/userscreen/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Itemise" component={Firstpage} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={MyDrawer} options={{ headerShown: false }}/> 
        {/* <Stack.Screen name="user" component={UserDrawer} options={{ headerShown: false }} />  */}
        <Stack.Screen name="Addcompany" component={Addcompany} /> 
        <Stack.Screen name="Addissue" component={Addissue} />
        <Stack.Screen name="Addproduct" component={Addproduct} />
        <Stack.Screen name="Addpurchase" component={Addpurchase} />
        <Stack.Screen name="Addreplacement" component={Addreplacement} />
        <Stack.Screen name="Addsupplier" component={Addsupplier} />
        <Stack.Screen name="Adduser" component={Adduser} />
        <Stack.Screen name="User" component={UserDrawer} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}