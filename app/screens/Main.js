import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import DATA from "../utils/Data";
import BlockButton from "../components/BlockButton";
import { LinearGradient } from "expo-linear-gradient";

const sortedData = DATA.sort((a, b) => b.trending - a.trending);

const Tabs = ({ navigation }) => {
  const renderItem = ({ item }) => (
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
    >
      <BlockButton
        id={item.id}
        title={item.title}
        subbody={item.subbody}
        image={item.image}
        trending={item.trending}
        navigation={navigation}
        style={styles.buttonText}
      />
    </LinearGradient>
  );
  return (
    <SafeAreaView>
      <FlatList
        data={sortedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    textAlign: "center",
    color: "#4C64FF",
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198,
  },
});

export default Tabs;
