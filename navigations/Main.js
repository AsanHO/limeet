import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Chat from "../screens/Chat";

const Nav = createNativeStackNavigator();

const Main = () => (
  <Nav.Navigator screenOptions={{ headerShown: false }}>
    <Nav.Screen name="Tabs" component={Tabs} />
    <Nav.Screen name="Chat" component={Chat} options={{ headerShown: true }} />
  </Nav.Navigator>
);
export default Main;
