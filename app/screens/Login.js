import React, {useState} from "react";
import {
  Text,
  View,
  Input,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  textAlign, 
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";


const Login = () => {
  const [
    modalVisible,
    setModalVisible,
  ] = useState(false);

const handleShowModal = () =>
setModalVisible(!modalVisible);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")}
      style={{width: 150, height: 150}} 
      />
      <TouchableOpacity
      style={styles.apple_button}
      >
        <Text style={styles.apple_button_text}>
         Sign in with Apple
        </Text>
      </TouchableOpacity>
      <Button title="Sign in with Email"
      onPress={handleShowModal}
      />
      <Button title="Forgot Passowrd" />
      <Modal
      transparent={false}
      visible={modalVisible}
      >
        <View style={{ backgroundColor: "#000" }}>
          <Text>This is our Modal.</Text>
          <Button
          title="Close"
          onPress={handleShowModal}
          />
        </View>
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
  },
  apple_button: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  apple_button_text:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default Login;
