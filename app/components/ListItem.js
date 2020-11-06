import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SubHeader from "../components/SubHeader";

export default ({ title, body, image }) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <SubHeader style={styles.fontColor}>{title}</SubHeader>
      <Text>{body}</Text>
      <Text>{image}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  fontColor: {
    color: "rgb(255,0,0)",
  },
  container: {
    padding: 1,
    width: "100%",
    marginVertical: 5,
    backgroundColor: "#ccc",
  },
});
