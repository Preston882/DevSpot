import React from "react";
import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";

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
    <View style={styles.margin}>
      <TouchableOpacity onPress={() => navigation.navigate("Page", { id: id })}>
        <View style={styles.blockButtonHeader}>
          <Text style={styles.trending}>{trending ? "Trending🔥" : " "}</Text>
          <Header>{title}</Header>
          <Picture image={image} />
        </View>
        <Text style={styles.Touchable}>{subbody}</Text>
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
