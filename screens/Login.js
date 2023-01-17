import React from "react";
import { View, Text } from "react-native";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const user = useAuth();
  console.log(user);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
    </View>
  );
};
export default Login;
