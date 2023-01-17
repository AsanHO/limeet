import React, { useRef, useState } from "react";
import {
  View,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";
const Join = () => {
  const passwordInput = useRef();
  const password2Input = useRef();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmitEmailEditing = () => {
    passwordInput.current.focus();
  };
  const onSubmitPwEditing = () => {
    password2Input.current.focus();
  };
  const onSubmitPw2Editing = async () => {
    if (email === "" || pw === "" || pw2 === "") {
      return Alert.alert("전부 다 입력하세요");
    }
    if (pw !== pw2) {
      return Alert.alert("비밀번호가 일치하지 않습니다.");
    }
    if (isLoading) {
      return; //이미 로딩중이라면 다시 클릭할 수 없음
    }
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        pw
      );
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        returnKeyType="next"
        onSubmitEditing={onSubmitEmailEditing}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        ref={passwordInput}
        placeholder="Password"
        value={pw}
        returnKeyType="next"
        onSubmitEditing={onSubmitPwEditing}
        onChangeText={(text) => setPw(text)}
      />
      <TextInput
        ref={password2Input}
        placeholder="Password2"
        secureTextEntry
        value={pw2}
        returnKeyType="done"
        onSubmitEditing={onSubmitPw2Editing}
        onChangeText={(text) => setPw2(text)}
      />
      <TouchableOpacity onPress={onSubmitPw2Editing}>
        {isLoading ? <ActivityIndicator /> : <Text>create account</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Join;
