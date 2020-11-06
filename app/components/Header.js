import React from "react";
import { Text, StyleSheet } from "react-native";

export default ({ style, children }) => (
  <Text style={{ ...style, ...styles.header }}>{children}</Text>
);
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});
