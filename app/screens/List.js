import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ListItem from "../components/ListItem";
import { DATA } from "../utils/Data";
// import TabBar from "../../App.js"

export default () => {
  const renderListItem = ({ item }) => (
    <ListItem title={item.title} body={item.body} page={item.page} />
  );

  return (
    <SafeAreaView style={StyleSheet.container}>
      <TouchableOpacity>{/* <TabBar/> */}</TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
