import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  textAlign,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const Login = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => setModalVisible(!modalVisible);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon_copy.png")} style={styles.Icon} />
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
      <Modal transparent={false} visible={modalVisible}>
        <SafeAreaView style={{ backgroundColor: "#ccc" }}>
          <TextInput
            clearTextOnFocus={true}
            style={{
              color: "#FFF",
              borderColor: "#FFF",
              borderWidth: 1,
            }}
          >
            Email
          </TextInput>
          <TextInput
            clearTextOnFocus={true}
            style={{ color: "#FFF", borderColor: "#FFF", borderWidth: 1 }}
          >
            Password
          </TextInput>
          <Button title="Close" onPress={handleShowModal} />
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
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: "29%",
  },
});

export default Login;
