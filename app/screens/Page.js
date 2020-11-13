import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import DATA from "../utils/Data";

function Page({ route }) {
  const item = DATA.find((item) => item.id === route.params.id);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Header>{item.title}</Header>
      <Text style={{ textAlign: "center", padding: 10 }}>{item.body}</Text>
    </View>
  );
}

export default Page;
