import React, { useState } from "react";
import {Text, Image, View, TouchableOpacity, Modal, StyleSheet, SafeAreaView, FlatList} from "react-native";
import DATA from "../utils/Data";
import Header from "../components/Header"



const Tabs = () => {
    return (
        <View>
            <Text>Hello world</Text>
            <BlockButton /> 
               
        </View>
    )
}

export default Tabs

const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


const BlockButton = ({title}) => (
    <SafeAreaView>
        <TouchableOpacity style={styles.blockButton}>
       <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        <Header 
         style={styles.blockButtonHeader}>{title}</Header>
        {/* <Text>Subcontext of Article</Text> 
        <Image source={require("../Images/merlin_176296023_bfed9d37-c878-499f-bb93-83daba8c2455-thumbStandard.jpg")}></Image> */}
        </TouchableOpacity>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    blockButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    blockButtonHeader: {
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    
}})
