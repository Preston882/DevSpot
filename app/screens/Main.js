import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import DATA from "../utils/Data";
import BlockButton from "../components/BlockButton";

const sortedData = DATA.sort((a, b) => b.trending - a.trending);

const Tabs = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <BlockButton
      id={item.id}
      title={item.title}
      subbody={item.subbody}
      image={item.image}
      trending={item.trending}
      navigation={navigation}
    />
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

export default Tabs;
