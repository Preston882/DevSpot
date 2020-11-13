import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ListItem from "../components/ListItem";
import { DATA } from "../utils/Data";

export default ({ route }) => {
  const renderListItem = ({ item }) => (
    <ListItem title={item.title} subbody={item.subbody} route={route} />
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
