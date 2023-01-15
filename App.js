import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Root from "./navigations/Root";

isLogin = false;
export default function App() {
  return isLogin ? (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  ) : (
    <SafeAreaView>
      <Text>Login</Text>
    </SafeAreaView>
  );
}
