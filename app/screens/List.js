import React from "react";
import {Text, SafeAreaView, StyleSheet, View, FlatList, TouchableOpacity} from "react-native";
import ListItem from "../components/ListItem"
import {DATA} from "../utils/Data"
import createDrawerNavigator from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';

export default () => {
    const renderListItem = ({item}) => (
        <ListItem
        title={item.title}
        body={item.body}
    />
    );
    
const Drawer = createDrawerNavigator()

    return (
<SafeAreaView style={StyleSheet.container}>
    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Text style={{
        backgroundColor: "#ccc",
        width: 44
        }}>       
    Button</Text>
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={HomeScreen} />
      </Drawer.Navigator>
        
    </NavigationContainer>
    </TouchableOpacity>
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
}});