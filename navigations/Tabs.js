import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lobby from "../screens/Lobby";
import Lounge from "../screens/Lounge";
import Search from "../screens/Matching";
import Setting from "../screens/Setting";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Lobby">
    <Tab.Screen name="Lobby" component={Lobby} />
    <Tab.Screen name="Lounge" component={Lounge} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Setting" component={Setting} />
  </Tab.Navigator>
); //

export default Tabs;
