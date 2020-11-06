import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import DATA from "../utils/Data";
import BlockButton from "../components/BlockButton";

const Tabs = () => {
  const renderItem = ({ item }) => (
    <BlockButton
      title={item.title}
      body={item.body}
      image={item.image}
      trending={item.trending}
    />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Tabs;
