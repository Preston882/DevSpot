import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";

export const Picture = ({ image }) => (
  <Image
    style={styles.tinyLogo}
    source={{
      uri: image,
    }}
  />
);

const BlockButton = ({
  id,
  title,
  subbody,
  image,
  trending,
  navigation,
  route,
}) => {
  return (
    <LinearGradient
      colors={[
        "#00FFFF",
        "#17C8FF",
        "#329BFF",
        "#4C64FF",
        "#6536FF",
        "#8000FF",
      ]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={{ margin: 10, borderRadius: 10 }}
    >
      <View style={styles.margin}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Page", { id: id })}
        >
          <Text style={styles.trending}>{trending ? "Trending🔥" : ""}</Text>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.trending2}></View>
            <Header style={styles.blockButtonHeader}>{title}</Header>
            <Picture image={image} />
          </View>
          <Text style={styles.Touchable}>{subbody}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Touchable: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  trending2: {
    alignSelf: "flex-start",
  },
  blockButtonHeader: {
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 5,
  },
  trending: {
    color: "#fc5603",
    position: "relative",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "flex-start",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  margin: {
    margin: 3,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});

export default BlockButton;
