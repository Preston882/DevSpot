import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";

const Page = ({ title, body }) => (
  <View>
    <Header>{title}</Header>
    <Text>{body}</Text>
  </View>
);

export default Page;
