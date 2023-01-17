import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

const Matching = () => {
  const naviation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        이곳에는 매칭된 상대의 목록들과 그 목록에는 마지막 메세지가 있으며,
        목록을 클릭하면 메세지 스택으로 이동합니다
      </Text>
      <Button title="내일 시간돼?" onPress={() => naviation.navigate("Chat")} />
    </View>
  );
};
export default Matching;
