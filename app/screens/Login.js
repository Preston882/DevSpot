import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { onChange } from "react-native-reanimated";

const Login = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleShowModal = () => setModalVisible(!modalVisible);

  const handleUserLogin = () => {
    if (password !== "") {
      setLogin(!isLoggedIn);
      handleShowModal();
      console.log("password:", password);
      console.log("isLoggedIn:", isLoggedIn);
      console.log("Alert:", alert ? true : false);
    } else {
      alert("You forgot the password!");
      console.log("password:", password);
      console.log("isLoggedIn:", isLoggedIn);
      console.log("Alert:", alert ? true : false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) navigation.navigate("Main");
    setLogin(false);
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")} style={styles.Icon} />
      <TouchableOpacity
        style={styles.apple_button}
        onPress={() => navigation.navigate("Main")}
      >
        <Text
          onPress={() => navigation.navigate("Main")}
          style={styles.apple_button_text}
        >
           Sign in with Apple
        </Text>
      </TouchableOpacity>
      <Button title="Sign in with Email" onPress={handleShowModal} />
      <Button title="Forgot Passowrd" />
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <SafeAreaView
          style={{
            backgroundColor: "#ccc",
            height: "50%",
            opacity: 0.8,
            marginTop: "50%",
            width: "95%",
            alignSelf: "center",
            borderRadius: 32,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={handleShowModal}
              style={{ color: "#000" }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  alignSelf: "flex-end",
                  marginRight: 20,
                  marginTop: 20,
                  position: "relative",
                }}
              >
                X
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              flex: 1,
              marginTop: 70,
              marginHorizontal: 20,
            }}
          >
            <TextInput
              clearTextOnFocus={true}
              style={{
                color: "#000",
                borderColor: "#000",
                borderWidth: 2,
                opacity: 1,
                padding: 10,
                marginVertical: 10,
                borderRadius: 10,
              }}
              onChange={(event) => setUsername(event.target.value)}
              placeholder={"Email"}
            />
            <TextInput
              clearTextOnFocus={true}
              style={{
                color: "#000",
                borderColor: "#000",
                borderWidth: 2,
                opacity: 1,
                padding: 10,
                borderRadius: 10,
              }}
              placeholder={"Password"}
              onChange={(text) => this.setState({ text })}
            />
          </View>
          <Button title="Sign in" onPress={handleUserLogin} />
        </SafeAreaView>
      </Modal>
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
    backgroundColor: "#fff",
  },
  apple_button: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  apple_button_text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  Icon: {
    paddingHorizontal: 75,
    paddingVertical: 75,
    marginBottom: 30,
    marginHorizontal: "29%",
  },
});

export default Login;
