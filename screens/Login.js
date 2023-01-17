import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAuth from "../hooks/useAuth";

const Login = ({ navigation: { navigate } }) => {
  const user = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigate("Join")}>
        <Text>계정이 없으신가요? Join</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
