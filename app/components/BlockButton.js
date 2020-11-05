import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";

const Picture = ({ image }) => <Text>{image}</Text>;

const BlockButton = ({ title, body, image }) => (
  <View>
    <TouchableOpacity style={styles.Touchable}>
      <Header style={styles.blockButtonHeader}>{title}</Header>
      <Text>{body}</Text>
      <Picture>{image}</Picture>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  Touchable: {
    alignItems: "center",
    justifyContent: "center",
  },
  blockButtonHeader: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BlockButton;
