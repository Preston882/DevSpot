import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";

const Picture = ({ image }) => (
  <Image
    style={styles.tinyLogo}
    source={{
      uri: image,
    }}
  />
);

//page.navigate({ "page" })

const BlockButton = ({ title, body, image, trending, page }) => {
  console.log(trending);
  return (
    <View style={styles.margin}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.blockButtonHeader}>
          <Text style={styles.trending}>{trending ? "Trending🔥" : " "}</Text>
          <Header>{title}</Header>
          <Picture image={image} />
        </View>
        <Text style={styles.Touchable}>{body}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Touchable: {
    alignItems: "center",
    justifyContent: "center",
  },
  blockButtonHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  trending: {
    color: "#fc5603",
    alignSelf: "flex-start",
    position: "absolute",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 9,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  margin: {
    margin: 10,
  },
});

export default BlockButton;
