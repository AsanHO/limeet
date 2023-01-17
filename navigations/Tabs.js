import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lobby from "../screens/Lobby";
import Lounge from "../screens/Lounge";
import Matching from "../screens/Matching";
import Setting from "../screens/Setting";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Lobby"
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name="Lobby" component={Lobby} />
    <Tab.Screen name="Lounge" component={Lounge} />
    <Tab.Screen name="Matching" component={Matching} />
    <Tab.Screen name="Setting" component={Setting} />
  </Tab.Navigator>
); //

export default Tabs;
