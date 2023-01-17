import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { getAuth } from "./firebase";

import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* HOC - Higer Order Component */}
      <AuthProvider>
        {/* Passes down the coll auth stuff to children */}
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
