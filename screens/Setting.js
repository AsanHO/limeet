import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";

const Setting = () => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting</Text>
      <TouchableOpacity onPress={logout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
