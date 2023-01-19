import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

async function onGoogleButtonPress() {
  try {
    console.log("start");
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
}
const googleSigninConfigure = () => {
  GoogleSignin.configure({
    webClientId:
      "911320154097-gk5mfbnvtfviblveogn88mb711c60vma.apps.googleusercontent.com",
  });
};
const Login = ({ navigation: { navigate } }) => {
  useEffect(() => {
    googleSigninConfigure();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Google Sign-In"
        onPress={() => {
          onGoogleButtonPress().then(() =>
            console.log("Signed in with Google!")
          );
        }}
      />
      <TouchableOpacity onPress={() => {}}>
        <Text>애플 로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Join")}>
        <Text>계정이 없으신가요? Join</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
