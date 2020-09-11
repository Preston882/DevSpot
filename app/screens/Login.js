import React from "react";
import {
  Text,
  View,
  Input,
  Image,
  StyleSheet,
  TextInput,
  Button,
  textAlign,
} from "react-native";
import { StatusBar } from "expo-status-bar";
const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")} />
      <Button title="Sign in with Apple" />
      <Text>Login Screen</Text>
      <TextInput style={styles.input} placeholder="EmailAddress" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button title="Sign In" />
      <Button title="Forgot Password" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    textAlign: "center",
  },
});

export default Login;
