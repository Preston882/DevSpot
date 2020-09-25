import React, { useState } from "react";
import {Text, Image, View, TouchableOpacity, Modal, StyleSheet, SafeAreaView} from "react-native";

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



const BlockButton = () => (
    <View>
        <TouchableOpacity style={styles.blockButton}>
           
        <Header style={styles.blockButtonHeader}>Title of Block</Header>
        <Text>Subcontext of Article</Text> 
        <Image source={require("../Images/merlin_176296023_bfed9d37-c878-499f-bb93-83daba8c2455-thumbStandard.jpg")}></Image>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    blockButton: {
        alignItems: "center",
        justifyContent: "center",
    },
    blockButtonHeader: {
        alignItems: "center",
        justifyContent: "center",
    
    }})
